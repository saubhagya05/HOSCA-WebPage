#!/usr/bin/env node

// Delete images under public/ listed in a text file (e.g., unused-public-images.txt)
// Also deletes their .webp and .avif sidecars if present.
// Usage:
//   node scripts/delete-unused-public-images.mjs [--list <path>] [--quarantine]
// Defaults:
//   --list unused-public-images.txt (at repo root)
//   Without --quarantine, files are permanently deleted. With --quarantine, files
//   are moved to public/.quarantine/ preserving relative path structure.

import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';

const args = new Map();
for (let i = 2; i < process.argv.length; i++) {
  const a = process.argv[i];
  if (a === '--list') { args.set('list', process.argv[++i]); }
  else if (a === '--quarantine') { args.set('quarantine', true); }
}

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
const LIST_PATH = path.join(ROOT, args.get('list') || 'unused-public-images.txt');
const QUARANTINE = !!args.get('quarantine');
const QUAR_DIR = path.join(PUBLIC_DIR, '.quarantine');

function log(...m) { console.log('[delete-unused]', ...m); }

async function ensureDir(dir) { await fs.mkdir(dir, { recursive: true }); }

async function fileExists(p) { try { await fs.access(p); return true; } catch { return false; } }

function sidecars(abs) {
  const base = abs.replace(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG)$/i, '');
  return [`${base}.webp`, `${base}.avif`];
}

async function removeFile(abs) {
  try {
    await fs.unlink(abs);
    log('deleted', path.relative(PUBLIC_DIR, abs));
  } catch (e) {
    if (e?.code !== 'ENOENT') log('warn could not delete', abs, e.message || e);
  }
}

async function moveFile(abs) {
  const rel = path.relative(PUBLIC_DIR, abs);
  const dest = path.join(QUAR_DIR, rel);
  await ensureDir(path.dirname(dest));
  try {
    await fs.rename(abs, dest);
    log('quarantined', rel, '->', path.relative(PUBLIC_DIR, dest));
  } catch (e) {
    if (e?.code !== 'ENOENT') log('warn could not move', rel, e.message || e);
  }
}

async function actOn(abs) {
  if (QUARANTINE) return moveFile(abs);
  return removeFile(abs);
}

async function main() {
  if (!fssync.existsSync(LIST_PATH)) {
    console.error('List file not found:', LIST_PATH);
    process.exit(1);
  }
  const txt = await fs.readFile(LIST_PATH, 'utf8');
  const lines = txt.split(/\r?\n/);

  const targets = [];
  for (const line of lines) {
    const m = line.match(/^\s*-\s+(.+\.(?:jpg|jpeg|png|gif|JPG|JPEG|PNG))\s*$/);
    if (!m) continue;
    const rel = m[1].trim();
    const abs = path.join(PUBLIC_DIR, rel);
    targets.push(abs);
  }

  if (targets.length === 0) {
    log('No targets parsed from list file. Nothing to do.');
    return;
  }

  if (QUARANTINE) await ensureDir(QUAR_DIR);

  let count = 0;
  for (const abs of targets) {
    // main file
    await actOn(abs);
    // sidecars
    for (const sc of sidecars(abs)) {
      if (await fileExists(sc)) await actOn(sc);
    }
    count++;
  }

  log(`Done. Processed ${count} entries from ${path.relative(ROOT, LIST_PATH)}${QUARANTINE ? ' (quarantined)' : ''}.`);
}

main().catch((e) => { console.error(e); process.exit(1); });