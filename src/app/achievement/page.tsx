'use client';

import { ExpandableCardDemo } from "@/components/expandable-card-demo-grid";
import React from 'react';
import dynamic from 'next/dynamic';

const Cover = dynamic(() => import('@/components/ui/cover').then(mod => mod.Cover), { ssr: false });
const InfiniteMovingCards = dynamic(() => import('@/components/ui/infinitemovingcards').then(mod => mod.InfiniteMovingCards), { ssr: false });

function AchievementBackgroundDecor() {
  return (
    <>
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-blob1"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-pink-400 opacity-30 rounded-full filter blur-3xl animate-blob2"></div>
        <div className="absolute top-1/2 left-1/2 w-[35vw] h-[35vw] bg-yellow-300 opacity-20 rounded-full filter blur-2xl animate-blob3" style={{ transform: "translate(-50%, -50%)" }}></div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1) rotate(0deg);}
          50% { transform: scale(1.18) rotate(16deg);}
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes blob1 {
          0% { transform: scale(1) translate(0, 0) rotate(0deg);}
          33% { transform: scale(1.22) translate(120px, -80px) rotate(32deg);}
          66% { transform: scale(0.88) translate(-80px, 120px) rotate(-28deg);}
          100% { transform: scale(1) translate(0, 0) rotate(0deg);}
        }
        @keyframes blob2 {
          0% { transform: scale(1) translate(0, 0) rotate(0deg);}
          33% { transform: scale(1.18) translate(-110px, 110px) rotate(-30deg);}
          66% { transform: scale(1.12) translate(80px, -120px) rotate(24deg);}
          100% { transform: scale(1) translate(0, 0) rotate(0deg);}
        }
        @keyframes blob3 {
          0% { transform: scale(1) translate(0, 0) rotate(0deg);}
          33% { transform: scale(1.25) translate(-70px, 80px) rotate(38deg);}
          66% { transform: scale(0.82) translate(110px, -90px) rotate(-32deg);}
          100% { transform: scale(1) translate(0, 0) rotate(0deg);}
        }
        .animate-blob1 { animation: blob1 7s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 9s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 11s ease-in-out infinite; }
      `}</style>
    </>
  );
}

export default function AchievementPage() {
  const testimonials = [
    {
      quote: "INTER IIT CULT MEET 7.0 - Bronze (Stage Play)",
      name: "Yavanika",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 6.0 - Silver (Mime)",
      name: "Yavanika",
      title: "DEC 2023",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - Group Dance - 7th Place",
      name: "Exousia",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - Pair on stage: 5th place",
      name: "Aria",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 6.0 - Classical solo singing: 1st and 3rd place",
      name: "Aria",
      title: "DEC 2023",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - Pair on stage: 5th place",
      name: "Aria",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 6.0 - Pain on stage: 3rd place",
      name: "Aria",
      title: "DEC 2023",
    },

    {
      quote: "INTER IIT CULT MEET 7.0 - 6th position in Online Photostory",
      name: "Pixxel",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 6th position in Online Photography Competition",
      name: "Pixxel",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 5th position in Street Photography",
      name: "Pixxel",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 9th position in 51 Hour Film Making",
      name: "Pixxel",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 51 Hour JAM: Just A Minute qualified as semi-finalist",
      name: "Hoot",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - Runner up in TLC Quiz",
      name: "Quiz Club",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - Qualified Sports Quiz Prelims, 5th in Finals",
      name: "Quiz Club",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - Qualified General Quiz Prelims, 6th in Finals",
      name: "Quiz Club",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - gold in Mixology",
      name: "Epicurean",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - Cook off- gold",
      name: "Epicurean",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 1st position in charcoal art among 23 IITs",
      name: "VinceStroke",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 2nd position in costume design among 23 IITs",
      name: "VinceStroke",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 3rd, 14th and 29th positions in canvas painting among 57 entries from all IITs",
      name: "VinceStroke",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 5th, 14th and 29th positions in live sketching among 69 entries from all IITs",
      name: "VinceStroke",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 4th position in Online modelling ",
      name: "ikkatt",
      title: "DEC 2024",
    },
    {
      quote: "INTER IIT CULT MEET 6.0 - Silver Medal in Stand-up",
      name: "STD",
      title: "DEC 2023",
    },
    {
      quote: "INTER IIT CULT MEET 6.0 - 4th Rank in Stand-up",
      name: "STD",
      title: "DEC 2023",
    },
    {
      quote: "INTER IIT CULT MEET 7.0 - 4th Rank in Stand-up",
      name: "STD",
      title: "DEC 2024",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <AchievementBackgroundDecor />

      <div className="relative z-10 container mx-auto px-4 mb-12">
        <div className="mb-12">
          <h2 className="mt-10 text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-800 via-white to-black bg-clip-text text-transparent animate-gradient-x">
            <Cover>Achievements</Cover>
          </h2>
          <p className="text-lg mt-6 mb-12 max-w-2xl flex justify-center mx-auto bg-gradient-to-r from-gray-900 via-orange-600 to-red-700 bg-clip-text text-transparent">
            Honoring our clubs and students&apos; achievements at HOSCA, IIT Patna.
          </p>
          <div className="my-10">
            <InfiniteMovingCards items={testimonials} />
          </div>
        </div>
        <ExpandableCardDemo />
      </div>
    </div>
  );
}