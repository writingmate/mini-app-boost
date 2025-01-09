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
    link: "#"
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
    link: "#"
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
    link: "#"
  },
  {
    id: 4,
    title: "Your Success Story",
    description: "Ready to turn your idea into the next success story? Let us help you build and launch your web application with our proven expertise and development process.",
    metrics: [
      "Fast development and deployment",
      "SEO-optimized from day one",
      "Scalable architecture",
      "Continuous support and maintenance"
    ],
    link: "#"
  }
];

export const SuccessStories = () => {
  return (
    <div className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success <span className="gradient-text">Stories</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="flex flex-col">
              <div className="flex flex-col flex-1">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {story.title}
                    <div className="flex gap-4 mt-3 text-sm">
                      {story.id === 1 && (
                        <>
                          <div>
                            <span className="text-2xl font-bold text-primary block">32K+</span>
                            <span className="text-muted-foreground text-sm">Visitors</span>
                          </div>
                          <div>
                            <span className="text-2xl font-bold text-primary block">10K+</span>
                            <span className="text-muted-foreground text-sm">Users</span>
                          </div>
                        </>
                      )}
                      {story.id === 2 && (
                        <>
                          <div>
                            <span className="text-2xl font-bold text-primary block">70K+</span>
                            <span className="text-muted-foreground text-sm">Monthly</span>
                          </div>
                          <div>
                            <span className="text-2xl font-bold text-primary block">2M+</span>
                            <span className="text-muted-foreground text-sm">Total</span>
                          </div>
                        </>
                      )}
                      {story.id === 3 && (
                        <>
                          <div>
                            <span className="text-2xl font-bold text-primary block">15+</span>
                            <span className="text-muted-foreground text-sm">Keywords</span>
                          </div>
                          <div>
                            <span className="text-2xl font-bold text-primary block">#3</span>
                            <span className="text-muted-foreground text-sm">Ranking</span>
                          </div>
                        </>
                      )}
                      {story.id === 4 && (
                        <>
                          <div>
                            <span className="text-2xl font-bold text-primary block">100%</span>
                            <span className="text-muted-foreground text-sm">Success</span>
                          </div>
                          <div>
                            <span className="text-2xl font-bold text-primary block">24/7</span>
                            <span className="text-muted-foreground text-sm">Support</span>
                          </div>
                        </>
                      )}
                    </div>
                  </CardTitle>
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
                    {story.id === 4 ? "Start Your Story" : "View Tool"}
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