import { BookingDialog } from "./BookingDialog";

export const CallToAction = () => {
  return (
    <div className="section-padding bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Still Unsure? Let's Have a <span className="gradient-text">Conversation</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Schedule a no-obligation consultation to discuss your goals and see if our mini apps strategy aligns with your business needs. No pressure, no charge – just a straightforward conversation about your growth potential.
        </p>
        <BookingDialog 
          size="lg" 
          className="text-xl px-12 py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Book Your Free Consultation
        </BookingDialog>
      </div>
    </div>
  );
};