# AGENTS.md

This file provides guidance for AI coding agents working on this repository.

## Project Overview

This is a personal website for Josh Weston, built as a minimalist, single-page application using Next.js with static site generation (SSG).

## Tech Stack

- **Framework**: Next.js (App Router)
- **Deployment**: Static export (`output: 'export'`)
- **Styling**: CSS Modules or Tailwind CSS
- **Language**: TypeScript

## Design Philosophy

### Core Principles

1. **Minimalism First**: The design should embrace negative space. Less is more.
2. **Typography-Driven**: All visual interest comes from typography—no images or icons.
3. **Content-Focused**: Let the content breathe with generous whitespace.

### Typography Guidelines

- **Font Family**: Sans-serif, modern (e.g., Inter, Geist, or similar)
- **Font Weights**: Use varying weights for visual hierarchy:
  - Bold (700) for headings and emphasis
  - Medium (500) for subheadings
  - Regular (400) for body text
  - Light (300) sparingly for large display text
- **Size Scale**: Use larger, bold typography for impact
- **Line Height**: Generous line-height for readability (1.5-1.7 for body text)

### Color Palette

- **Background**: White or off-white
- **Primary Text**: Soft black (`#1a1a1a` to `#333333`)
- **Secondary Text**: Grey tones (`#666666` to `#999999`)
- **Accent Color**: Blues (e.g., `#0066cc`, `#3b82f6`)
- **Gradients**: Multi-colored gradients used sparingly for visual interest
- **Avoid**: Pure black (`#000000`), harsh contrasts

### Visual Elements

- **Allowed**: Borders, dividers, headers, horizontal rules, typographic treatments, background shapes to accent areas
- **Not Allowed**: Images

### Responsive Design

- **Breakpoint**: 640px (mobile)
- **Mobile-first approach**: Design for mobile, enhance for desktop
- **Touch-friendly**: Adequate tap targets on mobile

## Code Standards

### File Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Single page application entry
│   └── globals.css     # Global styles
├── components/
│   ├── sections/       # Page sections (Hero, About, Projects, Contact, etc.)
│   └── ui/             # Reusable UI components (Divider, Container, etc.)
└── lib/
    └── constants.ts    # Site content and configuration
```

### Component Guidelines

1. Use functional components with TypeScript
2. Keep components small and focused
3. Extract repeated patterns into reusable components
4. Use semantic HTML elements (`<section>`, `<article>`, `<header>`, etc.)

### Styling Rules

1. Use CSS custom properties for colors and spacing
2. Maintain consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px)
3. Use `rem` units for typography, `px` for borders/shadows
4. Implement parallax with `transform: translateZ()` or scroll-based animations

### Performance

1. Optimize for static export
2. Minimize JavaScript bundle size
3. Use system fonts or self-hosted fonts (no external font services if possible)
4. Lazy load below-the-fold content if needed

## Content Sections

The single page should include these sections (in order):

1. **Hero**: Name, title/tagline with large bold typography
2. **About**: Brief introduction
3. **Experience/Work**: Professional background
4. **Projects**: Notable work or side projects
5. **Contact**: How to get in touch

## Do's and Don'ts

### Do

- Use generous padding and margins
- Create visual hierarchy through typography alone
- Implement smooth scroll behavior
- Use subtle animations and transitions
- Keep the page lightweight and fast
- Test on mobile devices

### Don't

- Add images, icons, or decorative graphics
- Use more than 2-3 font weights per element type
- Overcrowd sections with content
- Use harsh color contrasts
- Add unnecessary JavaScript
- Ignore accessibility (contrast ratios, focus states, semantic HTML)

## Build Commands

```bash
# Development
npm run dev

# Build static export
npm run build

# Preview production build
npm run start
```

## Accessibility Requirements

- Maintain WCAG 2.1 AA contrast ratios
- Use proper heading hierarchy (h1 → h2 → h3)
- Ensure keyboard navigation works
- Add appropriate ARIA labels where needed
- Support reduced motion preferences for parallax effects
