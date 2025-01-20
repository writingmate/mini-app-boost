import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Info } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
    builder: "First 3 apps in first 30 days",
    builderTooltip: "Our team builds your first 3 apps within 30 days or until completion (whichever comes first). After that, you'll build additional apps.",
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
    builder: "First 15 apps in first 30 days",
    builderTooltip: "Our team builds up to 15 apps within 30 days or until completion (whichever comes first). After that, you'll build additional apps.",
    hosting: true,
    keywordAnalysis: true,
    optimization: true,
    seoContent: "Written & optimized by our SEO experts",
    appLimit: "Unlimited",
    whitelabeling: true,
    dedicatedSupport: true,
    dedicatedEngineer: true,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Choose Your <span className="gradient-text">Plan</span>
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Only <span className="text-primary font-semibold">2 slots left</span> January 2025 out of 3 total client positions.
          <span className="block text-sm mt-1">1 slot already booked</span>
        </p>

        <div className="overflow-x-auto">
          <TooltipProvider>
            <Table className="border rounded-2xl overflow-hidden">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Features</TableHead>
                  {plans.map((plan) => (
                    <TableHead key={plan.name} className="text-center">
                      <div className="flex flex-col items-center justify-between min-h-[200px] p-4">
                        <div className="space-y-4 text-center">
                          <h3 className="font-bold text-xl text-foreground tracking-tight">{plan.name}</h3>
                          <div>
                            <div className="text-3xl font-bold text-primary">{plan.price}</div>
                            <div className="text-sm text-muted-foreground mt-1">per {plan.period}</div>
                            {plan.pricePerMonth && (
                              <div className="text-sm text-primary font-medium mt-1">{plan.pricePerMonth}/month</div>
                            )}
                          </div>
                        </div>
                        <BookingDialog 
                          size="lg" 
                          className="w-full text-xl px-12 py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
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
                    Extra Apps Included
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Number of apps our team will build for you
                      </TooltipContent>
                    </Tooltip>
                    <div className="text-sm text-muted-foreground">Accelerate your business growth</div>
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell key={plan.name} className="text-center">{plan.appsBuilt}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    App Building
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-[200px]">{plans[2].builderTooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                    <div className="text-sm text-muted-foreground">Get your apps built faster</div>
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell key={plan.name} className="text-center">{plan.builder}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    App Hosting Included
                    <div className="text-sm text-muted-foreground">Save $50-200 per month on hosting costs</div>
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
                    Keyword Analysis & Competitive Research
                    <div className="text-sm text-muted-foreground">Identify high-value opportunities</div>
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
                    App Optimization for Conversion Rates
                    <div className="text-sm text-muted-foreground">Drives 10-30% more traffic</div>
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell key={plan.name} className="text-center">
                      {plan.optimization ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-destructive mx-auto" />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    SEO Content
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Professional SEO content writing and optimization services
                      </TooltipContent>
                    </Tooltip>
                    <div className="text-sm text-muted-foreground">Increase organic traffic by 40-60%</div>
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell key={plan.name} className="text-center text-sm">
                      {plan.seoContent}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    App Limit
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Maximum number of apps you can create
                      </TooltipContent>
                    </Tooltip>
                    <div className="text-sm text-muted-foreground">Create as many apps as you need</div>
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell key={plan.name} className="text-center">
                      {plan.appLimit}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    White Labeling
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Remove our branding from your apps
                      </TooltipContent>
                    </Tooltip>
                    <div className="text-sm text-muted-foreground">Brand apps as your own</div>
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
                    Dedicated Slack Support
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Private Slack channel for direct support access
                      </TooltipContent>
                    </Tooltip>
                    <div className="text-sm text-muted-foreground">Get help within 4 business hours</div>
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell key={plan.name} className="text-center">
                      {plan.dedicatedSupport ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-destructive mx-auto" />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Dedicated Growth Engineer
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        A dedicated engineer to help with your growth strategy
                      </TooltipContent>
                    </Tooltip>
                    <div className="text-sm text-muted-foreground">Accelerate your growth with expert guidance</div>
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
          </TooltipProvider>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PricingPage;
