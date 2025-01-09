import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

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
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <Card className="max-w-lg mx-auto border-2">
          <CardHeader>
            <h3 className="text-2xl font-bold">Agency Plan</h3>
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
            <Button size="lg" className="w-full text-lg">
              Book a Demo
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};