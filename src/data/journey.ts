export type JourneyStep = {
  step: number;
  title: string;
  description: string;
};

// The client's journey with us — distinct from verification.ts, which
// describes how we vet partners, not what the client experiences.
export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: 'Consultation',
    description: 'Tell us what you need — travel, study, visa support, or business travel — and we map out your realistic options.',
  },
  {
    step: 2,
    title: 'Verification',
    description: 'We check the employer, school, or supplier against our framework before you commit to anything.',
  },
  {
    step: 3,
    title: 'Documentation',
    description: 'We prepare and track every document the process actually requires, so nothing holds you up.',
  },
  {
    step: 4,
    title: 'Delivery',
    description: 'Booking, application, or travel completed — with verification status visible to you the whole way.',
  },
];
