import { Check, X } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PricingFeatureProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  value: any;
}

export const PricingFeature = ({ icon: Icon, title, description, value }: PricingFeatureProps) => {
  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-primary mx-auto" />
      ) : (
        <X className="h-5 w-5 text-destructive mx-auto" />
      );
    }
    
    // Handle app building services text
    if (value === "You build the apps") {
      return (
        <div className="flex items-center justify-center gap-2">
          <X className="h-4 w-4 text-destructive" />
          <span>You build the apps</span>
        </div>
      );
    }

    if (typeof value === 'string' && value.toLowerCase().includes('we build')) {
      return (
        <div className="flex items-center justify-center gap-2">
          <Check className="h-4 w-4 text-primary" />
          <span>{value}</span>
        </div>
      );
    }

    // Handle optimization text
    if (value === "Up to 3 optimizations for each app") {
      return (
        <div className="flex items-center justify-center gap-2">
          <Check className="h-4 w-4 text-primary" />
          <span>Up to 3 optimizations for each app</span>
        </div>
      );
    }

    // Handle SEO content text
    if (typeof value === 'string' && value.toLowerCase().includes('written & optimized')) {
      return (
        <div className="flex items-center justify-center gap-2">
          <Check className="h-4 w-4 text-primary" />
          <span>{value}</span>
        </div>
      );
    }

    return value;
  };

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <span className="font-medium">{title}</span>
      </div>
      {description && (
        <div className="text-sm text-muted-foreground pl-7">{description}</div>
      )}
      <div className="text-center">
        {renderFeatureValue(value)}
      </div>
    </div>
  );
};