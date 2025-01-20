import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Info } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  },
  {
    name: "ToolzFlow Agency",
    price: "$5,000",
    period: "month",
    appsBuilt: "15",
    builder: "First 15 apps in first 30 days",
    builderTooltip: "Our team builds up to 15 apps within 30 days or until completion (whichever comes first). After that, you'll build additional apps.",
    hosting: true,
    keywordAnalysis: true,
    optimization: true,
    seoContent: "Written & optimized for you",
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
          Compare our plans and choose the one that best fits your needs
        </p>

        <div className="overflow-x-auto">
          <TooltipProvider>
            <Table className="border rounded-lg">
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[250px]">Features</TableHead>
                  {plans.map((plan) => (
                    <TableHead key={plan.name} className="text-center">
                      <div className="flex flex-col items-center justify-between min-h-[200px] p-4">
                        <div className="space-y-2 text-center">
                          <h3 className="font-bold text-lg">{plan.name}</h3>
                          <div className="text-2xl font-bold">{plan.price}</div>
                          <div className="text-sm text-muted-foreground">per {plan.period}</div>
                          {plan.pricePerMonth && (
                            <div className="text-sm text-primary">{plan.pricePerMonth}/month</div>
                          )}
                        </div>
                        <BookingDialog 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200"
                        >
                          Get Started
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
                        <p className="max-w-[200px]">{plan.builderTooltip || plan.builder}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell key={plan.name} className="text-center">{plan.builder}</TableCell>
                  ))}
                </TableRow>
              <TableRow>
                <TableCell className="font-medium">App Hosting Included</TableCell>
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
                <TableCell className="font-medium">Keyword Analysis & Competitive Research</TableCell>
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
                <TableCell className="font-medium">App Optimization for Conversion Rates
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
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell key={plan.name} className="text-center text-sm">
                      {plan.seoContent}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
