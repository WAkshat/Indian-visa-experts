import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import StickyConsultation from "@/components/widgets/StickyConsultation";
import MobileContactBar from "@/components/widgets/MobileContactBar";
import ScrollProgress from "@/components/widgets/ScrollProgress";
import MotionProvider from "@/components/providers/MotionProvider";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.indiavisaexperts.com"),
  title: {
    default: "India Visa Experts | Business Visa, Employment Visa & Immigration Consulting",
    template: "%s | India Visa Experts",
  },
  description:
    "Expert India visa & immigration consulting for foreign nationals, companies & families: Business Visa, Employment Visa, FRRO Registration & compliance.",
  keywords: [
    "India Business Visa consultant",
    "Employment Visa India",
    "FRRO Registration India",
    "X Visa India",
    "India immigration consultant",
    "Foreign company India advisory",
    "Visa extension India",
    "OCI card India",
  ],
  authors: [{ name: "India Visa Experts" }],
  creator: "India Visa Experts",
  publisher: "India Visa Experts",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.indiavisaexperts.com",
    siteName: "India Visa Experts",
    title: "India Visa Experts | Business Visa & Immigration Consulting",
    description:
      "Your trusted partner for India visa and immigration. Expert guidance on Business Visa, Employment Visa, FRRO Registration, and foreign national compliance.",
    // og:image is supplied automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "India Visa Experts | Business Visa & Immigration Consulting",
    description:
      "Expert India visa and immigration consulting. Business Visa, Employment Visa, FRRO Registration, and compliance services.",
    // twitter:image falls back to the generated opengraph-image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Sitewide identity — page-specific canonicals are set per route via metadata.alternates */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          {/* Spacer so the mobile action bar never covers footer content */}
          <div aria-hidden className="h-16 lg:hidden" />
          {/* Desktop floating CTAs */}
          <div className="hidden lg:block">
            <WhatsAppButton />
            <StickyConsultation />
          </div>
          {/* Mobile persistent one-tap contact bar */}
          <MobileContactBar />
        </MotionProvider>
      </body>
    </html>
  );
}
