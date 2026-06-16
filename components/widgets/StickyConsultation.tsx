"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, X } from "lucide-react";

export default function StickyConsultation() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setVisible(window.scrollY > 400);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="relative bg-navy-900 text-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gold-500/30">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 text-navy-900" />
          </div>
          <div>
            <div className="font-semibold text-sm">Free Consultation</div>
            <div className="text-white/60 text-xs">Speak with an expert today</div>
          </div>
        </div>

        <p className="text-xs text-white/70 mb-4 leading-relaxed">
          Get personalized advice on your India visa and immigration needs.
        </p>

        <Link
          href="/contact"
          className="block w-full text-center px-4 py-2.5 bg-gold-500 text-navy-900 font-semibold text-sm rounded-lg hover:bg-gold-400 transition-colors"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}
