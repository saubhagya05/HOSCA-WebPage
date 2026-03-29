"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/hooks/use-outside-click";

export type ExpandableCardData = {
  title: string;
  description: string;
  src: string;
  ctaText?: string;
  ctaLink?: string;
  content?: string | (() => React.ReactNode);
};

export default function ExpandableCard({
  cards,
  className = "",
}: {
  cards: ExpandableCardData[];
  className?: string;
}) {
  const [active, setActive] = useState<ExpandableCardData | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 z-50 bg-white text-black rounded-full h-8 w-8 flex items-center justify-center"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              ✕
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-xl h-fit max-h-[90vh] bg-white dark:bg-neutral-900 overflow-hidden sm:rounded-3xl flex flex-col z-50"
            >
              <motion.img
                layoutId={`image-${active.title}-${id}`}
                src={active.src}
                alt={active.title}
                className="w-full h-60 object-cover object-top"
              />

              <div className="p-5 flex flex-col gap-4">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-xl font-bold dark:text-white"
                >
                  {active.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-sm text-neutral-600 dark:text-neutral-400"
                >
                  {active.description}
                </motion.p>

                <motion.div
                  layout
                  className="text-sm dark:text-neutral-300 overflow-auto max-h-60"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>

                {active.ctaLink && (
                  <motion.a
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-semibold"
                  >
                    {active.ctaText || "Learn More"}
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul
        className={`grid gap-6 grid-cols-1 md:grid-cols-2 ${className}`}
      >
        {cards.map((card) => (
          <motion.li
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="cursor-pointer rounded-xl bg-white dark:bg-neutral-800 p-4 shadow-md hover:shadow-lg transition"
          >
            <motion.img
              layoutId={`image-${card.title}-${id}`}
              src={card.src}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <motion.h3
              layoutId={`title-${card.title}-${id}`}
              className="text-lg font-semibold dark:text-white"
            >
              {card.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${card.description}-${id}`}
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              {card.description}
            </motion.p>
          </motion.li>
        ))}
      </ul>
    </>
  );
}