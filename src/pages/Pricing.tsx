import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";

const PricingPage = () => {
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
      appsBuilt: "Up to 3",
      builder: "First 3 apps built by our team in month one, then you",
      hosting: true,
      keywordAnalysis: true,
      optimization: false,
      seoContent: "We share a best practice guide on how to write the content, you write the content",
    },
    {
      name: "ToolzFlow Agency",
      price: "$5,000",
      period: "month",
      appsBuilt: "Up to 16",
      builder: "Up to first 15 apps in the first month, then you",
      hosting: true,
      keywordAnalysis: true,
      optimization: true,
      seoContent: "We share a template and write and optimize content for you",
    },
  ];

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
          <Table className="border rounded-lg">
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-[250px]">Features</TableHead>
                {plans.map((plan) => (
                  <TableHead key={plan.name} className="text-center">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{plan.name}</h3>
                      <div className="text-2xl font-bold">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">per {plan.period}</div>
                      {plan.pricePerMonth && (
                        <div className="text-sm text-primary">{plan.pricePerMonth}/month</div>
                      )}
                      <BookingDialog 
                        className="mt-4 w-full bg-primary text-primary-foreground hover:shadow-lg transition-shadow"
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
                <TableCell className="font-medium">Apps Built By Our Team</TableCell>
                {plans.map((plan) => (
                  <TableCell key={plan.name} className="text-center">{plan.appsBuilt}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Who Builds The Apps</TableCell>
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
                <TableCell className="font-medium">Human Written SEO Content</TableCell>
                {plans.map((plan) => (
                  <TableCell key={plan.name} className="text-center text-sm">
                    {plan.seoContent}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;