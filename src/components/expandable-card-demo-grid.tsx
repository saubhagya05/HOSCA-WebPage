"use client";

import React, { useEffect, useId, useRef, useState} from "react";
import { AnimatePresence, motion } from "motion/react";
import { JSX } from "react/jsx-runtime";
import Image from "next/image";

const MotionImage = motion(Image);
export function ExpandableCardDemo() {
  const [active, setActive] = useState<{
    title: string;
    src: string;
    content: () => JSX.Element;
  } | null>(null);

  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
      <motion.div
        layoutId={`card-${active.title}-${id}`}
        ref={ref}
        className="w-full max-w-[500px] h-[75vh] md:h-[565px] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden relative"
      >
      <button
        onClick={() => setActive(null)}
        aria-label="Close"
        className="absolute top-4 right-4 z-20 bg-white dark:bg-neutral-900 rounded-full p-1 shadow hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
      >
        <CloseIcon />
      </button>
              <MotionImage
                layoutId={`image-${active.title}-${id}`}
                src={active.src}
                alt={active.title}
                width={800}
                height={320}
                className="w-full h-auto max-h-80 object-cover flex-shrink-0"
              />
              <div className="flex flex-col flex-grow overflow-hidden">
                <div className="p-4 flex-shrink-0">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                  >
                    {active.title}
                  </motion.h3>
                </div>
                <div className="px-4 pb-12 flex-grow overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]">
                  <div className="antialiased text-neutral-600 dark:text-neutral-400">
                    {active.content()}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="mx-auto w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
        {cards
          .filter((card) => card.title !== "STD")
          .map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${index}`}
              onClick={() => setActive(card)}
              role="button"
              tabIndex={0}
              className="p-4 flex flex-col hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col w-full">
                <MotionImage
                  layoutId={`image-${card.title}-${id}`}
                  src={card.src}
                  alt={card.title}
                  width={400}
                  height={240}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          ))}
      </ul>

      <div className="w-full flex justify-center mt-16">
        <motion.div
          layoutId={`card-STD-${id}`}
          onClick={() => setActive(cards.find((c) => c.title === "STD") ?? null)}
          role="button"
          tabIndex={0}
          className="w-full max-w-xs p-4 flex flex-col hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
        >
          <div className="flex gap-4 flex-col w-full">
            <MotionImage
              layoutId={`image-STD-${id}`}
              src="/ClubLogo/std.png"
              alt="STD"
              width={400}
              height={240}
              className="h-60 w-full rounded-lg object-cover object-top"
            />
            <div className="flex justify-center items-center flex-col">
              <motion.h3
                layoutId={`title-STD-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-base"
              >
                STD
              </motion.h3>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
const cards = [
   {
  title: "Yavanika",
  src: "/ClubLogo/yavanika.png",
  content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>Kaizen 2024 </strong>(Nukkad Natak) - Bronze<br />
    </li>
    <li>
      <strong>AN College (InnoAdExpo Inter College Competition 2024) - </strong>Gold<br />
    </li>
    <li>
      <strong>INTER IIT CULT MEET 7.0 - </strong>Bronze (Stage Play)<br />
    </li>
    <li>
      <strong>INTER IIT CULT MEET 6.0 - </strong>Silver (Mime)<br />
    </li>
  </ul>
  )
  },
  {
    title: "Exousia",
    src: "/ClubLogo/exousia.jpg",
    content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
    <li>
      <strong>Kaizen 2024:</strong> Duet - 1st Place<br />
    </li>
    <li>
      <strong>Kaizen 2024:</strong>Street Battle - 3rd Place<br />
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong> Group Dance - 7th Place<br />
    </li>
    <li>
      <strong>Anwesha 2025:</strong>Street Battle - 3rd Place<br />
    </li>
  </ul>

    ),
  },
  {   
    title: "Aria",
    src: "/ClubLogo/aria.jpg",   
    content: () => (   
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    Aria 24-25 achievements

    <li>
      <strong>Inter IIT Cult 7.0:</strong>Pair on stage: 5th place<br />
      Team IIT Patna: Debangshu, Sankhanil
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong>Battle of bands: 6th place<br />
    </li>
    <li>
      <strong>Inter IIT Cult 6.0:</strong>Classical solo singing: 1st and 3rd place<br />
      Debangshu and Jayshree didi respectively
    </li>
    <li>
      <strong>Inter IIT Cult 6.0:</strong>Pain on stage: 3rd place<br />
       Ajay and Piyush
    </li>
    <li>
      <strong>Kaizen:</strong>Battle of the Band: 3rd Place<br />
    </li>
    <li>
      <strong>Anwesha:</strong>Battle of the Bands: 1st and 2nd place<br />
    </li>
    <li>
      <strong>Anwesha: </strong>Anwesha Solo Singing: 1st Place (Aarsh)<br />
    </li>
  </ul>

    ),
  },
  {
    title: "Pixxel",
    src: "/ClubLogo/Pixxel.jpeg",
    content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>Inter IIT Cult 7.0:</strong>Online Short Filmmaking Competition - 7th position<br />
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong>51 Hour Film Making - 9th position<br />
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong> Street Photography – 5th position<br />
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong>Online Photography Competition - 6th position<br />
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong>Online Photostory - 6th position<br />
    </li>
  </ul>
    ),
  },
  {   
    title: "HOOT",
    src: "/ClubLogo/hoot.jpg",    
    content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>Inter IIT Cult 7.0:</strong>(JAM: Just A Minute)<br />
      In the 7th edition of the Inter IIT Cultural Meet held in Patna, two of our members qualified as semi-finalists in the JAM (Just A Minute) event, showcasing quick wit, verbal dexterity, and spontaneous thinking at a national level.
    </li>
    <li>
      <strong>IIT Guwahati Parliamentary Debate – IITG PD&apos;24:</strong>At the prestigious IITG PD&apos;24, our team secured an impressive 5th overall rank among several elite institutions. Additionally, two of our speakers ranked among the Top 10 Speakers of the tournament, reflecting the club&apos;s strength in argumentation, clarity, and oratory finesse.<br/>
    </li>
  </ul>
    ),
  },
  {
  title: "Quiz Club",
  src: "/ClubLogo/quiz.jpg",

  content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>Inter IIT Cult 7.0:</strong> TLC Quiz – Runner-up<br />
      Team IIT Patna - 1: Abhimanyu Singh Bisht (2001CB04), Aryan Dabad (2101AI36), Shibanshu Das (2302GT08)
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong> Sports Quiz – Qualified Prelims, 5th in Finals<br />
      Team IIT Patna - 1: Abhimanyu Singh Bisht (2001CB04), Siddhant Senapati (2101AI38), Prakhar Shukla (2201CS54)
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong> General Quiz – Qualified Prelims, 6th in Finals<br />
      Team IIT Patna - 1: Abhimanyu Singh Bisht (2001CB04), Aryan Dabad (2101AI36), Prakhar Shukla (2201CS54)
    </li>
    <li>
      <strong>Kaizen:</strong> Pop-Culture Quiz – Qualified Prelims, 2nd in Finals<br />
      Aryan Dabad (2101AI36), Siddhant Senapati (2101AI38), Kirtan Jain (2101CS38), Prakhar Shukla (2201CS54)
    </li>
    <li>
      <strong>Kaizen:</strong> General Quiz – Qualified Prelims, 2nd in Finals<br />
      Aryan Dabad (2101AI36), Siddhant Senapati (2101AI38), Kirtan Jain (2101CS38), Prakhar Shukla (2201CS54)
    </li>
    <li>
      <strong>Kaizen:</strong> General Quiz – Qualified Prelims, 4th in Finals<br />
      Shibanshu Das (2302GT08), Shivang Rayat (2301PH17), Aditya Gupta (2301PH03), Ashmit Verma (2301PH07)
    </li>
    <li>
      <strong>NTPC Electron:</strong> Ranked 1st in Eastern Zonals and qualified for the finals among top 8 teams in India<br />
      Team IIT Patna - I: Kirtan Jain (2101CS38), Aryan Dabad (2101AI36)
    </li>
    <li>
      <strong>Kashiyatra:</strong> Sports Quiz – Qualified Prelims, 4th in Finals<br />
      Siddhant Senapati (2101AI38), Aryan Dabad (2101AI36), Kirtan Jain (2101CS38)
    </li>
  </ul>

  )
},
{
  title: "Syahi",
  src: "/ClubLogo/syahi.jpg",
  content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed"> 
      <li><strong>Gold</strong> – English Poetry Slam</li>
        <li><strong>Silver</strong> – Hindi Poetry Writing</li>
        <li><strong>Silver</strong> – Hindi Creative Writing</li>
        <li><strong>Bronze</strong> – English Poetry Writing</li>
        <li><strong>5th Rank</strong> – English Slam Poetry (Second Entry)</li>
      </ul>
  )
  },
  {
    title: "Epicurean",
    src: "/ClubLogo/epicurean.png",
    content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>Inter IIT Cult 7.0:</strong>mixology - gold<br />
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong>cook off- gold<br />
    </li>
  </ul>
),
  },
  {
    title: "HexaChrome",
    src: "/ClubLogo/Hexachrome.jpg",
    content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>Unscramble 2025:</strong> Silver – 4×4<br />
    </li>
    <li>
      <strong>Unscramble 2025:</strong> Bronze – 3×3<br />
    </li>
    <li>
      <strong>Unscramble 2025:</strong> Bronze – 3×3 One-Handed<br />
    </li>

  </ul>
    ),
  },
  {
    title: "Vincetroke",
    src: "/ClubLogo/Vincetroke.jpg",
    content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>Inter IIT cult 7.0 2024:</strong> 1st position in charcoal art among 23 IITs<br />
    </li>
    <li>
      <strong>Inter IIT cult 7.0 2024:</strong> 2nd position in costume design among 23 IITs<br />
    </li>
    <li>
      <strong>Inter IIT cult 7.0 2024:</strong> 3rd, 14th and 29th positions in canvas painting among 57 entries from all IITs
<br />
    </li>
    <li>
      <strong>Inter IIT cult 7.0 2024:</strong> 5th, 14th and 29th positions in live sketching among 69 entries from all IITs<br />
    </li>
  </ul>


    ),
  },
  {
    title: "Anime Club",
    src: "/ClubLogo/anime.png", 
    content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>AnimeCon (Successfully organized since 2023):</strong> One of our most impactful and crowd-pulling events, AnimeCon has been successfully organized since 2023. What started as a unique initiative to bring anime, manga, and pop culture enthusiasts together has now become a flagship event. With engaging activities like cosplay competitions, fan-art showcases, anime quizzes, and themed games, AnimeCon has consistently witnessed enthusiastic participation and vibrant energy. Its continued success stands as a testament to our team&apos;s creativity, coordination, and ability to execute large-scale thematic events with excellence.
<br />
    </li>

  </ul>
      
    ),
  },
  {
    title: "Ikkatt",
    src: "/ClubLogo/ikkatt.png",
    content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>Inter IIT cult 7.0 2024:</strong> Online modelling inter iit 4th position <br />
    </li>
  </ul>
    ),
  },
  {
    title: "STD",
    src: "/ClubLogo/std.png",
    content: () => (
      <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">    <li>
      <strong>Inter IIT cult 6.0 :</strong> Silver Medal in Stand-up<br />
    </li>
    <li>
      <strong>Inter IIT cult 6.0 :</strong> 4th Rank in Stand-up<br />
    </li>
    <li>
      <strong>Inter IIT cult 7.0 2024 :</strong> 4th Rank in Stand-up
<br />
    </li>
    <li>
      <strong>Laughter Premier League :</strong> Comic Debate - 4th Rank    </li>
  </ul>
    ),
  },
];