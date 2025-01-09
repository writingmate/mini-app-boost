import { Rocket, Users, Zap, Search, LineChart, FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Dedicated Engineer",
    description: "Get personalized attention from your dedicated engineering team who will build 5-15 mini applications tailored to your specific needs. Each app is crafted with your business goals in mind.",
    icon: Users,
  },
  {
    title: "Rapid Delivery",
    description: "Experience lightning-fast development with your first app delivered within 7 days, second app in just 2 days, and continuous delivery of up to 15 apps monthly. Our streamlined process ensures quick turnaround without compromising quality.",
    icon: Zap,
  },
  {
    title: "SEO Research",
    description: "Benefit from comprehensive competitor analysis and strategic app recommendations designed to maximize your market impact. We identify key opportunities and gaps in your niche to ensure your applications stand out.",
    icon: Search,
  },
  {
    title: "Optimization",
    description: "Receive three rounds of detailed conversion optimization work to fine-tune your applications. We analyze user behavior, implement improvements, and optimize for maximum engagement and conversion rates.",
    icon: LineChart,
  },
  {
    title: "SEO Content",
    description: "Get high-quality, SEO-optimized content that combines AI efficiency with human expertise. Our content strategy ensures better search engine rankings while maintaining natural, engaging writing that resonates with your audience.",
    icon: FileText,
  },
];

export const Features = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Rocket className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Everything You Need to <span className="gradient-text">Scale Your SEO</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <feature.icon className="h-5 w-5 text-primary" />
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
    </div>
  );
};