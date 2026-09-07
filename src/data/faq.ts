export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'Can you guarantee my visa will be approved?',
    answer:
      "No one can control an embassy's decision — not us, not any agency anywhere. What we control is the quality of your application: we prepare it to the highest standard, with the right documents in the right format, so you go in with the strongest possible case.",
  },
  {
    question: "What does \"Verified\" actually mean?",
    answer:
      'Before we promote any employer, school, or supplier, we independently confirm their registration and legitimacy — not just accept the paperwork they hand us. Only partners that pass this check carry a Verified badge, and we keep re-checking after that.',
  },
  {
    question: 'Are your fees clear upfront?',
    answer:
      "Yes. You'll see the full cost of our service in writing before you pay anything — no hidden charges, no surprise fees added after the fact.",
  },
  {
    question: 'How do I get started?',
    answer:
      "Message us on WhatsApp and tell us what you're after — work, study, travel, or a business trip. We'll walk you through your realistic options from there.",
  },
];
