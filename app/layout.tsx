import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import StickyConsultation from "@/components/widgets/StickyConsultation";
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
  metadataBase: new URL("https://indiavisaadvisory.com"),
  title: {
    default: "India Visa Advisory | Business Visa, Employment Visa & Immigration Consulting",
    template: "%s | India Visa Advisory",
  },
  description:
    "Expert India visa and immigration consulting for foreign nationals, companies, and families. Business Visa, Employment Visa, X Visa, FRRO Registration, and compliance services.",
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
  authors: [{ name: "India Visa Advisory" }],
  creator: "India Visa Advisory",
  publisher: "India Visa Advisory",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indiavisaadvisory.com",
    siteName: "India Visa Advisory",
    title: "India Visa Advisory | Business Visa & Immigration Consulting",
    description:
      "Your trusted partner for India visa and immigration. Expert guidance on Business Visa, Employment Visa, FRRO Registration, and foreign national compliance.",
    // og:image is supplied automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "India Visa Advisory | Business Visa & Immigration Consulting",
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
          <WhatsAppButton />
          <StickyConsultation />
        </MotionProvider>
      </body>
    </html>
  );
}
