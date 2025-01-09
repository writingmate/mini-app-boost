import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12">
          Want the same <span className="gradient-text">SEO growth</span>?
        </h1>
        <img 
          src="https://framerusercontent.com/images/4UbBrsXAbl3VywkQuCYTzUZC88.png?scale-down-to=1024&lossless=1"
          alt="ToolzFlow Hero"
          className="w-full max-w-[600px] mx-auto mb-8"
        />
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          We build SEO-optimized web mini apps. Get your first app <span className="gradient-text font-semibold">within 7 days</span>.
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200">
            Book a Call
          </Button>
        </div>
      </div>
    </div>
  );
};