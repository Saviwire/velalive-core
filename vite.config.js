import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite replaces react-scripts.
 *
 * Why: CRA 5 is end-of-life and its webpack config silently treats imports it
 * cannot resolve as "module externals" (bare import() promises with no
 * namespace object). That is exactly how the auth modals ended up calling
 * createClient on undefined in production. Vite fails the build loudly on an
 * unresolvable import instead, and emits the stylesheet as a real <link>.
 *
 * base: '/' if the site is served from a domain or subdomain (velalive.online,
 * *.pages.dev, *.vercel.app). Use the NEXT_* style env var below, or switch the
 * fallback to '/<repo>/' for a GitHub Pages *project* site on saviwire.github.io.
 */
const base = process.env.VITE_PUBLIC_BASE || '/';

export default defineConfig({
  base,
  plugins: [react()],
  // These components are .js files that contain JSX (the original CRA setup
  // allowed this; Vite treats only .jsx/.tsx as JSX by default). Scope the
  // transform to src/ so node_modules keeps standard .js semantics.
  esbuild: {
    include: /src\/.*\.jsx?$/,
    exclude: /node_modules/,
    loader: 'jsx',
    jsx: 'automatic',
  },
  build: {
    minify: 'esbuild',
    outDir: 'build',
    assetsDir: 'static',
    sourcemap: false,
    target: 'es2019',
    chunkSizeWarningLimit: 1200,
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
