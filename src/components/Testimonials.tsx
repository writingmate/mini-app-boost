import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    id: 1,
    url: "https://x.com/Timb03/status/1751370112299643277",
    author: "Tim",
    handle: "@Timb03",
  },
  {
    id: 2,
    url: "https://x.com/jarekceborski/status/1746600926163665040",
    author: "Jarek Ceborski",
    handle: "@jarekceborski",
  },
  {
    id: 3,
    url: "https://x.com/avysotsky/status/1825911993750138894",
    author: "Alex Vysotsky",
    handle: "@avysotsky",
  },
  {
    id: 4,
    url: "https://x.com/johnrushx/status/1844868912330006648",
    author: "John Rush",
    handle: "@johnrushx",
  }
];

export const Testimonials = () => {
  return (
    <div className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients <span className="gradient-text">Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-2">
              <CardContent className="pt-6">
                <blockquote className="twitter-tweet">
                  <a href={testimonial.url}>Loading tweet...</a>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};