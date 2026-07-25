export type MenuStoryImage = {
  src: string;
  alt: string;
};

export type MenuStory = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: MenuStoryImage;
};

export const menuIntro = {
  eyebrow: "Menu",
  title: "Not a list. A table by the Pacific.",
  description:
    "A few confident things, served slowly: warm tortillas, cold drinks, shared plates, and the evening close enough to touch.",
} as const;

export const menuStories: readonly MenuStory[] = [
  {
    id: "first-bite",
    eyebrow: "First bite",
    title: "Warm tortillas, bright lime, ocean still on your skin.",
    description: "Premium tacos built around Guatemalan ingredients and the kind of hunger that arrives after the beach.",
    image: {
      src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1800&q=85",
      alt: "Editorial overhead photograph of tacos with lime and fresh toppings on a warm table",
    },
  },
  {
    id: "tequila",
    eyebrow: "Tequila & drinks",
    title: "Cold glasses. Salt air. The first round lands.",
    description: "Drinks are treated like the start of the night, not an afterthought.",
    image: {
      src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1800&q=85",
      alt: "Editorial photograph of cocktails with citrus in warm evening light",
    },
  },
  {
    id: "shared-table",
    eyebrow: "Shared table",
    title: "Order for the table and let the night get louder.",
    description: "Tacos, drinks, small decisions, long conversations.",
    image: {
      src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1800&q=85",
      alt: "Friends sharing food and drinks around a restaurant table",
    },
  },
];

export const menuHighlights = [
  "Warm tortillas",
  "Cold glasses",
  "Shared plates",
  "Pacific air",
] as const;

export const menuFinal = {
  eyebrow: "After the menu",
  title: "The best way to read it is at the table.",
  description: "Come hungry after the beach. Stay when the lights come on.",
} as const;
