import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";
import TeamSection from "@/components/home/TeamSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ServiceSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialSection />
        <BlogSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
