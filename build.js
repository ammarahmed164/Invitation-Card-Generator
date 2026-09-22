/**
 * Bundle source modules into js/bundle.js and prepare /public for Vercel.
 *
 * Full studio (all sections) → js/bundle.js + public/:
 *   node build.js
 *
 * Wedding-only → public/ only (root js/bundle.js stays full):
 *   node build.js --section=wedding
 *
 * On Vercel, SECTION defaults to wedding when VERCEL=1.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.dirname(__filename);

const sectionFlag = process.argv.find((a) => a.startsWith('--section='));
const sectionId =
  (sectionFlag && sectionFlag.split('=')[1]) ||
  process.env.SECTION ||
  (process.env.VERCEL ? 'wedding' : null);

const files = [
  'js/data/fonts.js',
  'js/data/assets.js',
  'js/data/templates.js',
  'js/editor.js',
  'js/export.js',
  'js/guestView.js',
  'js/etsyGuide.js',
  'js/app.js'
];

function stripExports(code) {
  return code
    .replace(/^\s*import\s+[^;]+;?\s*$/gm, '')
    .replace(/^\s*export\s+const\s+/gm, 'const ')
    .replace(/^\s*export\s+function\s+/gm, 'function ')
    .replace(/^\s*export\s+class\s+/gm, 'class ')
    .replace(/^\s*export\s+default\s+/gm, '')
    .replace(/^\s*export\s*\{[^}]*\}\s*;?\s*$/gm, '');
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
    if (typeof val === 'object') Object.values(val).forEach(walk);
  };
  walk(templates);
  return [...paths];
}

async function buildFilteredTemplatesSource(section) {
  const mod = await import(pathToFileURL(path.join(projectRoot, 'js/data/templates.js')).href);
  const sections = mod.SECTIONS.filter((s) => s.id === section).map((s) => ({
    ...s,
    count: mod.TEMPLATES.filter((t) => t.section === section).length
  }));
  const templates = mod.TEMPLATES.filter((t) => t.section === section);
  if (!sections.length || !templates.length) {
    throw new Error(`No templates found for section "${section}"`);
  }
  return {
    code: `function getEffectiveBg(bgPath) {
  if (!bgPath) return '';
  if (typeof window !== 'undefined' && window.BACKGROUND_BASE64_DATA && window.BACKGROUND_BASE64_DATA[bgPath]) {
    return window.BACKGROUND_BASE64_DATA[bgPath];
  }
  return bgPath;
}

const SECTIONS = ${JSON.stringify(sections, null, 2)};

const TEMPLATES = ${JSON.stringify(templates, null, 2)};
`,
    templates,
    assetPaths: collectAssetPaths(templates)
  };
}

async function buildBundle({ section = null, label = 'full' } = {}) {
  let filtered = null;
  if (section) {
    filtered = await buildFilteredTemplatesSource(section);
  }

  let bundledCode = `/**
 * Invitation Card Generator — Standalone Distribution Bundle
 * Pack: ${label}
 */

(function() {
  'use strict';

`;

  for (const relPath of files) {
    const fullPath = path.join(projectRoot, relPath);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Missing source file: ${fullPath}`);
    }

    let code;
    if (relPath === 'js/data/templates.js' && filtered) {
      code = filtered.code;
    } else {
      code = stripExports(fs.readFileSync(fullPath, 'utf8'));
    }

    bundledCode += `\n  // =========================================================================\n`;
    bundledCode += `  // MODULE: ${relPath}\n`;
    bundledCode += `  // =========================================================================\n\n`;
    bundledCode += code.split('\n').map((line) => '  ' + line).join('\n') + '\n';
  }

  bundledCode += `
})();
`;

  return { bundledCode, filtered };
}

function filterBackgroundsFile(srcPath, destPath, keepKeys, packLabel) {
  const src = fs.readFileSync(srcPath, 'utf8');
  const start = src.indexOf('{');
  const end = src.lastIndexOf('}');
  if (start < 0 || end < 0) {
    fs.copyFileSync(srcPath, destPath);
    return;
  }
  const obj = JSON.parse(src.slice(start, end + 1));
  const filtered = {};
  for (const key of keepKeys) {
    if (obj[key]) filtered[key] = obj[key];
  }
  const out =
    `/**\n * Embedded backgrounds — ${packLabel}\n */\n` +
    'window.BACKGROUND_BASE64_DATA = ' +
    JSON.stringify(filtered, null, 2) +
    ';\n';
  fs.writeFileSync(destPath, out, 'utf8');
}

function preparePublic({ section, assetPaths, sectionBundleCode }) {
  const publicDir = path.join(projectRoot, 'public');
  fs.rmSync(publicDir, { recursive: true, force: true });
  fs.mkdirSync(publicDir, { recursive: true });

  for (const item of ['index.html', 'css', 'lib']) {
    fs.cpSync(path.join(projectRoot, item), path.join(publicDir, item), { recursive: true });
  }

  // JS tree from root, then overwrite bundle (+ optional backgrounds trim)
  fs.cpSync(path.join(projectRoot, 'js'), path.join(publicDir, 'js'), { recursive: true });

  if (section && sectionBundleCode) {
    fs.writeFileSync(path.join(publicDir, 'js', 'bundle.js'), sectionBundleCode, 'utf8');
  }

  const assetsSrc = path.join(projectRoot, 'assets');
  if (section && assetPaths) {
    for (const rel of assetPaths) {
      const src = path.join(projectRoot, rel);
      const dest = path.join(publicDir, rel);
      if (!fs.existsSync(src)) {
        console.warn(`Missing asset (skipped): ${rel}`);
        continue;
      }
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    }
    filterBackgroundsFile(
      path.join(projectRoot, 'js/data/backgrounds_base64.js'),
      path.join(publicDir, 'js/data/backgrounds_base64.js'),
      assetPaths,
      `section: ${section}`
    );
  } else if (fs.existsSync(assetsSrc)) {
    fs.cpSync(assetsSrc, path.join(publicDir, 'assets'), { recursive: true });
  }

  console.log(
    section
      ? `✓ Static site prepared at /public (section: ${section} only)`
      : '✓ Static site prepared at /public (all sections)'
  );
}

// 1) Always refresh full root bundle (master local / file://)
console.log('Building full studio bundle → js/bundle.js');
const full = await buildBundle({ section: null, label: 'full suite' });
fs.writeFileSync(path.join(projectRoot, 'js', 'bundle.js'), full.bundledCode, 'utf8');
console.log(`✓ Full bundle ${(full.bundledCode.length / 1024).toFixed(1)} KB`);

// 2) Public output
if (sectionId) {
  console.log(`Building Vercel public pack → section "${sectionId}"`);
  const pack = await buildBundle({ section: sectionId, label: `section:${sectionId}` });
  console.log(`  Templates: ${pack.filtered.templates.length}`);
  console.log(`  Assets: ${pack.filtered.assetPaths.length}`);
  preparePublic({
    section: sectionId,
    assetPaths: pack.filtered.assetPaths,
    sectionBundleCode: pack.bundledCode
  });
} else {
  preparePublic({ section: null, assetPaths: null, sectionBundleCode: null });
}
