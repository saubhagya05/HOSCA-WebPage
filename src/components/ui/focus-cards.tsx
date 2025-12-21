"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';


export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardData;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden aspect-[4/3] w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className={cn(
          "object-cover absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out",
          hovered === index ? "scale-110 brightness-110" : "scale-100 brightness-100"
        )}
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="lazy"
        fetchPriority="low"
      />

    </div>
  )
);

Card.displayName = "Card";

type CardData = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}