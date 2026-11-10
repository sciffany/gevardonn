import { notFound } from "next/navigation";
import Image from "next/image";
import { CHARACTERS, CharacterSlug } from "../data";

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
