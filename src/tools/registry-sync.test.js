/**
 * Integration guard: the rendered tool grid and the registry must agree.
 *
 * DenseTools no longer hardcodes its own list - it reads TOOL_CATEGORIES from
 * src/tools/registry.js and links each tile with toolHref(). This test asserts
 * the two still line up, so adding a tool to the registry without a tile, or
 * wiring a category name that the grid does not render, fails here instead of
 * in the browser after a deploy.
 *
 * Run with: node src/tools/registry-sync.test.js
 *
 * Plain node script - no jest, no @testing-library.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { TOOL_CATEGORIES, TOOLS, getToolById } from './registry.js';

const here = dirname(fileURLToPath(import.meta.url));

const readSrc = (relative) => {
  const path = join(here, '..', relative);
  return readFileSync(path, 'utf8');
};

const failures = [];
const assert = (ok, message) => {
  if (!ok) failures.push(message);
};

let denseToolsSrc = '';
let appSrc = '';

try {
  denseToolsSrc = readSrc('components/DenseTools.js');
  appSrc = readSrc('App.js');
} catch (err) {
  console.error('registry-sync: cannot read source files: ' + err.message);
  process.exit(1);
}

// 1. DenseTools must get its data from the registry, not an inline copy.
assert(
  /import\s*\{[^}]*TOOL_CATEGORIES[^}]*\}\s*from/.test(denseToolsSrc),
  'DenseTools.js does not import TOOL_CATEGORIES'
);
assert(!/const\s+toolCategories\s*=\s*\[/.test(denseToolsSrc), 'DenseTools.js still hardcodes toolCategories');

// 2. Category names rendered by the grid must exist in the registry, exactly.
const rendered = [...denseToolsSrc.matchAll(/category\s*:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
const known = new Set(TOOL_CATEGORIES.map((c) => c.category));
rendered.forEach((name) => assert(known.has(name), 'DenseTools renders unknown category "' + name + '"'));

// 3. Nothing orphaned: every category must carry tools.
TOOL_CATEGORIES.forEach((c) => assert(c.tools.length > 0, 'category "' + c.category + '" has no tools'));

// 4. The route must exist and every tool must resolve through it.
assert(/useRoute\s*\(/.test(appSrc), 'App.js does not call useRoute()');
assert(/toolHref\s*\(/.test(denseToolsSrc), 'DenseTools.js does not link tools with toolHref()');
const broken = TOOLS.filter((t) => getToolById(t.id) !== t).map((t) => t.id);
assert(broken.length === 0, 'tool ids that do not resolve: ' + broken.join(', '));

if (failures.length) {
  console.error('registry-sync: ' + failures.length + ' problem(s)');
  failures.forEach((f) => console.error('  - ' + f));
  process.exit(1);
}
console.log(
  'registry-sync OK: ' + TOOL_CATEGORIES.length + ' categories wired from the registry, ' + TOOLS.length + ' tools route-resolvable'
);
