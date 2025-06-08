import React, { Suspense } from 'react';
import { MagicCard } from '@/components/magicui/magic-card';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

// Lazy load social icons to reduce initial bundle size
const SocialLinks = React.memo(({ socialLinks }: { socialLinks: Array<{ icon: any; url: string; label: string }> }) => (
  <div className="mt-8 flex gap-6">
    {socialLinks.map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-2xl text-gray-700 transition-colors duration-300 ${
          social.label === 'LinkedIn' 
            ? 'hover:text-[#0077b5]' 
            : social.label === 'Twitter' 
            ? 'hover:text-[#1DA1F2]'
            : 'hover:text-[#E1306C]'
        }`}
        aria-label={social.label}
      >
        <social.icon />
      </a>
    ))}
  </div>
));

SocialLinks.displayName = 'SocialLinks';

const About = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/company/hoscaa', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/hoscaa', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com/hoscaa', label: 'Instagram' },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-500 via-amber-500 to-white py-24">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 via-transparent to-gray-200/20 pointer-events-none" />
      
      {/* Use will-change-transform to optimize animations */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 max-w-7xl mx-auto" style={{ willChange: 'transform' }}>
        <Suspense fallback={<div className="w-full max-w-4xl h-[300px] bg-gray-100 animate-pulse rounded-xl" />}>
          <MagicCard className="w-full max-w-4xl p-9 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white/90 transition-colors duration-300 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-25 h-25 md:w-30 md:h-30">
                <Image
                  src="/hosca.jpg"
                  alt="Hoscaa Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100px, 150px"
                  loading="eager"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 via-red-500 to-gray-800 bg-clip-text text-transparent">
                  About Hosca
                </h1>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  HoSCA - House of Socio-Cultural Affairs is an organ of Gymkhana body that takes the responsibility of the cultural and social activities of IIT Patna. It Organises numerous activities ranging from the Nebula- welcoming party of freshers to Reverberance - the festival of lights and colours. It also hosts the most prestigious fest of IITP "Anwesha". HoSCA aims to provide with wide range of opportunities to the people with different kinds of talents through all the clubs namely Exousia - the dance club, Aria - the singing club, Yavanika - the dramatics club, Hoot - the oratory talents club, vincetroke - the drawing club, Pixxel - the photography club and their regular events.
                </p>
              </div>
            </div>
          </MagicCard>
        </Suspense>

        <Suspense fallback={<div className="h-12 w-48 bg-gray-100 animate-pulse rounded-lg mt-8" />}>
          <SocialLinks socialLinks={socialLinks} />
        </Suspense>
      </div>
    </div>
  );
};

export default React.memo(About);