"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarClock, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/data/contact";

// Foreign nationals who must register do so within 14 days of arrival in India.
const REGISTRATION_WINDOW_DAYS = 14;

function fmt(d: Date) {
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function FrroDeadlineCalculator() {
  const [arrival, setArrival] = useState("");

  let result: null | {
    deadline: Date;
    daysLeft: number;
    state: "ok" | "soon" | "passed";
  } = null;

  if (arrival) {
    const a = new Date(arrival + "T00:00:00");
    if (!isNaN(a.getTime())) {
      const deadline = new Date(a);
      deadline.setDate(deadline.getDate() + REGISTRATION_WINDOW_DAYS);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const daysLeft = Math.round((deadline.getTime() - today.getTime()) / 86400000);
      const state = daysLeft < 0 ? "passed" : daysLeft <= 3 ? "soon" : "ok";
      result = { deadline, daysLeft, state };
    }
  }

  const tone =
    result?.state === "passed"
      ? { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", Icon: AlertTriangle }
      : result?.state === "soon"
      ? { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", Icon: AlertTriangle }
      : { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", Icon: CheckCircle2 };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-soft p-6 sm:p-8">
      <label htmlFor="arrival" className="block font-display text-lg font-bold text-navy-900 mb-1">
        When did you (or will you) arrive in India?
      </label>
      <p className="text-gray-500 text-sm mb-4">
        We&apos;ll calculate your FRRO registration deadline.
      </p>

      <input
        id="arrival"
        type="date"
        value={arrival}
        onChange={(e) => setArrival(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
      />

      {result && (
        <div className={`mt-6 rounded-xl border ${tone.border} ${tone.bg} p-5`}>
          <div className="flex items-center gap-2 mb-2">
            <CalendarClock className="w-5 h-5 text-navy-700" />
            <span className="text-sm font-semibold text-navy-900">
              Register with the FRRO by
            </span>
          </div>
          <div className="font-display text-2xl font-bold text-navy-900">
            {fmt(result.deadline)}
          </div>
          <div className={`mt-2 flex items-center gap-1.5 text-sm font-medium ${tone.text}`}>
            <tone.Icon className="w-4 h-4" />
            {result.state === "passed"
              ? `Deadline passed ${Math.abs(result.daysLeft)} day(s) ago — act now to avoid penalties.`
              : result.state === "soon"
              ? `Only ${result.daysLeft} day(s) left — start today.`
              : `${result.daysLeft} days remaining.`}
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="/frro-registration-india"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
        >
          Get help with FRRO registration
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href={whatsappLink("Hello India Visa Experts, I need help with my FRRO registration. Here are my arrival details:")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors"
        >
          Ask on WhatsApp
        </a>
      </div>

      <p className="mt-6 text-xs text-gray-400 leading-relaxed">
        The 14-day window applies to foreign nationals who are required to register
        (generally stays beyond 180 days, and certain visa categories regardless of
        length; OCI cardholders are usually exempt). This tool is general guidance,
        not legal advice — confirm your specific requirement with us or the FRRO.
      </p>
    </div>
  );
}
