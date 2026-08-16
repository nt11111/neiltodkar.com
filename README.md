# Neil Todkar — personal site

Static, dependency-free personal site. Five pages: Home, Work, Writing, About, Contact. Dark and light mode with a toggle in the nav (remembers your choice; defaults to your system setting).

## Editing content

**Everything lives in `data.js`.** Every page renders from it.

- **Add a project / role** → copy a block inside `projects: [ ... ]`. `kind` is `venture`, `work`, `research`, `initiative`, or `creative`. Set `featured: true` to show it on the homepage (first three featured items appear there).
- **Add a paper or essay** → copy a block inside `writing: [ ... ]` (newest first). Leave `href` empty for unpublished work.
- **Add a talk / event** → `talks: [ ... ]`.
- **Add an award** → `awards: [ ... ]`. The homepage shows the first four.
- **Bio, hero copy, contact info, "Now" line** → the `profile` object at the top.
- **Education, skills, languages, certifications, leadership** → their own arrays near the bottom.

## Files

- `index.html`, `projects.html`, `writing.html`, `about.html`, `contact.html` — the pages. Each has a small `renderPage()` that fills the page from `data.js`.
- `data.js` — all content.
- `styles.css` — design system. Colors are CSS variables at the top; `[data-theme="dark"]` overrides them.
- `site.js` — nav + footer, theme toggle, scroll reveals, magnetic buttons, hero canvas.
- `assets/profile.jpg` — About page portrait (4:5). `assets/avatar.jpg` — square version used for the favicon / social preview. `assets/planos-logo.png`.

## Local preview

```bash
python3 -m http.server 4180
```

Then open http://localhost:4180.

## Hosting on GitHub Pages

1. Push this folder to a GitHub repo.
2. Repo **Settings → Pages → Build from branch → main → /(root)**.
3. Point your domain at it under **Custom domain** (add a `CNAME` DNS record at your registrar).

Keep all files together; pages reference each other and the shared scripts with relative paths.
