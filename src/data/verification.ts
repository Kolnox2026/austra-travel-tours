export type VerificationStatus = 'verified' | 'under-review' | 'rejected';

export const verificationStatusMeta: Record<
  VerificationStatus,
  { label: string; description: string }
> = {
  verified: {
    label: 'Verified',
    description: 'Checked against our framework and cleared to be presented to clients.',
  },
  'under-review': {
    label: 'Under Review',
    description: 'Currently being checked. Not yet presented to clients as an active option.',
  },
  rejected: {
    label: 'Rejected',
    description: 'Failed our checks and will not be presented to clients, regardless of demand.',
  },
};

export type VerificationStep = {
  step: number;
  title: string;
  description: string;
};

export const verificationSteps: VerificationStep[] = [
  {
    step: 1,
    title: 'Submission & Documentation',
    description:
      'Every employer, school, or supplier we consider must provide verifiable registration, accreditation, or licensing documents before we go any further.',
  },
  {
    step: 2,
    title: 'Independent Compliance Check',
    description:
      'We cross-check those documents against official registries and, where relevant, direct contact with the institution — not just the paperwork they hand us.',
  },
  {
    step: 3,
    title: 'Status Decision',
    description:
      'Every partner is assigned one of three public statuses: Verified, Under Review, or Rejected. There is no "trusted but unlisted" category.',
  },
  {
    step: 4,
    title: 'Published & Monitored',
    description:
      'The status is shown to clients before they engage with that opportunity, and is re-checked on a recurring basis — a Verified partner can be moved back to Under Review if something changes.',
  },
];

export type SampleListing = {
  category: string;
  name: string;
  status: VerificationStatus;
  note: string;
};

// Illustrative examples only — used to demonstrate how the framework will
// display real partners once the live partner directory is published.
export const sampleListings: SampleListing[] = [
  {
    category: 'Education Partner',
    name: 'Sample Partner University',
    status: 'verified',
    note: 'Accreditation confirmed with issuing authority.',
  },
  {
    category: 'Travel Supplier',
    name: 'Sample Tour Operator',
    status: 'under-review',
    note: 'Licensing documents submitted, compliance check in progress.',
  },
  {
    category: 'Employer Partner',
    name: 'Sample Employer Ltd.',
    status: 'rejected',
    note: 'Could not confirm registration with relevant authority.',
  },
];
