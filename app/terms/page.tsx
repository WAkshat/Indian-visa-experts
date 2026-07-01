import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for India Visa Experts immigration consulting services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-white/60">Last updated: June 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">1. Nature of Services</h2>
              <p className="leading-relaxed">
                India Visa Experts is an independent private consulting firm providing visa and
                immigration advisory services. We are NOT a government agency, law firm, or official
                representative of any government authority. We do not guarantee visa approvals, as all
                decisions rest solely with the relevant government authorities.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">2. No Guarantee of Outcome</h2>
              <p className="leading-relaxed">
                Our services are advisory and preparatory in nature. While we strive to provide the
                best possible guidance and document preparation, we cannot guarantee the outcome of any
                visa application, FRRO registration, or immigration process. Approval decisions rest
                entirely with the relevant government authorities.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">3. Client Responsibilities</h2>
              <p className="leading-relaxed mb-3">Clients are responsible for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Providing accurate and truthful information</li>
                <li>Providing genuine, authenticated documents</li>
                <li>Timely provision of requested information and documents</li>
                <li>Making their own informed decisions about immigration actions</li>
                <li>Complying with all applicable Indian immigration laws</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">4. Fees and Payment</h2>
              <p className="leading-relaxed">
                Our consulting fees are agreed upon prior to engagement. Fees are for our advisory
                and preparation services only and do not include government visa fees, courier charges,
                or other third-party costs. Refund policies are as specified in individual engagement
                agreements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                India Visa Experts shall not be liable for any damages arising from visa rejection,
                delays, changes in government regulations, errors in information provided by clients,
                or any other circumstances beyond our reasonable control. Our liability is limited to
                the fees paid for the specific service.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">6. Confidentiality</h2>
              <p className="leading-relaxed">
                We maintain strict confidentiality of all client information. Documents and personal
                data shared with us are used solely for the purpose of providing agreed consulting
                services and are not disclosed to unauthorized parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">7. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services
                after changes constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
