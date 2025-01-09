import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Timeline } from "@/components/Timeline";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Timeline />
      <Pricing />
    </div>
  );
};

export default Index;