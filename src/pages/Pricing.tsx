import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Database, Server, RocketIcon, ChartBar, Users, User } from "lucide-react";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingFeature } from "@/components/pricing/PricingFeature";

const plans = [
  {
    name: "ToolzFlow Monthly",
    price: "$200",
    period: "month",
    appsBuilt: "0",
    builder: "You build the apps",
    hosting: true,
    keywordAnalysis: false,
    optimization: false,
    seoContent: "Not included",
    appLimit: "Unlimited",
    whitelabeling: true,
    dedicatedSupport: false,
    dedicatedEngineer: false,
  },
  {
    name: "ToolzFlow Six Month",
    price: "$1,000",
    period: "6 months",
    pricePerMonth: "$167",
    appsBuilt: "3",
    builder: "We build up to 3 apps",
    hosting: true,
    keywordAnalysis: true,
    optimization: "Up to 3 optimizations for each app",
    seoContent: "Best practice guide provided",
    appLimit: "Unlimited",
    whitelabeling: true,
    dedicatedSupport: true,
    dedicatedEngineer: false,
  },
  {
    name: "ToolzFlow Agency",
    price: "$5,000",
    period: "month",
    appsBuilt: "up to 15",
    builder: "We build up to 15 apps",
    hosting: true,
    keywordAnalysis: true,
    optimization: "Up to 3 optimizations for each app",
    seoContent: "Written & optimized by our SEO experts",
    appLimit: "Unlimited",
    whitelabeling: true,
    dedicatedSupport: true,
    dedicatedEngineer: true,
  },
];

const PricingPage = () => {
  return (
    <div className="section-padding">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Choose Your <span className="gradient-text">Plan</span>
      </h1>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Only <span className="text-primary font-semibold">2 slots left</span> January 2025 out of 3 total client positions.
        <span className="block text-sm mt-1">1 slot already booked</span>
      </p>
      
      <div className="overflow-x-auto">
        <Table className="border rounded-2xl overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Features</TableHead>
              {plans.map((plan) => (
                <TableHead key={plan.name} className="text-center">
                  <PricingHeader {...plan} />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <PricingFeature
                  icon={Database}
                  title="Apps Limit"
                  description="Create as many apps as you need"
                  value="Unlimited"
                />
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.appLimit}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <PricingFeature
                  icon={Users}
                  title="White Labeling"
                  description="Remove our branding from your apps and brand them as your own"
                  value={true}
                />
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.whitelabeling}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <PricingFeature
                  icon={Server}
                  title="App Hosting"
                  description="Save $50-200 per month on hosting costs"
                  value={true}
                />
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.hosting}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <PricingFeature
                  icon={ChartBar}
                  title="Keyword Analysis & Competitive Research"
                  description="It's hard to come up with good app ideas. We help you with in-depth SEO keyword analysis and competitive research"
                  value={true}
                />
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.keywordAnalysis}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <PricingFeature
                  icon={RocketIcon}
                  title="App Building Services"
                  description="Need help building apps, we are here to help"
                  value={plans[0].builder}
                />
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.builder}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <PricingFeature
                  icon={ChartBar}
                  title="SEO Content"
                  description="Apps need high quality content to rank high on search engines"
                  value={plans[2].seoContent}
                />
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.seoContent}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <PricingFeature
                  icon={ChartBar}
                  title="App Optimization for Conversion Rates"
                  description="Building an app is just a first step, you'll need to monitor metrics and optimize it to improve conversion rates"
                  value={plans[2].optimization}
                />
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.optimization}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <PricingFeature
                  icon={User}
                  title="Dedicated Growth Engineer"
                  description="A dedicated engineer to help with your growth strategy"
                  value={true}
                />
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.dedicatedEngineer}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PricingPage;