import { MapPin, ShieldCheck, MessageSquare, Clock } from "lucide-react";
import { contact } from "@/data/contact";

/**
 * Slim trust strip shown high on the homepage. Every claim here is genuinely
 * true today (real office, honest disclosure of non-affiliation, free first
 * consultation, fast response) — no fabricated credentials. In a fraud-heavy
 * industry, visible legitimacy is both a conversion and a YMYL trust signal.
 */
const items = [
  {
    icon: MapPin,
    title: "Real office in Gurgaon",
    sub: `${contact.address.locality}, ${contact.address.region}`,
  },
  {
    icon: ShieldCheck,
    title: "Independent & transparent",
    sub: "No government affiliation",
  },
  {
    icon: MessageSquare,
    title: "Free initial consultation",
    sub: "No obligation",
  },
  {
    icon: Clock,
    title: "24-hour response",
    sub: "Call, WhatsApp or email",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100" aria-label="Why clients trust us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((it) => (
            <div key={it.title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                <it.icon className="w-5 h-5 text-gold-600" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-navy-900 leading-tight">{it.title}</div>
                <div className="text-xs text-gray-500 truncate">{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
