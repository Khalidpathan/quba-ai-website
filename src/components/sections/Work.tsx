// @/components/sections/Work.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useCases } from '@/data/useCases';

const WorkSection = () => {
  return (
    // Updated section styling to match the rest of the site
    <section id="blog" className="bg-gradient-to-t from-gray-900 via-blue-900/20 to-gray-900 text-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center md:text-left mb-12">
          <span className="bg-black text-white text-sm font-medium px-3 py-1.5 rounded-full border border-blue-500/30">
            Insights
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            From Our Use Cases
          </h2>
        </div>
        <div className="space-y-6">
          {useCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={`/use-cases/${useCase.slug}`}
              target="_blank"                  // Open link in new tab
              rel="noopener noreferrer"        // Security best practice
              className="
                group flex items-center p-4 gap-4 md:gap-6 rounded-2xl 
                bg-black/20 border border-gray-700/50 
                hover:border-blue-500/30 hover:bg-blue/40
                transition-all duration-300
                block
              "
            >
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-md overflow-hidden">
                <Image
                  src={useCase.thumbnail}
                  alt={`Thumbnail for ${useCase.title}`}
                  width={128}
                  height={80}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-400 mb-1">{useCase.date}</p>
                <h3 className="text-base md:text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                  {useCase.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
