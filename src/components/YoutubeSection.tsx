import React from "react";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

interface YoutubeSectionProps {
  videoId: string;
  title?: string;
}

const IIT_PATNA_PREFIX = /^IIT\s+Patna\s+/i;

const YoutubeSection: React.FC<YoutubeSectionProps> = ({ videoId, title }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&playsinline=1`;

  let titleLead: React.ReactNode = null;
  let titleRest: string | null = title ?? null;
  if (title && IIT_PATNA_PREFIX.test(title)) {
    titleRest = title.replace(IIT_PATNA_PREFIX, "").trim();
    titleLead = (
      <span className="text-amber-300 drop-shadow-[0_0_24px_rgba(251,191,36,0.25)]">
        IIT Patna{" "}
      </span>
    );
  }

  return (
    <section className="relative w-full px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        {title && (
          <h2 className="mb-10 max-w-3xl text-center text-xl font-bold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:mb-12 md:text-3xl">
            {titleLead}
            <span className="font-semibold text-zinc-400">{titleRest}</span>
          </h2>
        )}
        <div className="relative w-full max-w-3xl overflow-hidden rounded-xl shadow-[0_0_60px_-12px_rgba(15,15,20,0.9),0_32px_64px_-16px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
          <HeroVideoDialog
            videoSrc={videoUrl}
            thumbnailSrc={thumbnailUrl}
            thumbnailAlt={title || "YouTube Video Thumbnail"}
            animationStyle="from-center"
            className="[&_img]:border-white/15"
          />
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10"
        >
          <InteractiveHoverButton className="border-white/30 bg-white/5 text-zinc-200 hover:border-white/50 hover:bg-white/10">
            Watch on YouTube
          </InteractiveHoverButton>
        </a>
      </div>
    </section>
  );
};

export default YoutubeSection;
