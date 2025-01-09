import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Timeline } from "@/components/Timeline";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Timeline />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default Index;