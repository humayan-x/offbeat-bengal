# Offbeat Bengal 🌲🏔️

> **Ditch Mall Road. Discover Pure Pahari Silence.**

A curated, fully static travel guide to 24 serene forest hamlets and mountain ridges across Darjeeling and Kalimpong, West Bengal. It combines practical altitude, access, season, and mobile-connectivity notes for travellers seeking quieter alternatives to crowded tourist hotspots.

---

## ✨ Features

- **24 Curated Escapes**: In-depth guides across Darjeeling and Kalimpong, including Sittong, Chatakpur, Lepchajagat, Rishyap, Kolakham, Lolegaon, and Charkhole.
- **Connectivity Notes**: Airtel and Jio coverage indicators for each destination.
- **Practical Travel Details**: Elevation, best season, nearest transit hub, road distance, food and shopping notes, maps, and FAQs.
- **Interactive Directory & Search**: Client-side filtering and sorting by district and altitude, with keyboard shortcut search (`Cmd + K` / `Ctrl + K`).
- **Best Season Matrix**: Clear seasonal viability and weather indicators across autumn, spring, winter, and monsoon.
- **SEO Ready**: Schema.org `TouristAttraction` JSON-LD, canonical URLs, Open Graph metadata, a build-generated sitemap, and static `robots.txt`.
- **Short, Stable URLs**: Individual guides use `/{district}/{place}` (for example, `/kalimpong/lava`); `/places` remains the directory.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (static site generation)
- **UI Islands**: [SolidJS](https://www.solidjs.com/) (`@astrojs/solid-js`) for interactive client-side components
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Tabler Icons](https://tabler.io/icons) (`@tabler/icons-astro` & `@tabler/icons-solidjs`)
- **Type Safety**: TypeScript with Astro strict type configurations
- **Hosting / Deployment**: Cloudflare Pages via Wrangler
- **Sitemap**: [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) generates XML files during `pnpm build`

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── home/               # Landing page sections
│   │   ├── FAQSection.astro
│   │   ├── HomeHero.astro
│   │   ├── SeasonMatrix.astro
│   │   └── WhyOffbeat.astro
│   ├── layout/             # Shell and document layout components
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── SEOHead.astro
│   ├── places/             # Place details and directory listing components
│   │   ├── NetworkCoverage.astro
│   │   ├── PlaceCard.astro
│   │   ├── PlaceHero.astro
│   │   ├── PlacesDirectory.tsx
│   │   └── QuickStats.astro
│   └── search/             # Client search modal
│       └── SearchModal.tsx
├── data/                   # Structured JSON place records
│   ├── darjeeling.json
│   └── kalimpong.json
├── layouts/                # Base HTML page shell
│   └── BaseLayout.astro
├── pages/                  # File-based routing
│   ├── [district]/
│   │   └── [slug].astro    # Individual place guides: /{district}/{place}
│   ├── index.astro
│   └── places/
│       ├── darjeeling.astro
│       ├── index.astro
│       └── kalimpong.astro
├── styles/                 # Global styles and Tailwind configuration
│   └── global.css
└── types/                  # TypeScript data interfaces
    └── place.ts
public/
├── _redirects               # Cloudflare Pages permanent URL redirects
└── robots.txt               # Static crawler directives and sitemap location
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `^22.12.0`
- Package manager: `pnpm` (recommended) or `npm` / `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/humayan-x/offbeat-bengal.git
cd offbeat-bengal

# Install dependencies
pnpm install
```

### Development Server

Start the local development server in the background:

```bash
astro dev --background
```

The site will be available at `http://localhost:4321`.

Manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.

### Production Build

Build the static site to the `./dist/` directory:

```bash
pnpm build
```

The build produces static HTML, `robots.txt`, `sitemap-index.xml`, and `sitemap-0.xml`. It does not require a server runtime.

Preview the production build locally:

```bash
pnpm preview
```

### Deployment

Deploy to Cloudflare Pages:

```bash
pnpm deploy
```
