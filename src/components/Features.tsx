import { Rocket, Users, Phone, Search, LineChart, Zap, FileText, Brain, Database } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Day 1: Strategy Call",
    description: "We start with a focused 30-minute call to understand your business goals and create a clear plan together.",
    icon: Phone,
    step: 1
  },
  {
    title: "Day 2: Keyword Analysis & App Selection",
    description: "Our team researches your market and competitors to find the best opportunities. We then suggest the most effective mini apps for your business.",
    icon: Search,
    step: 2
  },
  {
    title: "Day 7: Rapid App Delivery",
    description: "Your first mini app goes live! After this, we speed up the process to deliver a new app every 2 days.",
    icon: Zap,
    step: 7
  },
  {
    title: "Day 9: Optimization",
    description: "We track how users interact with your apps and make improvements to increase sign-ups and other important actions.",
    icon: LineChart,
    step: 9
  },
  {
    title: "Day 10: Scale Up",
    description: "Using what we've learned, we quickly create more apps to bring even more visitors to your business.",
    icon: Users,
    step: 10
  }
];

const additionalFeatures = [
  {
    title: "Dedicated Engineer",
    description: "You'll have a dedicated engineer working on your mini apps, ensuring consistent quality and quick iterations.",
    icon: Brain
  },
  {
    title: "Continuous Optimization",
    description: "We track how users interact with your apps and make up to 3 iterations of improvements to increase sign-ups and other important actions.",
    icon: LineChart
  },
  {
    title: "AI-Assisted SEO Content",
    description: "Each app comes with human-written, AI-assisted SEO content to further strengthen your mini app's performance.",
    icon: FileText
  },
  {
    title: "Complete SEO Research Access",
    description: "Get access to our complete research, which may contain additional insights and ideas about your future apps.",
    icon: Database
  }
];

export const Features = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Rocket className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Step by Step Plan to <span className="gradient-text">Scale Your SEO with Mini Apps</span>
            </h2>
          </div>
          
          <div className="relative mb-16">
            {features.map((feature, index) => (
              <div key={feature.title} className="relative">
                <div className="flex items-start gap-4 mb-8">
                  <div className="relative">
                    <div className="absolute left-4 top-14 bottom-0 w-0.5 bg-primary/20" 
                         style={{ display: index === features.length - 1 ? 'none' : 'block' }} />
                  </div>
                  <Card className="flex-1 border-primary/20">
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
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              But This Is Not All
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {additionalFeatures.map((feature) => (
                <Card key={feature.title} className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <feature.icon className="h-6 w-6 text-primary" />
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
    </div>
  );
};