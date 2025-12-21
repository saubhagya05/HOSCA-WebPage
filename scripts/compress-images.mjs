#!/usr/bin/env node

// Batch compress images in public/ with care:
// - Cap width to 1600px preserving aspect
// - JPEG/JPG: quality 78, progressive
// - PNG: lossless compression (palette where possible)
// - Also emit sidecar .webp (quality 78) and .avif (quality 50) without changing original filenames
// - Skips files <= 50KB to save time
// - Writes back in-place only if new buffer is smaller than current (safety)

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import fg from 'fast-glob';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');

const GLOB = [
  '**/*.jpg', '**/*.JPG', '**/*.jpeg', '**/*.JPEG', '**/*.png', '**/*.PNG'
];

const MAX_WIDTH = 1600;
const MIN_SIZE_BYTES = 50 * 1024; // 50KB

function log(...args) { console.log('[compress-images]', ...args); }

async function fileSize(file) {
  try { const s = await fs.stat(file); return s.size; } catch { return 0; }
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function compressOne(abs) {
  const rel = path.relative(PUBLIC_DIR, abs);
  const ext = path.extname(abs).toLowerCase();
  const base = abs.slice(0, -ext.length);

  const size = await fileSize(abs);
  if (size < MIN_SIZE_BYTES) {
    log('skip small', rel);
    return;
  }

  const input = sharp(abs, { failOn: 'none' });
  const meta = await input.metadata();
  const width = meta.width || MAX_WIDTH;
  const resizeWidth = Math.min(width, MAX_WIDTH);

  const pipeline = input.clone().resize({ width: resizeWidth, withoutEnlargement: true });

  let outBuf;
  if (ext === '.jpg' || ext === '.jpeg' || ext === '.jpg'.toUpperCase() || ext === '.jpeg'.toUpperCase()) {
    outBuf = await pipeline
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toBuffer();
  } else if (ext === '.png' || ext === '.PNG') {
    // Try palette for smaller size if no alpha; else fallback to optimized PNG
    const hasAlpha = !!meta.hasAlpha;
    outBuf = await pipeline
      .png({ compressionLevel: 9, palette: !hasAlpha })
      .toBuffer();
  } else {
    return;
  }

  if (outBuf.length < size) {
    await fs.writeFile(abs, outBuf);
    log('compressed', rel, '->', `${Math.round(size/1024)}KB to ${Math.round(outBuf.length/1024)}KB`);
  } else {
    log('kept original (no smaller)', rel);
  }

  // Sidecars: AVIF + WebP
  try {
    const webp = await input.clone().resize({ width: resizeWidth, withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
    const avif = await input.clone().resize({ width: resizeWidth, withoutEnlargement: true }).avif({ quality: 50 }).toBuffer();

    const webpPath = `${base}.webp`;
    const avifPath = `${base}.avif`;

    // Only write if benefits and not already exist with same/better size
    const writeIfSmaller = async (p, buf) => {
      let prev = Infinity;
      try { prev = (await fs.stat(p)).size; } catch {}
      if (buf.length < prev) {
        await fs.writeFile(p, buf);
        log('sidecar', path.relative(PUBLIC_DIR, p), `${Math.round(buf.length/1024)}KB`);
      }
    };

    await writeIfSmaller(webpPath, webp);
    await writeIfSmaller(avifPath, avif);
  } catch (e) {
    log('sidecar error', rel, e?.message || e);
  }
}

async function main() {
  log('Scanning public/ for images...');
  const entries = await fg(GLOB, { cwd: PUBLIC_DIR, onlyFiles: true, dot: false, absolute: true, followSymbolicLinks: false });
  log('Found', entries.length, 'images');
  for (const abs of entries) {
    try {
      await compressOne(abs);
    } catch (e) {
      log('error', path.relative(PUBLIC_DIR, abs), e?.message || e);
    }
  }
  log('Done');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
