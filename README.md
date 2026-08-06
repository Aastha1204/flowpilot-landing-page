#  — Landing Page (Interview Assignment)

A landing page for a fictional coffee-subscription brand called **BrewBox**.
Built with plain **HTML, CSS, and JavaScript** — no framework, no build step —
so every line is easy to read and explain in an interview.

## Files

| File | What it does |
|---|---|
| `index.html` | Page structure — navbar, hero, features, pricing, testimonials, contact form, footer |
| `style.css` | All styling. Uses CSS variables (`:root`) so dark mode is just swapping variable values |
| `script.js` | All behavior — animations, theme toggle, mobile menu, contact form |

## How to run it locally

No installation needed — it's plain HTML/CSS/JS.

1. Open the `BrewBox-Landing-Page` folder.
2. Double-click `index.html` to open it in your browser.

Or, for a proper local server (recommended, avoids some browser quirks):

```bash
npx serve .
```

## The 2 required external libraries/services

1. **AOS – Animate On Scroll** (`https://unpkg.com/aos@2.3.1`)
   Adds the fade/zoom-in animations you see as you scroll. Loaded via CDN in
   `index.html`, initialized with `AOS.init()` in `script.js`. Elements get
   animated by adding a `data-aos="fade-up"` attribute — no extra code needed
   per element.

2. **EmailJS** (`@emailjs/browser`)
   Sends the contact form as a real email without a backend server. Loaded
   via CDN, wired up in `script.js`. To make it actually send emails:
   - Create a free account at [emailjs.com](https://www.emailjs.com)
   - Create an Email Service + Email Template
   - Copy your Public Key, Service ID, and Template ID into the 3
     placeholders at the top of the "EmailJS contact form" section in
     `script.js`
   - Until you do this, the form shows a "demo mode" message instead of
     erroring out — so the page still works for demoing.

**Bonus interactive element:** the dark/light theme toggle (🌙/☀️ button in
the navbar) — pure CSS variables + `localStorage`, no library required. Good
example to mention for the "interactive elements" requirement.

## How to explain this in your interview

- **UI/UX**: single-page layout, mobile-first responsive grid, consistent
  spacing/typography via CSS variables.
- **Animations/interactivity**: AOS scroll reveals + theme toggle + mobile
  hamburger menu.
- **External integrations**: AOS (animation library) + EmailJS (email
  service) — 2 different categories (library vs. service), which is a good
  talking point.
- **Code structure**: 3 separate files by responsibility (structure / style /
  behavior), CSS variables for theming instead of hardcoded colors, comments
  in `script.js` explaining each block.
- **AI-assisted development**: you can honestly say you used Claude Code to
  scaffold the page fast, then you reviewed and understood every section —
  walk through `script.js` line by line as proof you understand it.

## Deploying (pick one — all free)

**Vercel (recommended, easiest):**
```bash
npm i -g vercel
vercel
```
Follow the prompts — it deploys a static site with zero config.

**Netlify:**
Drag and drop the whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

**GitHub Pages:**
```bash
git init
git add .
git commit -m "BrewBox landing page"
git branch -M main
git remote add origin <your-new-github-repo-url>
git push -u origin main
```
Then in the repo: Settings → Pages → Deploy from branch `main` / root.

## Deliverables checklist for the assignment

- [ ] Push this folder to a **new** GitHub repo (keep it separate from any
      other project)
- [ ] Deploy it (Vercel/Netlify/GitHub Pages) and copy the live URL
- [ ] Re-read `script.js` top to bottom once more before the interview so
      you can explain every function without looking
