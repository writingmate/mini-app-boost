import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const examples = [
  {
    title: "AI Blog Generator",
    description: "A full-featured blog platform that uses AI to generate SEO-optimized content.",
    features: ["Content Generation", "SEO Optimization", "Automated Publishing"]
  },
  {
    title: "E-commerce Product Descriptions",
    description: "AI-powered system that creates compelling product descriptions for online stores.",
    features: ["Keyword Integration", "Multi-language Support", "Brand Voice Matching"]
  },
  {
    title: "Social Media Manager",
    description: "Automated social media content creation and scheduling platform.",
    features: ["Content Calendar", "Analytics Dashboard", "Multi-platform Support"]
  },
  {
    title: "Landing Page Builder",
    description: "AI-assisted landing page creation tool with conversion optimization.",
    features: ["A/B Testing", "Mobile Optimization", "Lead Generation"]
  }
];

export const Examples = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Real-World <span className="gradient-text">Examples</span>
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {examples.map((example, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full border">
                  <CardHeader>
                    <CardTitle>{example.title}</CardTitle>
                    <CardDescription>{example.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      {example.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};