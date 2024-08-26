import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import { PitchCard } from "@/components/PitchCard";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>

    <HeroSection/>
    <ImageGallery/>
    <PitchCard/>
    </div>
  );
}
