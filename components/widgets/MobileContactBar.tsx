"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { contact, whatsappLink } from "@/data/contact";

/**
 * Persistent one-tap contact bar on mobile (Call / WhatsApp / Book). Desktop
 * keeps the floating WhatsApp button + consultation card instead, so the two
 * don't stack. Hidden on lg+.
 */
export default function MobileContactBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="lg:hidden fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 bg-navy-900 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.25)]"
    >
      <a
        href={`tel:${contact.phoneTel}`}
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-white active:bg-white/10 transition-colors"
        aria-label={`Call ${contact.phoneDisplay}`}
      >
        <Phone className="w-5 h-5 text-gold-400" />
        <span className="text-[11px] font-medium">Call</span>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-white border-x border-white/10 active:bg-white/10 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-green-400" />
        <span className="text-[11px] font-medium">WhatsApp</span>
      </a>
      <Link
        href="/contact"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-navy-900 bg-gold-500 active:bg-gold-400 transition-colors"
      >
        <Calendar className="w-5 h-5" />
        <span className="text-[11px] font-bold">Book</span>
      </Link>
    </nav>
  );
}
