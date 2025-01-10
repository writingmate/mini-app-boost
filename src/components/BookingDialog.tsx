import { Button } from "./ui/button";

interface BookingDialogProps {
  variant?: "default" | "outline";
  size?: "default" | "lg" | "sm";
  className?: string;
  children?: React.ReactNode;
}

export const BookingDialog = ({ variant, size, className, children }: BookingDialogProps) => {
  return (
    <div className="flex justify-center w-full">
      <a 
        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1xzxbXL9M2BcA"
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button variant={variant} size={size} className={className}>
          {children}
        </Button>
      </a>
    </div>
  );
};