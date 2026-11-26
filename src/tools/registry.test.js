/**
 * Registry guards.
 *
 * These exist because the registry has already been damaged twice in this
 * session (a wiped-to-zero-bytes write, and a garbled parameter name). A
 * broken registry is silent at runtime - tool pages just 404, the tool grid
 * just renders fewer tiles - so it has to fail loudly at build/test time.
 *
 * Run with: node src/tools/registry.test.js
 */
import { TOOL_CATEGORIES, TOOLS, TOOLS_BY_ID, getToolById } from './registry.js';

const failures = [];
const assert = (ok, message) => {
  if (!ok) failures.push(message);
};

// 1. The public claim is "100+ tools". The data must actually support it.
assert(TOOLS.length >= 100, `expected >= 100 tools, got ${TOOLS.length}`);

// 2. Six categories, as rendered by DenseTools.
assert(TOOL_CATEGORIES.length === 6, `expected 6 categories, got ${TOOL_CATEGORIES.length}`);

// 3. Unique ids: silently mangled categories would slip through without this.
const ids = TOOLS.map((t) => t.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
assert(dupes.length === 0, `duplicate ids: ${[...new Set(dupes)].join(', ')}`);

// 4. Ids must be URL-safe (they become /tool/:id route params).
const badIds = TOOLS.map((t) => t.id).filter((id) => !/^[a-z0-9-]+$/.test(id));
assert(badIds.length === 0, `malformed ids: ${badIds.join(', ')}`);

// 5. Labels must be plain ASCII: this is the corrupted-file class of bug
//    (stray CJK characters have appeared in this registry before).
const badLabels = TOOLS
  .filter((t) => /[^\x00-\x7F]/.test(t.label) || /^\s|\s$/.test(t.label) || /\s{2,}/.test(t.label))
  .map((t) => `${t.id} -> ${JSON.stringify(t.label)}`);
assert(badLabels.length === 0, `bad labels: ${badLabels.join(', ')}`);

// 6. Every tool must declare an explicit status and a numeric price; no
//    blank/undefined rows, and the price must agree with unitsPerSecond.
const badTools = TOOLS.filter(
  (t) =>
    !['live', 'beta', 'coming'].includes(t.status) ||
    !Number.isFinite(t.unitsPerSecond) ||
    t.unitsPerSecond <= 0
);
assert(badTools.length === 0, `tools missing status/price: ${badTools.map((t) => t.id).join(', ')}`);

// 7. Lookup must be consistent: every id resolves to the same object.
const mismatched = TOOLS.filter((t) => TOOLS_BY_ID[t.id] !== t).map((t) => t.id);
assert(mismatched.length === 0, `TOOLS_BY_ID mismatch: ${mismatched.join(', ')}`);

// 8. Lookup must return null, never undefined, for unknown ids (the old
//    `nulliro` corruption would have thrown a ReferenceError when called).
assert(getToolById('definitely-not-a-tool') === null, 'getToolById should return null for unknown ids');

if (failures.length) {
  console.error(`registry: ${failures.length} problem(s)`);
  failures.forEach((f) => console.error(`  - ${f}`));
  process.exit(1);
}
console.log(`registry OK: ${TOOLS.length} tools, ${TOOL_CATEGORIES.length} categories, ${new Set(ids).size} unique ids`);
