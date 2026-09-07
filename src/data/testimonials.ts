export type Testimonial = {
  name: string;
  quote: string;
  service?: string;
};

// Intentionally empty until real client quotes are supplied — see
// PLACEHOLDERS.md for exactly what's needed before this can be populated.
// Do not fill this with invented quotes attributed to real people.
export const testimonials: Testimonial[] = [];
