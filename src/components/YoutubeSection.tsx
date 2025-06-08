import React from 'react';
import HeroVideoDialog from './magicui/hero-video-dialog';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

interface YoutubeSectionProps {
  videoId: string;
  title?: string;
}

const YoutubeSection: React.FC<YoutubeSectionProps> = ({ videoId, title }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <section className="flex flex-col items-center justify-center py-8">
      {title && (
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-red-700 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h2>
      )}
      <div className="w-full max-w-3xl">
        <HeroVideoDialog
          videoSrc={videoUrl}
          thumbnailSrc={thumbnailUrl}
          thumbnailAlt={title || 'YouTube Video Thumbnail'}
          animationStyle="from-center"
        />
      </div>
      <a
        href="https://www.youtube.com/watch?v=hRtSw2gYoco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InteractiveHoverButton className="mt-8">
          Watch on YouTube
        </InteractiveHoverButton>
      </a>
    </section>
  );
};

export default YoutubeSection;