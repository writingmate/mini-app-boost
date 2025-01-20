import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Database, Server, RocketIcon, ChartBar, Users, User } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

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
    optimization: false,
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
              {plans.map((plan, index) => (
                <TableHead key={plan.name} className="text-center">
                  <div className="flex flex-col items-center justify-between min-h-[180px] p-4">
                    <div className="space-y-2 text-center">
                      <h3 className="font-bold text-xl text-foreground tracking-tight">{plan.name}</h3>
                      <div>
                        <div className="text-3xl font-bold text-primary">{plan.price}</div>
                        <div className="text-sm text-muted-foreground mt-1">per {plan.period}</div>
                        {plan.pricePerMonth && (
                          <div className="text-sm text-primary font-medium mt-1">{plan.pricePerMonth}/month</div>
                        )}
                        {/* Add invisible text for first and last plan to match height */}
                        {(index === 0 || index === 2) && (
                          <div className="text-sm text-transparent mt-1">$167/month</div>
                        )}
                      </div>
                    </div>
                    <BookingDialog 
                      size="default"
                      className="px-6 py-2"
                    >
                      Book a Call
                    </BookingDialog>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span className="font-medium">Apps Limit</span>
                  </div>
                  <div className="text-sm text-muted-foreground pl-7">Create as many apps as you need</div>
                </div>
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span>{plan.appLimit}</span>
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">White Labeling</span>
                  </div>
                  <div className="text-sm text-muted-foreground pl-7">Remove our branding from your apps and brand them as your own</div>
                </div>
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.whitelabeling ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-destructive mx-auto" />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    <span className="font-medium">App Hosting</span>
                  </div>
                  <div className="text-sm text-muted-foreground pl-7">Save $50-200 per month on hosting costs</div>
                </div>
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.hosting ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-destructive mx-auto" />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ChartBar className="h-5 w-5 text-primary" />
                    <span className="font-medium">Keyword Analysis & Competitive Research</span>
                  </div>
                  <div className="text-sm text-muted-foreground pl-7">
                    It's hard to come up with good app ideas. We help you with in-depth SEO keyword analysis and competitive research
                  </div>
                </div>
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.keywordAnalysis ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-destructive mx-auto" />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <RocketIcon className="h-5 w-5 text-primary" />
                    <span className="font-medium">App Building Services</span>
                  </div>
                  <div className="text-sm text-muted-foreground pl-7">
                    Need help building apps, we are here to help
                  </div>
                </div>
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center text-sm">
                  {plan.builder}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ChartBar className="h-5 w-5 text-primary" />
                    <span className="font-medium">SEO Content</span>
                  </div>
                  <div className="text-sm text-muted-foreground pl-7">
                    Apps need high quality content to rank high on search engines, we help you write it
                  </div>
                </div>
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center text-sm">
                  {plan.seoContent}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ChartBar className="h-5 w-5 text-primary" />
                    <span className="font-medium">App Optimization for Conversion Rates</span>
                  </div>
                  <div className="text-sm text-muted-foreground pl-7">
                    Building an app is just a first step, you'll need to monitor metrics and optimize it to improve conversion rates
                  </div>
                </div>
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {typeof plan.optimization === 'boolean' ? (
                    plan.optimization ? (
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    )
                  ) : (
                    plan.optimization
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-medium">Dedicated Growth Engineer</span>
                  </div>
                  <div className="text-sm text-muted-foreground pl-7">A dedicated engineer to help with your growth strategy</div>
                </div>
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.name} className="text-center">
                  {plan.dedicatedEngineer ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-destructive mx-auto" />
                  )}
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