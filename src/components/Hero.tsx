import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Dedicated <span className="gradient-text">AI-Powered</span> Engineering Team
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Build SEO-optimized web mini apps without coding. Get your first app within 7 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg">
            Book a Demo
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            View Examples
          </Button>
        </div>
      </div>
    </div>
  );
};