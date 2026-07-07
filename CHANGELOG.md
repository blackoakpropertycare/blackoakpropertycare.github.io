# Changelog

All notable changes to the Black Oak Property Care website are logged here,
newest first. This is a running history — when you (or a future Claude
session) come back to tweak the site, read this before editing so you know
*why* things are the way they are, not just *what* they are.

---

## V2 — Full Redesign (this release)

**Why:** V1 was a bold high-contrast "commercial contractor" look (bright
orange accent, near-black header only). The brief called for a different
brand direction — near-black/charcoal throughout, gold used strictly as a
thin accent, real logo integration, and a homepage built specifically
around generating estimate requests rather than a generic link-out grid.

### Brand & Visual System
- Replaced the "BO" text badge with the real acorn logo, supplied as
  `AcornPNG.png` and recolored/cropped into two working assets:
  `assets/images/logo-acorn-white.png` (nav + footer, dark backgrounds)
  and `logo-acorn-gold.png` (available for accent use). The acorn is the
  home link in the header on every page, as specified.
- Rebuilt the favicon and apple-touch-icon from the acorn mark on a dark
  charcoal tile in gold, replacing the missing `favicon.ico` reference.
- Full color-token rewrite in `style.css`: dark charcoal ground (`--bg`),
  white text, and a single gold accent (`--gold`) used only for hairlines,
  underlines, icon strokes, and hover states — never as a button fill,
  per the brand rule. Buttons are dark with a gold border and white text.
- Swapped the display typeface from Barlow Condensed to **Zilla Slab** —
  a sturdy slab serif that reads as "built/trade," not "boutique," to
  keep the premium feel from tipping into luxury-designer territory.
  Body copy stays on Inter.
- Replaced numbered `01 / 02 / 03` service markers on the homepage with
  custom inline SVG icons per service — numbers implied a sequence that
  wasn't real; icons don't have that problem and add zero extra
  page-weight (no image requests).

### Structure
- **Homepage** rebuilt to the brief's spec: Hero → Primary Services →
  Why Choose Black Oak → Featured Before/After → Testimonials → Service
  Area → Request Estimate CTA → Footer. The old "Where to Next" 5-card
  link grid is gone entirely.
- **Services reordered and reset to four**: Remodeling, Junk Removal,
  Rental Turnovers, Property Care (in that priority order), replacing
  V1's Remodeling / Property Care / Fence & Deck / Junk Removal list.
  *Assumption made here:* Fence & Deck Building was dropped and Rental
  Turnovers added, since that's the exact 4-service list the brief
  specified. If Fence & Deck is still an active service, it's easy to
  add back as a fifth `.service-card` / `.service-detail` block —
  everything is componentized for that.
- **New "Why Choose Black Oak" trust section** on the homepage (Locally
  Owned, Fully Insured, Quality Craftsmanship, Reliable Communication,
  Free Estimates, Professional Service) — no numeric claims invented.
- **Gallery (`photos.html`) redesigned around explicit Before/After
  pairs** instead of single project photos — each card now has two
  labeled placeholder tiles side by side. Swapping in real photos is a
  one-line change per tile (see the comment block at the top of the
  gallery section in `photos.html`).
- **Contact form expanded** to Name, Phone, Email, Address, Service
  Needed (dropdown), Message, and Photo Upload, and switched from a
  `mailto:` action to a Formspree-ready `<form>` (`enctype
  ="multipart/form-data"` to support the file input). The endpoint line
  is clearly marked: `<!-- Replace this URL with your Formspree
  endpoint -->` in `contact.html`.
- **Service area** now has its own homepage section with a simple route
  diagram (Boise → Twin Falls → Pocatello) and a tag list of the named
  towns, rather than being mentioned only in the footer.
- Header nav simplified to match the brief's exact label set (Services,
  Gallery, About, Community, Contact) plus a standalone "Free Estimate"
  button; added a mobile hamburger menu (there wasn't one before — V1's
  nav just wrapped awkwardly on small screens).

### Behavior (`script.js`)
- Header now gains a solid background + gold hairline once the page is
  scrolled (was fully static before).
- Added the mobile nav open/close toggle.
- Added a lightweight scroll-reveal (`IntersectionObserver`) for section
  entrances — respects `prefers-reduced-motion` and degrades to "fully
  visible, no animation" if JS fails to load, so nothing depends on it.
- Kept the original footer-year auto-fill.

### Housekeeping
- Every page still shares one `style.css` and one `script.js` — no
  build step, no frameworks, still plain drag-and-drop-to-GitHub-Pages
  static files.
- `<!-- EDIT -->` comments preserved and extended throughout so future
  content swaps (phone number, testimonials, stats, photos) stay a
  find-and-edit exercise, not a redesign.

---

## V1 — Initial Build

Original site: bold high-contrast look with a rust/orange accent, a
"BO" text badge in place of a real logo, five-page structure (Home,
Services, About, Photos, Community, Contact), `mailto:` contact form.
See git history / prior file versions for details if needed.
