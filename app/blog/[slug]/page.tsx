import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Tag, ArrowLeft, ArrowRight, Calendar, AlertCircle } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import ContactForm from "@/components/forms/ContactForm";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = blogPosts.filter(
    (p) => post.relatedSlugs.includes(p.slug) && p.slug !== slug
  );

  const allPosts = blogPosts;
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Parse content into sections for rendering
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="font-display text-2xl font-bold text-navy-900 mt-10 mb-4">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="font-display text-xl font-semibold text-navy-800 mt-7 mb-3">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith("#### ")) {
        elements.push(
          <h4 key={key++} className="font-semibold text-navy-700 mt-5 mb-2">
            {line.slice(5)}
          </h4>
        );
      } else if (line.startsWith("- ")) {
        const items = [line.slice(2)];
        let j = i + 1;
        while (j < lines.length && lines[j].startsWith("- ")) {
          items.push(lines[j].slice(2));
          j++;
        }
        i = j - 1;
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-2 my-4 text-gray-700">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-navy-800">$1</strong>') }} />
            ))}
          </ul>
        );
      } else if (line.match(/^\d+\. /)) {
        const items = [line.replace(/^\d+\. /, "")];
        let j = i + 1;
        while (j < lines.length && lines[j].match(/^\d+\. /)) {
          items.push(lines[j].replace(/^\d+\. /, ""));
          j++;
        }
        i = j - 1;
        elements.push(
          <ol key={key++} className="list-decimal list-inside space-y-2 my-4 text-gray-700">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-navy-800">$1</strong>') }} />
            ))}
          </ol>
        );
      } else if (line.startsWith("|")) {
        // Table
        const tableLines = [line];
        let j = i + 1;
        while (j < lines.length && lines[j].startsWith("|")) {
          tableLines.push(lines[j]);
          j++;
        }
        i = j - 1;
        const rows = tableLines.filter((l) => !l.match(/^\|[-| ]+\|$/));
        elements.push(
          <div key={key++} className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              {rows.map((row, rowIdx) => {
                const cells = row.split("|").filter((c) => c.trim() !== "");
                return (
                  <tr key={rowIdx} className={rowIdx === 0 ? "bg-navy-900 text-white" : rowIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    {cells.map((cell, cellIdx) =>
                      rowIdx === 0 ? (
                        <th key={cellIdx} className="px-4 py-3 text-left font-semibold">
                          {cell.trim()}
                        </th>
                      ) : (
                        <td key={cellIdx} className="px-4 py-3 border-b border-gray-100">
                          {cell.trim()}
                        </td>
                      )
                    )}
                  </tr>
                );
              })}
            </table>
          </div>
        );
      } else if (line.trim() !== "") {
        elements.push(
          <p
            key={key++}
            className="text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{
              __html: line
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-navy-800">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>'),
            }}
          />
        );
      }
    }

    return elements;
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="pt-32 pb-10 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-8">
            <Link href="/" className="hover:text-white/70">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70">Blog</Link>
            <span>/</span>
            <span className="text-white/60 line-clamp-1">{post.title}</span>
          </nav>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1.5 rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-xs">
              <Clock className="w-3 h-3" />
              {post.readTime} min read
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-xs">
              <Calendar className="w-3 h-3" />
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-white/60 leading-relaxed mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-3 text-sm text-white/50">
            <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-xs flex-shrink-0">
              IVE
            </div>
            <div>
              <span className="text-white/70 font-medium">{post.author}</span>
              <span className="mx-1">·</span>
              <span>{post.authorTitle}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="article-content">
                {renderContent(post.content)}
              </div>

              {/* Disclaimer */}
              <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-700 mb-1">Disclaimer</p>
                  <p className="text-xs text-amber-600 leading-relaxed">
                    India Visa Experts is an independent visa and immigration consulting service. We
                    are not affiliated with the Government of India, Ministry of External Affairs
                    (MEA), FRRO, or any government agency. Visa decisions are made solely by the
                    relevant authorities. This article is for general informational purposes only and
                    does not constitute legal advice. Regulations can change — always verify with the
                    relevant authority or consult a qualified professional.
                  </p>
                </div>
              </div>

              {/* Post Navigation */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-navy-200 hover:shadow-md transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 group-hover:text-navy-700 transition-colors" />
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Previous</div>
                      <div className="text-sm font-semibold text-navy-900 line-clamp-2 group-hover:text-navy-700">
                        {prevPost.title}
                      </div>
                    </div>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-navy-200 hover:shadow-md transition-all sm:text-right"
                  >
                    <div className="sm:order-2">
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 group-hover:text-navy-700 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-400 mb-1">Next</div>
                      <div className="text-sm font-semibold text-navy-900 line-clamp-2 group-hover:text-navy-700">
                        {nextPost.title}
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* CTA Card */}
              <div className="bg-navy-900 rounded-2xl p-6 text-white sticky top-28">
                <h3 className="font-display font-bold text-lg mb-2">Need Expert Help?</h3>
                <p className="text-white/60 text-sm mb-4">
                  Our consultants can guide you through your specific situation.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors mb-3 text-sm"
                >
                  Book Consultation
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="font-semibold text-navy-900 mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group block p-4 rounded-xl border border-gray-100 hover:border-navy-200 hover:shadow-md transition-all"
                      >
                        <span className="text-xs font-semibold text-gold-600 block mb-1">
                          {related.category}
                        </span>
                        <span className="text-sm font-medium text-navy-900 group-hover:text-navy-700 line-clamp-2">
                          {related.title}
                        </span>
                        <span className="text-xs text-gray-400 mt-1 block">
                          {related.readTime} min read
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-semibold text-navy-900 mb-3 text-sm">Our Services</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Business Visa", href: "/business-visa-india" },
                    { label: "Employment Visa", href: "/employment-visa-india" },
                    { label: "X Visa", href: "/x-visa-india" },
                    { label: "FRRO Registration", href: "/frro-registration-india" },
                    { label: "Visa Extension", href: "/visa-extension-india" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-navy-900 transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Inline CTA after article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy-900 text-center mb-3">
            Have Questions? Talk to Our Experts
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Our immigration consultants can provide personalized guidance for your specific situation.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
