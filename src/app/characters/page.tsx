import Image from "next/image";
import Link from "next/link";
import { CHARACTERS, CharacterSlug } from "./data";

const Characters = [
  {
    slug: "potter-the-otter",
    name: "Potter the Otter",
    image: "/potter-the-otter-2.png?v=4",
  },
  {
    slug: "nyu-and-barnaclo",
    name: "Nyu and Barnaclo",
    image: "/nyu-and-barnaclo.png",
  },
  {
    slug: "jellerina",
    name: "Jellerina",
    image: "/jellerina.png",
  },
  {
    slug: "drumedary",
    name: "Drumedary",
    image: "/drumedary.png",
  },
  {
    slug: "energy-level",
    name: "Energy Level",
    image: "/energy-level.png",
  },
  {
    slug: "steggo",
    name: "Steggo",
    image: "/steggo.png",
  },
  {
    slug: "encore",
    name: "Encore",
    image: "/rocket.png",
  },
  {
    slug: "recursor",
    name: "Recursor",
    image: "/recursor.png?v=2",
  },
];

Characters.sort((a, b) => (Math.random() > 0.5 ? 1 : -1));

export default function CharactersPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-200'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
          Creatures of Gevardonn
        </h1>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {Characters.map((character) => (
            <Link
              key={character.slug}
              href={`/characters/${character.slug}`}
              className='group'
            >
              <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300'>
                <div className='aspect-square relative'>
                  <div className='w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center'>
                    {/* Placeholder for character image */}
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className='p-3 bg-white'>
                  <h2 className='text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200'>
                    {character.name}
                  </h2>
                  <p className='text-xs text-gray-600 mt-1'>
                    {CHARACTERS?.[character.slug as CharacterSlug]?.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
