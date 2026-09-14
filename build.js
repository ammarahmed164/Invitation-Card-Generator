/**
 * Bundle source modules into js/bundle.js for standalone / production use.
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

  // Remove import statements
  code = code.replace(/^\s*import\s+[^;]+;?\s*$/gm, '');

  // Replace "export const " with "const "
  code = code.replace(/^\s*export\s+const\s+/gm, 'const ');

  // Replace "export function " with "function "
  code = code.replace(/^\s*export\s+function\s+/gm, 'function ');

  // Replace "export class " with "class "
  code = code.replace(/^\s*export\s+class\s+/gm, 'class ');

  // Replace "export default " with ""
  code = code.replace(/^\s*export\s+default\s+/gm, '');

  // Replace "export { ... }" with ""
  code = code.replace(/^\s*export\s*\{[^}]*\}\s*;?\s*$/gm, '');

  bundledCode += `\n  // =========================================================================\n`;
  bundledCode += `  // MODULE: ${relPath}\n`;
  bundledCode += `  // =========================================================================\n\n`;
  bundledCode += code.split('\n').map(line => '  ' + line).join('\n') + '\n';
}

bundledCode += `
})();
`;

const outputPath = path.join(projectRoot, 'js', 'bundle.js');
fs.writeFileSync(outputPath, bundledCode, 'utf8');
console.log(`✓ Standalone bundle created at ${outputPath} (${(bundledCode.length / 1024).toFixed(1)} KB)`);
