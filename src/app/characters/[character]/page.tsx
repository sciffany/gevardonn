import { notFound } from "next/navigation";
import Image from "next/image";

// Character slug enum for type safety
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

// Character type definition
interface Character {
  slug: CharacterSlug;
  name: string;
  image: string;
  description: string;
  personality: string[];
  background: string;
  role?: string;
  type?: string;
}

// Character data with detailed information
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

interface CharacterPageProps {
  params: {
    character: string;
  };
}

export default function CharacterPage({ params }: CharacterPageProps) {
  const characterSlug = params.character as CharacterSlug;
  const character = CHARACTERS[characterSlug];

  if (!character) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'>
      <div className='container mx-auto px-4 py-8'>
        {/* Back button */}
        <div className='mb-6'>
          <a
            href='/characters'
            className='inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
            Back to Characters
          </a>
        </div>

        <div className='max-w-4xl mx-auto'>
          {/* Character Header */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              {character.name}
            </h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              {character.description}
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Character Image */}
            <div className='flex justify-center'>
              <div className='relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100'>
                <div className='w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center'>
                  {/* Placeholder for character image */}
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className='object-contain'
                  />
                </div>
                {/* Add actual image when available */}
                {/* <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>

            {/* Character Details */}
            <div className='space-y-8'>
              {/* Personality Traits */}
              <div>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Personality
                </h2>
                <div className='space-y-2'>
                  {character.personality.map((trait, index) => (
                    <div
                      key={index}
                      className='flex items-center text-gray-700'
                    >
                      <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                      {trait}
                    </div>
                  ))}
                </div>
              </div>

              {/* Background Story */}
              {/* <div>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Background
                </h2>
                <p className='text-gray-700 leading-relaxed'>
                  {character.background}
                </p>
              </div> */}

              {/* Character Stats */}
              <div>
                {/* <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Character Info
                </h2>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-white rounded-lg p-4 shadow-sm'>
                    <div className='text-sm text-gray-500'>Type</div>
                    <div className='font-semibold text-gray-800'>
                      {character.type}
                    </div>
                  </div>
                  <div className='bg-white rounded-lg p-4 shadow-sm'>
                    <div className='text-sm text-gray-500'>Role</div>
                    <div className='font-semibold text-gray-800'>
                      {character.role}
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
