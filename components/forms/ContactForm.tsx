"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { contact, mailtoLink } from "@/data/contact";

const services = [
  "Business Visa",
  "Employment Visa",
  "X Visa (Dependent)",
  "FRRO Registration",
  "Visa Extension",
  "OCI Card Services",
  "Entry Visa",
  "Foreign Company Advisory",
  "Document Review",
  "General Inquiry",
];

const countries = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Canada",
  "Australia",
  "Japan",
  "South Korea",
  "Singapore",
  "UAE",
  "Saudi Arabia",
  "Netherlands",
  "Switzerland",
  "Italy",
  "Spain",
  "China",
  "Russia",
  "Brazil",
  "Mexico",
  "South Africa",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Consultation Inquiry — ${formData.service || "General"}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Country of Nationality: ${formData.country}`,
      `Phone / WhatsApp: ${formData.phone || "—"}`,
      `Service Needed: ${formData.service}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");
    // No backend yet — open the visitor's mail app pre-addressed to our inbox.
    window.location.href = mailtoLink({ subject, body });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-navy-900 text-2xl mb-2">
          Almost there!
        </h3>
        <p className="text-gray-600 max-w-sm">
          Your email app should have opened with your inquiry pre-filled — just press send and we&apos;ll
          respond within 24 hours. If it didn&apos;t open, email us directly at{" "}
          <a href={`mailto:${contact.email}`} className="text-navy-700 font-semibold underline">
            {contact.email}
          </a>{" "}
          or WhatsApp us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm transition-all"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="country">
            Country of Nationality <span className="text-red-500">*</span>
          </label>
          <select
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm transition-all bg-white"
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">
            Phone / WhatsApp Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm transition-all"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="service">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm transition-all bg-white"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your situation, current visa status, travel purpose, and any specific questions..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm transition-all resize-none"
        />
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 leading-relaxed">
        By submitting this form, you consent to being contacted by India Visa Experts regarding your
        inquiry. We are an independent consulting firm and are not affiliated with any government agency.
      </p>

      {/* Submit */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
      >
        <Send className="w-4 h-4" />
        Send Inquiry
      </button>
    </form>
  );
}
