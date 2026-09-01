# Always Compliant

Always Compliant is a compliance support platform focused on GST, ROC, income tax, trademark, company registration and ongoing business compliance across India.

## Overview

This repository contains the production website for Always Compliant. It provides service information, compliance resources and contact paths for businesses seeking registration, filing and ongoing compliance support.

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- ESLint
- `html-react-parser` for the preserved Sastik home-page template

## Project Structure

```text
app/                  Next.js routes, layout and styles
components/           Shared React and site components
data/                 Site content and page data
public/               Production styles, scripts, fonts and images
sastik-html-package/  Preserved source template used by the home route
```

## Local Development

Requirements:

- Node.js compatible with Next.js 16
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Environment Variables

The contact form sends mail through [Resend](https://resend.com). Copy
`.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — required. Create one in the Resend dashboard under
  API Keys. Before it can send from `@alwayscompliant.in`, the domain must
  be verified in Resend (Dashboard > Domains > Add Domain, then add the DNS
  records Resend provides — this is a one-time step done by whoever manages
  the domain's DNS).
- `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` — recipient and sender addresses.

Without `RESEND_API_KEY` set, or without the sending domain verified in
Resend, the contact form will fail to send.

## Available Scripts

- `npm run dev` starts the Next.js development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` checks the project with ESLint.
- `npm run typecheck` checks TypeScript without emitting files.

## Production Build

Run the validation and build commands before deployment:

```bash
npm run lint
npm run typecheck
npm run build
```

To test the resulting production build locally:

```bash
npm run start
```

## Deployment Notes

- Deploy from the repository root with the standard Next.js build command, `npm run build`.
- Keep `sastik-html-package/Sastik/home-3.html` in the deployment source because the home route reads this preserved template.
- Keep all files under `public/` available at the site root.
- Set `RESEND_API_KEY` in the production environment — the contact form cannot send mail without it.
- Verify the sending domain in Resend before going live; unverified domains are rate-limited and can only send to the Resend account's own email address.
