import type { Metadata } from "next";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimer — India Visa Experts is an independent consulting service, not affiliated with the Government of India.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-4">Disclaimer</h1>
          <p className="text-white/60">Please read this disclaimer carefully before using our services.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-700">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="font-display text-xl font-bold text-amber-800 mb-3">
                Independent Service — Not a Government Agency
              </h2>
              <p className="text-amber-700 leading-relaxed">
                India Visa Experts is an independent private consulting service. We are NOT affiliated
                with the Government of India, Ministry of External Affairs (MEA), Foreigners Regional
                Registration Office (FRRO), Indian Consulates, or any other government entity or agency.
                We do not represent any government body.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
                Visa Decisions Are Government Decisions
              </h2>
              <p className="leading-relaxed">
                All visa, immigration, and registration decisions are made solely and exclusively by the
                relevant government authorities — including Indian Consulates, Embassies, and the FRRO.
                India Visa Experts does not make or influence these decisions. We provide guidance and
                preparation assistance only.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
                No Guarantee of Visa Approval
              </h2>
              <p className="leading-relaxed">
                We do not and cannot guarantee that any visa application, FRRO registration, or
                immigration process handled with our assistance will result in a successful outcome.
                Visa decisions depend entirely on government discretion and the applicant&apos;s individual
                circumstances. Any representation suggesting guaranteed approval should be treated with
                suspicion, regardless of source.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
                Not Legal Advice
              </h2>
              <p className="leading-relaxed">
                The information provided on this website and through our services is for general
                informational and guidance purposes only. It does not constitute legal advice. India Visa Experts is not a law firm and our consultants are not lawyers. For legal advice,
                please consult a qualified lawyer specializing in Indian immigration law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
                Accuracy of Information
              </h2>
              <p className="leading-relaxed">
                While we strive to keep all information current and accurate, Indian immigration
                regulations can change with little or no notice. We cannot guarantee that all
                information on this website reflects the most current rules. Always verify requirements
                with the relevant Indian government authority or consulate before proceeding.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this disclaimer, please contact us at{" "}
                <a href={`mailto:${contact.email}`} className="text-navy-700 underline">
                  {contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
