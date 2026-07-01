/**
 * Single source of truth for business contact details.
 * Update values here and they propagate to the header, footer, contact page,
 * WhatsApp buttons, JSON-LD schema, and all contact/newsletter forms.
 */
export const contact = {
  phoneDisplay: "+91 98183 85663",
  phoneTel: "+919818385663", // used in tel: links
  whatsappNumber: "919818385663", // wa.me path (country code + number, no +)
  email: "indiavisaxperts@gmail.com",
  address: {
    full: "Urban Square by Pioneer Urban, Golf Course Extension Road, Gurgaon, Haryana 122102, India",
    street: "Urban Square by Pioneer Urban, Golf Course Extension Road",
    locality: "Gurgaon",
    region: "Haryana",
    postalCode: "122102",
    country: "IN",
  },
  // LinkedIn is the only active social profile.
  social: {
    linkedin: "https://www.linkedin.com/company/india-visa-experts/?viewAsMember=true",
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
