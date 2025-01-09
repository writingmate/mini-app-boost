const steps = [
  {
    title: "Choose Your Target",
    description: "Select high-demanding mini application ideas that are relevant to your audience",
  },
  {
    title: "Build the Tool",
    description: "Use ToolzFlow to quickly create a simple, keyword-targeted application",
  },
  {
    title: "Deploy",
    description: "Add the app to your website optimizing for chosen keywords",
  },
  {
    title: "Share and Track",
    description: "Publish your app page and monitor its impact on traffic and leads",
  },
  {
    title: "Grow Your Arsenal",
    description: "Easily create more web apps to multiply your SEO growth",
  },
];

export const Timeline = () => {
  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It <span className="gradient-text">Works</span>
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary/20" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col md:flex-row gap-8 md:gap-16">
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="relative pl-12 md:pl-0">
                    <div className="absolute left-0 md:left-auto md:right-[-40px] top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index % 2 === 0 && <div className="hidden md:block flex-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};