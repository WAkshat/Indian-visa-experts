"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent(
    "Hello! I would like to inquire about India visa and immigration consulting services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-105 whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-14 h-14 flex items-center justify-center">
        <MessageCircle className="w-7 h-7" />
      </div>
      <span className="pr-5 font-medium text-sm hidden sm:block">Chat on WhatsApp</span>
    </a>
  );
}
