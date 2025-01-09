import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { ComparisonSection } from "@/components/ComparisonSection";
import { SuccessStories } from "@/components/SuccessStories";
import { TeamSection } from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ComparisonSection />
      <SuccessStories />
      <TeamSection />
      <Pricing />
    </div>
  );
};

export default Index;