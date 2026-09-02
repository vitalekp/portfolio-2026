# Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

All personal content (name, bio, experience, skills, projects, contact links) lives in
[`src/data/profile.ts`](src/data/profile.ts) — edit that file to update the site,
no need to touch the components in `src/components/`.

## Contact form

The contact form submits to [Formspree](https://formspree.io) with no backend required.
Create a free form at formspree.io and replace `FORMSPREE_ENDPOINT` in
[`src/components/Contact.tsx`](src/components/Contact.tsx) with your own form URL.

## Deploy

Deploy for free on [Vercel](https://vercel.com/new) by importing this repository.
