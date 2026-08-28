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
- Python 3 for contact-form email delivery

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Environment Variables

The contact form delivers directly to the public MX server for
`info@alwayscompliant.in`; it does not use an SMTP username or password. The
defaults work without an environment file. `.env.example` documents optional
recipient, sender, MX host, port and HELO overrides.

The contact API invokes `scripts/send_contact_email.py` with `python` on Windows
or `python3` on Linux. Set `PYTHON_EXECUTABLE` when the production interpreter
uses a different command or absolute path.

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
- Ensure the production host permits outbound SMTP connections on port 25.
- Ensure the production Node.js host also has Python 3 available to the Next.js server process.
