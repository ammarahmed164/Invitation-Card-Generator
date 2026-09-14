/**
 * Bundle source modules into js/bundle.js and prepare /public for Vercel.
 * Run: node build.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.dirname(__filename);

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

console.log('Building standalone application bundle...');

let bundledCode = `/**
 * Invitation Card Generator — Standalone Distribution Bundle
 * Self-contained bundle for zero-config execution via file:// protocol (double-click index.html)
 * and http:// servers (including Vercel static hosting).
 */

(function() {
  'use strict';

`;

for (const relPath of files) {
  const fullPath = path.join(projectRoot, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing source file: ${fullPath}`);
    process.exit(1);
  }

  let code = fs.readFileSync(fullPath, 'utf8');

  code = code.replace(/^\s*import\s+[^;]+;?\s*$/gm, '');
  code = code.replace(/^\s*export\s+const\s+/gm, 'const ');
  code = code.replace(/^\s*export\s+function\s+/gm, 'function ');
  code = code.replace(/^\s*export\s+class\s+/gm, 'class ');
  code = code.replace(/^\s*export\s+default\s+/gm, '');
  code = code.replace(/^\s*export\s*\{[^}]*\}\s*;?\s*$/gm, '');

  bundledCode += `\n  // =========================================================================\n`;
  bundledCode += `  // MODULE: ${relPath}\n`;
  bundledCode += `  // =========================================================================\n\n`;
  bundledCode += code.split('\n').map(line => '  ' + line).join('\n') + '\n';
}

bundledCode += `
})();
`;

const bundlePath = path.join(projectRoot, 'js', 'bundle.js');
fs.writeFileSync(bundlePath, bundledCode, 'utf8');
console.log(`✓ Bundle created at js/bundle.js (${(bundledCode.length / 1024).toFixed(1)} KB)`);

// Prepare static output for Vercel (outputDirectory: "public")
const publicDir = path.join(projectRoot, 'public');
fs.rmSync(publicDir, { recursive: true, force: true });
fs.mkdirSync(publicDir, { recursive: true });

const toCopy = ['index.html', 'css', 'js', 'lib', 'assets'];
for (const item of toCopy) {
  const src = path.join(projectRoot, item);
  const dest = path.join(publicDir, item);
  if (!fs.existsSync(src)) {
    console.error(`Missing deploy asset: ${src}`);
    process.exit(1);
  }
  fs.cpSync(src, dest, { recursive: true });
}

console.log('✓ Static site prepared at /public for Vercel');
