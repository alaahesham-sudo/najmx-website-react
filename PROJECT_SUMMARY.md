# NajmX Website - Project Summary

## Overview
NajmX is a comprehensive Next.js website for a VoIP and FAX solutions company operating in Egypt, UK, and US. The website features a modern, star-themed design with a dark color scheme and gradient effects.

## Project Structure

### Technology Stack
- **Framework**: Next.js 16.0.7 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.7.3
- **Styling**: Tailwind CSS 4.0.3
- **Animations**: AOS (Animate On Scroll) 3.0.0-beta.6
- **UI Components**: Headless UI 2.2.0

### Main Pages

#### Public Pages (Default Layout)
1. **Home** (`app/(default)/page.tsx`)
   - Hero section with starfield background
   - Pricing component
   - Page illustration

2. **Products** (`app/(default)/products/`)
   - Main products page
   - Individual product pages:
     - NajmVoIP (`/products/najmvoip`)
     - NajmFAX (`/products/najmfax`)
     - NajmAgent (`/products/najmagent`)
     - NajmNetwork (`/products/najmnetwork`)

3. **Services** (`app/(default)/services/`)
   - Main services page
   - Individual service pages:
     - VoIP Solutions (`/services/voip-solutions`)
     - Call Center Services (`/services/call-center-services`)
     - Fax Services (`/services/fax-services`)
     - AI Agent (`/services/ai-agent`)
     - Network Consultancy (`/services/network-consultancy`)

4. **About** (`app/(default)/about/page.tsx`)
5. **Careers** (`app/(default)/careers/page.tsx`)
6. **Contact** (`app/(default)/contact/page.tsx`)
7. **Diversity** (`app/(default)/diversity/page.tsx`)
8. **Pricing** (`app/(default)/pricing/page.tsx`)
9. **Testimonials** (`app/(default)/testimonials/page.tsx`)

#### Authentication Pages (Auth Layout)
- Sign In (`app/(auth)/signin/page.tsx`)
- Sign Up (`app/(auth)/signup/page.tsx`)
- Reset Password (`app/(auth)/reset-password/page.tsx`)

### Key Components

#### UI Components (`components/ui/`)
- **Header** (`header.tsx`): 
  - Fixed navigation with dropdown menus
  - Products, Solutions, Why NajmX dropdowns
  - Status indicator ("All systems operational")
  - Request Demo CTA button
  - Enhanced z-index management for proper layering

- **Footer** (`footer.tsx`)
- **Logo** (`logo.tsx`)
- **StarIcon** (`star-icon.tsx`): Custom star icon with glow effects

#### Feature Components (`components/`)
- **Starfield** (`starfield.tsx`): Animated starfield background
- **PageIllustration** (`page-illustration.tsx`): Page decoration
- **Hero** (`hero-home.tsx`): Homepage hero section
- **Pricing** (`pricing.tsx`): Pricing display component
- **Workflows** (`workflows.tsx`): Workflow visualization
- **Features** (`features.tsx`): Features showcase
- **Testimonials** (`testimonials.tsx`): Customer testimonials
- **Testimonials-dis** (`testimonials-dis.tsx`): Alternative testimonials display
- **About** (`about.tsx`): About section component
- **CTA** (`cta.tsx`): Call-to-action component
- **CTA-org** (`cta-org.tsx`): Original CTA component
- **ModalVideo** (`modal-video.tsx`): Video modal component
- **BackToTop** (`back-to-top.tsx`): Scroll to top button
- **LinkedInButton** (`linkedin-button.tsx`): LinkedIn integration
- **WhatsAppButton** (`whatsapp-button.tsx`): WhatsApp integration

### Utilities (`utils/`)
- **useMasonry** (`useMasonry.tsx`): Masonry layout hook
- **useMousePosition** (`useMousePosition.tsx`): Mouse position tracking hook

## Design Features

### Color Scheme
- Primary: Indigo/Purple gradients
- Background: Dark gray/black (gray-950, gray-900)
- Text: Gray-300, Gray-200, White
- Accents: Indigo-500, Purple-500

### Visual Elements
- Star-themed design throughout
- Gradient backgrounds and borders
- Animated starfield background
- Smooth transitions and hover effects
- Glassmorphism effects (backdrop blur)
- Glowing star icons

### Navigation Structure
```
Products
  ├── NajmVoIP
  ├── NajmFAX
  ├── NajmAgent
  └── NajmNetwork

Solutions
  ├── VoIP Solutions
  ├── Contact Center Operations
  ├── Cloud Fax Services
  ├── Conversational AI Automation
  └── Network Architecture

Why NajmX
  ├── About Us
  ├── Diversity
  └── Careers

Our Stars (Testimonials)
Contact
```

## Key Features Implemented

1. **Responsive Navigation**
   - Dropdown menus with smooth animations
   - Mobile-friendly design
   - Status indicator showing system operational status

2. **Star-Themed Design**
   - Animated starfield background
   - Star icons throughout the interface
   - Constellation metaphor ("Every client is a star")

3. **Product Showcase**
   - Individual pages for each product
   - Service pages with detailed information
   - Workflow visualizations

4. **Social Integration**
   - LinkedIn button component
   - WhatsApp button component

5. **Animations**
   - AOS (Animate On Scroll) integration
   - Smooth transitions
   - Hover effects

6. **SEO Optimization**
   - Metadata for each page
   - Proper page titles and descriptions

## Configuration Files

- `next.config.js`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `postcss.config.js`: PostCSS configuration
- `tailwind.config.js`: Tailwind CSS configuration (if exists)
- `package.json`: Dependencies and scripts

## Development Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Deployment

- Netlify configuration: `netlify.toml` present
- Build output: `.next` directory
- Static export capability

## Notes

- The project uses Next.js App Router with React Server Components
- Tailwind CSS v4 is implemented
- The design emphasizes a premium, enterprise feel with dark theme
- All components are TypeScript-based for type safety
- The website is optimized for performance with Next.js optimizations

## Recent Updates (Based on File Structure)

- Multiple product and service pages created
- Enhanced header with dropdown navigation
- Star-themed design elements throughout
- Social media integration components
- Responsive layout implementation
- Authentication pages structure

---

**Last Updated**: Based on current project structure
**Project Location**: `C:\Users\USER\najmx-website-react`
