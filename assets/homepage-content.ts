export const homepageScenes = [
  {
    id: "experience",
    time: "01",
    eyebrow: "Ocean",
    title: "The Pacific opens everything.",
    description:
      "Before the first table, before the first drink, there is only horizon, salt air, and the slow pull of El Paredón.",
    sensoryCue: "Blue distance / slow tide / first breath",
    palette: "from-takoah-pacific/30 via-background to-background",
    frameKind: "ocean",
  },
  {
    id: "beach",
    time: "02",
    eyebrow: "Beach",
    title: "Footprints replace the road.",
    description:
      "The walk gets softer. Sand holds the afternoon heat while the day begins pointing everyone in the same direction.",
    sensoryCue: "Warm sand / bare feet / low sun",
    palette: "from-takoah-sand/50 via-background to-background",
    frameKind: "beach",
  },
  {
    id: "surf",
    time: "03",
    eyebrow: "Surfers",
    title: "The last boards leave the water.",
    description:
      "Wet hair, tired shoulders, and that specific hunger that arrives after the ocean has had you for hours.",
    sensoryCue: "Boards / salt skin / post-surf appetite",
    palette: "from-takoah-pacific/20 via-takoah-sand/30 to-background",
    frameKind: "surf",
  },
  {
    id: "palms",
    time: "04",
    eyebrow: "Palm trees",
    title: "Shadows stretch across the path.",
    description:
      "The wide beach becomes a slower corridor of palms, warm wind, and the feeling that the evening has already chosen a place.",
    sensoryCue: "Palm shade / moving leaves / closer voices",
    palette: "from-takoah-palm/20 via-takoah-sand/25 to-background",
    frameKind: "palms",
  },
  {
    id: "bamboo",
    time: "05",
    eyebrow: "Bamboo architecture",
    title: "The horizon becomes texture.",
    description:
      "Bamboo, wood grain, and woven shade pull the story inward. The beach is still there, but the night now has a frame.",
    sensoryCue: "Bamboo rhythm / wood grain / amber shade",
    palette: "from-takoah-wood/25 via-takoah-golden/20 to-background",
    frameKind: "bamboo",
  },
  {
    id: "takoah",
    time: "06",
    eyebrow: "Takoah",
    title: "Then the place reveals itself.",
    description:
      "Not loud. Not precious. Just warm light, open tables, and the unmistakable feeling that this is where the evening turns.",
    sensoryCue: "Open table / first pour / welcome light",
    palette: "from-takoah-tequila/30 via-takoah-golden/25 to-background",
    frameKind: "takoah",
  },
  {
    id: "golden-hour",
    time: "07",
    eyebrow: "Golden hour",
    title: "Everything turns honey-colored.",
    description:
      "Glasses catch the sun. Tortillas arrive warm. For a few minutes, the whole table looks like it belongs to the light.",
    sensoryCue: "Gold light / lime / cold glass",
    palette: "from-takoah-golden/40 via-takoah-sunset/25 to-background",
    frameKind: "golden",
  },
  {
    id: "people",
    time: "08",
    eyebrow: "Friends laughing",
    title: "The soundtrack becomes human.",
    description:
      "Someone reaches across the table. Someone orders another round. The food matters because of what happens around it.",
    sensoryCue: "Shared plates / laughter / warm faces",
    palette: "from-takoah-sunset/30 via-takoah-candle/30 to-background",
    frameKind: "people",
  },
  {
    id: "night",
    time: "09",
    eyebrow: "Night",
    title: "The beach goes dark. Takoah stays lit.",
    description:
      "The ocean becomes a sound in the distance. The table glows closer. The night finally feels found.",
    sensoryCue: "Indigo sky / candlelight / see you tonight",
    palette: "from-takoah-night/35 via-takoah-wood/25 to-background",
    frameKind: "night",
  },
] as const;

export type HomepageScene = (typeof homepageScenes)[number];

export const homepageVisit = {
  id: "visit",
  eyebrow: "See you tonight",
  title: "The night is close. Takoah is waiting.",
  description: "Come for the tacos and tequila. Stay for the table, the warm lights, and the story you will tell tomorrow.",
} as const;
