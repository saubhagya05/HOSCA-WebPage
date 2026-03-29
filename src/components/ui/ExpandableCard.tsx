"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/components/hooks/ExpandableCard";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import Image from "next/image";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
<AnimatePresence>
  {active && typeof active === "object" && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeInOut" }}
        className="fixed inset-0 bg-black/40 h-full w-full z-10"
      />
      {/* Modal */}
      <div className="fixed inset-0 grid place-items-center z-[100]">
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ 
              opacity: 0,
              scale: 0.96,
              y: 24,
              transition: {
                duration: 0.2,
                ease: "easeInOut"
              }
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
              duration: 0.3
            }}
            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden relative min-h-[500px] shadow-2xl"
          >
          <motion.div
            layoutId={`image-${active.title}-${id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: "easeInOut"
              }
            }}
            className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg overflow-hidden"
          >
            <Image
              width={200}
              height={200}
              src={active.src}
              alt={active.title}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start p-4">
              <div>
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-neutral-700 dark:text-neutral-200"
                  exit={{ 
                    opacity: 0,
                    transition: {
                      duration: 0.15,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400"
                  exit={{ 
                    opacity: 0,
                    transition: {
                      duration: 0.15,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {active.description}
                </motion.p>
              </div>
              <motion.a
                layoutId={`button-${active.title}-${id}`}
                href={active.ctaLink}
                target="_blank"
                className="p-2 rounded-full bg-green-500 text-white flex-shrink-0 transition-colors duration-300"
                aria-label="View details"
                exit={{ 
                  opacity: 0,
                  scale: 0.8,
                  transition: {
                    duration: 0.15,
                    ease: "easeInOut"
                  }
                }}
              >
                <IoPlay className="w-4 h-4" />
              </motion.a>
            </div>
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.13, duration: 0.22 }}
              className="flex-1 overflow-y-auto px-4 pb-20 text-neutral-600 text-xs md:text-sm lg:text-base dark:text-neutral-400 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400"
            >
              {typeof active.content === "function"
                ? active.content()
                : active.content}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.18, duration: 0.18 }}
              className="flex justify-between items-center p-4"
            >
              <a
                href={active.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-sm font-medium">Explore More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute bottom-4 right-4 z-20 inline-flex px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                Close
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )}
</AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 px-4 sm:px-6 lg:px-8">
          {cards.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 8px 32px 0 rgba(168,139,250,0.25), 0 1.5px 8px 0 rgba(244,114,182,0.15)",
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                layout: {
                  duration: 0.2,
                  ease: "easeInOut"
                }
              }}
              className="p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer mb-4 md:max-h-[200px] md:overflow-hidden transition-all duration-300"
            >
            <div className="flex gap-4 flex-col md:flex-row w-full">
              <motion.div 
                layoutId={`image-${card.title}-${id}`} 
                className="flex-shrink-0 mx-auto md:mx-0"
                transition={{ 
                  duration: 0.2,
                  ease: "easeInOut",
                  layout: {
                    duration: 0.2,
                    ease: "easeInOut"
                  }
                }}
              >
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-32 w-32 sm:h-36 sm:w-36 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex-grow min-w-0 text-center md:text-left">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left truncate text-lg sm:text-xl md:text-base"
                  transition={{ 
                    duration: 0.2,
                    ease: "easeInOut",
                    layout: {
                      duration: 0.2,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left truncate text-sm sm:text-base md:text-sm"
                  transition={{ 
                    duration: 0.2,
                    ease: "easeInOut",
                    layout: {
                      duration: 0.2,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-4 md:mt-0 w-full md:w-auto">
              <motion.div
                className="flex gap-2 opacity-100 transition-opacity duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                {card.facebookLink && (
                  <a
                    href={card.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-4 h-4" />
                  </a>
                )}
                {card.instagramLink && (
                  <a
                    href={card.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="p-2 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white text-black flex-shrink-0 transition-colors duration-300"
                aria-label="View details"
              >
                <IoPlay className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "1.",
    title: "Yavanika",
    src: "/ClubLogo/yavanika.png",
    ctaText: "Learn More",
    ctaLink: "/club/yavanika",
    facebookLink: "https://www.facebook.com/yavanika.iitp/",
    instagramLink: "https://www.instagram.com/yavanika_iitp/?hl=en",
    content: () => (
      <p>
        If life&apos;s a stage, Yavanika brings the spotlight. From street plays that hit hard to full-blown productions that stir the soul, they don&apos;t just act—they <b>live</b> the script. One of the oldest cultural clubs, Yavanika has drama in its DNA (the good kind, promise).
      </p>
    ),
  },
  {
    description: "2.",
    title: "Exousia",
    src: "/ClubLogo/exousia.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/exousia",
    facebookLink: "https://www.facebook.com/DanceClubIITPatna/",
    instagramLink: "https://www.instagram.com/exousia_iitp/",
    content: () => (
      <p>
        Exousia doesn&apos;t walk—<b>they groove</b>. Whether it&apos;s Bollywood, freestyle, or hip-hop battles, they&apos;ve got rhythm in every step. With iconic events like FlipToe and Beat It Off, they light up stages and hearts alike.
      </p>
    ),
  },
  {
    description: "3.",
    title: "Aria",
    src: "/ClubLogo/aria.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/aria",
    facebookLink: "https://www.facebook.com/musicclubiitpatna/",
    instagramLink: "https://www.instagram.com/aria_iitp/",
    content: () => (
      <p>
        If your soul has a soundtrack, Aria is probably playing it. From cozy acoustic nights to electrifying concerts, Aria hits the right notes—every time. They don&apos;t just play music; they build a vibe.
      </p>
    ),
  },
  {
    description: "4.",
    title: "STD",
    src: "/ClubLogo/std.png",
    ctaText: "Learn More",
    ctaLink: "/club/std",
    facebookLink: "https://www.instagram.com/standup_club.iitp/",
    instagramLink: "https://www.instagram.com/standup_club.iitp/",
    content: () => (
      <p>
        Got jokes? STD&apos;s the stage. IITP&apos;s unofficial therapy session where students turn awkwardness, engineering pain, and hostel horrors into stand-up gold. Laughter guaranteed.
      </p>
    ),
  },
  {
    description: "5.",
    title: "Pixxel",
    src: "/ClubLogo/Pixxel.jpeg",
    ctaText: "Learn More",
    ctaLink: "/club/pixxel",
    facebookLink: "https://www.facebook.com/pixxeliitp/",
    instagramLink: "https://www.instagram.com/pixxel_iitp/?hl=en",
    content: () => (
      <p>
        The eyes behind every epic IITP memory. Pixxel&apos;s not just about taking pictures—they freeze feelings. From covering fests to capturing candids, they turn every moment into a masterpiece.
      </p>
    ),
  },
  {
    description: "6.",
    title: "HOOT",
    src: "/ClubLogo/hoot.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/hoot",
    facebookLink: "https://www.facebook.com/hootiitp/",
    instagramLink: "https://www.instagram.com/hoot.iitp/",
    content: () => (
      <p>
        Got opinions louder than your roommate&apos;s alarm? HOOT gives you the mic. Debate, JAM, MUN—you name it, they talk it. It&apos;s where logic meets flair and your voice finally gets the stage it deserves.
      </p>
    ),
  },
  {
    description: "7.",
    title: "Quiz Club",
    src: "/ClubLogo/quiz.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/quiz",
    facebookLink: "https://www.facebook.com/quizclubTO/",
    instagramLink: "https://www.instagram.com/qc_iitp/",
    content: () => (
      <p>
        Forget mugging facts. Quiz Club is about curiosity, deduction, and that sweet feeling of yelling the right answer before anyone else. With quizzes like Parakh and Knockout, it&apos;s where trivia gets thrilling.
      </p>
    ),
  },
  {
    description: "8.",
    title: "Syahi",
    src: "/ClubLogo/syahi.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/syahi",
    facebookLink: "https://www.facebook.com/quizclubTO/",
    instagramLink: "https://www.instagram.com/qc_iitp/",
    content: () => (
      <p>
        Poetry, storytelling, blogs, or blackout prose — if it&apos;s got words, it&apos;s got Syahi written all over it. Whether you&apos;re a silent scribbler or a stage poet, Syahi is where your imagination spills ink.
      </p>
    ),
  },
  {
    description: "9.",
    title: "Epicurean",
    src: "/ClubLogo/epicurean.png",
    ctaText: "Learn More",
    ctaLink: "/club/epicurean",
    facebookLink: "https://hi-in.facebook.com/watch/syahi_iitp/",
    instagramLink: "https://www.instagram.com/culinary_club_iitpatna/",
    content: () => (
      <p>
        For those who speak fluent food. Epicurean is where kitchen skills meet creativity—whether it&apos;s plating pasta or reinventing Maggi. Cook, taste, bond—no Michelin star needed.
      </p>
    ),
  },
  {
    description: "10.",
    title: "HexaChrome",
    src: "/ClubLogo/Hexachrome.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/hexachrome",
    facebookLink: "https://www.instagram.com/hexachrome_iitp/",
    instagramLink: "https://www.instagram.com/hexachrome_iitp/",
    content: () => (
      <p>
        Rubik&apos;s Cubes, riddles, crosswords—if solving things is your jam, HexaChrome is home. Brains get a proper workout here, minus the sweat. Fun, friendly, and freakishly clever.
      </p>
    ),
  },
  {
    description: "11.",
    title: "Vincetroke",
    src: "/ClubLogo/Vincetroke.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/vincetroke",
    facebookLink: "https://www.facebook.com/vincetroke.iitp/community/",
    instagramLink: "https://www.instagram.com/vincetroke.iitp/",
    content: () => (
      <p>
        Got paint on your hands and ideas in your head? Vincetroke welcomes the artist in you. Doodles, murals, and everything in between—this club is your blank canvas to go wild (aesthetically).
      </p>
    ),
  },
  {
    description: "12.",
    title: "Anime Club",
    src: "/ClubLogo/anime.png",
    ctaText: "Learn More",
    ctaLink: "/club/anime",
    facebookLink: "https://www.instagram.com/animeclub_iitp/",
    instagramLink: "https://www.instagram.com/animeclub_iitp/",
    content: () => (
      <p>
        From Naruto to niche gems, the Anime Club is your chill zone. Screenings, quizzes, cosplay and endless debates about the best waifu—your tribe lives here.
      </p>
    ),
  },
  {
    description: "13.",
    title: "Ikkatt",
    src: "/ClubLogo/ikkatt.png",
    ctaText: "Learn More",
    ctaLink: "/club/ikkatt",
    facebookLink: "https://www.instagram.com/ikkatt_iitp/",
    instagramLink: "https://www.instagram.com/ikkatt_iitp/",
    content: () => (
      <p>
        Style isn&apos;t just worn—it&apos;s designed. Ikkatt gives you the ramp and the sketchpad. From fashion shows to DIY workshops, this club turns creativity into couture.
      </p>
    ),
  },
];