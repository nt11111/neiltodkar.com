# Neil Todkar — personal site

One-page portfolio at **neiltodkar.com**. React + TypeScript + Tailwind + Framer Motion, built with Vite. Dark theme, Kanit font.

Sections, top to bottom: Hero (memoji) → scrolling work strip → About → What I do → Projects (stacking cards) → Research + Experience → Recognition → Contact.

## Editing content

**Everything lives in `app/src/data.ts`.** Components only handle layout and motion.

- **Rename the CAD startup** → change `VENTURE_NAME` at the top of `data.ts`. It is used everywhere the name appears.
- **Add a project card** → copy a block in `projects`. Each card needs exactly three images (two stacked on the left, one tall on the right). Leave out `link` and set `pending` to show a dashed pill instead of a "Live Project" button.
- **Scrolling strip** → `marquee.rowOne` / `marquee.rowTwo`.
- **Research, experience, awards** → `research`, `experience`, `recognition`, `credentials`.

## Images

All under `app/public/media/`:

- `memoji.webp` — hero portrait (transparent). `favicon.png`, `og.jpg` (link preview, 1200×630).
- `about/` — the four 3D objects in the About section's corners.
- `work/` — screenshots and CAD renders, 1120×720 WebP. Used by both the strip and the project cards.

## Develop

```bash
npm install
npm run dev
```

Opens on http://localhost:4180.

## Build and deploy

GitHub Pages serves the `main` branch from the repo root, so the build is written to the root (`index.html`, `static/`, `media/`, `CNAME`, and the redirect stubs for the old `about/projects/writing/contact.html` URLs). Source lives in `app/`.

```bash
npm run build
```

`scripts/clean.mjs` deletes the previous build output first (only paths the build writes). Commit the source **and** the build output, then push `main` to deploy. Vite prints two warnings about `outDir` containing the source folder; they are expected with this layout.
