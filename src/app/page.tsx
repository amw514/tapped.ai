import BookingInfoSection from "@/components/BookingInfoSection";
import Channel from "@/components/Channel";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import NetworkingVideoSection from "@/components/NetworkingVideoSection";
import { PitchCard } from "@/components/PitchCard";
import Spotlight from "@/components/Spotlight";
import { Testimonial } from "@/components/Testimonial";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImageGallery />
      <PitchCard />
      <BookingInfoSection />
      <Spotlight />
      <Channel />
      <Testimonial/>
      <NetworkingVideoSection/>
    </div>
  );
}
