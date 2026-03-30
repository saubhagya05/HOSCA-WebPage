"use client";

import { Suspense } from "react";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { MagicCard } from "@/components/magicui/magic-card";
import { OptimizedImagesSlider } from "@/components/ui/images-slider-optimized";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";

interface EventImage {
  src: string;
  width: number;
  height: number;
  quality: number;
}

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  images: EventImage[];
  location?: string;
  accent: string;
  isImageLeft?: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: "Anwesha",
    date: "February 7-9, 2025",
    description:
      "Anwesha, the annual techno-cultural extravaganza of IIT Patna, brings together innovation, performance, design, and campus energy in one of East India’s most anticipated student festivals.",
    images: [
      { src: "events/anwesha/IMG_20250208_223941.jpg", width: 800, height: 600, quality: 75 },
      { src: "events/anwesha/IMG20250208185823.jpg", width: 800, height: 600, quality: 75 },
      { src: "events/anwesha/IMG20250208225814.jpg", width: 800, height: 600, quality: 75 },
      { src: "events/anwesha/IMG20250209210029.jpg", width: 800, height: 600, quality: 75 },
      { src: "events/anwesha/b.jpg", width: 800, height: 600, quality: 75 },
    ],
    location: "IIT Patna Campus",
    accent: "from-amber-400/30 via-orange-400/20 to-pink-500/20",
    isImageLeft: true,
  },
  {
    id: 2,
    title: "Reverberance",
    date: "October 26-31, 2024",
    description:
      "Reverberance transforms the Diwali season into an inter-year cultural tournament filled with light, tradition, and fierce creative expression across the IIT Patna campus.",
    images: [
      { src: "/events/reverberance/45761428_1923729217747212_3862406545320968192_n.jpg", width: 800, height: 600, quality: 75 },
      { src: "/events/reverberance/1412367_616054415103208_2119809909_o.jpg", width: 800, height: 600, quality: 75 },
    ],
    location: "IIT Patna Campus",
    accent: "from-fuchsia-500/25 via-violet-500/15 to-sky-500/20",
    isImageLeft: false,
  },
  {
    id: 3,
    title: "Nebula",
    date: "August 25, 2024",
    description:
      "Nebula, the annual freshers’ welcome, introduces incoming students to the cultural heartbeat of the institute through performances, interaction, and a celebratory first-night atmosphere.",
    images: [
      { src: "/events/nebula/_DSC7630.JPG", width: 800, height: 600, quality: 75 },
      { src: "/events/nebula/_DSC7649.JPG", width: 800, height: 600, quality: 75 },
      { src: "/events/nebula/_DSC7782.JPG", width: 800, height: 600, quality: 75 },
    ],
    location: "IIT Patna Auditorium",
    accent: "from-sky-500/25 via-cyan-400/15 to-blue-500/20",
    isImageLeft: true,
  },
];

function EventCard({ event }: { event: Event }) {
  const imageSection = (
    <div className="relative h-[320px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 md:h-[430px] md:w-[48%]">
      <Suspense fallback={<div className="h-full w-full animate-pulse bg-slate-800" />}>
        <OptimizedImagesSlider
          images={event.images.map((img, index) => ({
            ...img,
            fetchPriority: index === 0 ? "high" : "auto",
            loading: index === 0 ? "eager" : "lazy",
            decoding: "async",
          }))}
          className="h-full w-full"
          overlay
          overlayClassName="bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          autoplay
        >
          <div className="absolute inset-x-0 bottom-0 z-50 p-5 text-white">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {event.date}
              </span>
              {event.location && (
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </span>
              )}
            </div>
          </div>
        </OptimizedImagesSlider>
      </Suspense>
    </div>
  );

  const contentSection = (
    <div className="flex w-full flex-1 flex-col justify-center p-6 md:w-[52%] md:p-10">
      <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-slate-300">
        <Sparkles className="h-3.5 w-3.5" />
        HOSCA Event
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {event.title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
        {event.description}
      </p>
    </div>
  );

  return (
    <MagicCard className="w-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-[0_22px_70px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl">
      <div className={`rounded-[1.8rem] bg-gradient-to-br ${event.accent} p-[1px]`}>
        <div className="rounded-[1.75rem] bg-[#050913]/90 p-4 md:p-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
            {event.isImageLeft ? (
              <>
                {imageSection}
                {contentSection}
              </>
            ) : (
              <>
                {contentSection}
                {imageSection}
              </>
            )}
          </div>
        </div>
      </div>
    </MagicCard>
  );
}

export default function EventsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040a] text-white">
      <StarrySkyBackdrop particleQuantity={68} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_22%),radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.10),transparent_24%),radial-gradient(circle_at_80%_100%,rgba(59,130,246,0.12),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.38em] text-slate-400">
            HOSCA Calendar
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            <Cover>Events</Cover>
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300 md:text-lg">
            A more refined look at the festivals, tournaments, and cultural
            experiences that shape the HOSCA year.
          </p>
        </div>

        <section>
          <div className="space-y-8">
            {events.map((event) => (
              <Suspense key={event.id} fallback={<div className="h-[420px] animate-pulse rounded-[2rem] bg-slate-800/60" />}>
                <EventCard event={event} />
              </Suspense>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
