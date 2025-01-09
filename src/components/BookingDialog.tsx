import { Button } from "./ui/button";

interface BookingDialogProps {
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export const BookingDialog = ({ variant, size, className, children }: BookingDialogProps) => {
  return (
    <a 
      href="https://calendar.app.google/Dsif1xzxbXL9M2BcA" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button variant={variant} size={size} className={className}>
        {children}
      </Button>
    </a>
  );
};