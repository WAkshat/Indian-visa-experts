import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag, ArrowRight, Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import CTASection from "@/components/sections/CTASection";

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

const postColors = [
  "from-navy-800 to-navy-900",
  "from-gold-500 to-gold-600",
  "from-blue-600 to-blue-800",
  "from-emerald-600 to-emerald-800",
  "from-purple-600 to-purple-800",
  "from-rose-600 to-rose-800",
  "from-teal-600 to-teal-800",
  "from-amber-600 to-amber-800",
  "from-indigo-600 to-indigo-800",
  "from-navy-600 to-navy-800",
];

const postEmojis = ["📋", "✈️", "🏢", "📑", "❌", "📄", "⏱️", "🌏", "🆔", "⚖️"];

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const allPosts = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            Blog & Resources
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            India Immigration Insights
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Expert guides, compliance updates, and practical advice on India visas, FRRO registration,
            and immigration for foreign nationals.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {["All", ...blogCategories].map((cat) => (
              <button
                key={cat}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-navy-900 hover:text-white transition-all duration-200"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-8">Featured Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`h-48 flex items-center justify-center text-5xl bg-gradient-to-br ${postColors[index % postColors.length]}`}
                >
                  {postEmojis[index % postEmojis.length]}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 bg-gold-50 px-2.5 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-navy-900 text-lg leading-snug mb-2 line-clamp-2 group-hover:text-navy-700">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{formatDate(post.publishedAt)}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-gold-600">
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-8">All Articles</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className={`h-32 flex items-center justify-center text-4xl bg-gradient-to-br ${postColors[index % postColors.length]}`}
                >
                  {postEmojis[index % postEmojis.length]}
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-gold-600 bg-gold-50 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-navy-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-navy-700">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
            Get Immigration Updates in Your Inbox
          </h2>
          <p className="text-gray-600 mb-6">
            New guides, regulatory updates, and compliance alerts — 2–3 times per week.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
