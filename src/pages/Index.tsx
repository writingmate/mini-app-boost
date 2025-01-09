import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Examples } from "@/components/Examples";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Examples />
      <Pricing />
    </div>
  );
};

export default Index;