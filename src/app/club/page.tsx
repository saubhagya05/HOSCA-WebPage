'use client';
import { ExpandableCardDemo } from "@/components/ui/ExpandableCard";
import { Cover } from "@/components/ui/cover";

function ClubBackgroundDecor() {
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
          0%   { transform: scale(1) translate(0, 0) rotate(0deg);}
          33%  { transform: scale(1.22) translate(120px, -80px) rotate(32deg);}
          66%  { transform: scale(0.88) translate(-80px, 120px) rotate(-28deg);}
          100% { transform: scale(1) translate(0, 0) rotate(0deg);}
        }
        @keyframes blob2 {
          0%   { transform: scale(1) translate(0, 0) rotate(0deg);}
          33%  { transform: scale(1.18) translate(-110px, 110px) rotate(-30deg);}
          66%  { transform: scale(1.12) translate(80px, -120px) rotate(24deg);}
          100% { transform: scale(1) translate(0, 0) rotate(0deg);}
        }
        @keyframes blob3 {
          0%   { transform: scale(1) translate(0, 0) rotate(0deg);}
          33%  { transform: scale(1.25) translate(-70px, 80px) rotate(38deg);}
          66%  { transform: scale(0.82) translate(110px, -90px) rotate(-32deg);}
          100% { transform: scale(1) translate(0, 0) rotate(0deg);}
        }
        .animate-blob1 { animation: blob1 7s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 9s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 11s ease-in-out infinite; }
      `}</style>
    </>
  );
}

export default function ClubsPage() {
  return (
    <div className="relative min-h-screen">
      <ClubBackgroundDecor />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mt-10 text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-800 via-white to-black bg-clip-text text-transparent animate-gradient-x">
            <Cover>Cultural Clubs</Cover>
          </h2>
          <p className="text-lg mt-10 text-center mb-8 max-w-3xl mx-auto bg-gradient-to-r from-gray-900 via-orange-600 to-red-700 bg-clip-text text-transparent">
            Discover the diverse range of clubs at HOSCA, IIT Patna. Each club offers unique opportunities for students to explore their interests, develop skills, and create lasting memories.
          </p>
        </div>
        <ExpandableCardDemo />
      </div>
    </div>
  );
}