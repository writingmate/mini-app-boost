import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { BookingDialog } from "./BookingDialog";

const features = [
  "Dedicated engineer",
  "5-15 mini apps per month",
  "First app in 7 days",
  "SEO & competitor research",
  "3 optimization iterations",
  "AI-powered SEO content",
  "Premium support",
];

export const Pricing = () => {
  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Only <span className="text-primary font-semibold">2 slots left</span> January 2025 out of 3 total client positions.
          <span className="block text-sm mt-1">1 slot already booked</span>
        </p>
        <Card className="max-w-lg mx-auto border mb-8">
          <CardHeader>
            <p className="text-4xl font-bold mt-4">$5,000<span className="text-lg text-muted-foreground">/month</span></p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pb-8">
            <BookingDialog 
              size="lg" 
              className="w-full text-xl px-12 py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
            >
              Book a Call
            </BookingDialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};