'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FlipText } from "@/components/magicui/flip-text";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Welcome.jpg"
          alt="HOSCA Welcome Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-red-900/30" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-grey-200 via-white to-grey-300 bg-clip-text text-transparent animate-gradient-x"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Welcome to HOSCA
          </motion.h1>
            <FlipText className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-grey-300 via-white to-grey-300 font-medium mb-12 max-w-3xl mx-auto animate-gradient-x-slow">The House Of Socio-Cultural Affairs</FlipText>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/events"
              className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">View Events</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/club"
              className="group relative px-8 py-4 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm text-white text-lg font-medium border-2 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}