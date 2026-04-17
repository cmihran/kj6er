# KJ6ER

Small static site for KJ6ER's ham radio project: intro, email signup, and free
antenna plans (PDFs hosted on bit.ly).

Deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to
`main`.

## Files

- `index.html` – the whole page. All content lives here.
- `styles.css` – retro QSL-card theme. Mobile-first.
- `script.js` – tiny bit of JS for the signup form and the footer year.
- `assets/` – drop images here (e.g., `hero.jpg`).

## How to edit (no coding required)

Open `index.html` in any text editor (even TextEdit or Notepad). Look for
comments like `<!-- ... -->` that explain what to change.

### Add a new antenna plan

Find the `<ul class="plans">` section and copy one `<li class="plan">` block.
Update three things:

1. `href="https://bit.ly/..."` – your bit.ly link to the PDF.
2. The plan name (inside `<span class="plan__name">`).
3. The specs line (inside `<span class="plan__specs">`).

### Change the bio

Edit the paragraphs under `<section class="panel" id="about">`.

### Add a hero image

1. Save a JPG/PNG in `assets/` (e.g. `assets/hero.jpg`), landscape orientation,
   ideally 1200×600 and under ~300KB.
2. In `index.html` find the line that starts with `<!-- <img class="hero__image"`
   and remove the `<!--` at the start and `-->` at the end.

### Wire up the email list

The form is currently a placeholder. To make it live:

1. Sign up for a form provider – [Formspree](https://formspree.io),
   [Buttondown](https://buttondown.email), or similar. They give you a URL.
2. In `index.html`, find `<form class="signup" action="#" ...>` and:
   - Replace `action="#"` with the provider's URL.
   - Remove `data-placeholder="true"`.
3. Commit and push. That's it.

## Local preview

Just open `index.html` in a browser, or from this folder:

```
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy

Push to `main`. The GitHub Action builds and publishes to Pages. First time
only: go to **Settings → Pages** and set **Source** to **GitHub Actions**.

73 de KJ6ER.
