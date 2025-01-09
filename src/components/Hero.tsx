import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Dedicated <span className="gradient-text">AI-Powered</span> Engineering Team
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Build SEO-optimized web mini apps without coding. Get your first app within 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Examples
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="https://framerusercontent.com/images/4UbBrsXAbl3VywkQuCYTzUZC88.png?scale-down-to=1024&lossless=1"
            alt="ToolzFlow Hero"
            className="w-full max-w-[600px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};