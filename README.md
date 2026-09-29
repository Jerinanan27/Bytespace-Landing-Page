# ByteSpace

**Live site:** https://bytespace-landing-page-liart.vercel.app

Landing page for ByteSpace, an online course marketplace, built from the Figma design. Includes the full landing page plus Login and Register pages.

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx          Root layout and metadata
    page.tsx            Landing page
    login/page.tsx      Login page
    register/page.tsx   Register page
    globals.css         Fonts, base styles, grid background
  components/           Reusable UI components
  data/
    content.ts          Courses, categories, testimonials, nav and footer copy
public/
  images/               Photos, avatars and the 3D shapes
```

## Components

Each section of the page is its own component, so it can be edited or reused on its own:

- `Navbar` top navigation, collapses to a menu on mobile
- `Hero` headline, search, photo and the three floating stat cards
- `PartnerLogos` partner row on the light band
- `CoursesSection` intro copy, category filter pills and the course grid
- `CourseCard` one course, reused in the grid and in the growth section
- `CategoriesSection` the six category tiles
- `FeatureSections` the two alternating feature blocks
- `CTABand` creator call to action
- `Testimonials` community quotes
- `Footer` newsletter and link columns
- `AuthLayout` and `Field` shared building blocks for Login and Register

Shared pieces: `Logo` is the exact vector logo from Figma, `FloatingCards` holds the stat cards that float over the photos, `AvatarStack` draws the overlapping avatar rows, and `Ornaments` places the 3D shapes.

## Design tokens

Colours, fonts, radii and shadows come from the Figma style guide and live in `tailwind.config.ts`: Persian Blue `#003BE2`, Electric Lime `#D4FB20` / `#CBFC01`, and a neutral grey scale from `#F5F5F6` to `#242528`. Headings use Poppins (self-hosted through `@fontsource/poppins`) and body text uses Satoshi (self-hosted from `public/fonts`), so nothing depends on a font CDN.

## Layout

On desktop each section reproduces the 1440px Figma frame: elements sit at their design coordinates, measured from the page centre so the layout stays centred on wider screens. The decorative 3D shapes are anchored to the edge they bleed off. Below `lg` the sections switch to stacked layouts, and the photo compositions in the feature blocks scale down to fit.

## Assets

All images in `public/images/` are exported from the Figma file:

- `hero-person.png`, `growth-person.png` photos with transparent backgrounds
- `creator.png` the creator photo, exported from Figma with its drop shadow included
- `course-1.jpg` to `course-6.jpg` course thumbnails (the info chips are real HTML)
- `avatar-*.png`, `learner-*.png`, `testi-*.png` portraits
- `partner-*.png`, `cat-*.png`, `icon-*.png` logos and icons
- `hero-*.png`, `cta-*.png`, `lime-ring.png`, `growth-spring.png`, `creator-spring.png` the 3D shapes
- `bg-features.png`, `bg-testimonials.png` soft gradient backgrounds
