import { Rocket, Users, Phone, Search, LineChart, FileText, Upload, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Day 1: Strategy Call",
    description: "We do an intake, review your goals in a focused 30-minute strategy call to align our efforts with your business objectives.",
    icon: Phone,
  },
  {
    title: "Day 2: App Selection & Research",
    description: "We conduct thorough SEO research and provide mini app recommendations tailored to your market opportunities.",
    icon: Search,
  },
  {
    title: "Rapid App Delivery",
    description: "Experience our accelerated development process, delivering your custom applications with exceptional speed and quality.",
    icon: Zap,
  },
  {
    title: "SEO Content Creation",
    description: "Get human-written, AI-assisted SEO content specifically crafted for your application to maximize its impact.",
    icon: FileText,
  },
  {
    title: "Deployment",
    description: "We handle the seamless publication of your app to your website, ensuring proper integration and functionality.",
    icon: Upload,
  },
  {
    title: "Optimization",
    description: "We continuously monitor engagement metrics and optimize applications for better conversion rates, ensuring maximum ROI.",
    icon: LineChart,
  },
  {
    title: "Scale Up",
    description: "Repeat the process for up to 15 apps in a month, rapidly expanding your digital presence and SEO impact.",
    icon: Users,
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