import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { format } from "date-fns";

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
  const currentDate = format(new Date(), 'MMMM yyyy');

  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Only <span className="text-primary font-semibold">2 slots left</span> {currentDate} out of 3 total client positions.
          <span className="block text-sm mt-1">1 slot already booked</span>
        </p>
        <Card className="max-w-lg mx-auto border">
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
          <CardFooter>
            <Button size="lg" className="w-full text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200">
              Book a Call
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};