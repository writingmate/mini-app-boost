import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface BookingDialogProps {
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
  children?: React.ReactNode;
}

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: any) => void;
      };
    };
  }
}

export const BookingDialog = ({ variant, size, className, children }: BookingDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the dialog content is rendered
      const timer = setTimeout(() => {
        const container = document.getElementById('calendar-container');
        if (container && window.calendar?.schedulingButton) {
          window.calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZPmjksfkBabI9N6kN9aoIK2wy8sTGO1b_8p_GHOgf5B1MgLWouaGNDOqFwjHTu6Gyol8sLXes?gv=true',
            color: '#039BE5',
            label: 'Book an appointment',
            target: container,
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Schedule a Consultation</DialogTitle>
        </DialogHeader>
        <div id="calendar-container" className="min-h-[500px]" />
      </DialogContent>
    </Dialog>
  );
};