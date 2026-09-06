export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: 'plane' | 'graduation' | 'shield' | 'briefcase' | 'passport' | 'globe';
  tagline: string;
  metaDescription: string;
  summary: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'travel-tours',
    name: 'Travel & Tourism',
    shortName: 'Travel & Tours',
    icon: 'plane',
    tagline: 'Flights, hotels, tours, and transfers — booked right, priced honestly.',
    metaDescription:
      'Flight ticketing, hotel bookings, tour packages, and airport transfers from AUSTRA TRAVEL & TOURS, based in Kasoa, Ghana.',
    summary:
      'From a single flight ticket to a fully planned holiday, we take care of the details so you can enjoy the trip. Verified suppliers, competitive prices, and a team that answers when you call.',
    features: [
      'Domestic and international flight ticketing',
      'Hotel and accommodation bookings',
      'Custom tour packages and itineraries',
      'Airport pickup and transfer arrangements',
      'Group and family travel coordination',
    ],
  },
  {
    slug: 'study-abroad',
    name: 'Education & Scholarship Support',
    shortName: 'Study Abroad',
    icon: 'graduation',
    tagline: 'Get into the right school, with an application that actually stands out.',
    metaDescription:
      'Study abroad support from AUSTRA TRAVEL & TOURS: university applications, scholarship guidance, and document preparation for Ghanaian students.',
    summary:
      'We help you pick the right programme, build a genuinely competitive application, and find scholarships you actually qualify for — working only with schools that have passed our verification framework.',
    features: [
      'University and college application support',
      'Scholarship research and guidance',
      'Statement of purpose and document preparation',
      'Verified institution shortlisting',
      'Application timeline and checklist management',
    ],
  },
  {
    slug: 'visa-support',
    name: 'Visa & Immigration Support',
    shortName: 'Visa Support',
    icon: 'shield',
    tagline: 'Your visa application, prepared and submitted the right way.',
    metaDescription:
      'Visa, immigration, passport, and travel document support from AUSTRA TRAVEL & TOURS in Kasoa, Ghana — done right, the first time.',
    summary:
      'We handle your visa application from start to finish — the forms, the supporting documents, the appointment, every detail that trips people up. Our clients go in prepared, not guessing.',
    features: [
      'Visa application form guidance',
      'Supporting document checklists and review',
      'Appointment scheduling assistance',
      'Passport application and renewal assistance',
      'Travel document preparation support',
    ],
  },
  {
    slug: 'conferences-business-travel',
    name: 'Conference & Business Travel',
    shortName: 'Conferences & Business',
    icon: 'briefcase',
    tagline: 'Delegate and executive travel, handled so you can focus on business.',
    metaDescription:
      'Conference and business travel arrangements — flights, accommodation, and logistics — from AUSTRA TRAVEL & TOURS.',
    summary:
      'We arrange travel for conference delegates and business teams: flights, accommodation near the venue, and logistics that keep every trip on schedule.',
    features: [
      'Conference and delegate travel packages',
      'Corporate flight and hotel booking',
      'Visa-supporting documentation for business travel',
      'Group coordination for teams and delegations',
      'Itinerary planning around event schedules',
    ],
  },
  {
    slug: 'work-abroad',
    name: 'International Employment Mobility',
    shortName: 'Work Abroad',
    icon: 'globe',
    tagline: 'Real jobs with verified overseas employers.',
    metaDescription:
      'International employment mobility from AUSTRA TRAVEL & TOURS — verified overseas employer placements for qualified candidates.',
    summary:
      'We connect qualified candidates with overseas employers we have personally checked — so you know exactly who you are working for before you say yes to anything.',
    features: [
      'Employer verification before any role is advertised',
      'Clear, written fee disclosure from day one',
      'No unexplained "processing fees" — ever',
      'Support from offer through documentation and relocation',
    ],
  },
];
