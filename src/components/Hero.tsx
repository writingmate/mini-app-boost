import { BookingDialog } from "./BookingDialog";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center section-padding">
      <div className="w-full text-center">
        <h1 className="text-5xl font-bold mb-12 max-w-[95%] mx-auto">
          Want the same <span className="gradient-text">SEO growth</span>?
        </h1>
        <img 
          src="https://framerusercontent.com/images/4UbBrsXAbl3VywkQuCYTzUZC88.png?scale-down-to=1024&lossless=1"
          alt="ToolzFlow Hero"
          className="w-full max-w-[600px] mx-auto mb-8"
        />
        <p className="text-xl text-muted-foreground mb-12 max-w-[95%] mx-auto">
          We build SEO-optimized web mini apps. Get your first app <span className="gradient-text font-semibold">within 7 days</span>.
        </p>
        <div className="flex flex-col items-center gap-3">
          <BookingDialog 
            size="lg" 
            className="text-xl px-12 py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Book a Call
          </BookingDialog>
          <p className="text-muted-foreground">
            <span className="animate-pulse text-primary font-semibold">2</span> out of 3 slots left January 2025
          </p>
        </div>
      </div>
    </div>
  );
};