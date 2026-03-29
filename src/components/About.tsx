"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";

const REEL_ROW_1 = [
  { src: "/ClubLogo/anime.png", alt: "Anime Club" },
  { src: "/ClubLogo/aria.jpg", alt: "Aria" },
  { src: "/ClubLogo/epicurean.png", alt: "Epicurean" },
  { src: "/ClubLogo/exousia.jpg", alt: "Exousia" },
] as const;

const REEL_ROW_2 = [
  { src: "/ClubLogo/Hexachrome.jpg", alt: "Hexachrome" },
  { src: "/ClubLogo/hoot.jpg", alt: "Hoot" },
  { src: "/ClubLogo/ikkatt.png", alt: "Ikkatt" },
  { src: "/ClubLogo/Pixxel.jpeg", alt: "Pixxel" },
] as const;

const REEL_ROW_3 = [
  { src: "/ClubLogo/quiz.jpg", alt: "Quiz Club" },
  { src: "/ClubLogo/std.png", alt: "STD" },
  { src: "/ClubLogo/syahi.jpg", alt: "Syahi" },
  { src: "/ClubLogo/Vincetroke.jpg", alt: "Vincetroke" },
  { src: "/ClubLogo/yavanika.png", alt: "Yavanika" },
] as const;

const CLUB_POINTS: { name: string; description: string }[] = [
  { name: "Yavanika", description: "Theatre and dramatic arts" },
  { name: "Exousia", description: "Movement and contemporary dance" },
  { name: "Aria", description: "Vocal performance and music" },
  { name: "Pixxel", description: "Photography and visual storytelling" },
  { name: "Hoot", description: "Debating and public speaking" },
  { name: "Quiz Club", description: "Quizzing and intellectual sport" },
  { name: "Syahi", description: "Literary arts and creative writing" },
  { name: "Epicurean", description: "Culinary arts and food culture" },
  { name: "Hexachrome", description: "Puzzles, strategy, and board gaming" },
  { name: "Vincetroke", description: "Fine arts and visual design" },
  { name: "Anime Club", description: "Japanese animation and community" },
  { name: "Ikkatt", description: "Fashion and styling" },
  { name: "STD", description: "Stand-up comedy and performance" },
];

function PhotoReelRow({
  items,
  direction,
  durationSec,
  className,
}: {
  items: readonly { src: string; alt: string }[];
  direction: "ltr" | "rtl";
  durationSec: number;
  className?: string;
}) {
  const track = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent_0%,black_14%,black_86%,transparent_100%)] ${className ?? ""}`}
    >
      <div
        className={
          direction === "ltr"
            ? "animate-reel-ltr flex w-max gap-4 will-change-transform"
            : "animate-reel-rtl flex w-max gap-4 will-change-transform"
        }
        style={{ animationDuration: `${durationSec}s` }}
      >
        {track.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-lg shadow-black/40 transition duration-300 ease-out hover:z-10 hover:scale-[1.08] hover:border-sky-400/35 hover:shadow-sky-900/20 sm:h-32 sm:w-44 md:h-36 md:w-52 lg:h-40 lg:w-56"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 224px"
              className="object-cover transition duration-500 ease-out hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const SocialLinks = React.memo(
  ({
    socialLinks,
  }: {
    socialLinks: Array<{ icon: IconType; url: string; label: string }>;
  }) => (
    <div className="mt-10 flex gap-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl text-zinc-500 transition-colors duration-300 ${
            social.label === "Facebook"
              ? "hover:text-sky-400"
              : social.label === "Youtube"
                ? "hover:text-red-400"
                : "hover:text-pink-400"
          }`}
          aria-label={social.label}
        >
          <social.icon />
        </a>
      ))}
    </div>
  ),
);

SocialLinks.displayName = "SocialLinks";

const About = () => {
  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/hosca.iitp",
      label: "Facebook",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/user/CULTatIITP",
      label: "Youtube",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/iitpatna_hosca/",
      label: "Instagram",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:gap-10 lg:px-6">
        <div className="relative z-20 max-w-xl lg:pr-6">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
              <Image
                src="/home/hosca.png"
                alt="HOSCA"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                priority
                sizes="80px"
              />
            </div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sky-300/90">
              IIT Patna Gymkhana
            </p>
          </div>

          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.35rem]">
            About HOSCA
          </h2>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            House of Socio-Cultural Affairs
          </p>
          <p className="mb-8 text-base leading-relaxed text-zinc-400 md:text-[1.05rem]">
            HOSCA is the principal cultural body of IIT Patna’s Gymkhana. We
            steward campus life through clubs, events, and performances—
            fostering expression, collaboration, and tradition across the
            institute.
          </p>

          <ul className="space-y-3 border-l border-sky-500/25 pl-5">
            {CLUB_POINTS.map((club) => (
              <li key={club.name} className="text-[0.95rem] leading-snug md:text-base">
                <span className="font-semibold text-sky-300/95">
                  {club.name}
                </span>
                <span className="text-zinc-500"> — </span>
                <span className="text-zinc-300">{club.description}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm italic text-zinc-500">
            Culture at IIT Patna is coordinated, inclusive, and student-led—
            anchored by HOSCA and its constituent clubs.
          </p>

          <Suspense fallback={null}>
            <SocialLinks socialLinks={socialLinks} />
          </Suspense>
        </div>

        <div className="relative z-10 min-h-[320px] lg:min-h-[600px]">
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-950/20 via-transparent to-indigo-950/10 opacity-80"
            aria-hidden
          />
          <div className="relative flex h-full flex-col justify-center gap-3 opacity-[0.72] sm:opacity-80 md:gap-4 md:opacity-[0.85]">
            <PhotoReelRow items={REEL_ROW_1} direction="ltr" durationSec={42} />
            <PhotoReelRow items={REEL_ROW_2} direction="rtl" durationSec={48} />
            <PhotoReelRow items={REEL_ROW_3} direction="ltr" durationSec={54} />
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#030508] via-transparent to-[#030508] mix-blend-multiply"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030508] to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030508] to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
