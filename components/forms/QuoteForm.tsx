"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { contact, whatsappLink } from "@/data/contact";

/**
 * Compact above-the-fold lead capture. Two fields only (more fields = fewer
 * submissions) and the primary action opens WhatsApp pre-filled with the
 * visitor's details — the channel this audience actually uses, with no
 * mail-client friction.
 */
export default function QuoteForm({ service }: { service?: string }) {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");

  const message =
    `Hello India Visa Experts, I'm ${name.trim() || "[name]"}. ` +
    `I need help with ${need.trim() || service || "an India visa"}. ` +
    `Please share a quote and the next steps.`;

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
      <h2 className="font-display font-bold text-white text-lg mb-1">Request a Free Quote</h2>
      <p className="text-white/50 text-sm mb-5">No obligation — we reply within 24 hours.</p>

      <div className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
        />
        <input
          type="text"
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          placeholder={service ? `e.g. ${service}` : "What do you need help with?"}
          aria-label="What you need help with"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
        />
      </div>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 w-full px-5 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        Get My Quote on WhatsApp
      </a>
      <a
        href={`tel:${contact.phoneTel}`}
        className="mt-2 flex items-center justify-center gap-2 w-full px-5 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
      >
        <Phone className="w-4 h-4" />
        Or call {contact.phoneDisplay}
      </a>

      <p className="text-[11px] text-white/35 mt-4 text-center">
        Independent consultancy. Not affiliated with any government agency.
      </p>
    </div>
  );
}
