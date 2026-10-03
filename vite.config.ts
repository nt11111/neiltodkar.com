import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// Source lives in app/. The build is written to the repo root because GitHub
// Pages serves main from / (see README). scripts/clean.mjs removes the previous
// build first, since emptyOutDir can't be used on the repo root.
const repoRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: 'app',
  plugins: [react()],
  server: { port: 4180 },
  preview: { port: 4180 },
  build: {
    outDir: repoRoot,
    emptyOutDir: false,
    assetsDir: 'static',
  },
});
