import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hire Dedicated <span className="gradient-text">AI-Powered</span> SEO Engineering Team
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 gradient-text">
          Want the same SEO growth?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Build SEO-optimized web mini apps without coding. Get your first app within 7 days.
        </p>
        <img 
          src="https://framerusercontent.com/images/4UbBrsXAbl3VywkQuCYTzUZC88.png?scale-down-to=1024&lossless=1"
          alt="ToolzFlow Hero"
          className="w-full max-w-[600px] mx-auto mb-12"
        />
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