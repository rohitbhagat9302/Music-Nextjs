import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructor from "@/components/Instructor";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
