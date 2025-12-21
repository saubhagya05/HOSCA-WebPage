#!/usr/bin/env node

// Find images under public/ that are not referenced anywhere in src/
// Strategy:
// - Collect all image paths under public/
// - For each, search for its basename and the most likely relative URL (with/without leading slash)
// - Ignore sidecar .webp/.avif that may be auto-served by next/image
// - Print a list of likely-unused files (best-effort). Manual verification recommended.

import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
const SRC_DIR = path.join(ROOT, 'src');

const IMG_EXT = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg', '.JPG', '.JPEG', '.PNG'];

function log(...args) { console.log('[find-unused]', ...args); }

async function readFileSafe(p) { try { return await fs.readFile(p, 'utf8'); } catch { return ''; } }

async function main() {
  // Gather all images in public
  const patterns = IMG_EXT.map(ext => `**/*${ext}`);
  const files = await fg(patterns, { cwd: PUBLIC_DIR, onlyFiles: true, dot: false, absolute: true, followSymbolicLinks: false });

  // Gather all source files (tsx, ts, js, jsx, css, mdx)
  const srcFiles = await fg(['**/*.{ts,tsx,js,jsx,css,md,mdx}'], { cwd: SRC_DIR, onlyFiles: true, absolute: true });

  // Read all source into a single big string for quick includes (faster than per-file grep for our scale)
  const contents = (await Promise.all(srcFiles.map(readFileSafe))).join('\n');

  const unused = [];

  for (const abs of files) {
    const ext = path.extname(abs).toLowerCase();
    const relFromPublic = path.relative(PUBLIC_DIR, abs).replaceAll('\\', '/');

    // Ignore sidecar modern formats; they may be served implicitly
    if (ext === '.webp' || ext === '.avif') continue;

    const basename = path.basename(abs);

    // Heuristics to consider as "used":
    // - Direct basename mention
    // - With leading slash /<rel>
    // - Without leading slash <rel>
    // - Encoded spaces
    const relNoSlash = relFromPublic;
    const relWithSlash = `/${relFromPublic}`;
    const encodedRel = relWithSlash.replace(/ /g, '%20');

    const isUsed = (
      contents.includes(basename) ||
      contents.includes(relNoSlash) ||
      contents.includes(relWithSlash) ||
      contents.includes(encodedRel)
    );

    if (!isUsed) {
      unused.push(relFromPublic);
    }
  }

  if (unused.length === 0) {
    log('No unused images found (best-effort).');
  } else {
    console.log('\nLikely unused images under public/ (verify manually):');
    for (const f of unused) console.log('-', f);
    console.log(`\nTotal: ${unused.length}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
