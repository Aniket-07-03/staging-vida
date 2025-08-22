import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BeachsideBlissSection from "@/components/BeachsideBlissSection";
import VIPOfferSection from "@/components/VIPOfferSection";
import WhyVidaSection from "@/components/WhyVidaSection";
import StartJourneySection from "@/components/StartJourneySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BeachsideBlissSection />
      <VIPOfferSection />
      <WhyVidaSection />
      <StartJourneySection />
      <Footer />
    </div>
  );
};

export default Index;
