export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: 'plane' | 'graduation' | 'shield' | 'briefcase' | 'passport' | 'globe';
  tagline: string;
  metaDescription: string;
  summary: string;
  features: string[];
  comingSoon?: boolean;
};

export const services: Service[] = [
  {
    slug: 'travel-tours',
    name: 'Travel & Tourism',
    shortName: 'Travel & Tours',
    icon: 'plane',
    tagline: 'Ticketing, hotels, packages, tours, and transfers — handled end to end.',
    metaDescription:
      'Flight ticketing, hotel bookings, tour packages, and airport transfers from AUSTRA TRAVEL & TOURS, based in Kasoa, Ghana.',
    summary:
      'From a single flight ticket to a fully planned trip, we handle the logistics so you can focus on the journey. We work with verified suppliers and are upfront about every cost before you book.',
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
    tagline: 'University applications, scholarship guidance, and document preparation.',
    metaDescription:
      'Study abroad support from AUSTRA TRAVEL & TOURS: verified university applications, scholarship guidance, and document preparation for Ghanaian students.',
    summary:
      'We guide students through choosing a programme, preparing a competitive application, and understanding scholarship options — working only with institutions that have passed our verification framework.',
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
    tagline: 'Administrative and documentation assistance — never an outcome guarantee.',
    metaDescription:
      'Visa and immigration administrative support, plus passport and travel document assistance, from AUSTRA TRAVEL & TOURS. We never guarantee visa outcomes.',
    summary:
      'We help you prepare a complete, accurate visa application — form guidance, supporting document checklists, and appointment logistics. The decision always rests with the embassy or consulate; we are administrative support only.',
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
    tagline: 'Travel logistics for delegates, executives, and business teams.',
    metaDescription:
      'Conference and business travel arrangements — flights, accommodation, and logistics — from AUSTRA TRAVEL & TOURS.',
    summary:
      'We arrange travel for conference delegates and business travellers: flights, accommodation near the venue, and the logistics that keep a business trip on schedule.',
    features: [
      'Conference and delegate travel packages',
      'Corporate flight and hotel booking',
      'Visa-supporting documentation for business travel',
      'Group coordination for teams and delegations',
      'Itinerary planning around event schedules',
    ],
  },
];

export const comingSoonService: Service = {
  slug: 'work-abroad',
  name: 'International Employment Mobility',
  shortName: 'Work Abroad',
  icon: 'globe',
  tagline: 'Verified international job placement — launching pending licensing.',
  metaDescription:
    'International employment mobility from AUSTRA TRAVEL & TOURS is coming soon, pending licensing. Join the interest list to be notified at launch.',
  summary:
    'We are building an international job placement service on the same verification framework that governs the rest of our work — every employer checked before it reaches a candidate. This service is not yet live and will only launch once the required licensing is in place.',
  features: [
    'Employer verification before any role is advertised',
    'Transparent, written fee disclosure — no exceptions',
    'No candidate will be asked to pay an unexplained "processing fee"',
    'Full compliance with Ghanaian labour migration licensing requirements',
  ],
  comingSoon: true,
};

export const allServices: Service[] = [...services, comingSoonService];
