# India Visa Experts — Website

A premium Next.js 15 website for India immigration and visa consulting.

## Prerequisites

- Node.js 18+ (install from [nodejs.org](https://nodejs.org))
- npm or yarn

## Quick Start

```bash
# 1. Enter the project directory
cd india-visa-advisory

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
india-visa-advisory/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Header, Footer, WhatsApp)
│   ├── page.tsx                  # Home page
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── blog/                     # Blog listing + [slug] posts
│   ├── business-visa-india/      # Service page
│   ├── employment-visa-india/    # Service page
│   ├── x-visa-india/             # Service page
│   ├── frro-registration-india/  # Service page
│   ├── visa-extension-india/     # Service page
│   ├── oci-services-india/       # Service page
│   ├── foreign-company-india-advisory/  # Service page
│   ├── privacy-policy/           # Privacy Policy
│   ├── terms/                    # Terms & Conditions
│   ├── disclaimer/               # Disclaimer
│   ├── sitemap.ts                # Dynamic XML sitemap
│   └── robots.ts                 # Robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky header with dropdown nav
│   │   └── Footer.tsx            # Full footer with newsletter
│   ├── sections/
│   │   ├── Hero.tsx              # Homepage hero
│   │   ├── WhyChooseUs.tsx       # 6-feature grid
│   │   ├── ServicesOverview.tsx  # 8-card services grid
│   │   ├── Process.tsx           # 5-step timeline
│   │   ├── CTASection.tsx        # Reusable CTA section
│   │   ├── FAQSection.tsx        # Filterable FAQ accordion
│   │   ├── BlogSection.tsx       # Featured blog cards
│   │   └── ServicePageTemplate.tsx  # Template for all service pages
│   ├── forms/
│   │   └── ContactForm.tsx       # Full lead capture form
│   └── widgets/
│       ├── WhatsAppButton.tsx    # Floating WhatsApp button
│       └── StickyConsultation.tsx  # Scroll-triggered CTA popup
│
├── data/
│   ├── services.ts               # Full service data for all 7 services
│   ├── faqs.ts                   # 25 FAQs across categories
│   └── blog-posts.ts             # 10 full SEO blog articles
│
├── lib/
│   └── utils.ts                  # Utility functions (cn, formatDate)
│
└── app/globals.css               # Global styles + design tokens
```

## Customization

### Brand Details
Update in these files:
- `app/layout.tsx` — site name, meta tags, structured schema
- `components/layout/Header.tsx` — logo text, navigation links
- `components/layout/Footer.tsx` — contact info, social links

### Contact Information
Replace placeholders:
- Phone: `+91 123 456 7890`
- WhatsApp: `+91 987 654 3210`
- Email: `info@indiavisaexperts.com`

### WhatsApp Integration
Update `components/widgets/WhatsAppButton.tsx`:
```ts
const phoneNumber = "91YOUR_NUMBER_HERE"; // without + sign
```

### Company Name
Replace `India Visa Experts` throughout with your actual company name.

## SEO Setup

- Dynamic metadata on all pages
- Open Graph tags
- JSON-LD structured schema (Organization + Article)
- XML sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Breadcrumb navigation on service/blog pages

## Adding New Blog Posts

Add to `data/blog-posts.ts`:
```ts
{
  slug: "your-article-slug",
  title: "Article Title",
  excerpt: "Short description",
  content: `## Your content here...`,
  category: "Business Visa",
  tags: ["Business Visa", "India"],
  author: "India Visa Experts Team",
  authorTitle: "Immigration Specialists",
  publishedAt: "2024-06-01",
  readTime: 8,
  featured: false,
  metaTitle: "SEO Title | India Visa Experts",
  metaDescription: "SEO description",
  keywords: ["keyword1", "keyword2"],
  relatedSlugs: ["related-slug-1"],
  content: `...article content...`,
}
```

## Tech Stack

- **Next.js 15** — App Router, Server Components
- **TypeScript** — full type safety
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations (optional, ready to add)
- **Lucide React** — icons
- **React Hook Form** — form management

## Disclaimer

This website is for an independent consulting firm. It is NOT affiliated with the Government of India, MEA, FRRO, or any government agency.
