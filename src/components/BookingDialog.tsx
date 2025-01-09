import { useEffect } from "react";
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
  useEffect(() => {
    const loadCalendar = () => {
      if (window.calendar?.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZPmjksfkBabI9N6kN9aoIK2wy8sTGO1b_8p_GHOgf5B1MgLWouaGNDOqFwjHTu6Gyol8sLXes?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target: document.getElementById('calendar-container'),
        });
      }
    };

    loadCalendar();
  }, []);

  return (
    <Dialog>
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