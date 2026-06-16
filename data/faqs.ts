export interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  // Business Visa
  {
    id: 1,
    category: "Business Visa",
    question: "Who needs an Indian Business Visa?",
    answer:
      "Any foreign national visiting India for business-related activities — such as attending meetings, conferences, exploring investments, or meeting clients — requires a Business Visa. It is distinct from a Tourist Visa and does not permit employment or earning income in India.",
  },
  {
    id: 2,
    category: "Business Visa",
    question: "How many times can I enter India on a Business Visa?",
    answer:
      "Most Indian Business Visas are issued as multiple-entry visas, allowing you to enter and exit India multiple times during the visa validity period. The duration of each visit is typically limited, so it is important to track your stay carefully.",
  },
  {
    id: 3,
    category: "Business Visa",
    question: "Can I apply for an Indian Business e-Visa?",
    answer:
      "Yes. India offers an electronic Business Visa (e-Business Visa) for eligible nationalities. The e-visa can be applied for online and is typically processed within a few business days. However, for long-term or high-value engagements, a regular consulate-issued Business Visa may be more appropriate.",
  },
  {
    id: 4,
    category: "Business Visa",
    question: "What is the difference between a Business Visa and an Employment Visa?",
    answer:
      "A Business Visa is for visiting India to conduct business (meetings, conferences, investments) without working for an Indian employer. An Employment Visa is required when a foreign national will take up paid employment with an Indian company and receive a salary from that company. The Employment Visa has more stringent requirements, including a minimum salary threshold.",
  },
  {
    id: 5,
    category: "Business Visa",
    question: "How long can I stay in India on a Business Visa?",
    answer:
      "The permitted stay per visit on a Business Visa is typically up to 180 days. However, the actual duration is determined by the immigration officer at the port of entry. You should carry supporting business documents to justify your stay duration.",
  },
  // Employment Visa
  {
    id: 6,
    category: "Employment Visa",
    question: "What is the minimum salary for an Employment Visa?",
    answer:
      "The general minimum annual gross salary requirement for an Employment Visa is USD 25,000 or its equivalent. Exceptions exist for certain categories like ethnic cooks, language teachers, and staff employed by diplomatic missions. Always verify the current threshold, as it can change.",
  },
  {
    id: 7,
    category: "Employment Visa",
    question: "Can I apply for an Employment Visa while already in India?",
    answer:
      "Employment Visas are generally applied for from the applicant's home country or country of residence. Changing from another visa type to an Employment Visa within India is extremely rare and generally not permitted. Applicants should apply for the Employment Visa at an Indian embassy/consulate abroad.",
  },
  {
    id: 8,
    category: "Employment Visa",
    question: "Does my Indian employer need to do anything for my Employment Visa?",
    answer:
      "Yes. The Indian employer plays a critical role. They must provide an invitation letter, employment contract, proof of company registration, financial statements, and in some cases, a business justification for hiring a foreign national. The employer is also responsible for reporting the foreign national's employment to the FRRO after arrival.",
  },
  {
    id: 9,
    category: "Employment Visa",
    question: "Can my family join me in India on an Employment Visa?",
    answer:
      "Yes. Your spouse and dependent children can accompany you or join you later on X (Dependent) Visas. X Visa holders can study in India but cannot take up paid employment without obtaining their own Employment Visa.",
  },
  {
    id: 10,
    category: "Employment Visa",
    question: "What happens to my visa if I change jobs in India?",
    answer:
      "Your Employment Visa is tied to a specific employer. If you change employers, you generally need to obtain a fresh Employment Visa with the new employer details. Working for a different employer than the one specified in your visa without authorization is a violation of Indian immigration law.",
  },
  // X Visa
  {
    id: 11,
    category: "X Visa",
    question: "What is an X Visa in India?",
    answer:
      "An X Visa (also called a Dependent Visa or Entry Visa) allows the spouse, minor children, and in some cases, parents of a qualifying foreign national (on Employment, Student, or other long-stay visas) to join that person in India. X Visa holders can study but generally cannot work.",
  },
  {
    id: 12,
    category: "X Visa",
    question: "Can I convert my X Visa to an Employment Visa?",
    answer:
      "Visa conversion within India is generally not possible in a straightforward manner. If you secure employment while holding an X Visa, the recommended approach is to exit India and apply for an Employment Visa from your home country or country of residence. Consult our team to navigate this correctly.",
  },
  {
    id: 13,
    category: "X Visa",
    question: "What documents are needed for an X Visa for India?",
    answer:
      "Key documents include your passport, a copy of the primary visa holder's valid Indian visa, marriage certificate (for spouses — apostilled/attested), birth certificates (for children), proof of the relationship, and financial support evidence. Our team provides a tailored checklist for your situation.",
  },
  // FRRO
  {
    id: 14,
    category: "FRRO Registration",
    question: "What is FRRO registration and is it mandatory?",
    answer:
      "FRRO (Foreigners Regional Registration Office) registration is a mandatory compliance requirement for foreign nationals staying in India beyond 180 days (and for some visa categories regardless of stay duration). It results in a Residential Permit that must be kept valid throughout your stay.",
  },
  {
    id: 15,
    category: "FRRO Registration",
    question: "How do I register with FRRO in India?",
    answer:
      "FRRO registration is done online through the official foreigners portal (foreignersportals.gov.in), followed by an in-person appointment (in some cases). Our team handles the complete process including document preparation, online filing, and appointment coordination.",
  },
  {
    id: 16,
    category: "FRRO Registration",
    question: "What is the deadline for FRRO registration after arrival in India?",
    answer:
      "Foreign nationals who are required to register must do so within 14 days of their arrival in India. We strongly recommend starting the process immediately after arrival to avoid penalties for late registration.",
  },
  {
    id: 17,
    category: "FRRO Registration",
    question: "Do OCI cardholders need FRRO registration?",
    answer:
      "Generally, OCI cardholders are exempt from FRRO registration. This is one of the significant advantages of the OCI card over regular long-stay visas. However, OCI cardholders should still comply with any specific reporting requirements that may apply in particular circumstances.",
  },
  // Visa Extension
  {
    id: 18,
    category: "Visa Extension",
    question: "Can I extend my visa without leaving India?",
    answer:
      "For certain visa categories (Employment, Student, Medical), it is possible to apply for an extension within India through the FRRO. Tourist visas are generally not extendable within India. The extension is granted at the FRRO's discretion and is not guaranteed.",
  },
  {
    id: 19,
    category: "Visa Extension",
    question: "What is the risk of applying for a visa extension at the last minute?",
    answer:
      "Applying too close to your visa expiry date is risky. FRRO offices can be busy, processing can take time, and if your visa expires before the extension is granted, you may technically be in an overstay situation. We recommend applying at least 60 days before your visa expires.",
  },
  {
    id: 20,
    category: "Visa Extension",
    question: "What documents support a visa extension application in India?",
    answer:
      "Required documents depend on your visa type and reason for extension. Generally, you need your passport, FRRO Residential Permit, proof of residence in India, and supporting documents justifying the extension (employment letter, medical certificate, institution letter, etc.).",
  },
  // Foreign Companies
  {
    id: 21,
    category: "Foreign Companies",
    question: "What visa does a foreign director of an Indian company need?",
    answer:
      "A foreign national who is a director of an Indian company but is not drawing a salary from the Indian entity may be eligible for a Business Visa for visits. If they are relocating to India and managing the company's operations (even without salary from the Indian entity), an Employment Visa may be required. Each case must be assessed individually.",
  },
  {
    id: 22,
    category: "Foreign Companies",
    question: "Can a foreign company depute employees to India?",
    answer:
      "Yes. A foreign parent company can depute employees to its Indian subsidiary or affiliate. Deputed employees must obtain appropriate Employment Visas for India. The salary must meet the minimum threshold, and the employment must comply with all Indian immigration requirements.",
  },
  // Compliance
  {
    id: 23,
    category: "Compliance",
    question: "What are the consequences of overstaying a visa in India?",
    answer:
      "Overstaying is a serious violation of Indian immigration law. Consequences include fines (which can be substantial), detention, deportation, and a ban on future entry to India. If you are at risk of overstaying, contact us immediately to regularize your status before your visa expires.",
  },
  {
    id: 24,
    category: "Compliance",
    question: "Is India Visa Experts affiliated with the Indian Government?",
    answer:
      "No. India Visa Experts is an independent private consulting firm. We are not affiliated with the Government of India, the Ministry of External Affairs (MEA), FRRO, or any government agency. All visa decisions are made solely by the relevant government authorities. We provide expert guidance to assist your application.",
  },
  {
    id: 25,
    category: "Compliance",
    question: "How can I ensure my company's foreign employees are compliant?",
    answer:
      "Key compliance steps include: ensuring all foreign employees hold the correct visa type, registering with FRRO within 14 days of arrival, maintaining up-to-date Residential Permits, tracking visa expiry dates, ensuring any change of address or employer is reported to the FRRO, and exiting India (or applying for extension) before visas expire. Our compliance management service handles all of this for your HR team.",
  },
];

export const faqCategories = [
  "All",
  "Business Visa",
  "Employment Visa",
  "X Visa",
  "FRRO Registration",
  "Visa Extension",
  "Foreign Companies",
  "Compliance",
];
