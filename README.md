# LLOLA Landing Page

A production-quality landing page for LLOLA - Automated adversarial testing for AI support bots.

Built with Next.js 14, TypeScript, and Tailwind CSS with a clean, minimal design inspired by Linear and Vercel.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

The site will be exported as a static site in the `out/` directory, ready for deployment to any static hosting service.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components for each landing page section
- `public/` - Static assets (if needed)

## Features

- Fully responsive design (mobile, tablet, desktop)
- Clean, minimal aesthetic with subtle gradients and shadows
- Sticky navigation with mobile menu
- Smooth scrolling anchor links
- Interactive FAQ accordion
- Contact form (UI only - backend integration required)
- Static export ready for deployment

## Deployment

This site is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `out/` directory.
