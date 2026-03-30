"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { VideoText } from "@/components/magicui/video-text";

const FlipText = React.lazy(() =>
  import("@/components/magicui/flip-text").then((module) => ({
    default: module.FlipText,
  })),
);

export default function HeroSection() {
  const [showEnhancements, setShowEnhancements] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowEnhancements(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 z-[5] opacity-[0.42]"
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-r from-sky-500/10 via-white/5 to-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center space-y-8 px-4 py-24">
        <div className="flex w-full max-w-[90vw] items-center justify-center">
          {showEnhancements && (
            <div className="hero-hosca-glow-static w-full">
              <React.Suspense fallback={null}>
                <VideoText
                  className="h-[160px] w-full font-bold text-transparent sm:h-[200px] md:h-[250px] lg:h-[350px]"
                  src="/video/huscabg-vid.mp4"
                  fontSize="clamp(30px, 25vw, 350px)"
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.85)",
                  }}
                >
                  HOSCA
                </VideoText>
              </React.Suspense>
            </div>
          )}
        </div>

        <div className="space-y-2 overflow-hidden px-4 text-center leading-tight sm:px-6 md:px-8">
          {showEnhancements && (
            <React.Suspense fallback={null}>
              <FlipText className="animate-gradient-x-slow bg-gradient-to-r from-zinc-300 via-white to-zinc-300 bg-clip-text text-sm font-medium tracking-tight text-transparent sm:text-xl md:text-2xl lg:text-3xl">
                The House Of Socio-Cultural
              </FlipText>
              <FlipText className="animate-gradient-x-slow bg-gradient-to-r from-zinc-300 via-white to-zinc-300 bg-clip-text text-sm font-medium tracking-tight text-transparent sm:text-xl md:text-2xl lg:text-3xl">
                Affairs
              </FlipText>
            </React.Suspense>
          )}
        </div>

        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/events"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="relative z-10">View Events</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
          <Link
            href="/club"
            className="group relative overflow-hidden rounded-full border-2 border-white/25 bg-white/5 px-8 py-4 text-lg font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:shadow-xl"
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
          <Link
            href="/gallery"
            className="group relative overflow-hidden rounded-full border border-sky-300/25 bg-sky-400/10 px-8 py-4 text-lg font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-xl"
          >
            <span className="relative z-10">View Gallery</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-cyan-300/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
          <Link
            href="/achievement"
            className="group relative overflow-hidden rounded-full border border-amber-300/25 bg-amber-400/10 px-8 py-4 text-lg font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/50 hover:shadow-xl"
          >
            <span className="relative z-10">Achievements</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300/20 to-orange-300/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
