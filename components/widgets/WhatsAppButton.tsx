"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/contact";

export default function WhatsAppButton() {
  const whatsappUrl = whatsappLink();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <span
        className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-pulse-ring pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative w-14 h-14 flex items-center justify-center">
        <MessageCircle className="w-7 h-7" />
      </div>
      <span className="relative pr-5 font-medium text-sm hidden sm:block">Chat on WhatsApp</span>
    </a>
  );
}
