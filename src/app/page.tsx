import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>

    <HeroSection/>
    <ImageGallery/>
    </div>
  );
}
