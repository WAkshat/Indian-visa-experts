import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-gray-100 font-display mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-navy-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what
          you need.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-200 text-navy-700 font-semibold rounded-xl hover:bg-navy-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12">
          <p className="text-sm text-gray-400 mb-4">Popular pages:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "Business Visa", href: "/business-visa-india" },
              { label: "Employment Visa", href: "/employment-visa-india" },
              { label: "FRRO Registration", href: "/frro-registration-india" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-full text-gray-600 hover:border-navy-300 hover:text-navy-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
