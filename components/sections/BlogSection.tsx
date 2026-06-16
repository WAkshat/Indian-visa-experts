import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

export default function BlogSection() {
  const featuredPosts = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
              Latest Insights
            </span>
            <h2 className="section-heading">India Immigration Insights</h2>
            <p className="text-lg text-gray-600 mt-2">
              Expert articles, guides, and updates on India visa and immigration.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div
                className={`h-44 flex items-center justify-center text-4xl ${
                  index === 0
                    ? "bg-gradient-to-br from-navy-800 to-navy-900"
                    : index === 1
                    ? "bg-gradient-to-br from-gold-500 to-gold-600"
                    : "bg-gradient-to-br from-navy-600 to-navy-800"
                }`}
              >
                <span>{index === 0 ? "📋" : index === 1 ? "✈️" : "🏢"}</span>
              </div>

              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 bg-gold-50 px-2.5 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-navy-900 text-lg leading-snug mb-2 group-hover:text-navy-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Date & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{formatDate(post.publishedAt)}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-gold-600 transition-colors">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
