"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/components/hooks/ExpandableCard";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";

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
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden relative min-h-[500px]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
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
                  >
                    <IoPlay className="w-4 h-4" />
                  </motion.a>
                </div>
                
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-4 right-4"
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
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 px-4 sm:px-6 lg:px-8">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer mb-4 md:max-h-[200px] md:overflow-hidden"
          >
            <div className="flex gap-4 flex-col md:flex-row w-full">
              <motion.div layoutId={`image-${card.title}-${id}`} className="flex-shrink-0 mx-auto md:mx-0">
                <img
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
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left truncate text-sm sm:text-base md:text-sm"
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
                <a
                  href="https://facebook.com/hosca.iitp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/hosca_iitp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
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
    src: "/club/yavanika.png",
    ctaText: "Learn More",
    ctaLink: "/club/yavanika",
    content: () => {
      return (
        <p>
          Yavanika is the dramatics society and one of the oldest clubs of IIT Patna. With talent, feeling like of a movie actor and achievements leading to goosebumps, it makes the journey superexcited and memorable.
        </p>
      );
    },
  },
  {
    description: "2.",
    title: "Exousia",
    src: "/club/exousia.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/exousia",
    content: () => {
      return (
        <p>
          Exousia is the official dance club of IIT Patna. Initiated as a platform to promote dance culture in students, it has bloomed into a full-fledged society of dancers skilled in various dance styles ranging from classical to fusion to western. Exousia caters to a variety of intra and inter college dance competitions including solo, duet, street battles and many other categories.The club hosts a tasteful series of events namely FlipToe, HeelTurn, Beat It Off, Hookstep, Rhythm and many more.
        </p>
      );
    },
  },

  {
    description: "3.",
    title: "Aria",
    src: "/club/aria.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/aria",
    content: () => {
      return (
        <p>
          Aria, standing for "melody" in Italian, is the music society of IIT Patna. It aims to foster musical talent and bring people together through their love for music. Acoustic nights , concerts and performances are regularly conducted.It has not only become a venue for like-minded individuals to portray their talents , but also offer the audience a shot at catharsis and de-stressing themselves.
        </p>
      );
    },
  },
  {
    description: "4.",
    title: "Pixxel",
    src: "/club/Pixxel.jpeg",
    ctaText: "Learn More",
    ctaLink: "/club/pixxel",
    content: () => {
      return (
        <p>
          Pixxel is IIT Patna's own photography and videography club. Pixxel is responsible for developing interest in photography and videography and various editing related to it among the students of IITP and also creating a plateform where they can showcase their talent and imagination which it has been successfull in the consequent years. The club carries out nearly all of the photography and videography works in IIT Patna , it is omnipresent in all the fests and events conducted in IIT Patna.
        </p>
      );
    },
  },
  {
    description: "5.",
    title: "HOOT",
    src: "/club/hoot.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/hoot",
    content: () => {
      return (
        <p>
          The House of Oratory Talents is the speaking arts club of IIT Patna. HOOT is an engaging club where an individual finds his way to speak his mind out. We at HOOT deal with current affairs, get to know where the world is going and ponder on how we can improvise our thought process too. The club conducts events running from PD,MUN,JAM and lots more to allow the young minds to see the world through a better perspective. The club practices the art of articulation and this is where team bonding is celebrated.
        </p>
      );
    },
  },
  {
    description: "6.",
    title: "Quiz Club",
    src: "/club/quiz.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/quiz",
    content: () => {
      return (
        <p>
          The Quiz Club, IIT Patna believes that the most important thing is having fun (and ofc quizzing xd). One doesn't need to mug up random nerdy facts to attend quizzes, all one needs is a keen eye for the things that surround us. The Quiz Club organizes weekly quizzes made up of fun and deducible questions that have no pre-requisites and thus anyone can attend them. The Quiz Club has been trying to inculcate a quizzing culture in and around Patna by organizing various events like Knockout, Quest-ion, and Pan India Quizzing fest PARAKH annually.
        </p>
      );
    },
  },
  {
    description: "7.",
    title: "Syahi",
    src: "/club/syahi.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/syahi",
    content: () => {
      return (
        <p>
          Syahi is the literary club of IIT Patna. Syahi aims to provide a platform to nurture the writing talents of people and help them to grown in their journies.It organizes various on-campus as well as inter-college Compitions for people to connect through their writing talents with a major audience.The main motto of the club is to express what one feels, introspect it and grow as a human in the process.
        </p>
      );
    },
  },
  {
    description: "8.",
    title: "Epicurean",
    src: "/club/epicurean.png",
    ctaText: "Learn More",
    ctaLink: "/club/epicurean",
    content: () => {
      return (
        <p>
          The House of Oratory Talents is the speaking arts club of IIT Patna. HOOT is an engaging club where an individual finds his way to speak his mind out. We at HOOT deal with current affairs, get to know where the world is going and ponder on how we can improvise our thought process too. The club conducts events running from PD,MUN,JAM and lots more to allow the young minds to see the world through a better perspective. The club practices the art of articulation and this is where team bonding is celebrated.
        </p>
      );
    },
  },
  {
    description: "9.",
    title: "HexaChrome",
    src: "/club/HexaChrome.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/hexachrome",
    content: () => {
      return (
        <p>
          The Hexachrome Club aims to provide a platform for students to learn and improve in solving puzzles such as Rubik's Cube, Cryptograms, Crosswords, Scrabble, etc. Puzzle-solving has many benefits, including cognitive development, stress relief, and improved critical thinking skills. The club will allow students to engage in a fun and challenging activity while developing these skills. It is an effective way of reducing stress and anxiety.
        </p>
      );
    },
  },
  {
    description: "10.",
    title: "Vincetroke",
    src: "/club/Vincetroke.jpg",
    ctaText: "Learn More",
    ctaLink: "/club/vincetroke",
    content: () => {
      return (
        <p>
          Vincetroke is the fine arts club of IIT Patna. Vincetroke encourages practicing artists to express themselves, and their inner creativity through various visual art forms, all the while honing in on their skills. The club provides an opportunity for the students to let their imagination run wild and provides them with the sight to see things in a different way.
        </p>
      );
    },
  },
  {
    description: "11.",
    title: "Anime Club",
    src: "/club/anime.png",
    ctaText: "Learn More",
    ctaLink: "/club/anime",
    content: () => {
      return (
        <p>
          Hajimemashite Minna San! The Anime Club is the only "purely recreational" club of IIT Patna. Jokes apart, the Anime Club is a hub for everyone from veteran weebs to budding enthusiasts and provides a unique platform for people to get together, engage in active discussions and showcase their emotions and creativity about anything related to the animanga world. Various events, with their own quirks & gimmicks are conducted to encourage interaction and cultural enrichment. So hop right on to have an unforgettable experience!
        </p>
      );
    },
  },
];
