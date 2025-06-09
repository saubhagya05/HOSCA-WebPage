'use client';

import { ExpandableCardDemo } from "@/components/ui/ExpandableCard";
import { Cover } from "@/components/ui/cover";
import { DotBackgroundDemo } from "@/components/ui/dotbackground";

export default function ClubsPage() {
  return (
      <div className="container mx-auto px-4">
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
  );
} 