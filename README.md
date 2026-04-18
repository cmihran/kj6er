# KJ6ER

Small static site for Greg Mihran (KJ6ER) — home of the POTA PERformer,
Challenger, and Dominator antenna plans, plus an "Antenna Geeks" mailing
list.

Two styles are shipped side-by-side — a retro QSL-card theme and a clean,
modern theme. Visitors can toggle between them with the button in the
top-right (retro) or top-nav (modern).

Deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to
`main`.

## Files

- `index.html` – retro QSL-card page (default landing)
- `modern.html` – clean / professional page
- `styles.css` – retro theme
- `modern.css` – clean theme
- `plans.js` – **the antenna plan data** (both pages read from here)
- `script.js` – tiny bit of JS for rendering plans, search, signup form, etc.
- `assets/` – drop images here (e.g. `hero.jpg`)

## How to add / edit antenna plans (single source of truth)

Open `plans.js` in any text editor. The file is just a list of entries.
To add a new plan, copy one entry and change these four fields:

```js
{
  name: "40m Off-Center-Fed Dipole",
  specs: "40 / 20 / 10m · ~66 ft · 4:1 balun",
  category: "HF Wire Antennas",
  href: "https://bit.ly/REPLACE-ME-01",
},
```

- `name` – title that appears on the card
- `specs` – one-line description (bands, length, notes)
- `category` – must match one of the category names at the top of `plans.js`
  (or add a new one to `CATEGORY_ORDER`)
- `href` – your bit.ly link to the PDF

Both pages pick up the change automatically. Plans are grouped by category
and visitors can search/filter them live.

## How to edit the rest

- **Bio**: edit the `<section ... id="about">` block in `index.html`
  *and* `modern.html` (they're intentionally separate so the copy can differ).
- **Contact email**: search for `gmihran@me.com` and replace in both files if it changes.
- **QRZ link**: already set to `https://www.qrz.com/db/KJ6ER` in both files.

### Add a hero image

1. Save a JPG/PNG to `assets/` (e.g. `assets/hero.jpg`), landscape, ~1600×900,
   under ~400 KB.
2. In `index.html` and/or `modern.html`, find the commented-out
   `<!-- <img class="hero__image" ... -->` line and remove the `<!--` / `-->`.

### Wire up the Antenna Geeks mailing list

The form is currently a placeholder. To make it live:

1. Sign up for a form provider – [Formspree](https://formspree.io),
   [Buttondown](https://buttondown.email), or similar. They give you a URL.
2. In **both** `index.html` and `modern.html`, find `<form class="signup"
   action="#" ...>` and:
   - Replace `action="#"` with the provider's endpoint URL.
   - Remove `data-placeholder="true"`.
3. Commit and push.

## Local preview

```
python3 -m http.server 8000
```

Then visit <http://localhost:8000> (retro) or
<http://localhost:8000/modern.html> (clean).

## Deploy

Push to `main`. The GitHub Action publishes to Pages.

Live at **https://cmihran.github.io/kj6er/**.

73 de KJ6ER.
