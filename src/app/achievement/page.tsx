"use client";

import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";
import { InfiniteMovingCards } from "@/components/ui/infinitemovingcards";
import { Trophy } from "lucide-react";

type AchievementStory = {
  title: string;
  club: string;
  date: string;
  image: string;
  span?: string;
};

const stories: AchievementStory[] = [
  {
    title: "Bronze in Stage Play at Inter IIT Cult Meet 7.0",
    club: "Yavanika",
    date: "December 2024",
    image: "/ClubPages/Yavanika/Picture1.jpg",
    span: "md:row-span-2",
  },
  {
    title: "Silver in Mime at Inter IIT Cult Meet 6.0",
    club: "Yavanika",
    date: "December 2023",
    image: "/ClubPages/Yavanika/Picture10.jpg",
  },
  {
    title: "Group Dance secured 7th place at Inter IIT Cult Meet 7.0",
    club: "Exousia",
    date: "December 2024",
    image: "/ClubPages/Exousia/IMG-20250613-WA0026.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Pair on Stage finished 5th at Inter IIT Cult Meet 7.0",
    club: "Aria",
    date: "December 2024",
    image: "/ClubPages/Aria/IMG-20250614-WA0107.jpg",
  },
  {
    title: "Classical Solo Singing earned 1st and 3rd at Inter IIT Cult Meet 6.0",
    club: "Aria",
    date: "December 2023",
    image: "/ClubPages/Aria/IMG-20250614-WA0115.jpg",
  },
  {
    title: "5th in Street Photography at Inter IIT Cult Meet 7.0",
    club: "Pixxel",
    date: "December 2024",
    image: "/ClubPages/Pixxel/1000062866.jpg",
    span: "md:row-span-2",
  },
  {
    title: "Runner Up in TLC Quiz at Inter IIT Cult Meet 7.0",
    club: "Quiz Club",
    date: "December 2024",
    image: "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.06.00.jpeg",
  },
  {
    title: "Gold in Mixology and Cook Off at Inter IIT Cult Meet 7.0",
    club: "Epicurean",
    date: "December 2024",
    image: "/ClubPages/Epicurean/IMG-20250126-WA0040.jpg",
  },
  {
    title: "1st in Charcoal Art and 2nd in Costume Design among 23 IITs",
    club: "Vincetroke",
    date: "December 2024",
    image: "/ClubPages/Vincetroke/im 1.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "4th in Online Modelling at Inter IIT Cult Meet 7.0",
    club: "Ikkatt",
    date: "December 2024",
    image: "/ClubPages/Ikkatt/ikkat1.jpg",
  },
  {
    title: "4th Rank in Stand-up at Inter IIT Cult Meet 7.0",
    club: "STD",
    date: "December 2024",
    image: "/ClubPages/STD/IMG-20250614-WA0006.jpg",
  },
  {
    title: "Semi-finalist in 51 Hour JAM: Just A Minute",
    club: "HOOT",
    date: "December 2024",
    image: "/ClubPages/HOOT/HOOT1.jpg",
  },
];

const marqueeItems = stories.map((story) => ({
  quote: story.title,
  name: story.club,
  title: story.date,
}));

export default function AchievementPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040a] text-white">
      <StarrySkyBackdrop particleQuantity={70} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_28%),radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_80%_100%,rgba(236,72,153,0.14),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.38em] text-slate-400">
            HOSCA Milestones
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            <Cover>Achievements</Cover>
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300 md:text-lg">
            A more cinematic view of the performances, rankings, and creative wins
            that define HOSCA across campus and beyond.
          </p>
        </div>

        <div className="mt-10">
          <InfiniteMovingCards items={marqueeItems} />
        </div>

        <div className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <article
              key={`${story.club}-${story.title}`}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-sm ${story.span ?? ""}`}
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/30 bg-amber-400/20 text-amber-200 backdrop-blur-md">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.32em] text-slate-300">
                  {story.club}
                </p>
                <h2 className="max-w-[26rem] text-xl font-semibold leading-tight text-white">
                  {story.title}
                </h2>
                <p className="mt-3 text-sm text-slate-200/90">{story.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
