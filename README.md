# Anzalna Kainat — Portfolio

A personal developer portfolio built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, and Framer Motion. The visual identity is built around the idea
of browsing an editor: a tabbed navbar, file-path style section labels, and a
hero styled like a code window with a live Karachi clock in its status bar.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The contact form sends email through [Resend](https://resend.com). Copy the
example env file and add your API key to enable delivery:

```bash
cp .env.example .env.local
```

```
RESEND_API_KEY=your_key_here
```

Without a key, the form still validates and responds successfully, but skips
sending the email (a warning is logged to the server console) — handy for
local development.

## Project structure

```
app/                   Routes (App Router)
  page.tsx              Home
  about/page.tsx         About
  projects/page.tsx      Projects index
  projects/[slug]/       Dynamic project detail pages
  contact/page.tsx       Contact
  api/contact/route.ts   Contact form submission handler
  sitemap.ts, robots.ts  SEO
  opengraph-image.tsx    Dynamic OG image
  icon.tsx               Favicon
components/            Reusable UI (navbar, hero, footer, cards, ui/*)
lib/data/               Content: projects.ts, experience.ts, skills.ts
lib/site-config.ts       Site-wide constants (name, email, socials)
hooks/                  useClock, useTypewriter
types/                  Shared TypeScript types
```

## Editing content

All copy lives in `lib/data/` and `lib/site-config.ts` — update project
details, experience, skills, email, and social links there rather than
digging through components.

## Tech stack

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · next-themes ·
react-hook-form + zod · Resend · lucide-react
