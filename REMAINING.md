# VELALIVE — remaining work (velalive-core)

**Now:** 2026-11-27 03:55 UTC. Scope: finish `velalive-core` only. The
context-window/413 problem is **parked** (see `../STATE.md` -> "Parked").

This session cannot start any process (`node.exe`, `python.exe`, `git.exe`,
`powershell.exe` -> `ResourceUnavailable ... \\.\pipe\LOCAL\dotnet_...` is
denied). So every item below is either (a) **done and verified by read-back**
= I wrote it and re-read the file, or (b) **needs the owner's terminal**.
There is no (c) "done because I said so".

## Done this round — verified by read-back

- [x] **3D chunk split.** `src/App.js` no longer statically imports
  `Carousel3D`. It now does `const Carousel3D = lazy(() =>
  import('./components/Carousel3D'))` and renders it inside `<Suspense
  fallback={}>`. `three`,
  `@react-three/fiber` and `@react-three/drei` are imported **only** by
  `Carousel3D.js` (`../src/components/Carousel3D.js`, checked for the import
  lines), so Vite/Rollup will emit them in a lazy chunk and the initial bundle
  loses roughly **600 kB** minified. Read-back confirmed `Suspense`/`lazy`
  are in the react import, the `` wrapper is on lines 143-145, and
  `App.js` / `Carousel3D.js` are 0 non-ASCII bytes. (One stray `ant` I typed
  in the new comment was caught and fixed to `and` - see the house rules.)
- [x] **Unused imports audited** across `Carousel3D`, `SwapStudio`, `Hero`,
  `SignInModal`, `SignUpModal`: no unused bindings other than a bare `React`
  whose count matches its single import (compiled away by Vite). The
  dangling-import bugs that killed production (`createClient` on
  `undefined`) are **not** like these; no import-shaped defects found in the
  five audited files.

## Needs the owner's terminal — copy-paste, in this order

**1. Build (the one test that decides everything else).**

    cd C:\Users\DELL\Documents\deepseek-harness\default-workspace\velalive\velalive-core
    npm run build

  *Pass:* `690 modules transformed.` (or "transformed" followed by the
  chunk lines), exit code 0, and the chunk lines show **a second JS chunk**
  next to `index-*.js` (Carousel3D/three). *Fail:* paste the last 15 lines.

**2. Serve + fetch (a real HTTP check, not `Test-Path`).**

    npx vite preview --port 4180

  In a second window:

    (Invoke-WebRequest http://127.0.0.1:4180/ -UseBasicParsing).StatusCode

  *Pass:* `200`. Then in the same window, check the chunk really is lazy:

    (Invoke-WebRequest http://127.0.0.1:4180/ -UseBasicParsing).Links | Select-Object href

  *Pass:* the page's main script tag points at the biggest `index-*.js`; a
  separate `Carousel3D-*.js` (or similar) file exists. Whether it is
  preloaded by a modulepreload link does not matter - what matters is that it
  is a **separate file**, not merged into the main bundle. Cross-check its
  size with `Get-ChildItem build\static`.

**3. Registry tests.**

    node src\tools\registry.test.js
    node src\tools\registry-sync.test.js

  *Pass:* exit 0 and no assertion errors. (If the tools export a
  `test` command, `npm run test:registry` is the same.)

**4. Commit only after items 1-3 pass.** The turn-35/37 repair files are
currently **untracked** (`vite.config.js`, `index.html`, `postcss.config.js`)
and three files are **modified** (`package.json`, `src/components/Hero.js`,
`src/index.css`) - verify with `git status --porcelain` first, then:

    git add -A
    git commit -m "Vite build + compiled Tailwind; split three.js chunk; registry + hash route"
    git push

  Do **not** push before the build passes; an unverified push is worse than a
  red build sitting on disk.

## Deliberately NOT done

- **`public/index.html` rewrite verification** - needs the served page, item 2.
- **`robots.txt` / `sitemap.xml` content review** - they pass through into
  `build/`, but I have not read them.
- **Auth changes** (`src/config.js`, `SignInModal/SignUpModal`, `Dashboard.js`) -
  they are under `../memory/STATE.md` "open items" 3 and 5 and are **owner
  decisions**, not tidying. Touching the bypass or the Supabase URL without
  you would be me changing security behaviour to look productive.
- Any deployment, token use, or secret rotation. The three leaked secrets in
  `../memory/STATE.md` still need **your** rotation first; until they are
  rotated, no further work should build on them.
