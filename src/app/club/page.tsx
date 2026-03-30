"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

type ClubCard = {
  name: string;
  slug: string;
  logo: string;
  description: string;
  glow: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
};

const clubs: ClubCard[] = [
  {
    name: "Yavanika",
    slug: "yavanika",
    logo: "/ClubLogo/yavanika.png",
    description: "Dramatics, stagecraft, and performances that own the spotlight.",
    glow: "rgba(244, 114, 182, 0.45)",
    facebook: "https://www.facebook.com/yavanika.iitp/",
    instagram: "https://www.instagram.com/yavanika_iitp/?hl=en",
  },
  {
    name: "Exousia",
    slug: "exousia",
    logo: "/ClubLogo/exousia.jpg",
    description: "The dance collective bringing rhythm, energy, and stage presence.",
    glow: "rgba(250, 204, 21, 0.42)",
    facebook: "https://www.facebook.com/DanceClubIITPatna/",
    instagram: "https://www.instagram.com/exousia_iitp/",
  },
  {
    name: "Aria",
    slug: "aria",
    logo: "/ClubLogo/aria.jpg",
    description: "Music, vocals, bands, and sonic experiences across campus.",
    glow: "rgba(59, 130, 246, 0.45)",
    facebook: "https://www.facebook.com/musicclubiitpatna/",
    instagram: "https://www.instagram.com/aria_iitp/",
    youtube: "https://www.youtube.com/@musicclubiitpatna",
  },
  {
    name: "STD",
    slug: "std",
    logo: "/ClubLogo/std.png",
    description: "Stand-up, wit, and the funniest stories from campus life.",
    glow: "rgba(251, 146, 60, 0.42)",
    instagram: "https://www.instagram.com/standup_club.iitp/",
  },
  {
    name: "Pixxel",
    slug: "pixxel",
    logo: "/ClubLogo/Pixxel.jpeg",
    description: "Photography and visual storytelling that frame every memory.",
    glow: "rgba(56, 189, 248, 0.42)",
    facebook: "https://www.facebook.com/pixxeliitp/",
    instagram: "https://www.instagram.com/pixxel_iitp/?hl=en",
  },
  {
    name: "HOOT",
    slug: "hoot",
    logo: "/ClubLogo/hoot.jpg",
    description: "Debate, JAM, MUN, and a home for voices with conviction.",
    glow: "rgba(168, 85, 247, 0.42)",
    facebook: "https://www.facebook.com/hootiitp/",
    instagram: "https://www.instagram.com/hoot.iitp/",
  },
  {
    name: "Quiz Club",
    slug: "quiz",
    logo: "/ClubLogo/quiz.jpg",
    description: "Curiosity, knowledge, and high-voltage quizzing culture.",
    glow: "rgba(34, 197, 94, 0.42)",
    facebook: "https://www.facebook.com/quizclubTO/",
    instagram: "https://www.instagram.com/qc_iitp/",
  },
  {
    name: "Syahi",
    slug: "syahi",
    logo: "/ClubLogo/syahi.jpg",
    description: "Poetry, prose, spoken word, and writing with a strong voice.",
    glow: "rgba(248, 113, 113, 0.42)",
  },
  {
    name: "Epicurean",
    slug: "epicurean",
    logo: "/ClubLogo/epicurean.png",
    description: "Culinary creativity, flavor, and hands-on food culture.",
    glow: "rgba(234, 179, 8, 0.42)",
    instagram: "https://www.instagram.com/culinary_club_iitpatna/",
  },
  {
    name: "HexaChrome",
    slug: "hexachrome",
    logo: "/ClubLogo/Hexachrome.jpg",
    description: "Puzzles, problem-solving, and a playground for sharp minds.",
    glow: "rgba(99, 102, 241, 0.42)",
    instagram: "https://www.instagram.com/hexachrome_iitp/",
  },
  {
    name: "Vincetroke",
    slug: "vincetroke",
    logo: "/ClubLogo/Vincetroke.jpg",
    description: "Painting, sketching, and visual art with bold expression.",
    glow: "rgba(236, 72, 153, 0.42)",
    facebook: "https://www.facebook.com/vincetroke.iitp/community/",
    instagram: "https://www.instagram.com/vincetroke.iitp/",
  },
  {
    name: "Anime Club",
    slug: "anime",
    logo: "/ClubLogo/anime.png",
    description: "Screenings, fandom, cosplay, and a shared love for anime.",
    glow: "rgba(14, 165, 233, 0.42)",
    instagram: "https://www.instagram.com/animeclub_iitp/",
  },
  {
    name: "Ikkatt",
    slug: "ikkatt",
    logo: "/ClubLogo/ikkatt.png",
    description: "Fashion, styling, and design-led expression on and off stage.",
    glow: "rgba(217, 70, 239, 0.42)",
    instagram: "https://www.instagram.com/ikkatt_iitp/",
  },
];

export default function ClubsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040a] text-white">
      <StarrySkyBackdrop particleQuantity={78} />

      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.14),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.38em] text-slate-400">
            HOSCA Clubs
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            <Cover>Cultural Clubs</Cover>
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300 md:text-lg">
            Explore the creative ecosystem of HOSCA through a premium grid of clubs,
            each with its own identity, energy, and cultural footprint at IIT Patna.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {clubs.map((club) => (
            <Link
              key={club.slug}
              href={`/club/${club.slug}`}
              className="group relative block overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl transition-all duration-300 hover:z-10 hover:scale-[1.05] hover:border-white/20"
              style={{
                boxShadow: `0 18px 60px -28px ${club.glow}`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at top, ${club.glow}, transparent 55%)`,
                }}
              />
              <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/8" />

              <div className="relative flex min-h-[19rem] flex-col">
                <div className="mb-6 flex justify-center">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-[1.6rem] border border-white/12 bg-white/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                    <Image
                      src={club.logo}
                      alt={club.name}
                      fill
                      sizes="112px"
                      className="rounded-[1.2rem] object-contain p-3"
                    />
                  </div>
                </div>

                <div className="space-y-3 text-center">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {club.name}
                  </h2>
                  <p className="line-clamp-3 text-sm leading-6 text-slate-300">
                    {club.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-center gap-3 pt-8">
                  {club.facebook && (
                    <SocialIcon href={club.facebook} label={`${club.name} Facebook`}>
                      <FaFacebookF className="h-4 w-4" />
                    </SocialIcon>
                  )}
                  {club.instagram && (
                    <SocialIcon href={club.instagram} label={`${club.name} Instagram`}>
                      <FaInstagram className="h-4 w-4" />
                    </SocialIcon>
                  )}
                  {club.youtube && (
                    <SocialIcon href={club.youtube} label={`${club.name} YouTube`}>
                      <FaYoutube className="h-4 w-4" />
                    </SocialIcon>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <span
      onClick={(event) => event.stopPropagation()}
      className="inline-flex"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-slate-400 opacity-70 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/12 hover:text-white group-hover:opacity-100"
      >
        {children}
      </a>
    </span>
  );
}
