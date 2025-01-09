import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqItems = [
  {
    question: "Does this work for me?",
    answer: "The mini apps work eventually for everyone, but the websites with domain rating above 20 (based on ahrefs of semrush) are better positioned for success. If we don't think we can help you we will tell you during our first call. No money asked."
  },
  {
    question: "I can't come up with app ideas. Will you help us?",
    answer: "Yes, we will help you research the market and come up with app ideas, you only get to choose which one to build, and we will build it for you"
  },
  {
    question: "I have my own app ideas, Can you build it?",
    answer: "Yes we can! We will also advice whether your app idea is positioned well to drive organic traffic."
  },
  {
    question: "Do you have any money back guarantees?",
    answer: "Yes if you are not satisfied with the result within first 30 days, provided that you followed all our recommenations, we will return you the money in full"
  },
  {
    question: "Can you really deliver 15 apps in 30 days?",
    answer: "Yes we can, prided you cooperate with us. In our experience the bottleneck on delivering the apps is on the clients size, integrating them into their websites"
  },
  {
    question: "How do you integrate apps into my website?",
    answer: "There are three options: iframes, subsdomain or sybpath. You choose which one you prefer."
  }
];

export const FAQ = () => {
  return (
    <div className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};