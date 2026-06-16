import type { Metadata } from "next";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import CTASection from "@/components/sections/CTASection";
import BlogExplorer from "@/components/blog/BlogExplorer";
import NewsletterForm from "@/components/forms/NewsletterForm";

export const metadata: Metadata = {
  title: "India Immigration Blog | Visa Guides & Compliance Articles",
  description:
    "Expert articles on India Business Visa, Employment Visa, FRRO Registration, compliance requirements, and immigration guides for foreign nationals.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "India Immigration Blog | Visa Guides & Immigration Articles",
    description:
      "Read expert insights on India Business Visa, Employment Visa, FRRO, and immigration compliance. Guides written by experienced India immigration consultants.",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero + live search + category filter + article grids */}
      <BlogExplorer posts={blogPosts} categories={blogCategories} />

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
            Get Immigration Updates in Your Inbox
          </h2>
          <p className="text-gray-600 mb-6">
            New guides, regulatory updates, and compliance alerts — 2–3 times per week.
          </p>
          <NewsletterForm
            wrapperClassName="max-w-md mx-auto w-full"
            rowClassName="flex flex-col sm:flex-row gap-3"
            inputClassName="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
            buttonClassName="px-6 py-3 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-colors whitespace-nowrap"
          />
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
