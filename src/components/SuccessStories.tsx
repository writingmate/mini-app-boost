import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const stories = [
  {
    id: 1,
    title: "AI Answer Generator",
    description: "An app to promote AI chatbot ChatLabs. It generates detailed answers to questions on different topics using AI.",
    metrics: [
      "Created and published within one day",
      "32,000 visitors in two months after release",
      "10,000+ visitors converted to users"
    ],
    link: "#",
    image: "https://framerusercontent.com/images/Okx48o4rpiyqTDpnoD6E1tcBpM.png?scale-down-to=512&lossless=1"
  },
  {
    id: 2,
    title: "Online Signature Generator",
    description: "A single-feature app page by PandaDoc that has grown into huge SEO marketing channel. Creates eSignatures to sign documents online.",
    metrics: [
      "70K unique visitors per month",
      "In Google's top-3 with 1000+ keywords",
      "More than 2 million unique visits so far"
    ],
    link: "#",
    image: "https://framerusercontent.com/images/W361sbqOshdIPX5WUotjLLTrSM.png?scale-down-to=512&lossless=1"
  },
  {
    id: 3,
    title: "PDF to Anki Flashcards Converter",
    description: "An app by ToolzFlow client, AnkiPro.net, that quickly transforms notes into flashcards. Created from PDFs cards can be exported to any Anki platform.",
    metrics: [
      "Published within the first week of service",
      "Aligned with brand guideline and audience",
      "Google's top-3 for target keyword in 4 days",
      "In Google's top-3 for 15 keywords now"
    ],
    link: "#",
    image: "https://framerusercontent.com/images/nYgGvQCT99vUl28tZooU4mqM.png?scale-down-to=512&lossless=1"
  }
];

export const SuccessStories = () => {
  return (
    <div className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success <span className="gradient-text">Stories</span>
        </h2>
        <div className="space-y-8">
          {stories.map((story, index) => (
            <Card key={story.id} className="flex flex-col md:flex-row overflow-hidden">
              <div className={`relative w-full md:w-1/2 h-64 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="object-cover w-full h-full p-4"
                />
              </div>
              <div className={`flex flex-col flex-1 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{story.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{story.description}</p>
                  <ul className="space-y-2">
                    {story.metrics.map((metric, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group">
                    View Tool
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};