import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Process from "@/components/sections/Process";
import VideoSection from "@/components/sections/VideoSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "India Visa Experts | Your Trusted Partner for Business Mobility and Immigration in India",
  description:
    "Expert India visa and immigration consulting. Business Visa, Employment Visa, X Visa, FRRO Registration, and compliance services for foreign nationals and companies.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "India Visa Experts | Business Visa & Immigration Consulting India",
    description:
      "Navigate India's immigration process with confidence. Expert guidance on Business Visa, Employment Visa, FRRO Registration, and foreign national compliance.",
  },
};

export default function HomePage() {
  const homeFaqs = faqs.slice(0, 8);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <Process />
      <VideoSection />
      <BlogSection />
      <FAQSection
        selectedFaqs={homeFaqs}
        showCategories={false}
        title="Common Questions About India Visas"
        subtitle="Quick answers to the questions we hear most often from foreign nationals and companies."
      />
      <CTASection />
    </>
  );
}
