'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardDemoProps {
  title: string;
  link: string;
  staticImage: string;
  achievement: string | string[];
}

export const CardDemo: React.FC<CardDemoProps> = ({
  title,
  link,
  staticImage,
  achievement,
}) => {
  const achievementLines = Array.isArray(achievement)
    ? achievement
    : achievement.split('\n'); // Split string by line breaks if it's a string

  return (
    <Link
      href={link}
      className="group relative w-80 h-96 rounded-xl overflow-hidden shadow-xl border border-white/10 hover:scale-105 transition-transform duration-500"
    >
      {/* Static image */}
      <div className="relative w-full h-full z-0">
        <Image
          src={staticImage}
          alt={`${title} Club`}
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0 z-[1]"
          priority
        />

        {/* Achievement overlay */}
        <div className="absolute inset-0 z-[2] bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center px-4 text-center">
          <div className="transition-all duration-700 ease-out transform group-hover:scale-105">
            {achievementLines.map((line, idx) => (
  <div
    key={idx}
    className="flex items-start gap-2 text-white text-sm md:text-base font-medium leading-snug mb-1"
  >
    <span className="mt-1 h-2 w-2 bg-white rounded-full shrink-0" />
    <p className="">{line}</p>
  </div>
))}

          </div>
        </div>

        {/* Club title */}
        <div className="absolute bottom-0 z-[3] w-full bg-black bg-opacity-60 text-white text-center py-2 text-lg font-semibold">
          {title}
        </div>
      </div>
    </Link>
  );
};
