"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import type { Variants, Transition, Easing } from "framer-motion";

const customEase = [0.645, 0.045, 0.355, 1.0] as unknown as Easing;

interface SliderImage {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "sync" | "auto";
}

export const OptimizedImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  images: SliderImage[];
  children?: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  sizes?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Preload only the next image to keep UX smooth without blocking initial paint
  useEffect(() => {
    if (images.length <= 1) return;
    const nextIdx = (currentIndex + 1) % images.length;
    const raw = images[nextIdx]?.src || "";
    const normalized = raw.startsWith("http") || raw.startsWith("data:") || raw.startsWith("blob:")
      ? raw
      : (raw.startsWith("/") ? raw : `/${raw}`);
    const preload = new window.Image();
    preload.src = normalized;
  }, [currentIndex, images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: ReturnType<typeof setInterval>;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 4000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants: Variants = {
    initial: { scale: 0, opacity: 0, rotateX: 45 },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: customEase,
      } as Transition,
    },
    upExit: { opacity: 1, y: "-150%", transition: { duration: 1 } },
    downExit: { opacity: 1, y: "150%", transition: { duration: 1 } },
  };
  // Normalize current image src once per render
  const current = images[currentIndex] || images[0];
  const rawSrc = current?.src || "";
  const normalizedSrc = rawSrc.startsWith("http") || rawSrc.startsWith("data:") || rawSrc.startsWith("blob:")
    ? rawSrc
    : (rawSrc.startsWith("/") ? rawSrc : `/${rawSrc}`);

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {children}
      {overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="visible"
          exit={direction === "up" ? "upExit" : "downExit"}
          variants={slideVariants}
          className="h-full w-full absolute inset-0"
        >
          <Image
            src={normalizedSrc}
            alt={current?.alt || `Slide ${currentIndex + 1}`}
            fill
            sizes={sizes}
            priority={
              current?.loading === "eager" ||
              current?.fetchPriority === "high"
            }
            loading={current?.loading || "lazy"}
            fetchPriority={current?.fetchPriority || "auto"}
            decoding={current?.decoding || "async"}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
