export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  heroImage?: string;
  overview: string;
  eligibility: string[];
  documents: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: "business-visa-india",
    title: "Business Visa India",
    shortTitle: "Business Visa",
    tagline: "Enter India's Market with Confidence",
    description:
      "Comprehensive assistance for obtaining Indian Business Visas for foreign nationals, executives, and entrepreneurs.",
    icon: "Briefcase",
    overview:
      "An Indian Business Visa (B Visa) allows foreign nationals to enter India for business-related activities such as attending meetings, conferences, exploring business opportunities, establishing ventures, or meeting clients and partners. It is not intended for employment or earning income in India. Our team provides end-to-end guidance, from eligibility assessment to application submission and follow-up.",
    eligibility: [
      "Foreign nationals visiting India for business meetings or conferences",
      "Entrepreneurs exploring investment opportunities in India",
      "Company representatives visiting Indian partners or clients",
      "Individuals attending trade fairs, exhibitions, or industry events",
      "Business professionals exploring joint ventures or partnerships",
      "Persons visiting for technical training or knowledge transfer (not employment)",
      "Investors conducting due diligence on Indian businesses",
    ],
    documents: [
      "Valid passport with at least 6 months validity beyond intended stay",
      "Completed and signed online visa application form",
      "Recent passport-size photographs (white background)",
      "Invitation letter from Indian company on company letterhead",
      "Business introduction letter from the applicant's employer",
      "Proof of financial means (bank statements, last 3 months)",
      "Company registration documents of the inviting Indian entity",
      "Flight itinerary and hotel booking confirmation",
      "Previous India visit records (if applicable)",
      "Business registration certificate of applicant's company (if self-employed)",
    ],
    process: [
      {
        step: 1,
        title: "Free Initial Consultation",
        description:
          "We assess your specific situation, travel purpose, and eligibility for a Business Visa. Our consultants identify the most appropriate visa category for your needs.",
      },
      {
        step: 2,
        title: "Document Checklist & Review",
        description:
          "We provide you with a tailored document checklist and review all your documents before submission to ensure completeness and accuracy.",
      },
      {
        step: 3,
        title: "Application Preparation",
        description:
          "Our team assists in accurately completing the online visa application form, drafting cover letters, and organizing your document package.",
      },
      {
        step: 4,
        title: "Submission Guidance",
        description:
          "We guide you through the submission process, whether through the Indian consulate, embassy, or e-Visa portal, and track your application.",
      },
      {
        step: 5,
        title: "Post-Arrival Support",
        description:
          "After arrival, we assist with FRRO registration (if required), visa condition compliance, and any extension needs that arise.",
      },
    ],
    faqs: [
      {
        question: "How long is an Indian Business Visa valid?",
        answer:
          "Business Visas for India are typically issued with validity ranging from 6 months to 5 years, with multiple-entry options. The actual stay per visit is usually limited to 180 days. Validity depends on your nationality and the discretion of the consulate.",
      },
      {
        question: "Can I work in India on a Business Visa?",
        answer:
          "No. A Business Visa does not permit employment or earning income in India. It only allows business-related activities like meetings, conferences, and exploring investment opportunities. For employment, an Employment Visa is required.",
      },
      {
        question: "Can I apply for a Business e-Visa for India?",
        answer:
          "Yes, many nationalities are eligible for an Indian Business e-Visa, which can be applied for online. The e-Business Visa allows up to two visits per year with a maximum stay of 180 days per visit. However, for long-term or high-value business activities, a regular Business Visa may be more appropriate.",
      },
      {
        question: "What activities are permitted on a Business Visa?",
        answer:
          "Permitted activities include attending business meetings, conferences, trade fairs, exhibitions, establishing business contacts, exploring investment opportunities, conducting audits, attending board meetings, and participating in technical training (as a trainer or attendee, not as an employee).",
      },
      {
        question: "How long does the Business Visa application process take?",
        answer:
          "Processing time varies by nationality and consulate. Typically, it ranges from 3 to 15 business days. We recommend applying at least 4 weeks before your intended travel date to allow adequate time for processing and any additional document requests.",
      },
    ],
    metaTitle: "India Business Visa Consultant | Expert Guidance | India Visa Experts",
    metaDescription:
      "Professional assistance for Indian Business Visa applications. Expert guidance on eligibility, documents, and process. Trusted India visa consultants for foreign nationals and companies.",
    keywords: [
      "India Business Visa",
      "Business Visa India consultant",
      "Indian Business Visa application",
      "B visa India",
      "India business visa requirements",
    ],
  },
  {
    slug: "employment-visa-india",
    title: "Employment Visa India",
    shortTitle: "Employment Visa",
    tagline: "Work in India — The Right Way",
    description:
      "Expert assistance for Employment Visa applications for foreign nationals seeking to work in India for Indian companies.",
    icon: "Users",
    overview:
      "An Indian Employment Visa (E Visa) is required for foreign nationals who intend to take up paid employment with an Indian company or organization. This visa is strictly regulated and typically requires that the foreign national is a specialist or skilled worker earning above a prescribed salary threshold. Our consultants guide employers and employees through the complex requirements to ensure a smooth and compliant application process.",
    eligibility: [
      "Foreign nationals offered employment by an Indian company or organization",
      "Skilled professionals, specialists, or senior executives relocating to India for work",
      "Foreign nationals earning a minimum annual gross salary of USD 25,000 or equivalent (exceptions apply for ethnic cook, language teacher, etc.)",
      "Foreign nationals deputed to India by a foreign parent company to their Indian subsidiary",
      "Technical experts deputed for specific technical projects",
      "Employees assigned to India under inter-company transfer arrangements",
    ],
    documents: [
      "Valid passport with at least 6 months validity",
      "Completed online visa application form",
      "Recent passport-size photographs",
      "Employment contract or offer letter from the Indian employer",
      "Educational qualification certificates (originals/attested copies)",
      "Professional experience certificates and credentials",
      "Employer's letter confirming salary, designation, and nature of work",
      "Company registration documents of the Indian employer",
      "Tax registration documents (PAN, GST) of the Indian employer",
      "Bank statements of the Indian employer (3-6 months)",
      "Copies of applicant's professional licenses (if applicable)",
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Assessment",
        description:
          "We review the applicant's qualifications, salary, and the nature of employment to confirm Employment Visa eligibility and advise on the most appropriate approach.",
      },
      {
        step: 2,
        title: "Employer Compliance Check",
        description:
          "We ensure the Indian employer meets all regulatory requirements, including having proper registrations and the capacity to sponsor a foreign employee.",
      },
      {
        step: 3,
        title: "Document Preparation",
        description:
          "Our team prepares a comprehensive document package, including employer letters, employment contracts, and supporting credentials reviewed for accuracy.",
      },
      {
        step: 4,
        title: "Application Filing",
        description:
          "We guide you through the online application process and consulate appointment scheduling, ensuring all forms are accurately completed.",
      },
      {
        step: 5,
        title: "FRRO Registration & Compliance",
        description:
          "After visa grant and arrival in India, we assist with mandatory FRRO registration within 14 days and ongoing compliance requirements.",
      },
    ],
    faqs: [
      {
        question: "What is the minimum salary required for an Employment Visa?",
        answer:
          "Generally, a minimum annual gross salary of USD 25,000 (or its equivalent) is required. However, this threshold does not apply to ethnic cooks, language teachers/translators, and staff employed by diplomatic missions. The actual threshold may vary; consult our team for the most current figures.",
      },
      {
        question: "How long is an Employment Visa valid?",
        answer:
          "Employment Visas are typically granted for 1 year initially or for the duration of the employment contract, whichever is shorter, subject to a maximum of 5 years. Extensions are possible if the employment continues.",
      },
      {
        question: "Can my family accompany me on an Employment Visa?",
        answer:
          "Yes. Your spouse and dependent children can accompany you on an X (Dependent) Visa. Your X Visa dependents are permitted to study in India but not to take up employment.",
      },
      {
        question: "Does my employer need to register anywhere in India?",
        answer:
          "Yes. The sponsoring Indian employer must be properly registered, have a valid business license, and must often report the employment of the foreign national to the FRRO/FRO after the employee's arrival in India.",
      },
      {
        question: "What happens if I change employers while on an Employment Visa?",
        answer:
          "An Employment Visa is employer-specific. Changing employers requires applying for a new Employment Visa with the new employer. Working for a different employer than the one specified in your visa without proper authorization is a violation of visa conditions.",
      },
    ],
    metaTitle: "Employment Visa India | Work Permit Assistance | India Visa Experts",
    metaDescription:
      "Expert assistance for Employment Visa India applications. We guide foreign nationals and Indian employers through the complete process. Compliance-focused immigration consulting.",
    keywords: [
      "Employment Visa India",
      "India work visa",
      "Employment visa consultant India",
      "work permit India foreign national",
      "E visa India",
    ],
  },
  {
    slug: "x-visa-india",
    title: "X Visa India (Dependent Visa)",
    shortTitle: "X Visa",
    tagline: "Keep Your Family Together in India",
    description:
      "Expert assistance for X Visa (Dependent Visa) applications for spouses and dependents of foreign nationals working or residing in India.",
    icon: "Heart",
    overview:
      "The X Visa, commonly known as the Dependent Visa or Entry Visa, allows spouses, minor children, and in some cases, dependent parents of foreign nationals already residing in India (on Employment, Student, or other long-term visas) to join them in India. Our consultants help families navigate this often-complex process with care and precision.",
    eligibility: [
      "Spouses of foreign nationals holding valid Employment, Student, or other qualifying Indian visas",
      "Minor children (unmarried, below 18 years) of qualifying foreign national visa holders",
      "Dependent parents of foreign nationals residing in India in specific circumstances",
      "Spouses of Indian citizens or Overseas Citizens of India (OCI) cardholders in some cases",
      "Family members joining foreign nationals assigned to diplomatic missions in India",
    ],
    documents: [
      "Valid passport of the applicant (spouse/dependent)",
      "Completed online visa application form",
      "Recent passport-size photographs",
      "Valid visa copy of the principal foreign national in India",
      "Marriage certificate (for spouses) — apostilled or attested",
      "Birth certificates of dependent children",
      "Proof of relationship (additional supporting documents as required)",
      "Proof of financial support from the principal visa holder",
      "Employment letter or FRRO registration copy of the principal visa holder",
      "Residential proof in India of the principal visa holder",
    ],
    process: [
      {
        step: 1,
        title: "Relationship & Eligibility Verification",
        description:
          "We confirm that the relationship and visa status of the principal foreign national qualifies the dependent for an X Visa.",
      },
      {
        step: 2,
        title: "Document Authentication Guidance",
        description:
          "We advise on authenticating key documents like marriage and birth certificates through apostille or attestation, which is often required.",
      },
      {
        step: 3,
        title: "Application Preparation",
        description:
          "Our team prepares the complete application package, including cover letters and supporting documents organized for submission.",
      },
      {
        step: 4,
        title: "Consulate Submission Support",
        description:
          "We guide you through the application submission process at the appropriate Indian consulate or embassy in your country.",
      },
      {
        step: 5,
        title: "Post-Arrival FRRO Registration",
        description:
          "After arrival, we assist X Visa holders with mandatory FRRO registration and advise on conditions — including restrictions on employment.",
      },
    ],
    faqs: [
      {
        question: "Can an X Visa holder work in India?",
        answer:
          "Generally, no. X Visa holders (dependents) are not permitted to take up paid employment in India. They may study. If a dependent wishes to work, they must apply for a separate Employment Visa in their own right.",
      },
      {
        question: "How long is an X Visa valid?",
        answer:
          "An X Visa is typically co-terminus with the visa of the principal foreign national. If the primary visa holder's Employment Visa is valid for 2 years, the X Visa is usually granted for the same period.",
      },
      {
        question: "Do children need an X Visa to come to India?",
        answer:
          "Yes. Minor children of foreign nationals residing in India typically need an X (Dependent) Visa to join their parent. Once in India, they can attend school or college without requiring a separate student visa in most cases, provided they hold a valid X Visa.",
      },
      {
        question: "Can I convert an X Visa to an Employment Visa if I find a job?",
        answer:
          "A visa conversion within India is complex and generally not straightforward. If an X Visa holder secures employment, the appropriate process is typically to apply for an Employment Visa from outside India. We advise consulting our team before attempting any visa change.",
      },
      {
        question: "Is FRRO registration mandatory for X Visa holders?",
        answer:
          "Yes. X Visa holders, like most other long-stay visa holders, are required to register with the FRRO/FRO within 14 days of arrival in India if their intended stay exceeds 180 days.",
      },
    ],
    metaTitle: "X Visa India | Dependent Visa for Spouses & Family | India Visa Experts",
    metaDescription:
      "Expert guidance for X Visa (Dependent Visa) applications in India. Assistance for spouses and dependents of foreign nationals working in India. Professional immigration consulting.",
    keywords: [
      "X Visa India",
      "Dependent Visa India",
      "spouse visa India",
      "family visa India",
      "X visa India consultant",
    ],
  },
  {
    slug: "frro-registration-india",
    title: "FRRO Registration India",
    shortTitle: "FRRO Registration",
    tagline: "Stay Compliant — Register With Authorities",
    description:
      "Complete assistance with FRRO/FRO registration, renewals, visa extensions, and residential permit management for foreign nationals in India.",
    icon: "ClipboardList",
    overview:
      "The Foreigners Regional Registration Office (FRRO) registration is mandatory for most foreign nationals who intend to stay in India for more than 180 days. It is also required for holders of certain visa categories regardless of duration. FRRO registration is a critical compliance requirement, and failing to register can result in overstay penalties, detention, or deportation. We provide comprehensive FRRO registration assistance, including initial registration, renewals, exit permits, and residential permit management.",
    eligibility: [
      "Foreign nationals on long-stay visas (Employment, Student, Research, etc.) staying beyond 180 days",
      "Foreign nationals on visas specifically requiring registration regardless of stay duration",
      "X Visa holders (dependents) staying beyond 180 days",
      "Persons of Indian Origin (PIO) with certain visa types",
      "Foreign nationals on Business Visa staying beyond 180 days",
      "All Pakistani nationals (regardless of duration of stay)",
      "Foreign nationals requiring residential permit renewals",
    ],
    documents: [
      "Original valid passport",
      "Copy of valid Indian visa",
      "Completed FRRO registration application form",
      "Residential address proof in India (rental agreement, utility bills)",
      "Landlord's NOC and copy of their identity document",
      "Employer's letter confirming employment details (for Employment Visa holders)",
      "Educational institution enrollment letter (for Student Visa holders)",
      "Passport-size photographs",
      "Copy of arrival stamp in passport",
      "Previous FRRO registration certificate (for renewals)",
      "Income tax documents (PAN card, if applicable)",
    ],
    process: [
      {
        step: 1,
        title: "Registration Requirement Assessment",
        description:
          "We determine whether FRRO registration is required based on your visa type, nationality, and intended stay duration.",
      },
      {
        step: 2,
        title: "Document Collection & Verification",
        description:
          "We provide a complete document checklist and review all documents to ensure they meet FRRO requirements before submission.",
      },
      {
        step: 3,
        title: "Online Application Filing",
        description:
          "We file your FRRO registration application through the online FRRO portal (foreignersportals.gov.in) on your behalf or guide you through the process.",
      },
      {
        step: 4,
        title: "Appointment & In-Person Assistance",
        description:
          "We help you schedule your FRRO appointment and, where required, accompany or guide you through the in-person registration process.",
      },
      {
        step: 5,
        title: "Residential Permit & Ongoing Compliance",
        description:
          "After registration, we provide your Residential Permit and advise on renewal timelines, exit permits, and all ongoing compliance obligations.",
      },
    ],
    faqs: [
      {
        question: "Within how many days of arrival must I register with FRRO?",
        answer:
          "Foreign nationals who are required to register must do so within 14 days of their arrival in India. Failing to register within this period may result in penalties. We strongly recommend initiating the registration process immediately after arriving.",
      },
      {
        question: "What is the penalty for late FRRO registration?",
        answer:
          "Late registration attracts a penalty that varies depending on the duration of delay. Additionally, it can complicate future visa extensions and may adversely affect your immigration record. Always register on time.",
      },
      {
        question: "Can I do FRRO registration online?",
        answer:
          "Yes, the FRRO has an online portal (foreignersportals.gov.in) where applications can be submitted. However, an in-person visit to the FRRO or a police station may still be required for biometrics and document verification. Our team assists with both the online and in-person aspects.",
      },
      {
        question: "Do I need an exit permit from FRRO when leaving India?",
        answer:
          "An exit permit may be required in certain circumstances, such as when your visa has expired or if there are compliance issues with your registration. We advise that all foreign nationals check their exit requirements before departure to avoid issues at the airport.",
      },
      {
        question: "How often does FRRO registration need to be renewed?",
        answer:
          "FRRO Residential Permits are generally co-terminus with your visa validity. When you renew your visa or extend your stay, your FRRO registration must be updated accordingly. We track renewal deadlines for our clients to ensure continuous compliance.",
      },
    ],
    metaTitle: "FRRO Registration India | Foreign Nationals Compliance | India Visa Experts",
    metaDescription:
      "Expert FRRO registration assistance for foreign nationals in India. Initial registration, renewals, exit permits and compliance guidance. Avoid penalties with professional support.",
    keywords: [
      "FRRO registration India",
      "FRRO registration consultant",
      "foreigners registration India",
      "FRRO online registration",
      "residential permit India",
    ],
  },
  {
    slug: "visa-extension-india",
    title: "Visa Extension India",
    shortTitle: "Visa Extension",
    tagline: "Extend Your Stay — Legally and Seamlessly",
    description:
      "Professional assistance for Indian visa extensions for foreign nationals who need to prolong their authorized stay in India.",
    icon: "CalendarDays",
    overview:
      "Extending a visa while inside India is a complex process managed by the FRRO. Visa extensions are granted on a case-by-case basis and are not guaranteed. The grounds for extension must be valid, well-documented, and comply with the original purpose of the visa. Our consultants help you build a compelling extension application, ensure all documentation is in order, and guide you through the FRRO process to maximize your chances of approval.",
    eligibility: [
      "Foreign nationals needing to extend their stay beyond the current visa validity for genuine reasons",
      "Employment Visa holders whose employment continues beyond their current visa period",
      "Business Visa holders with ongoing business activities requiring extended stay",
      "Medical Visa holders continuing treatment in India",
      "Student Visa holders whose courses extend beyond the current visa",
      "Persons unable to leave India due to medical emergencies",
      "Individuals whose travel documents are pending renewal",
    ],
    documents: [
      "Original passport with current valid visa",
      "FRRO registration certificate",
      "Completed visa extension application form",
      "Supporting documents justifying the extension (employment letter, medical certificate, enrollment letter, etc.)",
      "Recent passport-size photographs",
      "Proof of current residential address in India",
      "Bank statements showing financial means for extended stay",
      "Tax compliance documents (if applicable)",
      "No-objection letter from employer/sponsor (where applicable)",
      "Travel itinerary or proof of onward travel (for non-employment extensions)",
    ],
    process: [
      {
        step: 1,
        title: "Extension Eligibility Review",
        description:
          "We assess whether your circumstances qualify for a visa extension and advise on the grounds and documentation needed.",
      },
      {
        step: 2,
        title: "Documentation Preparation",
        description:
          "We prepare a comprehensive document package supporting your extension request, including drafting all necessary letters and compiling supporting evidence.",
      },
      {
        step: 3,
        title: "FRRO Online Application",
        description:
          "We file the extension application through the FRRO online portal and obtain your appointment at the relevant FRRO office.",
      },
      {
        step: 4,
        title: "FRRO Appointment & Representation",
        description:
          "We guide you through or accompany you to the FRRO appointment, presenting your case effectively and addressing any queries.",
      },
      {
        step: 5,
        title: "Post-Extension Compliance",
        description:
          "After extension approval, we update your FRRO records, provide your new Residential Permit, and advise on all compliance obligations.",
      },
    ],
    faqs: [
      {
        question: "Can any visa be extended in India?",
        answer:
          "Not all visas can be extended within India. Employment, Student, Medical, and some other long-stay visa types may be extendable. Tourist visas are generally not extendable in India and would require the holder to exit and re-enter. Our consultants assess your specific situation.",
      },
      {
        question: "How long in advance should I apply for a visa extension?",
        answer:
          "We recommend applying for a visa extension at least 60 days before your current visa expires. FRRO offices can be busy, and processing can take time. Applying late risks an overstay situation.",
      },
      {
        question: "What if my visa expires before my extension is approved?",
        answer:
          "This is a risk that must be carefully managed. If your extension application is pending with the FRRO before your visa expires, you are generally considered in a compliant status. However, this is a grey area and can cause problems. We strongly advise applying well before expiry.",
      },
      {
        question: "Is a visa extension the same as a visa renewal?",
        answer:
          "Not exactly. An extension increases the validity of your current visa, while a renewal typically involves applying for a new visa (which for most categories must be done from your home country or a third country). Within India, the FRRO grants extensions; visa renewals are generally processed abroad.",
      },
      {
        question: "What happens if I overstay my visa in India?",
        answer:
          "Overstaying is a serious violation. Consequences include fines, detention, deportation, and a ban on re-entry to India. If you are at risk of overstaying, contact us immediately so we can help you regularize your status.",
      },
    ],
    metaTitle: "Visa Extension India | FRRO Visa Extension Consultant | India Visa Experts",
    metaDescription:
      "Professional visa extension assistance for foreign nationals in India. We handle FRRO applications, documentation, and compliance to extend your authorized stay in India.",
    keywords: [
      "visa extension India",
      "India visa extension FRRO",
      "extend visa India",
      "FRRO visa extension consultant",
      "long stay visa India",
    ],
  },
  {
    slug: "oci-services-india",
    title: "OCI Card & Entry Visa Services",
    shortTitle: "OCI & Entry Visa",
    tagline: "Connecting the Indian Diaspora to Their Roots",
    description:
      "Expert guidance for OCI Card applications, Entry Visa assistance, and services for persons of Indian origin and their families.",
    icon: "Globe",
    overview:
      "The Overseas Citizen of India (OCI) card is a lifetime visa that allows persons of Indian origin (up to the fourth generation) and their foreign-national spouses to live and work in India indefinitely without requiring a regular visa or FRRO registration for most purposes. Entry Visas (X Visa in certain contexts) are required for foreign-national spouses of Indian citizens or OCI cardholders. We provide comprehensive assistance with OCI applications, conversions from PIO to OCI, and Entry Visa services for qualifying individuals.",
    eligibility: [
      "Foreign nationals who were citizens of India at any time after 26 January 1950",
      "Foreign nationals eligible to become citizens of India on 26 January 1950",
      "Children, grandchildren, and great-grandchildren of persons described above",
      "Spouses of OCI cardholders or Indian citizens (foreign nationals)",
      "Minor children with at least one OCI cardholder parent",
      "PIO (Person of Indian Origin) cardholders seeking conversion to OCI",
    ],
    documents: [
      "Valid foreign passport",
      "Evidence of Indian origin (parent/grandparent/great-grandparent's Indian passport or birth certificate)",
      "Renunciation certificate (if the applicant or ancestor was an Indian citizen who renounced)",
      "Marriage certificate (for spouses of OCI cardholders/Indian citizens)",
      "OCI cardholder spouse's OCI card and passport (for spouse applicants)",
      "Indian citizen spouse's passport (for spouse applicants)",
      "Proof of current nationality (naturalization certificate, etc.)",
      "Birth certificates establishing lineage",
      "Photographs meeting OCI specifications",
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Assessment",
        description:
          "We verify your eligibility for OCI based on your lineage, nationality history, and family connections to India.",
      },
      {
        step: 2,
        title: "Documentation Guidance",
        description:
          "We provide detailed guidance on gathering lineage documents, Indian citizenship evidence, and authentication requirements.",
      },
      {
        step: 3,
        title: "Online Application Filing",
        description:
          "We prepare and file your OCI application through the official OCI portal, ensuring all sections are accurately completed.",
      },
      {
        step: 4,
        title: "Consulate Coordination",
        description:
          "We coordinate with the relevant Indian consulate or mission for appointment scheduling, biometrics, and document submission.",
      },
      {
        step: 5,
        title: "Post-Issue Assistance",
        description:
          "We advise on OCI card usage, the requirement for life-event re-registration (for minors growing up), and renunciation procedures if needed.",
      },
    ],
    faqs: [
      {
        question: "Is OCI the same as dual citizenship?",
        answer:
          "No. OCI is not dual citizenship. OCI cardholders do not have Indian citizenship and cannot vote in Indian elections, hold Indian government jobs, or acquire agricultural land in India. However, it provides many of the benefits of residency and lifetime visa access.",
      },
      {
        question: "Does an OCI cardholder need FRRO registration?",
        answer:
          "Generally, OCI cardholders are exempt from FRRO registration during their stay in India. However, they should still comply with any specific conditions attached to their OCI card and report to the FRRO in specific circumstances as required by current regulations.",
      },
      {
        question: "Can a foreign national spouse of an Indian citizen get OCI?",
        answer:
          "Yes. Foreign-national spouses of Indian citizens are eligible for OCI cards, provided the marriage has been registered and is subsisting. We assist with OCI applications for spouses, including the required documentation.",
      },
      {
        question: "Can OCI cardholders work in India?",
        answer:
          "Yes. OCI cardholders can work in India. They do not need an Employment Visa or FRRO registration for employment purposes. However, certain sectors (defence, atomic energy, etc.) may have restrictions on OCI cardholder employment.",
      },
      {
        question: "What is the difference between OCI and Entry Visa (X Visa) for Indian spouses?",
        answer:
          "OCI provides long-term, FRRO-exempt residency. An Entry/X Visa is typically for shorter-term visits or while an OCI application is pending. For spouses of Indian citizens, OCI is the preferred long-term solution. We advise on which option suits your situation.",
      },
    ],
    metaTitle: "OCI Card India | Entry Visa Services | India Visa Experts",
    metaDescription:
      "Expert OCI card application assistance and Entry Visa services for persons of Indian origin and spouses of Indian citizens. Professional immigration guidance for the Indian diaspora.",
    keywords: [
      "OCI card India",
      "OCI application consultant",
      "Overseas Citizen of India",
      "entry visa India",
      "OCI vs X visa India",
    ],
  },
  {
    slug: "foreign-company-india-advisory",
    title: "Foreign Company India Advisory",
    shortTitle: "Foreign Company Advisory",
    tagline: "Enter the Indian Market with Expert Guidance",
    description:
      "Strategic advisory for foreign companies seeking to establish presence in India, manage foreign national employees, and ensure complete compliance.",
    icon: "Building2",
    overview:
      "India is one of the world's fastest-growing economies, and an increasing number of foreign companies are establishing operations here. However, navigating India's business establishment, foreign national employment, and compliance frameworks can be complex. Our Foreign Company Advisory service provides holistic support — from entity setup advisory to ongoing immigration compliance management for foreign national employees and directors.",
    eligibility: [
      "Foreign companies planning to establish operations in India",
      "Multinational corporations with Indian subsidiaries",
      "Foreign companies deputing staff to India",
      "Startups and SMEs from abroad entering the Indian market",
      "Foreign companies with foreign national directors based in India",
      "HR departments managing foreign national employees in India",
    ],
    documents: [
      "Certificate of Incorporation of the foreign parent company",
      "Board resolution authorizing establishment of India operations",
      "Proposed Indian entity structure documents",
      "Employment contracts for foreign national employees",
      "Director appointment letters (for foreign national directors)",
      "Passport copies of all foreign national employees/directors",
      "Business plan for India operations",
    ],
    process: [
      {
        step: 1,
        title: "India Entry Strategy Session",
        description:
          "We understand your business objectives and advise on the most appropriate India entry structure — subsidiary, liaison office, branch office, or project office.",
      },
      {
        step: 2,
        title: "Immigration Needs Assessment",
        description:
          "We assess the visa and immigration requirements for all foreign national employees and directors who will be based in or visiting India.",
      },
      {
        step: 3,
        title: "Visa & Documentation Management",
        description:
          "We manage all Business and Employment Visa applications for your team, ensuring timely processing and compliance.",
      },
      {
        step: 4,
        title: "FRRO Registration & Compliance",
        description:
          "We handle FRRO registrations for all foreign national employees, maintain compliance records, and manage renewal calendars.",
      },
      {
        step: 5,
        title: "Ongoing Advisory & Support",
        description:
          "We provide ongoing immigration advisory as your India operations evolve — new hires, departures, visa renewals, and regulatory changes.",
      },
    ],
    faqs: [
      {
        question: "Can a foreign company have foreign national directors in India?",
        answer:
          "Yes. Foreign companies operating through Indian subsidiaries can appoint foreign nationals as directors. Such directors typically need appropriate visas (Business or Employment Visa depending on their role and whether they draw a salary from the Indian entity) and must comply with Indian company law requirements.",
      },
      {
        question: "Does a foreign company need to register in India to hire employees there?",
        answer:
          "Yes. If a foreign company wishes to employ people in India (including foreign nationals), it generally needs to establish a legally recognized entity in India, such as a subsidiary or branch office. We advise on the most appropriate structure for your business.",
      },
      {
        question: "How many foreign nationals can work for an Indian company?",
        answer:
          "There is no fixed statutory limit on the number of foreign nationals who can work for an Indian company, but each must individually qualify for and hold a valid Employment Visa. The Indian company must also have the financial capacity to justify the employment.",
      },
      {
        question: "Are there any sectors where foreign nationals cannot work in India?",
        answer:
          "Yes. Certain sensitive sectors such as defence, atomic energy, and some government-regulated industries have restrictions on foreign nationals. We advise on sector-specific restrictions before proceeding with visa applications.",
      },
      {
        question: "What are the compliance obligations for foreign national employees in India?",
        answer:
          "Key obligations include obtaining the correct visa, registering with the FRRO within 14 days of arrival, reporting to the employer's registered HR, complying with visa conditions, and maintaining up-to-date residential permits. The employer also has reporting obligations to the FRRO.",
      },
    ],
    metaTitle: "Foreign Company India Advisory | Immigration Compliance | India Visa Experts",
    metaDescription:
      "Strategic immigration and compliance advisory for foreign companies operating in India. Visa management, FRRO registration, and ongoing compliance support for HR teams.",
    keywords: [
      "foreign company India advisory",
      "India entry strategy",
      "foreign national compliance India",
      "India immigration for companies",
      "foreign employee India visa",
    ],
  },
  {
    slug: "medical-visa-india",
    title: "Medical Visa for India",
    shortTitle: "Medical Tourism",
    tagline: "Treatment Travel — Handled End to End",
    description:
      "Complete assistance with the e-Medical Visa, Medical Attendant Visa, AYUSH Visa, hospital invitation letters, FRRO registration, and on-treatment extensions for international patients and their families.",
    icon: "Stethoscope",
    overview:
      "India is one of the world's leading medical tourism destinations, treating over 600,000 international patients each year at NABH- and JCI-accredited hospitals for 30–70% less than many Western countries. The Medical Visa (M-Visa) is granted to foreign nationals whose sole purpose of travel is treatment at a recognised or accredited Indian hospital. It exists in three forms: the e-Medical Visa for patients, the Medical Attendant Visa for accompanying family, and the AYUSH Visa for traditional treatment such as Ayurveda and Yoga. The detail most patients miss is duration: the e-Medical Visa is valid for 60 days from first arrival with triple entry — not the \"one year\" often quoted, which actually refers to the regular paper Medical Visa issued through an embassy, a separate channel with heavier documentation. We help you choose the correct visa for your treatment timeline, prepare the stamped hospital invitation letter and supporting medical records, file accurately to avoid rejection, and manage FRRO registration and any e-FRRO extension if recovery runs long.",
    eligibility: [
      "e-Medical Visa — for the patient travelling for treatment at a recognised or accredited Indian hospital",
      "Medical Attendant Visa (MED X) — up to two close blood relatives accompanying the patient",
      "AYUSH Visa — for Ayurveda, Yoga, Naturopathy, Unani, Siddha, or Homeopathy treatment",
      "Patients seeking cardiac care, oncology, organ transplants, orthopedics (knee/hip replacement), or neurosurgery",
      "Follow-up patients returning for review at the same Indian hospital",
      "Note: surrogacy is excluded from this category, and tourist-to-medical visa conversion is generally not permitted",
    ],
    documents: [
      "Passport valid 6+ months with at least two blank pages",
      "Recent front-facing photograph with a white background",
      "Stamped invitation letter on hospital letterhead, stating treatment type and start/end dates",
      "Prior diagnostic and medical reports (CT / MRI / X-ray, as applicable)",
      "Proof of funds — certified 3-month bank statement or sponsor affidavit",
      "Discharge summary or previous medical papers (for follow-up treatment)",
      "Attendant's proof of relationship to the patient (for the Medical Attendant Visa)",
      "Travel itinerary covering arrival and treatment dates",
    ],
    process: [
      {
        step: 1,
        title: "Visa & Timeline Assessment",
        description:
          "We confirm whether the e-Medical or regular Medical Visa fits your treatment length, and map the 60-day limit against your recovery plan.",
      },
      {
        step: 2,
        title: "Hospital Letter & Documents",
        description:
          "We coordinate the stamped hospital invitation letter and review your medical records and proof of funds before submission.",
      },
      {
        step: 3,
        title: "Online Application Filing",
        description:
          "We prepare and file the e-Medical and Medical Attendant applications accurately on the official portal to avoid rejection.",
      },
      {
        step: 4,
        title: "Arrival & FRRO Registration",
        description:
          "We handle the e-Arrival Card and FRRO registration, including the tighter deadlines that apply to some nationalities.",
      },
      {
        step: 5,
        title: "Extensions & Compliance",
        description:
          "If recovery runs past 60 days, we manage the e-FRRO extension with a fresh hospital certificate and keep you compliant.",
      },
    ],
    faqs: [
      {
        question: "How long is the e-Medical Visa valid?",
        answer:
          "The e-Medical Visa is valid for 60 days from your first arrival in India, with triple entry. If your treatment needs longer, the regular paper Medical Visa or an e-FRRO extension is the route — we assess which applies to your case before you apply.",
      },
      {
        question: "Can my family travel with me?",
        answer:
          "Yes. Up to two close blood relatives can accompany you on Medical Attendant Visas (MED X), issued in line with your Medical Visa. We file these together with the patient's application.",
      },
      {
        question: "Do I need to register with the FRRO after arrival?",
        answer:
          "It depends on your nationality and stay length. Most nationals register within 14 days if the visa exceeds 180 days, but some nationalities must register within 24 hours of arrival. We confirm your specific deadline and handle the filing.",
      },
      {
        question: "What happens if my treatment takes longer than the visa allows?",
        answer:
          "You can apply for an extension of up to one year through the e-FRRO portal, supported by a fresh certificate from your treating hospital justifying continued stay. The process is online, and we manage it for you.",
      },
      {
        question: "Can I convert a tourist visa to a medical visa after arriving?",
        answer:
          "Generally no — visa conversion is not permitted. For a sudden illness or emergency, a Medical Permit via the FRRO may be possible. We advise on the correct route before you travel to avoid this situation.",
      },
      {
        question: "How early should I apply?",
        answer:
          "Apply at least four days before arrival, within a 120-day window. e-Medical Visas are often processed within 72 hours, but we recommend starting early so visa timing aligns with your hospital admission date.",
      },
    ],
    metaTitle: "Medical Visa India | e-Medical Visa & Treatment Travel | India Visa Experts",
    metaDescription:
      "Expert help with the India e-Medical Visa, Medical Attendant Visa, and AYUSH Visa — hospital invitation letters, FRRO registration, and treatment extensions for international patients.",
    keywords: [
      "India Medical Visa",
      "e-Medical Visa India",
      "medical tourism India",
      "Medical Attendant Visa India",
      "AYUSH visa India",
      "India treatment travel",
      "medical visa for India",
    ],
  },
];

export const serviceCards = [
  {
    slug: "business-visa-india",
    title: "Business Visa",
    description: "Guidance for executives, investors, and entrepreneurs seeking to conduct business in India.",
    icon: "Briefcase",
  },
  {
    slug: "employment-visa-india",
    title: "Employment Visa",
    description: "Complete support for foreign nationals and Indian employers through the Employment Visa process.",
    icon: "Users",
  },
  {
    slug: "x-visa-india",
    title: "X Visa (Dependent)",
    description: "Helping families stay together — X Visa assistance for spouses and dependents.",
    icon: "Heart",
  },
  {
    slug: "frro-registration-india",
    title: "FRRO Registration",
    description: "Mandatory registration assistance for foreign nationals staying beyond 180 days in India.",
    icon: "ClipboardList",
  },
  {
    slug: "visa-extension-india",
    title: "Visa Extension",
    description: "Extend your authorized stay in India through the FRRO with professional support.",
    icon: "CalendarDays",
  },
  {
    slug: "oci-services-india",
    title: "OCI & Entry Visa",
    description: "OCI card applications and Entry Visa services for the Indian diaspora and their families.",
    icon: "Globe",
  },
  {
    slug: "foreign-company-india-advisory",
    title: "Foreign Company Advisory",
    description: "Holistic immigration compliance support for foreign companies operating in India.",
    icon: "Building2",
  },
  {
    slug: "foreign-company-india-advisory",
    title: "Document Review",
    description: "Professional review of visa applications and immigration documents before submission.",
    icon: "FileCheck",
  },
];
