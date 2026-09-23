<<<<<<< HEAD

# Portfolio

=======

# Shodhan — Portfolio

A personal portfolio site for Shodhan, an Information Science & Engineering
student (graduating 2027) targeting Cloud Engineering and Software
Development internships. Built with React, Vite, Tailwind CSS, Framer
Motion, and React Router.

---

## 1. Tech stack

- **React 19** + **Vite** — app shell and dev/build tooling
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — styling, using a small
  custom design-token system defined in `src/index.css`
- **Framer Motion** — the hero entrance animation and diagram line-draw
- **React Router v7** — client-side routing between the home page and
  case-study pages
- **lucide-react** — icon set (GitHub/LinkedIn icons are custom SVGs in
  `src/components/SocialIcons.jsx`, since lucide dropped brand icons)

---

## 2. Project structure

```
shodhan-portfolio/
├── public/
│   ├── images/            # all site images — see "Adding assets" below
│   ├── videos/             # creative-work video files
│   ├── resume/              # resume PDF goes here
│   └── favicon.svg
├── src/
│   ├── components/         # reusable, presentational building blocks
│   ├── sections/           # one file per home-page section
│   ├── pages/               # routed pages (Home + 3 case-study pages)
│   ├── data/                 # ← all editable content lives here
│   ├── App.jsx               # routes
│   ├── main.jsx
│   └── index.css              # design tokens + Tailwind
├── index.html                  # SEO meta tags
└── package.json
```

### Routes

| Path                               | Renders                                    |
| ---------------------------------- | ------------------------------------------ |
| `/`                                | Home (all sections, in order)              |
| `/projects/smart-village`          | Smart Village Management System case study |
| `/work/nuvoro`                     | NUVORO case study                          |
| `/work/nexova`                     | NEXOVA case study                          |
| `/work/creative/nexova-brand-film` | NEXOVA Brand Film case study               |

---

## 3. Editing content — everything is data-driven

You should almost never need to touch a component to update content.
Everything lives in `src/data/`:

| File                | Controls                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `profile.js`        | Name, role, headline, about text, education, email, GitHub/LinkedIn URLs, resume file path                             |
| `skills.js`         | The 6 skill categories and each skill's level (`learning` / `practicing` / `project`)                                  |
| `projects.js`       | The featured Smart Village project, its full case-study copy, the 2 cloud lab projects, and the 3 Python mini-projects |
| `selectedWork.js`   | NUVORO and NEXOVA cards + their case-study section copy                                                                |
| `creativeWork.js`   | Creative/video projects + their case-study copy                                                                        |
| `certifications.js` | The 3 certification cards                                                                                              |

### Add a new engineering project

Right now there's a single featured project (`featuredProject` in
`projects.js`). To add a second one:

1. Turn `featuredProject` into an array (e.g. `engineeringProjects`).
2. Update `Projects.jsx` to `.map()` over it instead of rendering one card.
3. Give each project a unique `slug` and add a matching case-study object,
   then update `ProjectDetails.jsx`'s lookup (it currently only checks for
   `"smart-village"`) to look up by slug from a map of case studies.

### Add a new item to Selected Work (a new website/product)

1. Add an object to the `selectedWork` array in `selectedWork.js` with a
   unique `slug`, `category` (`"Web"` or another filter value), `image`,
   `technologies`, `status`, etc.
2. Add a matching case-study object (see `nuvoroCaseStudy` /
   `nexovaCaseStudy` for the shape) and register it in the `caseStudies`
   map at the top of `src/pages/WorkDetails.jsx`.

### Add a new creative/video project

1. Add an object to the `creativeWork` array in `creativeWork.js`.
2. Add a matching entry to `creativeCaseStudies` (same file) keyed by the
   same `slug`.
3. Drop the video file into `public/videos/` and the thumbnail into
   `public/images/creative/...`, and point `video`/`thumbnail` at them.

### Add a new certification

Add an object to the `certifications` array in `certifications.js`. Leave
`link` as `""` until you have a real credential URL — the card will show
"Credential link coming soon" instead of a broken link.

### Change personal info (name, email, links, resume)

Edit `src/data/profile.js`. Two fields are placeholders you should update
before deploying:

- `email` — currently a placeholder address
- `resumeFile` — currently `/resume/shodhan-resume.pdf`; place the actual
  PDF at that path under `public/resume/`, or change the filename here to
  match whatever you name the file

---

## 4. Adding assets (images/video)

Every image on the site is rendered through `ImageFrame` (or a similar
fallback in `VideoCard`), which gracefully shows a placeholder box instead
of a broken-image icon if the file at the given path doesn't exist yet.
That means:

- You can wire up all the data now and drop in real images later — nothing
  will look broken in the meantime.
- To add a real image, just place the file at the path referenced in the
  relevant data file, e.g. `public/images/projects/smart-village/dashboard.png`
  for `image: "/images/projects/smart-village/dashboard.png"`.

Expected asset paths (from the data files, as currently configured):

```
public/images/projects/smart-village/dashboard.png
public/images/selected-work/nuvoro/hero.png
public/images/selected-work/nuvoro/black.png
public/images/selected-work/nuvoro/white.png
public/images/selected-work/nuvoro/green.png
public/images/selected-work/nuvoro/pink.png
public/images/selected-work/nexova/hero.png
public/images/creative/nexova/thumbnail.jpg
public/videos/nuvoro-product-film.mp4
public/videos/nexova.mp4
public/resume/shodhan-resume.pdf   (rename via profile.js if different)
```

---

## 5. Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` by default.

## 6. Building for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## 7. Deploying

The build output is a fully static `dist/` folder, so it deploys to any
static host:

- **Vercel / Netlify** — connect the repo, build command `npm run build`,
  output directory `dist`. Both auto-detect Vite.
- **GitHub Pages** — build, then push the contents of `dist/` to a
  `gh-pages` branch (e.g. via the `gh-pages` npm package), or use GitHub
  Actions with the official Pages deploy action.

Because this app uses client-side routing (React Router), make sure your
host is configured to fall back to `index.html` for unknown paths (Vercel
and Netlify do this automatically for Vite/SPA projects; GitHub Pages
needs a `404.html` that redirects to `index.html`, or a small workaround
script).

---

## 8. Design notes

- **Palette**: near-black base (`--color-bg`) with two restrained accents —
  a muted brass/gold (`--color-brass`) used for creative & brand moments
  (NUVORO, NEXOVA, Creative Work, primary CTAs) and a steel-cyan
  (`--color-cyan`) used for technical/cloud moments (AWS services,
  architecture diagrams). The split is intentional: gold signals "creative
  execution," cyan signals "technical work," reinforcing the site's core
  message that Shodhan does both.
- **Type**: Space Grotesk for headings, Inter for body copy, JetBrains Mono
  for small technical labels (tech tags, status badges, eyebrow text).
- **Skill levels** are qualitative (`Learning` / `Practicing` / `Project
Experience`) rather than invented percentages, per the brief.
- **Status badges** (`Completed`, `In Progress`, `In Development`,
  `Concept`, `Planned`, etc.) are used throughout so nothing overstates
  how finished a project is.
- All placeholder values (email, resume filename, GitHub/LinkedIn URLs,
  case-study links) are clearly marked with comments in the data files —
  search for `PLACEHOLDER` before deploying to make sure nothing
  fake-looking ships.
  > > > > > > > eb74976 (Add Smart Village video project demo)
