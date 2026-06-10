# Khai Tran — Portfolio

Personal portfolio of **Khai Tran**, a finance transformation professional specializing in claimback automation, accounts receivable, accounting controls, and data analytics.

This project is a customized derivative of the original portfolio by **David Heckhoff**.  
Original portfolio: [https://david-hckh.com](https://david-hckh.com)  
Original repository: [https://github.com/davidhckh/portfolio-2025](https://github.com/davidhckh/portfolio-2025)

Attribution is preserved as required. See **Credits & Attribution** below.

---

## Tech Stack

| Layer       | Technology                                      |
|-------------|------------------------------------------------|
| Framework   | Vue 3 (`<script setup>`), TypeScript            |
| Build       | Vite 7                                          |
| 3D / WebGL  | Three.js, GLSL via vite-plugin-glsl             |
| Animation   | GSAP + Lenis smooth scroll                      |
| Audio       | Howler.js                                       |
| Styles      | SCSS with shared mixins                         |
| i18n        | Custom lightweight i18n (EN + VI)               |
| Deployment  | Vercel (recommended)                            |

---

## Scripts

| Command              | Description                                    |
|----------------------|------------------------------------------------|
| `npm run dev`        | Dev server on port **3000**                    |
| `npm run build`      | TypeCheck + production build to `dist/`        |
| `npm run preview`    | Serve the production build locally             |
| `npm run typecheck`  | TypeScript check only                          |

---

## Local Installation

```bash
git clone https://github.com/khaitrantrong2/khai-portfolio-cute.git
cd khai-portfolio-cute
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable               | Default | Description                                        |
|------------------------|---------|----------------------------------------------------|
| `VITE_SHOW_ATTRIBUTION`| `true`  | Show original-author attribution in footer (keep!) |

**Do not set `VITE_SHOW_ATTRIBUTION=false`.** Attribution to the original author is legally required.

---

## How to Update Personal Content

### Profile text, tagline, About copy
Edit `src/i18n/messages/namespaces/common/en.json` (English) and `vi.json` (Vietnamese).

Key translation keys:
- `job-title` — headline under your name on the hero
- `about-tagline` — short tagline in the 3D floating box
- `about-intro` — longer about description
- `lets-work-together` — contact section heading
- `location` — your location shown in the 3D box

### Social links & email
Edit `src/content/social.ts`. Uncomment and fill in your GitHub and LinkedIn URLs.

```ts
export const social = [
  { url: "mailto:khai.trantrong2@gmail.com", name: "mail" },
  { url: "https://github.com/YOUR_GITHUB", name: "github" },
  { url: "https://www.linkedin.com/in/YOUR_LINKEDIN/", name: "linkedin" },
];
```

### Skills shown in the 3D panel
Edit `src/features/home/components/BoxServices.vue` — `SERVICES_EN` and `SERVICES_VI` arrays.

---

## How to Add / Edit Projects

### 1. Create content files
Add `src/content/projects/en/<your-slug>.ts` and `src/content/projects/vi/<your-slug>.ts`.

Use an existing project as template, e.g. `src/content/projects/en/claimback-cockpit.ts`.

### 2. Register the slug
Add your slug to `projectIds` in `src/content/projects/index.ts`.

### 3. Add previews
Add an entry to `src/content/projects/previews/en.ts` and `previews/de.ts` (used as Vietnamese).

### 4. Add a thumbnail
Place a `.svg` or `.webp` image in `src/assets/thumbnails/<your-slug>.svg`.

### 5. Add project images
Place images in `src/assets/images/projects/<your-slug>/` and import them in your content `.ts` file.

---

## How to Replace Images

| Item           | Location                                      |
|----------------|-----------------------------------------------|
| Project thumbnails | `src/assets/thumbnails/*.svg` (replace with `.webp` for best quality) |
| Project screenshots | `src/assets/images/projects/<slug>/`     |

After replacing, update the import paths in the corresponding `.ts` content file.

---

## How to Build

```bash
npm run build
```

Output goes to `dist/`. The build includes TypeScript checking.

---

## How to Deploy (Vercel — recommended)

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Set the following in **Project Settings**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Node.js version**: 20.x or higher
4. Add environment variable:
   - `VITE_SHOW_ATTRIBUTION` = `true`
5. Click **Deploy**.

The `vercel.json` in this repo handles SPA client-side routing automatically.

After deployment, update the canonical URL and OG image URLs in `index.html`:
```html
<link rel="canonical" href="https://your-real-domain.com/" />
<meta property="og:url" content="https://your-real-domain.com/" />
```

---

## Remaining TODO Items

These items require manual action from Khai:

- [ ] **GitHub profile URL** — add to `src/content/social.ts`
- [ ] **LinkedIn profile URL** — add to `src/content/social.ts`
- [ ] **Custom domain** — connect in Vercel dashboard, then update `index.html` canonical + OG URLs
- [ ] **OG / Twitter preview images** — replace `public/meta/og-image.webp` and `public/meta/twitter-image.webp` with a real social preview image
- [ ] **Resume PDF** — add `public/resume.pdf` and link a download button where appropriate
- [ ] **Profile photo** (optional) — if you want to add a photo to the About section
- [ ] **Real project screenshots** — replace the SVG placeholders in `src/assets/images/projects/` with real screenshots (use `.webp` format)
- [ ] **Project thumbnails** — replace SVG thumbnails in `src/assets/thumbnails/` with `.webp` screenshots for richer visual cards

---

## Confidentiality Note

All project visuals in this portfolio use recreated or anonymized data to protect confidential business information. No real financial figures, customer data, or employer-confidential materials are displayed.

---

## Credits & Attribution

This project was originally created and designed by **David Heckhoff**.

Attribution is required by the original license. Please keep:
- The existing credit in the website footer
- This attribution section in the README
- The `VITE_SHOW_ATTRIBUTION=true` environment variable

> Original portfolio: [https://david-hckh.com](https://david-hckh.com)  
> Customized for Khai Tran's personal portfolio.

Music produced by [HM Surf](https://soundcloud.com/hmsurf).
