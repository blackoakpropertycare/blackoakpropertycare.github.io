# Black Oak Property Care — Website (V2)

A dark, gold-accented contractor site built for one job: turning
visitors into estimate requests. No build tools, no frameworks —
plain HTML/CSS/JS you can edit directly, including in GitHub's web
interface. See `CHANGELOG.md` for the full history of design
decisions.

## Files

| File | Page |
|---|---|
| `index.html` | Homepage — hero, services, trust section, featured gallery, testimonials, service area, CTA |
| `services.html` | Our Services — full detail on all 4 core services |
| `about.html` | About Black Oak |
| `photos.html` | Before &amp; After Gallery |
| `community.html` | Community involvement |
| `contact.html` | Contact / free estimate form |
| `style.css` | All styling — shared by every page |
| `script.js` | Footer year, sticky header state, mobile nav, scroll-reveal |
| `CHANGELOG.md` | Running history of what changed and why |
| `assets/images/` | Logo, favicon, and gallery photos |

## Deploying to GitHub Pages

1. Create a new repo on GitHub (e.g. `bopc-website`).
2. Upload everything in this folder — including the `assets/` folder
   — to the repo root, keeping the folder structure intact.
3. Repo **Settings → Pages** → Source: `Deploy from a branch` →
   branch `main`, folder `/ (root)` → Save.
4. Your live URL: `https://YOUR-USERNAME.github.io/YOUR-REPO/`
   (can take a minute or two the first time).

For a custom domain (e.g. `blackoakpropertycare.com`), add a `CNAME`
file with your domain name to the repo root, then point your
domain's DNS at GitHub Pages per GitHub's "Managing a custom domain"
docs.

## Making changes later

Edit a file → commit → push (or edit directly on github.com and
commit there). Pages rebuilds automatically, usually live within a
minute. **Add an entry to `CHANGELOG.md`** describing what you
changed and why — future you will thank present you.

## What to customize

Every page has inline `<!-- EDIT -->` comments marking exactly what
to change. Quick map:

| What | Where |
|---|---|
| Logo | `assets/images/logo-acorn-white.png` (nav + footer) and `hero-logo-white.png` (homepage hero). Swap the files, keep the names, and it updates everywhere. |
| Colors | `style.css` — top of file, `:root { }` block. Gold is `--gold`; keep it out of button fills per the brand rule. |
| Fonts | `style.css` — `--font-display` / `--font-body`, plus the Google Fonts `<link>` in each page's `<head>`. |
| Hero photo | Add `style="background-image:url('assets/images/hero-bg.jpg')"` to the `<section class="hero">` tag on `index.html`. |
| Gallery photos | `photos.html` and the homepage's "Featured Before & After" — replace a `.ba-photo` placeholder div with an `<img>`. Exact syntax is commented above the grid in `photos.html`. |
| Nav links / page order | The `<nav class="site-nav">` block — identical on every page, so edit once and copy to the rest. |
| Contact info | `contact.html` — the `<dl class="contact-info">` block, plus the footer's `<address>` block on every page. |
| Contact form endpoint | `contact.html` — the commented line above the `<form>` tag. See "About the contact form" below. |
| Testimonials | `index.html` — `.testimonial` blocks. |
| Services text | `services.html` — `.service-detail` blocks; `index.html` — `.service-card` blocks (keep both in sync). |
| Stats | `about.html` — `.stat-strip` block (delete the whole section if you don't have real numbers yet). |
| Community projects | `community.html` — `.community-card` blocks; keep one `.community-card--placeholder` at the end. |
| Footer / socials | Every page — bottom `<footer>` block. |

## About the contact form

GitHub Pages serves static files only — there's no server to
receive form submissions on its own. This form is wired for
**Formspree**:

1. Sign up free at [formspree.io](https://formspree.io).
2. Create a form; they'll give you an endpoint like
   `https://formspree.io/f/abcd1234`.
3. In `contact.html`, replace the `<form>` tag's `action` value
   (currently `https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID`)
   with your real endpoint.
4. Confirm the form in Formspree's dashboard the first time someone
   submits it — after that, submissions land in your Gmail inbox.

The form keeps `enctype="multipart/form-data"` so the photo-upload
field works; don't remove it even though there's no `mailto:`
fallback anymore.

## Adding real photos

Drop images into `assets/images/gallery/` using descriptive
filenames (e.g. `kitchen-before.jpg` / `kitchen-after.jpg`), then
swap them in per the comments in `photos.html`. Same pattern for a
real hero photo (`assets/images/hero-bg.jpg`) or a social preview
image (`assets/images/social-preview.jpg` — also uncomment the
matching `<meta property="og:image">` tag once it exists).

## Notes

- Zero dependencies beyond Google Fonts (CDN link in each `<head>`).
- Fully responsive down to small phone screens, with a mobile nav
  toggle.
- Keyboard-navigable with visible focus states; respects
  reduced-motion preferences; skip-to-content link on every page.
- Service icons on `index.html` / `services.html` are inline SVG —
  no image files, no extra requests, easy to recolor via `currentColor`.
