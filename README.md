# Chorlton Locksmiths Website

A premium, high-converting locksmith website for Chorlton Locksmiths Limited built with **Next.js 14**, **TailwindCSS**, and **TypeScript**.

## 🎯 Project Overview

This is a **local service business website** optimized for:
- ✅ **Local SEO Domination** - Manchester locksmith keywords
- ✅ **Phone Call Conversions** - Multiple CTAs, click-to-call mobile button
- ✅ **Trust Building** - Google ratings, reviews, professional design
- ✅ **Performance** - Optimized for Lighthouse 95+, fast Core Web Vitals
- ✅ **Accessibility** - WCAG 2.1 AA compliance, semantic HTML

## 📋 Tech Stack

- **Frontend Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS 4.2
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Inter (body) + Geist (headings) via Google Fonts

## 📁 Project Structure

```
chorlton/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header, Footer
│   ├── page.tsx                 # Home page
│   ├── robots.ts                # SEO robots config
│   ├── sitemap.ts               # Dynamic XML sitemap
│   ├── not-found.tsx            # Custom 404 page
│   ├── services/                # Service pages
│   │   ├── page.tsx
│   │   ├── emergency-locksmith-manchester/
│   │   ├── residential-locksmith-manchester/
│   │   ├── commercial-locksmith-manchester/
│   │   ├── lock-repair-manchester/
│   │   ├── lock-replacement-manchester/
│   │   └── upvc-door-lock-specialist/
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── areas-we-cover/          # Service areas page
│   └── blog/                    # Blog listing
├── components/                   # Reusable React components
│   ├── layout/                  # Header, Footer, Container, Section
│   ├── hero/                    # Hero section
│   ├── services/                # Service cards and grid
│   ├── testimonials/            # Review cards
│   ├── forms/                   # Quote form
│   ├── cta/                     # Call-to-action buttons
│   ├── trust/                   # Trust badges
│   └── schema/                  # Schema markup (ready for expansion)
├── lib/                         # Utilities and constants
│   ├── cn.ts                   # TailwindCSS class merge utility
│   ├── theme.ts                # Business data, services, testimonials
│   └── schema.ts               # JSON-LD schema generation
├── styles/                      # Global CSS
│   └── globals.css             # Base styles, typography, utilities
├── public/                      # Static assets (images, icons)
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # TailwindCSS theme
├── next.config.js              # Next.js configuration
└── postcss.config.js           # PostCSS config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone or navigate to project
cd chorlton

# Install dependencies
npm install

# Create .env.local from .env.example (optional)
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Production Build

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary:** `#0F172A` (Dark Blue - `slate-950`)
- **Accent:** `#F59E0B` (Orange - `amber-400`)
- **Neutral:** Whites and light grays

### Typography
- **Headings:** Geist Sans
- **Body:** Inter
- **Base Size:** 1rem (16px)

### Components
All components are located in `/components` and follow these patterns:
- **Layout components:** Container, Section, SectionHeading
- **Feature components:** ServiceCard, TestimonialCard, CTAButton
- **Forms:** QuoteForm with validation

## 📱 Key Features

### Conversion Optimization
- ✅ Sticky mobile call button (click-to-call on mobile)
- ✅ Hero section with dual CTAs (Call Now + Get Quote)
- ✅ Quote request form on multiple pages
- ✅ Trust badges and social proof (4.6★ rating, 127 reviews)
- ✅ Multiple CTAs throughout pages

### SEO Implementation
- ✅ LocalBusiness schema with geo coordinates
- ✅ Service schemas for each service page
- ✅ Review/AggregateRating schema
- ✅ FAQ schemas with structured data
- ✅ Breadcrumb schemas
- ✅ Meta tags on all pages (title, description, OG)
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H1 > H2 > H3)
- ✅ Dynamic XML sitemap
- ✅ Robots.txt configuration

### Performance
- ✅ Server Components by default (minimal JavaScript)
- ✅ Image optimization configured
- ✅ CSS tree-shaking via TailwindCSS
- ✅ Font optimization via next/font
- ✅ Caching headers configured
- ✅ Code splitting for dynamic components

### Accessibility
- ✅ Semantic HTML (header, nav, main, section, footer)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators visible
- ✅ Form labels properly associated
- ✅ Color contrast ratios 4.5:1+
- ✅ Proper heading hierarchy

## 📊 Business Information

**Centralized in `/lib/theme.ts`:**
- Business name, phone, email, address
- Service list with icons
- Service areas
- Customer testimonials
- Trust points
- Business hours and stats

### Services
1. Emergency Locksmith (24/7)
2. Residential Locksmith
3. Commercial Locksmith
4. Lock Repair
5. Lock Replacement
6. uPVC Door Locks

### Service Areas
Chorlton, Didsbury, Whalley Range, Stretford, Sale, Fallowfield, Manchester City Centre, Moss Side, Old Trafford

## 🔧 Configuration

### Environment Variables
Create `.env.local` with:
```
NEXT_PUBLIC_SITE_URL=https://chorltonlocksmiths.co.uk
NEXT_PUBLIC_BUSINESS_PHONE=+44 7388 789881
NEXT_PUBLIC_BUSINESS_EMAIL=info@chorltonlocksmiths.co.uk
```

### Business Data
Edit `/lib/theme.ts` to update:
- Business contact information
- Services offered
- Service areas
- Testimonials
- Trust points

### Schema Markup
Schema markup is auto-generated based on theme.ts data in:
- `/lib/schema.ts` - Schema generators
- `/app/layout.tsx` - LocalBusiness schema
- Individual service pages - Service schemas
- `/components/layout/Footer.tsx` - Organization schema

## 📝 Pages

### Core Pages
- **Home (`/`)** - Hero, services, testimonials, FAQ, CTA
- **Services (`/services`)** - Service overview
- **Service Details** - Individual service pages with full descriptions
- **About (`/about`)** - Business story, team, values
- **Contact (`/contact`)** - Contact form, hours, location
- **Areas We Cover (`/areas-we-cover`)** - Service areas listing
- **Blog (`/blog`)** - Blog post listing (template structure)

### SEO Pages
- **Robots** (`/robots.ts`) - Search engine directives
- **Sitemap** (`/sitemap.ts`) - XML sitemap for SEO
- **404** (`/not-found.tsx`) - Custom error page

## 🔗 Important URLs

- **Phone (Click-to-call):** `tel:+447388789881`
- **Email:** `info@chorltonlocksmiths.co.uk`
- **Address:** 615b Wilbraham Rd, Chorlton-cum-Hardy, Manchester M21 9AN
- **Geo Coordinates:** 52.4214, -2.2482 (for schema markup)

## 📈 Performance Targets

- **Lighthouse Score:** 95+
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Connect to Vercel
# 1. Go to vercel.com
# 2. Import GitHub repository
# 3. Set environment variables
# 4. Deploy
```

### Other Hosting
The project builds to `/next/out` and can be deployed to any Node.js hosting:
- AWS Amplify
- DigitalOcean
- Heroku
- Railway
- Self-hosted

## 🔐 Security

- ✅ No sensitive data in source code
- ✅ Environment variables for config
- ✅ Security headers configured in next.config.js
- ✅ XSS protection enabled
- ✅ Form validation with Zod

## 📚 Form Implementation

The QuoteForm component (`/components/forms/QuoteForm.tsx`):
- Collects: Name, Phone, Service Type, Details
- Validates user input
- Currently shows success message
- **Ready for backend integration** - Connect to email service or CRM

## 🎯 Next Steps

1. [ ] Verify build completes (run `npm run build`)
2. [ ] Start dev server and test (run `npm run dev`)
3. [ ] Add real business images
4. [ ] Connect form submissions to backend/email service
5. [ ] Set up Google Analytics
6. [ ] Configure custom domain
7. [ ] Deploy to Vercel
8. [ ] Set up Google Search Console
9. [ ] Submit sitemap to Google
10. [ ] Monitor Core Web Vitals

## 📖 Contributing

When making changes:
- Keep components focused and reusable
- Update `/lib/theme.ts` for business data changes
- Maintain TypeScript strict mode
- Test pages in mobile and desktop viewports
- Run `npm run type-check` before commits

## 📄 License

ISC

## 👨‍💻 Support

For questions or issues:
- Check the plan file: `/claude/plans/clever-sparking-pizza.md`
- Review memory file: `/claude/projects/.../memory/MEMORY.md`
- Inspect component source code with inline comments
