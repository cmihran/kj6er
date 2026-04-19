# KJ6ER

Small static site for Greg Mihran (KJ6ER) — home of the POTA PERformer,
Challenger, and Dominator antenna plans, plus an "Antenna Geeks" mailing
list.

Retro / editorial-paper theme. Deployed to GitHub Pages via
`.github/workflows/deploy.yml` on every push to `main`.

## Files

- `index.html` – the page
- `styles.css` – theme
- `plans.js` – **the antenna plan data** (edit here to add plans)
- `script.js` – renders plans, handles search + the signup form
- `assets/` – drop images here (e.g. `hero.jpg`)

## How to add / edit antenna plans

Open `plans.js` in any text editor. It's just a list of entries. To add a
new plan, copy one and change the four fields:

```js
{
  name: "40m Off-Center-Fed Dipole",
  specs: "40 / 20 / 10m · ~66 ft · 4:1 balun",
  category: "HF Wire Antennas",
  href: "https://bit.ly/REPLACE-ME-01",
},
```

- `name` – title shown on the card
- `specs` – one-line description (bands, length, notes)
- `category` – must match one of the category names at the top of
  `plans.js` (or add a new one to `CATEGORY_ORDER`)
- `href` – bit.ly (or other) link to the PDF

## How to edit the rest

- **Bio**: edit the `<section ... id="about">` block in `index.html`.
- **Contact email**: search for `gmihran@me.com` in `index.html` and
  replace if it changes.
- **QRZ link**: already set to `https://www.qrz.com/db/KJ6ER`.
- **Donation link**: search for `data-donate-link` in `index.html` and
  replace the `href="#"` with your PayPal.me / Buy Me a Coffee / Ko-fi
  / Venmo URL.

### Add a hero image

1. Save a JPG/PNG to `assets/` (e.g. `assets/hero.jpg`), landscape,
   ~1600×900, under ~400 KB.
2. In `index.html` find the commented-out `<!-- <img class="hero__image"
   ... -->` line and remove the `<!--` / `-->`.

### Wire up the Antenna Geeks mailing list

The form is currently a placeholder. To make it live:

1. Sign up for a form provider – [Formspree](https://formspree.io),
   [Buttondown](https://buttondown.email), or similar. They give you a
   URL.
2. In `index.html`, find `<form class="signup" action="#" ...>` and:
   - Replace `action="#"` with the provider's endpoint URL.
   - Remove `data-placeholder="true"`.
3. Commit and push.

## Local preview

```
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy

Push to `main`. The GitHub Action publishes to Pages.

Live at **https://cmihran.github.io/kj6er/**.

73 de KJ6ER.
