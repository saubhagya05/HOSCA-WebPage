"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { Cover } from "@/components/ui/cover";

const festPhotos = [
  {
    title: "Festival Moments 1",
    src: "/gallery/fest/DSC_8732.JPG",
  },
  {
    title: "Festival Moments 2",
    src: "/gallery/fest/DSC_7893.JPG",
  },
  {
    title: "Festival Moments 3",
    src: "/gallery/fest/DSC_0201.JPG",
  },
  {
    title: "Festival Moments 4",
    src: "/gallery/fest/DSC_0127.JPG",
  },
  {
    title: "Festival Moments 5",
    src: "/gallery/fest/51-fz5hcDhs.jpg",
  },
  {
    title: "Festival Moments 6",
    src: "/gallery/fest/45-L1KhcDhs.jpg",
  },
  {
    title: "Festival Moments 7",
    src: "/gallery/fest/41-5NQgcDhs.jpg",
  },
  {
    title: "Festival Moments 8",
    src: "/gallery/fest/4-T5nhcDhs.jpg",
  },
  {
    title: "Festival Moments 9",
    src: "/gallery/fest/37-7johcDhs.jpg",
  },
  {
    title: "Festival Moments 10",
    src: "/gallery/fest/36-dWdhcDhs.jpg",
  },
  {
    title: "Festival Moments 11",
    src: "/gallery/fest/30-UlHgcDhs.jpg",
  },
  {
    title: "Festival Moments 12",
    src: "/gallery/fest/28-To3gcDhs.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-200 to-gray-900 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mt-10 text-3xl md:text-4xl font-bold text-center mb-2">
            <Cover>Gallery</Cover>
          </h2>
          <p className="text-lg mt-10 text-center mb-8 max-w-3xl mx-auto bg-gradient-to-r from-gray-900 via-orange-600 to-red-700 bg-clip-text text-transparent">
            Relive the vibrant moments and memories from our festivals and events at HOSCA, IIT Patna.
          </p>
        </div>
        <FocusCards cards={festPhotos} />
      </div>
    </div>
  );
} 