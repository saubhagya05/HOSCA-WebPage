import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import YoutubeSection from "@/components/YoutubeSection";
import HomePageLayout from "@/components/HomePageLayout";

export default function MainPage() {
  return (
    <HomePageLayout>
      <HeroSection />
      <About />
      <YoutubeSection
        videoId="hRtSw2gYoco"
        title="IIT Patna Band Performance | Inter IIT Cult Meet 6.0 Kharagpur"
      />
    </HomePageLayout>
  );
}