"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const ImageGrid = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullSlider, setShowFullSlider] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= images.length ? 0 : prevIndex + 4
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? Math.max(0, images.length - 4) : prevIndex - 4
    );
  };

  const handleFullScreenNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handleFullScreenPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={cn("w-full bg-white rounded-xl p-6 shadow-lg", className)}>
      <h2 className="text-2xl font-bold text-neutral-700 mb-6">Gallery</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(currentIndex + index);
              setShowFullSlider(true);
            }}
          >
            <Image
              src={image}
              alt={`Gallery image ${currentIndex + index + 1}`}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <span className="text-sm text-gray-600">
          {Math.floor(currentIndex / 4) + 1} / {Math.ceil(images.length / 4)}
        </span>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <AnimatePresence>
        {showFullSlider && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setShowFullSlider(false)}
          >
            <div
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleFullScreenPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
                transition={{ duration: 0.15 }}
                className="relative w-full h-[80vh] rounded-lg overflow-hidden"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vh"
                  loading="lazy"
                />

                {images.length > 1 && (
                  <>
                    <Image
                      src={images[(currentIndex + 1) % images.length]}
                      alt=""
                      width={1}
                      height={1}
                      className="hidden"
                    />
                    <Image
                      src={images[(currentIndex - 1 + images.length) % images.length]}
                      alt=""
                      width={1}
                      height={1}
                      className="hidden"
                    />
                  </>
                )}
              </motion.div>

              <button
                onClick={handleFullScreenNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};