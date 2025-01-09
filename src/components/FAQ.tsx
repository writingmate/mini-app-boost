import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqItems = [
  {
    question: "Does this work for me?",
    answer: "Mini apps work effectively for everyone, but websites with a domain rating above 20 (based on Ahrefs or Semrush) are better positioned for success. If we don't believe we can help you, we'll let you know during our first call - no payment required."
  },
  {
    question: "I already have blog with SEO articles, can you help me?",
    answer: "Yes, we can improve your SEO articles by adding mini apps into existing content which may improve their ranking."
  },
  {
    question: "How long until I see results?",
    answer: "If you haven't previously invested in SEO, it typically takes 3-6 months to see significant results. SEO is a long-term strategy that builds a substantial competitive advantage. However, if you've already invested in SEO, you may start seeing results within weeks."
  },
  {
    question: "Who will be managing my account?",
    answer: "Our account management team in North America (California) handles your SEO strategy, content needs, and any questions you may have. Our execution team is based in Europe, with offices in Warsaw and Amsterdam."
  },
  {
    question: "Why do mini apps actually work?",
    answer: "Google favors webpages with higher engagement and user interactions, such as clicks and form submissions, over static content. This is why interactive mini apps drive more traffic. Additionally, users enjoy sharing mini apps with others, which can create viral growth opportunities."
  },
  {
    question: "I can't come up with app ideas. Will you help us?",
    answer: "Yes, we will help you research the market and generate app ideas. You'll simply choose which one to build, and we'll handle the development."
  },
  {
    question: "I have my own app ideas. Can you build them?",
    answer: "Yes, we can! We'll also advise whether your app idea is well-positioned to drive organic traffic."
  },
  {
    question: "Do you have any money-back guarantees?",
    answer: "Yes. If you're not satisfied with the results within the first 30 days and have followed all our recommendations, we'll provide a full refund."
  },
  {
    question: "Can you really deliver 15 apps in 30 days?",
    answer: "Yes, we can, provided you cooperate with us. In our experience, the bottleneck for delivering apps is typically on the client side, specifically with integrating them into their websites."
  },
  {
    question: "How do you integrate apps into my website?",
    answer: "There are three options: iframes, subdomain, or subpath. You choose which one you prefer."
  },
  {
    question: "Will I have access to the code of mini apps?",
    answer: "Yes, you will have full access to the mini apps, including their source code."
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
