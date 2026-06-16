import Link from "next/link";
import { CheckCircle, FileText, ArrowRight, AlertCircle } from "lucide-react";
import { type ServiceDetail } from "@/data/services";
import CTASection from "./CTASection";
import ContactForm from "../forms/ContactForm";
import JsonLd from "../seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";
import { whatsappLink } from "@/data/contact";

interface ServicePageTemplateProps {
  service: ServiceDetail;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: service.shortTitle, path: `/${service.slug}` },
          ]),
          serviceSchema(service),
          faqSchema(service.faqs),
        ]}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{service.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
                {service.shortTitle}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gold-400 font-medium mb-4">{service.tagline}</p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">{service.description}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all duration-200 shadow-lg"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="font-display font-bold text-white text-lg mb-4">Quick Summary</h3>
              <ul className="space-y-3">
                {service.eligibility.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-white/40">
                  Independent consulting service. Not affiliated with the Government of India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
                Overview
              </span>
              <h2 className="font-display text-3xl font-bold text-navy-900 mb-6">
                About {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{service.overview}</p>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-navy-50 rounded-2xl p-6 sticky top-28">
                <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
                  Need Help With {service.shortTitle}?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our experts provide personalized guidance for your specific situation.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors mb-3"
                >
                  Book Free Consultation
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
                Eligibility
              </span>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Who Can Apply?</h2>
              <ul className="space-y-3">
                {service.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
                Documentation
              </span>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Documents Required</h2>
              <ul className="space-y-3">
                {service.documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-navy-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 leading-relaxed">
                  Document requirements can vary based on nationality, consulate, and specific
                  circumstances. We provide tailored document checklists during consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
              Process
            </span>
            <h2 className="font-display text-3xl font-bold text-navy-900">
              How We Help You
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
                )}

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
              FAQs
            </span>
            <h2 className="font-display text-3xl font-bold text-navy-900">
              Common Questions About {service.shortTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-3">
              Get Expert Help with {service.shortTitle}
            </h2>
            <p className="text-gray-600">
              Fill in the form below and our team will respond within 24 hours.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            <strong className="text-gray-500">Disclaimer:</strong> We are an independent visa and
            immigration consulting service. We are not affiliated with the Government of India,
            Ministry of External Affairs (MEA), FRRO, or any government agency. Visa decisions are
            made solely by the relevant government authorities. Information on this page is for
            general guidance only.
          </p>
        </div>
      </section>

      <CTASection
        title={`Ready to Proceed with Your ${service.shortTitle} Application?`}
        subtitle="Our experts are ready to guide you through every step of the process."
      />
    </>
  );
}
