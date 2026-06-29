/**
 * Shared facts for the Visa Finder and Visa Types comparison.
 *
 * These are general, widely-documented rules — NOT legal advice, and they change.
 * Keep them conservative and hedged; every consumer page shows a "verify with us"
 * disclaimer. Single source of truth so a rule only needs updating once.
 */

/** A row in the visa-types comparison table. `slug` deep-links to the service page. */
export interface VisaComparisonRow {
  slug: string;
  name: string;
  bestFor: string;
  typicalStay: string;
  multipleEntry: string;
  extendableInIndia: string;
  eVisa: string;
}

export const visaComparison: VisaComparisonRow[] = [
  {
    slug: "business-visa-india",
    name: "Business Visa",
    bestFor: "Meetings, conferences, investment, client visits (no salaried work in India)",
    typicalStay: "Commonly up to 180 days per visit",
    multipleEntry: "Usually multiple-entry",
    extendableInIndia: "Generally not extendable",
    eVisa: "e-Business Visa available for eligible nationalities",
  },
  {
    slug: "employment-visa-india",
    name: "Employment Visa",
    bestFor: "Foreign nationals taking up paid employment with an Indian company",
    typicalStay: "Linked to the employment contract; renewable",
    multipleEntry: "Multiple-entry",
    extendableInIndia: "Extendable via FRRO (conditions apply)",
    eVisa: "Not available — apply at an Indian mission abroad",
  },
  {
    slug: "x-visa-india",
    name: "X (Dependent) Visa",
    bestFor: "Spouse and dependent children of a qualifying long-stay visa holder",
    typicalStay: "Usually co-terminus with the principal visa holder",
    multipleEntry: "Multiple-entry",
    extendableInIndia: "Extendable alongside the principal visa (via FRRO)",
    eVisa: "Not available",
  },
  {
    slug: "medical-visa-india",
    name: "Medical Visa",
    bestFor: "International patients seeking treatment at Indian hospitals",
    typicalStay: "e-Medical Visa up to 60 days; regular Medical Visa longer",
    multipleEntry: "e-Medical: triple entry; regular: multiple-entry",
    extendableInIndia: "Regular Medical Visa extendable via FRRO",
    eVisa: "e-Medical Visa available for eligible nationalities",
  },
  {
    slug: "oci-services-india",
    name: "OCI Card / Entry Visa",
    bestFor: "Persons of Indian origin and their spouses",
    typicalStay: "OCI: lifelong, multiple-entry",
    multipleEntry: "OCI: lifelong multiple-entry",
    extendableInIndia: "OCI holders are generally exempt from FRRO registration",
    eVisa: "N/A — OCI card / Entry (X) Visa",
  },
];

/** A purpose option in the Visa Finder; routes the visitor to the right service. */
export interface FinderOption {
  id: string;
  label: string;
  /** lucide-react icon name */
  icon: string;
  slug: string;
  visaName: string;
  why: string;
}

export const finderOptions: FinderOption[] = [
  {
    id: "business",
    label: "Attend business meetings, a conference, or explore investment",
    icon: "Briefcase",
    slug: "business-visa-india",
    visaName: "Business Visa",
    why: "The Business Visa covers meetings, conferences, and investment exploration — without taking up paid employment in India.",
  },
  {
    id: "employment",
    label: "Take up a paid job with an Indian company",
    icon: "Users",
    slug: "employment-visa-india",
    visaName: "Employment Visa",
    why: "Paid employment with an Indian employer requires an Employment Visa, applied for from an Indian mission abroad.",
  },
  {
    id: "family",
    label: "Join a family member who already lives in India",
    icon: "Heart",
    slug: "x-visa-india",
    visaName: "X (Dependent) Visa",
    why: "Spouses and dependent children of qualifying long-stay visa holders travel on the X (Dependent) Visa.",
  },
  {
    id: "medical",
    label: "Get medical treatment in India",
    icon: "Stethoscope",
    slug: "medical-visa-india",
    visaName: "Medical Visa",
    why: "Treatment at an Indian hospital is covered by the e-Medical or regular Medical Visa, with Medical Attendant visas for companions.",
  },
  {
    id: "oci",
    label: "I'm of Indian origin, or married to someone who is",
    icon: "Globe",
    slug: "oci-services-india",
    visaName: "OCI Card / Entry Visa",
    why: "Persons of Indian origin and their spouses are usually best served by an OCI card or Entry (X) Visa.",
  },
  {
    id: "extend",
    label: "Extend a stay I'm already on in India",
    icon: "CalendarDays",
    slug: "visa-extension-india",
    visaName: "Visa Extension",
    why: "Eligible visa categories can be extended within India through the FRRO — best started well before your visa expires.",
  },
  {
    id: "frro",
    label: "Register with the authorities / I'm staying 180+ days",
    icon: "ClipboardList",
    slug: "frro-registration-india",
    visaName: "FRRO Registration",
    why: "Stays beyond 180 days (and some visa categories regardless of length) require FRRO registration within 14 days of arrival.",
  },
  {
    id: "company",
    label: "Set up or run a foreign company's operations in India",
    icon: "Building2",
    slug: "foreign-company-india-advisory",
    visaName: "Foreign Company Advisory",
    why: "Companies moving people to India get end-to-end immigration and compliance support, often spanning Business and Employment visas.",
  },
];
