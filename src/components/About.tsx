import React, { Suspense } from 'react';
import Image from 'next/image';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Particles } from "@/components/magicui/particles";
import type { IconType } from "react-icons";
  
const SocialLinks = React.memo(({ socialLinks }: { socialLinks: Array<{ icon: IconType; url: string; label: string }> }) => (
  <div className="mt-8 flex gap-6">
    {socialLinks.map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-2xl text-gray-700 transition-colors duration-300 ${
          social.label === 'Facebook' 
            ? 'hover:text-[#0077b5]' 
            : social.label === 'Youtube' 
            ? 'hover:text-[#FF0000]'
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
    { icon: FaFacebook, url: 'https://www.facebook.com/hosca.iitp', label: 'Facebook' },
    { icon: FaYoutube, url: 'https://www.youtube.com/user/CULTatIITP', label: 'Youtube' },
    { icon: FaInstagram, url: 'https://www.instagram.com/iitpatna_hosca/', label: 'Instagram' },
  ];

  return (
     <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <Particles className="absolute inset-0 z-0" quantity={90} color="#888888" size={0.4} />
 <div className="relative z-10 flex flex-col items-center justify-center p-4 max-w-7xl mx-auto py-24">
        <Suspense fallback={<div className="w-full max-w-4xl h-[300px] bg-gray-800 animate-pulse rounded-xl" />}>
         <NeonGradientCard className="w-[100vw] max-w-[650px] aspect-rectangle">

          <div className="p-9 w-full max-w-7xl"> 
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 gap-8 w-full">
              <div className="relative w-24 h-24 md:w-35 md:h-35 flex-shrink-0">
                <Image
                  src="/home/hosca.png"
                  alt="Hoscaa Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 96px, 128px"
                  loading="eager"
                />
              </div>
              
              <div className="w-full text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 via-red-500 to-gray-800 bg-clip-text text-transparent">
                  About Hosca
                </h1>

                <p className="text-[14px] text-gray-800 leading-snug">
                  Welcome to <span className="font-semibold text-red-700">HoSCA</span> – The Heartbeat of Culture is part of <span className="font-semibold text-red-700">IIT Patna’s Gymkhana</span>.<br />
                  From the electric energy of <span className="font-semibold text-red-700">🎭 Clubs That Spark Passion:</span><br />
                  🎭 <span className="font-semibold text-black">Yavanika</span> – Take the stage in dramatic flair<br />
                  💃 <span className="font-semibold text-black">Exousia</span> – Dance like nobody&apos;s watching<br />
                  🎤 <span className="font-semibold text-black">Aria</span> – Sing your soul out<br />
                  📸 <span className="font-semibold text-black">Pixxel</span> – Capture stories in a single shot<br />
                  🎙️ <span className="font-semibold text-black">Hoot</span> – Let your voice be heard<br />
                  🧠 <span className="font-semibold text-black">Quiz Club</span> – Buzz in. Brag later.<br />
                  🖋️ <span className="font-semibold text-black">Syahi</span> – Words that leave marks.<br />
                  🍜 <span className="font-semibold text-black">Epicurean</span> – Cook. Taste. Create. Repeat.<br />
                  🧩 <span className="font-semibold text-black">HexaChrome</span> – Puzzle out pure fun.<br />
                  🎨 <span className="font-semibold text-black">Vincetroke</span> – Paint your imagination<br />
                  🌸 <span className="font-semibold text-black">Anime Club</span> – Watch. Cosplay. Debate. Repeat.<br />
                  👗 <span className="font-semibold text-black">Ikkatt</span> – The Fashion Warehouse of IITP<br />
                  🎭 <span className="font-semibold text-black">STD</span> – The Standup Den of IITP <br /><br />
                  ✨ <span className="font-semibold text-red-700">This isn&apos;t just culture — this is HoSCA.</span>
                </p>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </Suspense>

        <Suspense fallback={<div className="h-12 w-48 bg-gray-100 animate-pulse rounded-lg mt-8" />}>
          <SocialLinks socialLinks={socialLinks} />
        </Suspense>
      </div>
    </div>
  );
};

export default React.memo(About);