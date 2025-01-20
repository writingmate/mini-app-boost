import { BookingDialog } from "../BookingDialog";

interface PricingHeaderProps {
  name: string;
  price: string;
  period: string;
  pricePerMonth?: string;
}

export const PricingHeader = ({ name, price, period, pricePerMonth }: PricingHeaderProps) => {
  return (
    <div className="flex flex-col justify-between h-full min-h-[180px]">
      <div className="space-y-2 text-center">
        <h3 className="font-bold text-xl text-foreground tracking-tight">{name}</h3>
        <div>
          <div className="text-3xl font-bold text-primary">{price}</div>
          <div className="text-sm text-muted-foreground mt-1">per {period}</div>
          {pricePerMonth && (
            <div className="text-sm text-primary font-medium mt-1">{pricePerMonth}/month</div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <BookingDialog 
          size="default"
          className="px-6 py-2"
        >
          Book a Call
        </BookingDialog>
      </div>
    </div>
  );
};