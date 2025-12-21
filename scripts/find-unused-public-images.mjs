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
  const patterns = IMG_EXT.map(ext => `**/*${ext}`);
  const files = await fg(patterns, { cwd: PUBLIC_DIR, onlyFiles: true, dot: false, absolute: true, followSymbolicLinks: false });
  const srcFiles = await fg(['**/*.{ts,tsx,js,jsx,css,md,mdx}'], { cwd: SRC_DIR, onlyFiles: true, absolute: true });
  const contents = (await Promise.all(srcFiles.map(readFileSafe))).join('\n');
  const unused = [];

  for (const abs of files) {
    const ext = path.extname(abs).toLowerCase();
    const relFromPublic = path.relative(PUBLIC_DIR, abs).replaceAll('\\', '/');

    if (ext === '.webp' || ext === '.avif') continue;

    const basename = path.basename(abs);
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
  } 
  
  else {
    console.log('\nLikely unused images under public/ (verify manually):');
    for (const f of unused) console.log('-', f);
    console.log(`\nTotal: ${unused.length}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
