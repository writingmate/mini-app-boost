import { X, Check, Brain, Zap, Target, Clock, Robot, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

export const ComparisonSection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Our Approach Is <span className="gradient-text">Different</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            See how our dynamic mini-apps compare to traditional AI-generated static content
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional AI Content Side */}
            <Card className="p-8 border-destructive/20 bg-white/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Robot className="w-6 h-6 text-destructive/70" />
                Traditional AI Content
              </h3>
              <ul className="space-y-4">
                {[
                  "Generic, template-based content",
                  "One-time static pages",
                  "Limited user engagement",
                  "Basic keyword optimization",
                  "No user interaction data"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive/70 mt-1 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Our Dynamic Approach Side */}
            <Card className="p-8 border-primary/20 bg-white/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Our Dynamic Mini-Apps
              </h3>
              <ul className="space-y-4">
                {[
                  "Interactive, purpose-built tools",
                  "Continuously evolving content",
                  "High user engagement",
                  "Advanced SEO optimization",
                  "Rich user behavior insights"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};