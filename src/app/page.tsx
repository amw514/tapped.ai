import BookingInfoSection from "@/components/BookingInfoSection";
import Channel from "@/components/Channel";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import { PitchCard } from "@/components/PitchCard";
import Spotlight from "@/components/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>

    <HeroSection/>
    <ImageGallery/>
    <PitchCard/>
    <BookingInfoSection/>
    <Spotlight/>
    <Channel/>
    </div>
  );
}
