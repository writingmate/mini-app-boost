const steps = [
  {
    title: "Choose Your Target",
    description: "Select high-demanding mini application ideas that are relevant to your audience",
    image: "/placeholder.svg"
  },
  {
    title: "Build the Tool",
    description: "Use ToolzFlow to quickly create a simple, keyword-targeted application",
    image: "/placeholder.svg"
  },
  {
    title: "Deploy",
    description: "Add the app to your website optimizing for chosen keywords",
    image: "/placeholder.svg"
  },
  {
    title: "Share and Track",
    description: "Publish your app page and monitor its impact on traffic and leads",
    image: "/placeholder.svg"
  },
  {
    title: "Grow Your Arsenal",
    description: "Easily create more web apps to multiply your SEO growth",
    image: "/placeholder.svg"
  },
];

export const Timeline = () => {
  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It <span className="gradient-text">Works</span>
        </h2>
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-lg text-muted-foreground">{step.description}</p>
              </div>
              <div className="flex-1">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};