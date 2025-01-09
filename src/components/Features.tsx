import { Rocket, Users, Zap, Search, LineChart, FileText, Target, Wrench, Upload, Share, Library } from "lucide-react";
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

const steps = [
  {
    title: "Choose Your Target",
    description: "Select high-demanding mini application ideas that are relevant to your audience",
    icon: Target,
  },
  {
    title: "Build the Tool",
    description: "Use ToolzFlow to quickly create a simple, keyword-targeted application",
    icon: Wrench,
  },
  {
    title: "Deploy",
    description: "Add the app to your website optimizing for chosen keywords",
    icon: Upload,
  },
  {
    title: "Share and Track",
    description: "Publish your app page and monitor its impact on traffic and leads",
    icon: Share,
  },
  {
    title: "Grow Your Arsenal",
    description: "Easily create more web apps to multiply your SEO growth",
    icon: Library,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
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

          <div className="border-t pt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How It <span className="gradient-text">Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <Card key={step.title} className="border h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
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