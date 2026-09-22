/**
 * Pack a single section as an Etsy-ready ZIP.
 * Does NOT modify the master project — writes to etsy-releases/ only.
 *
 * Usage:
 *   node scripts/pack-etsy-section.mjs wedding
 *   node scripts/pack-etsy-section.mjs bridal-shower
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { spawnSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), '..');

const SECTION_META = {
  wedding: {
    folderName: 'Wedding-Invitation-Builder',
    zipName: 'Wedding-Invitation-Builder.zip',
    productTitle: 'Wedding Invitation Card Builder',
    guideTitle: 'WEDDING INVITATION BUILDER — Quick Start'
  },
  soiree: {
    folderName: 'Birthday-Soiree-Invitation-Builder',
    zipName: 'Birthday-Soiree-Invitation-Builder.zip',
    productTitle: 'Birthday & Soirée Invitation Builder',
    guideTitle: 'BIRTHDAY & SOIRÉE BUILDER — Quick Start'
  },
  'baby-christening': {
    folderName: 'Baby-Shower-Christening-Builder',
    zipName: 'Baby-Shower-Christening-Builder.zip',
    productTitle: 'Baby Shower & Christening Invitation Builder',
    guideTitle: 'BABY SHOWER & CHRISTENING BUILDER — Quick Start'
  },
  'engagement-party': {
    folderName: 'Engagement-Party-Invitation-Builder',
    zipName: 'Engagement-Party-Invitation-Builder.zip',
    productTitle: 'Engagement Party Invitation Builder',
    guideTitle: 'ENGAGEMENT PARTY BUILDER — Quick Start'
  },
  'bridal-shower': {
    folderName: 'Bridal-Shower-Bachelorette-Builder',
    zipName: 'Bridal-Shower-Bachelorette-Builder.zip',
    productTitle: 'Bridal Shower & Bachelorette Invitation Builder',
    guideTitle: 'BRIDAL SHOWER & BACHELORETTE BUILDER — Quick Start'
  }
};

const sectionId = (process.argv[2] || 'wedding').trim();
const meta = SECTION_META[sectionId];
if (!meta) {
  console.error(`Unknown section "${sectionId}". Use one of: ${Object.keys(SECTION_META).join(', ')}`);
  process.exit(1);
}

const releaseRoot = path.join(root, 'etsy-releases');
const stageDir = path.join(releaseRoot, '_stage', meta.folderName);
const outDir = path.join(releaseRoot, meta.folderName);
const zipPath = path.join(releaseRoot, meta.zipName);

function rmrf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}

function mkdirp(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyDir(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

function collectAssetPaths(templates) {
  const paths = new Set();
  const walk = (val) => {
    if (!val) return;
    if (typeof val === 'string') {
      if (val.startsWith('assets/')) paths.add(val);
      return;
    }
    if (Array.isArray(val)) {
      val.forEach(walk);
      return;
    }
    if (typeof val === 'object') {
      Object.values(val).forEach(walk);
    }
  };
  walk(templates);
  return [...paths];
}

function writeFilteredTemplates(destPath, sections, templates) {
  const header = `/**
 * ${meta.productTitle} — Etsy section pack (${sectionId})
 * Generated from master project. Do not edit master to change this file.
 */

export function getEffectiveBg(bgPath) {
  if (!bgPath) return '';
  if (typeof window !== 'undefined' && window.BACKGROUND_BASE64_DATA && window.BACKGROUND_BASE64_DATA[bgPath]) {
    return window.BACKGROUND_BASE64_DATA[bgPath];
  }
  return bgPath;
}

`;
  const body =
    `export const SECTIONS = ${JSON.stringify(sections, null, 2)};\n\n` +
    `export const TEMPLATES = ${JSON.stringify(templates, null, 2)};\n`;
  fs.writeFileSync(destPath, header + body, 'utf8');
}

function filterBackgroundsBase64(srcPath, destPath, keepKeys) {
  const src = fs.readFileSync(srcPath, 'utf8');
  const start = src.indexOf('{');
  const end = src.lastIndexOf('}');
  if (start < 0 || end < 0) throw new Error('Invalid backgrounds_base64.js');
  const obj = JSON.parse(src.slice(start, end + 1));
  const filtered = {};
  for (const key of keepKeys) {
    if (obj[key]) filtered[key] = obj[key];
  }
  const out =
    '/**\n' +
    ` * Embedded backgrounds for ${meta.productTitle} (section: ${sectionId})\n` +
    ' */\n' +
    'window.BACKGROUND_BASE64_DATA = ' +
    JSON.stringify(filtered, null, 2) +
    ';\n';
  fs.writeFileSync(destPath, out, 'utf8');
}

function patchAppForSingleSection(appPath) {
  // Master already auto-opens single-section packs; keep as no-op safety.
  void appPath;
}

function writeBuyerGuide(destPath, templateTitles) {
  const list = templateTitles.map((t, i) => `${i + 1}. ${t}`).join('\n');
  const text = `========================================================================
  ${meta.guideTitle}
========================================================================

${meta.productTitle}
Includes ${templateTitles.length} wedding/event suites in this pack.

------------------------------------------------------------------------
1) OPEN THE APP
------------------------------------------------------------------------
• Double-click  index.html
  OR
• Double-click  Launch Builder (Windows).bat
  OR (Mac)
• Double-click  Launch Builder (Mac).command

Tip: Chrome or Edge works best. No install needed.

------------------------------------------------------------------------
2) TEMPLATES IN THIS PACK
------------------------------------------------------------------------
${list}

------------------------------------------------------------------------
3) EDIT YOUR CARD
------------------------------------------------------------------------
• Click a suite to open the studio
• Click text to edit · drag to move
• Photo tab → upload / replace photos
• QR tab → paste RSVP or maps link
• Front / Back to switch sides
• Guest View → preview the guest experience

------------------------------------------------------------------------
4) EXPORT & SHARE
------------------------------------------------------------------------
• WhatsApp (green button) — quick share
• Export → Print-Ready PDF (300 DPI) for printers
• Export → PNG / JPG for digital invites

------------------------------------------------------------------------
5) PRINT TIP
------------------------------------------------------------------------
• Size: 5" × 7"
• Paper: thick cardstock (~300 GSM)
• Use Print-Ready PDF for print shops

Enjoy your invitation studio!
========================================================================
`;
  fs.writeFileSync(destPath, text, 'utf8');
}

function zipFolder(sourceFolder, zipFile) {
  if (fs.existsSync(zipFile)) fs.unlinkSync(zipFile);
  // PowerShell Compress-Archive (Windows)
  const ps = `Compress-Archive -Path '${sourceFolder.replace(/'/g, "''")}\\*' -DestinationPath '${zipFile.replace(/'/g, "''")}' -Force`;
  const r = spawnSync('powershell', ['-NoProfile', '-Command', ps], { encoding: 'utf8' });
  if (r.status !== 0) {
    console.error(r.stdout || '');
    console.error(r.stderr || '');
    throw new Error('ZIP creation failed');
  }
}

console.log(`\nPacking Etsy section: ${sectionId}`);
console.log(`Master project stays untouched.\n`);

// Dynamic import master templates
const templatesUrl = pathToFileURL(path.join(root, 'js/data/templates.js')).href;
const { SECTIONS, TEMPLATES } = await import(templatesUrl);

const sections = SECTIONS.filter((s) => s.id === sectionId).map((s) => ({
  ...s,
  count: TEMPLATES.filter((t) => t.section === sectionId).length
}));
const templates = TEMPLATES.filter((t) => t.section === sectionId);

if (!sections.length || !templates.length) {
  console.error(`No templates found for section "${sectionId}"`);
  process.exit(1);
}

const assetPaths = collectAssetPaths(templates);
console.log(`Templates: ${templates.length}`);
console.log(`Assets referenced: ${assetPaths.length}`);

// Clean stage + output
rmrf(stageDir);
rmrf(outDir);
mkdirp(stageDir);
mkdirp(outDir);

// Copy buildable tree into stage
const copyItems = [
  'index.html',
  'build.js',
  'package.json',
  'css',
  'js',
  'lib',
  'assets',
  'Launch Builder (Windows).bat',
  'Launch Builder (Mac).command'
];
for (const item of copyItems) {
  const src = path.join(root, item);
  if (!fs.existsSync(src)) {
    console.warn(`Skip missing: ${item}`);
    continue;
  }
  fs.cpSync(src, path.join(stageDir, item), { recursive: true });
}

// Filter templates + patch app in stage
writeFilteredTemplates(path.join(stageDir, 'js/data/templates.js'), sections, templates);
patchAppForSingleSection(path.join(stageDir, 'js/app.js'));
filterBackgroundsBase64(
  path.join(root, 'js/data/backgrounds_base64.js'),
  path.join(stageDir, 'js/data/backgrounds_base64.js'),
  assetPaths
);

// Trim stage assets to only referenced files (+ keep empty dirs ok)
const stageAssets = path.join(stageDir, 'assets');
if (fs.existsSync(stageAssets)) {
  rmrf(stageAssets);
  for (const rel of assetPaths) {
    const src = path.join(root, rel);
    const dest = path.join(stageDir, rel);
    if (!fs.existsSync(src)) {
      console.warn(`Missing asset (skipped): ${rel}`);
      continue;
    }
    mkdirp(path.dirname(dest));
    fs.copyFileSync(src, dest);
  }
}

writeBuyerGuide(
  path.join(stageDir, 'README - Quick Start Guide.txt'),
  templates.map((t) => t.title)
);

// Build bundle inside stage
console.log('Building stage bundle...');
const build = spawnSync(process.execPath, ['build.js'], { cwd: stageDir, encoding: 'utf8' });
if (build.status !== 0) {
  console.error(build.stdout || '');
  console.error(build.stderr || '');
  throw new Error('Stage build failed');
}
console.log(build.stdout || '');

// Assemble clean buyer folder (no source modules / no public / no build tools)
const buyerFiles = [
  'index.html',
  'css',
  'lib',
  'assets',
  'Launch Builder (Windows).bat',
  'Launch Builder (Mac).command',
  'README - Quick Start Guide.txt'
];
for (const item of buyerFiles) {
  const src = path.join(stageDir, item);
  if (!fs.existsSync(src)) continue;
  fs.cpSync(src, path.join(outDir, item), { recursive: true });
}
mkdirp(path.join(outDir, 'js/data'));
fs.copyFileSync(path.join(stageDir, 'js/bundle.js'), path.join(outDir, 'js/bundle.js'));
fs.copyFileSync(
  path.join(stageDir, 'js/data/backgrounds_base64.js'),
  path.join(outDir, 'js/data/backgrounds_base64.js')
);

// ZIP
console.log('Creating ZIP...');
zipFolder(outDir, zipPath);

const zipStat = fs.statSync(zipPath);
console.log(`\n✓ Done`);
console.log(`  Folder: ${outDir}`);
console.log(`  ZIP:    ${zipPath}`);
console.log(`  Size:   ${(zipStat.size / (1024 * 1024)).toFixed(1)} MB`);
console.log(`\nMaster project unchanged. Upload the ZIP to Etsy.\n`);
