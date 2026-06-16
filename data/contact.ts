/**
 * Single source of truth for business contact details.
 * Update values here and they propagate to the header, footer, contact page,
 * WhatsApp buttons, JSON-LD schema, and all contact/newsletter forms.
 */
export const contact = {
  phoneDisplay: "+91 98183 85663",
  phoneTel: "+919818385663", // used in tel: links
  whatsappNumber: "919818385663", // wa.me path (country code + number, no +)
  email: "consult.us@indiavisaexperts.com",
  address: {
    full: "Urban Square by Pioneer Urban, Golf Course Extension Road, Gurgaon",
    street: "Urban Square by Pioneer Urban, Golf Course Extension Road",
    locality: "Gurgaon",
    region: "Haryana",
    country: "IN",
  },
  // NOTE: replace these with the real profile URLs when available — they
  // currently point to the platform home pages, not the business accounts.
  social: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
} as const;

const DEFAULT_WHATSAPP_MESSAGE =
  "Hello! I would like to inquire about India visa and immigration consulting services.";

/** Build a WhatsApp click-to-chat link with an optional prefilled message. */
export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Build a mailto: link to the business inbox with an optional subject/body. */
export function mailtoLink(opts: { subject?: string; body?: string } = {}): string {
  const parts: string[] = [];
  if (opts.subject) parts.push(`subject=${encodeURIComponent(opts.subject)}`);
  if (opts.body) parts.push(`body=${encodeURIComponent(opts.body)}`);
  return `mailto:${contact.email}${parts.length ? `?${parts.join("&")}` : ""}`;
}
