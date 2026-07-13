#!/usr/bin/env node
/**
 * sync_portal_assets.mjs — Posa TOTES les imatges que necessiten les fitxes del
 * portal (web/public/fitxes/*.html) al lloc correcte dins web/public/, copiant-les
 * des de les carpetes font de cada SA (SA1-celula, SA2-cos-huma, SA3-defensors-cos…).
 *
 * Per quina raó: les fitxes es copien a web/public/fitxes/ però referencien imatges
 * amb rutes relatives (../imatges-cientifiques/, ../imatges_material_grafic/,
 * ../imatges/science_bits/, img/, disseccio_*.png, el logo…) que abans NO existien
 * dins web/public/ → imatges trencades al portal. Aquest script les hi porta soles.
 *
 * AUTOMÀTIC: s'executa com a `prebuild` de package.json → cada `npm run build` el crida.
 * També es pot executar a mà:  node sync_portal_assets.mjs
 *
 * Idempotent: només copia si el destí no existeix o la font és més nova.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const WEB_DIR = path.dirname(fileURLToPath(import.meta.url));       // .../web
const PROJECT_ROOT = path.resolve(WEB_DIR, '..');                   // .../Biologia 3r d'ESO
const PUBLIC_DIR = path.join(WEB_DIR, 'public');
const FITXES_DIR = path.join(PUBLIC_DIR, 'fitxes');
const LOGO = 'logo_bio_geo_temple.png';

const IMG_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'public']); // 'public' = destí, no font

// ── 1) Índex basename → ruta font (tot el projecte, excloent destí i sistema) ──
async function buildIndex(dir, index) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return index; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      await buildIndex(full, index);
    } else if (IMG_EXT.has(path.extname(e.name).toLowerCase())) {
      if (!index.has(e.name)) index.set(e.name, full); // primera coincidència guanya
    }
  }
  return index;
}

async function copyIfNeeded(src, dest) {
  try {
    const [s, d] = await Promise.all([fs.stat(src), fs.stat(dest).catch(() => null)]);
    if (d && d.mtimeMs >= s.mtimeMs) return false; // ja hi és i és igual/més nou
  } catch { return false; }
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.copyFile(src, dest);
  return true;
}

async function main() {
  const index = await buildIndex(PROJECT_ROOT, new Map());
  let htmls;
  try { htmls = (await fs.readdir(FITXES_DIR)).filter(f => f.endsWith('.html')); }
  catch { console.error('[sync-assets] no existeix', FITXES_DIR); return; }

  const refRe = /(?:src|href)\s*=\s*"([^"]+)"/g;
  const wanted = new Set();
  for (const h of htmls) {
    const html = await fs.readFile(path.join(FITXES_DIR, h), 'utf8');
    let m;
    while ((m = refRe.exec(html))) {
      const ref = m[1];
      if (/^(https?:)?\/\//.test(ref) || ref.startsWith('data:')) continue; // externs
      if (!IMG_EXT.has(path.extname(ref).toLowerCase())) continue;          // no-imatge
      wanted.add(ref);
    }
  }

  let copied = 0, ok = 0, missing = [];
  for (const ref of wanted) {
    // El logo puja per sobre de public (../../ o ../../../): al portal servit
    // la ruta es clampa a l'arrel → cal a web/public/. El posem allà a més del destí literal.
    const targets = new Set();
    targets.add(path.resolve(FITXES_DIR, ref));                 // resolució literal de fitxer
    if (path.basename(ref) === LOGO) targets.add(path.join(PUBLIC_DIR, LOGO)); // arrel servida

    const src = index.get(path.basename(ref));
    if (!src) { missing.push(ref); continue; }

    for (const dest of targets) {
      // no escriguis fora del projecte
      if (!dest.startsWith(PROJECT_ROOT)) continue;
      if (path.resolve(dest) === path.resolve(src)) { ok++; continue; }
      if (await copyIfNeeded(src, dest)) copied++; else ok++;
    }
  }

  console.log(`[sync-assets] fitxes: ${htmls.length} · refs úniques: ${wanted.size} · copiades: ${copied} · ja OK: ${ok} · sense font: ${missing.length}`);
  if (missing.length) console.log('[sync-assets] SENSE FONT (revisa el nom):\n  - ' + missing.sort().join('\n  - '));
}

main().catch(e => { console.error('[sync-assets] error:', e); process.exitCode = 0; }); // mai bloqueja el build
