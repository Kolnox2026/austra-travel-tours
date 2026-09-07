// Central site configuration. Replace every "[X]" placeholder with real
// business data before launch — see PLACEHOLDERS.md for the full checklist.

export const site = {
  name: 'AUSTRA TRAVEL & TOURS',
  shortName: 'Austra',
  tagline: 'Connecting People to the World, Beyond Borders.',
  mission:
    'We connect people to the world through verified opportunities, seamless travel solutions, and professional international mobility services—helping our clients work, study, travel, and grow beyond borders.',
  vision: "To become Africa's most trusted gateway to global mobility and opportunity.",
  description:
    'AUSTRA TRAVEL & TOURS is a Ghana-based international mobility and travel company connecting Ghanaians and residents of Ghana to verified travel, education, and visa opportunities.',
  url: 'https://austratravelandtours.com',

  // --- Placeholder contact details — replace before launch ---
  contact: {
    phoneDisplay: '+233 55 229 1068',
    phoneHref: 'tel:+233552291068',
    whatsappDisplay: '+233 55 229 1068',
    whatsappNumber: '233552291068', // digits only, no +, for wa.me links
    email: 'info@austratravelandtours.com',
    address: {
      line1: '[Street Address / Building Name]',
      line2: 'Kasoa, Central Region, Ghana',
    },
    // WhatsApp is monitored every day — this is what we lead with.
    messagingAvailability: 'Message us anytime — every day of the week',
    // Physical office visiting hours — a secondary detail, shown on the Contact page only.
    officeHours: [
      { days: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
      { days: 'Saturday', time: '9:00 AM – 3:00 PM' },
      { days: 'Sunday', time: 'By appointment' },
    ],
  },

  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    tiktok: '#',
  },
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hello AUSTRA TRAVEL & TOURS, I'd like to enquire about your services.";
