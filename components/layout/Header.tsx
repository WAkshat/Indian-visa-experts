"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact } from "@/data/contact";

const services = [
  { label: "Business Visa", href: "/business-visa-india" },
  { label: "Employment Visa", href: "/employment-visa-india" },
  { label: "X Visa (Dependent)", href: "/x-visa-india" },
  { label: "FRRO Registration", href: "/frro-registration-india" },
  { label: "Visa Extension", href: "/visa-extension-india" },
  { label: "OCI & Entry Visa", href: "/oci-services-india" },
  { label: "Foreign Company Advisory", href: "/foreign-company-india-advisory" },
  { label: "Medical Tourism", href: "/medical-visa-india" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-navy-900/95 backdrop-blur-sm"
      )}
    >
      {/* Top Bar */}
      <div
        className={cn(
          "hidden lg:block border-b transition-colors duration-300",
          isScrolled ? "border-gray-100 bg-navy-900" : "border-white/10 bg-navy-950"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs text-white/70">
            <span>Independent Visa & Immigration Consulting — Not affiliated with any government agency</span>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${contact.phoneTel}`}
                className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-gold-400 transition-colors"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
              <span className="text-navy-900 font-bold text-lg">IVE</span>
            </div>
            <div>
              <div
                className={cn(
                  "font-display font-bold text-lg leading-tight transition-colors",
                  isScrolled ? "text-navy-900" : "text-white"
                )}
              >
                India Visa Experts
              </div>
              <div
                className={cn(
                  "text-xs transition-colors",
                  isScrolled ? "text-navy-600" : "text-white/70"
                )}
              >
                Immigration Consulting
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isScrolled
                        ? "text-navy-700 hover:text-navy-900 hover:bg-navy-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        desktopServicesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Dropdown — pt-1 bridges the gap so mouseLeave never fires mid-hover */}
                  {desktopServicesOpen && (
                    <div className="absolute top-full left-0 pt-1 w-64 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? isScrolled
                        ? "bg-navy-50 text-navy-900 font-semibold"
                        : "bg-white/10 text-white font-semibold"
                      : isScrolled
                      ? "text-navy-700 hover:text-navy-900 hover:bg-navy-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-gold-500 text-navy-900 font-semibold text-sm rounded-lg hover:bg-gold-400 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-navy-700 hover:bg-navy-50" : "text-white hover:bg-white/10"
            )}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-navy-700 font-medium rounded-lg hover:bg-navy-50"
                  >
                    Services
                    <ChevronDown
                      className={cn("w-4 h-4 transition-transform", mobileServicesOpen && "rotate-180")}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-navy-900 hover:bg-navy-50 rounded-lg"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-navy-700 font-medium rounded-lg hover:bg-navy-50"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
