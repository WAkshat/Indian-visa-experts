import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Linkedin } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { contact, whatsappLink } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Consultation",
  description:
    "Contact India Visa Experts for expert guidance on India visas, FRRO registration, and immigration compliance. Book a free initial consultation with our team.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact India Visa Experts | Book a Free Consultation",
    description:
      "Get in touch with India's trusted immigration consultants. Free initial consultation available.",
  },
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: contact.phoneDisplay,
    action: `tel:${contact.phoneTel}`,
    label: "Call us",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: contact.phoneDisplay,
    action: whatsappLink(),
    label: "WhatsApp us",
  },
  {
    icon: Mail,
    title: "Email",
    detail: contact.email,
    action: `mailto:${contact.email}`,
    label: "Email us",
  },
  {
    icon: MapPin,
    title: "Office",
    detail: contact.address.full,
    action: null,
    label: null,
  },
];

const officeHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM IST" },
  { day: "Saturday", hours: "10:00 AM – 2:00 PM IST" },
  { day: "Sunday", hours: "Closed (WhatsApp available)" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            Contact Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Speak with an Immigration Expert
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you have a simple question or a complex immigration situation, our team is here
            to help. Book a free initial consultation today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left — Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">{info.title}</div>
                      <div className="font-semibold text-navy-900 text-sm">{info.detail}</div>
                      {info.action && info.label && (
                        <a
                          href={info.action}
                          target={info.action.startsWith("http") ? "_blank" : undefined}
                          rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-gold-600 text-xs font-medium hover:text-gold-700 transition-colors mt-1 block"
                        >
                          {info.label} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-navy-700" />
                  <h3 className="font-semibold text-navy-900 text-sm">Office Hours (IST)</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((oh) => (
                    <div key={oh.day} className="flex justify-between text-xs">
                      <span className="text-gray-500">{oh.day}</span>
                      <span className="font-medium text-navy-700">{oh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-navy-900 rounded-xl p-5 text-white">
                <h3 className="font-semibold mb-3 text-sm">Connect With Us</h3>
                <div className="flex gap-3">
                  <a
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-gray-400 leading-relaxed p-4 bg-gray-100 rounded-xl">
                <strong className="text-gray-500">Disclaimer:</strong> We are an independent consulting
                service and are not affiliated with the Government of India, MEA, FRRO, or any government
                agency. Visa decisions are made solely by the relevant authorities.
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
                Send Us Your Inquiry
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                Fill in the form below and we will respond within 24 business hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 text-center text-white">
            <div className="text-4xl mb-4">📋</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Free India Business Visa Checklist
            </h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Download our comprehensive checklist covering all documents required for an Indian Business
              Visa application. Avoid common mistakes and rejection risks.
            </p>
            <NewsletterForm
              subject="Request: Free India Business Visa Checklist"
              cta="Get Free PDF"
              placeholder="Enter your email"
              successText="Thanks! Your email app will open — send it and we'll reply with the checklist PDF."
              messageTemplate={
                "Hello India Visa Experts team,\n\nPlease send me the free India Business Visa document checklist.\n\nMy email: {email}"
              }
              wrapperClassName="max-w-md mx-auto w-full"
              rowClassName="flex flex-col sm:flex-row gap-3"
              inputClassName="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              buttonClassName="px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors whitespace-nowrap"
              successClassName="text-white/80 text-sm"
              errorClassName="text-red-300 text-xs mt-2"
            />
            <p className="text-xs text-white/40 mt-4">
              No spam. We only send immigration guides and important updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
