"use client";

import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { contact } from "@/data/contact";
import NewsletterForm from "@/components/forms/NewsletterForm";

const footerServices = [
  { label: "Business Visa", href: "/business-visa-india" },
  { label: "Employment Visa", href: "/employment-visa-india" },
  { label: "X Visa (Dependent)", href: "/x-visa-india" },
  { label: "FRRO Registration", href: "/frro-registration-india" },
  { label: "Visa Extension", href: "/visa-extension-india" },
  { label: "OCI & Entry Visa", href: "/oci-services-india" },
  { label: "Foreign Company Advisory", href: "/foreign-company-india-advisory" },
];

const footerBlog = [
  { label: "India Business Visa Guide", href: "/blog/complete-guide-indian-business-visa" },
  { label: "Business vs Employment Visa", href: "/blog/business-visa-vs-employment-visa" },
  { label: "FRRO Registration Explained", href: "/blog/frro-registration-india-explained" },
  { label: "Understanding X Visa", href: "/blog/understanding-x-visa-india" },
  { label: "Common Visa Rejections", href: "/blog/common-visa-rejection-reasons" },
];

const footerResources = [
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const socialLinks = [
  { icon: Linkedin, href: contact.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: contact.social.facebook, label: "Facebook" },
  { icon: Instagram, href: contact.social.instagram, label: "Instagram" },
  { icon: Twitter, href: contact.social.twitter, label: "X (Twitter)" },
  { icon: Youtube, href: contact.social.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Newsletter Strip */}
      <div className="bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Stay Updated on India Immigration
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Get the latest news, guides, and compliance updates.
              </p>
            </div>
            <NewsletterForm
              wrapperClassName="w-full md:w-auto"
              rowClassName="flex gap-3 w-full"
              inputClassName="flex-1 md:w-72 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
              buttonClassName="px-5 py-2.5 bg-gold-500 text-navy-900 font-semibold text-sm rounded-lg hover:bg-gold-400 transition-colors whitespace-nowrap"
              successClassName="text-white/80 text-sm"
              errorClassName="text-red-300 text-xs mt-2"
            />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center flex-shrink-0">
                <span className="text-navy-900 font-bold text-lg">IVE</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">India Visa Experts</div>
                <div className="text-xs text-white/50">Immigration Consulting</div>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner for navigating India&apos;s visa and immigration process. We provide
              expert guidance to foreign nationals, companies, and their families — with a focus on
              compliance, transparency, and professional excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${contact.phoneTel}`} className="hover:text-gold-400 transition-colors">
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${contact.email}`} className="hover:text-gold-400 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>{contact.address.full}</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold-500 hover:text-navy-900 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Blog</h4>
            <ul className="space-y-2.5">
              {footerBlog.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {footerResources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer & Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Disclaimer */}
          <div className="bg-white/5 rounded-lg p-4 mb-6">
            <p className="text-xs text-white/50 leading-relaxed">
              <strong className="text-white/70">Disclaimer:</strong> We are an independent visa and immigration
              consulting service. We are not affiliated with the Government of India, Ministry of External
              Affairs (MEA), Foreigners Regional Registration Office (FRRO), or any government agency. Visa
              decisions are made solely by the relevant government authorities. The information provided on
              this website is for general guidance only and does not constitute legal advice.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <span>© {new Date().getFullYear()} India Visa Experts. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white/60 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="hover:text-white/60 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
