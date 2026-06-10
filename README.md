# B's Trash Bin Cleaning

Marketing website for **B's Trash Bin Cleaning** — a woman-owned trash bin
cleaning and pressure washing business serving Ohio.

Future production domain: **https://bstrashbincleaning.com** (DNS not yet
pointed at the time of scaffold).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-based config in `app/globals.css`)
- [shadcn/ui](https://ui.shadcn.com) components (Button, Card, Input, Textarea, Label)
- [lucide-react](https://lucide.dev) icons
- [Resend](https://resend.com) for the contact form (gracefully no-ops without a key)

## Pages

| Route           | Purpose                                                        |
| --------------- | -------------------------------------------------------------- |
| `/`             | Home — hero, services overview, why-us, social proof, CTA      |
| `/services`     | Trash bin cleaning + pressure washing detail, pricing CTA      |
| `/about`        | Owner story (placeholder), credentials, service-area blurb     |
| `/service-area` | Ohio cities served (placeholder list)                          |
| `/contact`      | Quote-request form → `/api/contact` → Resend                   |

## Local development

```bash
npm install
cp .env.example .env.local   # optional — see Environment variables below
npm run dev                  # http://localhost:3000
```

Build (what CI / Render runs):

```bash
npm run build
```

## Environment variables

All optional locally — the contact form logs the request to the console instead
of sending when `RESEND_API_KEY` is missing.

| Variable            | Required | Description                                                     |
| ------------------- | -------- | --------------------------------------------------------------- |
| `RESEND_API_KEY`    | Prod     | Resend API key. Without it, emails are logged, not sent.        |
| `CONTACT_FORM_TO`   | Prod     | Inbox that quote requests are delivered to.                     |
| `CONTACT_FORM_FROM` | Optional | Verified Resend sender. Defaults to `onboarding@resend.dev`.    |

## Deploying to Render

A [`render.yaml`](./render.yaml) blueprint is included for one-click setup.

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. In Render: **New → Blueprint**, connect the repo, and Render reads
   `render.yaml`. Or **New → Web Service** and set:
   - **Build command:** `npm ci && npm run build`
   - **Start command:** `npm run start`
   - **Node version:** 22
3. Add the environment variables (`RESEND_API_KEY`, `CONTACT_FORM_TO`, and
   optionally `CONTACT_FORM_FROM`) in the Render dashboard.
4. Once live, point `bstrashbincleaning.com` at Render via a custom domain and
   update DNS.

## Placeholders to replace before launch

Search the codebase for `TODO` to find every spot. Key items:

- **Logo** — drop the real file at `public/logo.jpg` and swap the text wordmark
  in `components/site-header.tsx`.
- **Phone & email** — update `lib/site.ts` (currently `(555) 555-5555` /
  `hello@bstrashbincleaning.com`).
- **Owner story** — `app/about/page.tsx` has placeholder copy.
- **Service area** — `app/service-area/page.tsx` lists placeholder Ohio cities.
- **"Why us" claims** — `app/page.tsx` (eco-friendly, hot water, etc.).
- **Testimonials** — `app/page.tsx` social-proof section.
- **Credentials** — `app/about/page.tsx` (insured/licensed specifics).
