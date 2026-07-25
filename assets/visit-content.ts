export const visitIntro = {
  eyebrow: "Visit us",
  title: "Find the warm lights on the main street of El Paredón.",
  description:
    "Open a map, send a message, or walk in from the beach. Everything points toward the table.",
} as const;

export const visitLinks = [
  {
    label: "Google Maps",
    description: "Open Takoah in Google Maps",
    href: "https://www.google.com/maps/search/?api=1&query=Takoah%20El%20Paredon%20Guatemala",
  },
  {
    label: "Waze",
    description: "Navigate with Waze",
    href: "https://waze.com/ul?q=Takoah%20El%20Paredon%20Guatemala&navigate=yes",
  },
  {
    label: "WhatsApp",
    description: "Message us before you come",
    href: "https://wa.me/50271131675",
  },
  {
    label: "Instagram",
    description: "See what tonight looks like",
    href: "https://www.instagram.com/takoahparedon/",
  },
] as const;

export const arrivalNotes = [
  {
    title: "Tell your driver",
    text: "Takoah, El Paredón — main street, close to the beach-town evening flow.",
  },
  {
    title: "Best moment",
    text: "Arrive before golden hour, order the first round, and let the night settle around the table.",
  },
  {
    title: "If you are nearby",
    text: "Walk from the beach, follow the warm bamboo-and-wood feeling, and look for the Takoah marker.",
  },
] as const;
