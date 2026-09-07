export type Testimonial = {
  name: string;
  quote: string;
  service?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Nana M.',
    quote:
      "I've worked with AUSTRA on six international moves — passport, visa, flights, all of it — including business travel to and from the UK. They've never let me down, and I keep sending my friends their way.",
    service: 'Business & Relocation Client',
  },
  {
    name: 'Edmund Cudjo',
    quote:
      "I've worked with AUSTRA for five years, long before they had a website or any social media. I didn't have the money to fund a master's in the US, and I didn't know where to start — they found me a school, helped me apply for a scholarship, and guided me through the whole process. I finished my master's and I'm back in Ghana now. I'm glad they're finally putting this on a website — what they do deserves to be seen, not hidden.",
    service: 'Study Abroad Client',
  },
  {
    name: 'Eyram Mensah',
    quote:
      'AUSTRA is the best when it comes to booking and ticketing — dealing with them is easy, and they always deliver on what they say. I recommend them to everyone I know.',
    service: 'Travel & Tours Client',
  },
  {
    name: 'Anore Dankwa',
    quote:
      "I was in Ghana earning next to nothing. AUSTRA got me a much better job in Dubai and even sorted out a place for me to stay when I arrived. I've been working there for three years now, and I'm grateful for it. I recommend them to my friends, my family, anyone looking for real work abroad.",
    service: 'Work Abroad Client',
  },
];
