import HeroSection from "./HeroSection/HeroSection";
import FeaturedStrippers from "./FeaturedStrippers/FeaturedStrippers";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import ServiceAreas from "./ServiceAreas/ServiceAreas";
import Testimonials from "./Testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";
import FinalCTA from "./FinalCTA/FinalCTA";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedStrippers />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
