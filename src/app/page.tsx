import FAQs from "@/components/FAQs";
import BookingInfoSection from "@/components/BookingInfoSection";
import Channel from "@/components/Channel";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import NetworkingVideoSection from "@/components/NetworkingVideoSection";
import { PitchCard } from "@/components/PitchCard";
import PressSection from "@/components/PressSection";
import Spotlight from "@/components/Spotlight";
import { Testimonial } from "@/components/Testimonial";
import Footer from "@/components/Footer";


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
      <PressSection/>
      <FAQs/>
    </div>
  );
}
