import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Examples } from "@/components/Examples";
import { ComparisonSection } from "@/components/ComparisonSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ComparisonSection />
      <Examples />
      <Pricing />
    </div>
  );
};

export default Index;