"use client";

import { useState } from "react";
import { contact } from "@/data/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  /** mailto subject line */
  subject?: string;
  /** button label */
  cta?: string;
  /** message shown after a successful submit */
  successText?: string;
  placeholder?: string;
  /** outer <form> wrapper classes */
  wrapperClassName?: string;
  /** input + button row classes */
  rowClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  successClassName?: string;
  errorClassName?: string;
  /** mailto body template; "{email}" is replaced with the entered address */
  messageTemplate?: string;
};

/**
 * Email-capture form. Validates the address client-side, then opens the
 * visitor's mail app pre-addressed to the business inbox (no backend needed).
 * Swap the mailto for a POST to an email provider to capture leads automatically.
 */
export default function NewsletterForm({
  subject = "Newsletter subscription — India Visa Experts",
  cta = "Subscribe",
  successText = "Thanks! Your email app will open — just hit send to confirm.",
  placeholder = "Your email address",
  wrapperClassName = "w-full",
  rowClassName = "flex flex-col sm:flex-row gap-3 w-full",
  inputClassName = "flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm",
  buttonClassName = "px-6 py-3 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-colors whitespace-nowrap",
  successClassName = "text-navy-700 text-sm",
  errorClassName = "text-red-500 text-xs mt-2",
  messageTemplate = "Please subscribe this email address to India Visa Experts immigration updates:\n\n{email}",
}: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const body = messageTemplate.replace("{email}", value);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setDone(true);
  };

  if (done) return <p className={successClassName}>{successText}</p>;

  return (
    <form onSubmit={handleSubmit} className={wrapperClassName} noValidate>
      <div className={rowClassName}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className={inputClassName}
        />
        <button type="submit" className={buttonClassName}>
          {cta}
        </button>
      </div>
      {error && <p className={errorClassName}>{error}</p>}
    </form>
  );
}
