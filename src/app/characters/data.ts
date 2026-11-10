export enum CharacterSlug {
  POTTER_THE_OTTER = "potter-the-otter",
  NYU_AND_BARNACLO = "nyu-and-barnaclo",
  JELLERINA = "jellerina",
  DRUMEDARY = "drumedary",
  ENERGY_LEVEL = "energy-level",
  STEGGO = "steggo",
  ENCORE = "encore",
  RECURSOR = "recursor",
  RYLIE = "rylie",
}

export interface Character {
  slug: CharacterSlug;
  name: string;
  image: string;
  description: string;
  personality: string[];
  background: string;
  role?: string;
  type?: string;
}

export const CHARACTERS: Record<CharacterSlug, Character> = {
  [CharacterSlug.POTTER_THE_OTTER]: {
    slug: CharacterSlug.POTTER_THE_OTTER,
    name: "Potter the Otter",
    image: "/potter-the-otter-2.png?v=4",
    description:
      "Swashbuckling gravity-defying hero with a thirst for adventure",
    personality: [
      "Fun-loving, daring, and risk-taking",
      "Overly protective of his friends",
      "Nimble and dexterous",
      "A little bit of a show-off",
      "Easily distracted",
    ],
    background: "",
  },
  [CharacterSlug.NYU_AND_BARNACLO]: {
    slug: CharacterSlug.NYU_AND_BARNACLO,
    name: "Nyu and Barnaclo",
    image: "/nyu-and-barnaclo.png",
    description:
      "Symbiotic duo between a quizzical alien and a humble barnacle",
    personality: [],
    background: "",
  },
  [CharacterSlug.JELLERINA]: {
    slug: CharacterSlug.JELLERINA,
    name: "Jellerina",
    image: "/jellerina.png",
    description: "Whimsical bioluminescent soul-healing cnidarian",
    personality: [],
    background: "",
  },
  [CharacterSlug.DRUMEDARY]: {
    slug: CharacterSlug.DRUMEDARY,
    name: "Drumedary",
    image: "/drumedary.png",
    description:
      "Down-to-earth camel whose heart beats to the rhythm of New Arabia",
    personality: [],
    background: "",
  },
  [CharacterSlug.ENERGY_LEVEL]: {
    slug: CharacterSlug.ENERGY_LEVEL,
    name: "Energy Level",
    image: "/energy-level.png",
    description:
      "Cylindrical triple-A battery with a positive charge and perspective",
    personality: [],
    background: "",
  },
  [CharacterSlug.STEGGO]: {
    slug: CharacterSlug.STEGGO,
    name: "Steggo",
    image: "/steggo.png",
    description: "Misunderstood, pure-hearted, loyal pet who can tango",
    personality: [],
    background: "",
  },
  [CharacterSlug.ENCORE]: {
    slug: CharacterSlug.ENCORE,
    name: "Encore",
    image: "/rocket.png",
    description: "Charismatic cosmic wanderer who yearns for exploration",
    personality: [],
    background: "",
  },
  [CharacterSlug.RECURSOR]: {
    slug: CharacterSlug.RECURSOR,
    name: "Recursor",
    image: "/recursor.png?v=2",
    description: "Time-warping, wifi-enabled, bouncy assistant",
    personality: [],
    background: "",
  },
  [CharacterSlug.RYLIE]: {
    slug: CharacterSlug.RYLIE,
    name: "Rylie",
    image: "/rylie.png",
    description: "Time-warping, wifi-enabled, bouncy assistant",
    personality: [],
    background: "",
  },
};
