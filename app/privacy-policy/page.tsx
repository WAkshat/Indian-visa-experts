import type { Metadata } from "next";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of India Visa Experts — independent immigration consulting service.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last updated: June 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">1. Introduction</h2>
              <p className="leading-relaxed">
                India Visa Experts (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
                personal information. This Privacy Policy explains how we collect, use, and safeguard
                your information when you visit our website or use our consulting services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, nationality, and country of residence when you submit inquiry forms.</li>
                <li><strong>Document Information:</strong> Passport details, visa information, and other immigration documents shared for consulting purposes.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</li>
                <li><strong>Communication Records:</strong> Records of communications between you and our team.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide immigration consulting services to you</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
                However, no internet transmission is completely secure. We cannot guarantee absolute
                security of data transmitted to us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">5. Data Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share
                information with service providers who assist in our operations, subject to
                confidentiality agreements. We may disclose information if required by law or
                government authority.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">6. Your Rights</h2>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal obligations)</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">7. Cookies</h2>
              <p className="leading-relaxed">
                Our website uses cookies to enhance your browsing experience. You can control cookies
                through your browser settings. Disabling cookies may affect some features of our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">8. Contact Us</h2>
              <p className="leading-relaxed">
                For privacy-related queries, contact us at:{" "}
                <a href={`mailto:${contact.email}`} className="text-navy-700 underline">
                  {contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
