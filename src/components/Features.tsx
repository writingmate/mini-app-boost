import { Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Dedicated Engineer",
    description: "Get 5-15 mini apps built by your personal engineering team",
  },
  {
    title: "Rapid Delivery",
    description: "First app within 7 days, second app 2 days after",
  },
  {
    title: "SEO Research",
    description: "Competitor research and app recommendations for maximum impact",
  },
  {
    title: "Optimization",
    description: "3 iterations for conversion optimization work",
  },
  {
    title: "SEO Content",
    description: "AI-facilitated, human-written content for better ranking",
  },
];

export const Features = () => {
  return (
    <div className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need to <span className="gradient-text">Scale Your SEO</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};