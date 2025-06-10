import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import YoutubeSection from '@/components/YoutubeSection';

export default function MainPage() {
  return (
    <main>
      <HeroSection />
      <About />
      <YoutubeSection videoId="hRtSw2gYoco" title="IIT Patna Band Performance | Inter IIT Cult Meet 6.0 Kharagpur" />
    </main>
  );
}