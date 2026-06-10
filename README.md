# Nathaniel Kinzelberg — Portfolio

Personal portfolio website. Single-page, plain HTML/CSS/JS — no build tools or frameworks.

## Structure

```
portfolio/
  index.html   ← all sections, single page
  styles.css   ← dark techy theme, CSS custom properties
  script.js    ← typing animation, scroll effects, mobile nav
  assets/      ← resume PDF lives here
```

## Sections

- **Hero** — name, typing animation (6 roles), stats strip, floating code fragments
- **About** — bio, skill tags, mini terminal card
- **School Projects** — OS HW1 (Sync Primitives), OS HW2 (User-Level Threads)
- **Personal Projects** — MIPS Simulator, Portfolio; "All Projects" dropdown below
- **Resume** — PDF download + contact details
- **Certifications** — SEC0 (TryHackMe), HackTheBox Web Pentest (in progress)
- **Contact** — email, phone numbers, GitHub, LinkedIn

## Running locally

Just open `index.html` in a browser — no server needed.

## Deploying

Drop the folder onto any static host:
- **GitHub Pages** — push to a repo, enable Pages on the `main` branch
- **Netlify** — drag and drop the folder at netlify.com
- **Vercel** — `vercel` CLI in this directory

## To-do

- [ ] Add more projects as they're completed
- [ ] Add more certifications as earned
