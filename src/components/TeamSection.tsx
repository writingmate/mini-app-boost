import { Card, CardContent } from "@/components/ui/card";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Artem",
      role: "CEO & Co-founder",
      description: "CEO of ChatLabs and ToolzFlow. Previously an engineering leader at Meta and People.ai",
      image: "https://media.licdn.com/dms/image/v2/D5603AQF7L8gHvNGeNQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699576720025?e=1741824000&v=beta&t=_2uQRP1NslDZgRh2sgY4d1s48KGj7OP-NIuxSw78VjU"
    },
    {
      name: "Sergey",
      role: "Co-founder",
      description: "Co-founder of ChatLabs, ex-Wargaming, ex-Mosaic. Growth manager and mastermind behind mini apps tactics. Grew ChatLabs from 30k to 140k users in months.",
      image: "https://media.licdn.com/dms/image/v2/C5603AQG7Q24IhG72TQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1650900312828?e=1741824000&v=beta&t=HMsX0-v0-b30X7YY0GJmnhWuQXpojCHHuzJUrQnD-QM"
    },
    {
      name: "Pavel",
      role: "Co-founder",
      description: "PhD in Data Science. Brings wealth of experience working with companies like Booking.com and Atlassian with marketing budgets in billions of dollars.",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFUlk4rCX4BTQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715970325603?e=1741824000&v=beta&t=JjiPBvzO0Wd_0TutUPRi14Fe0H0PK8P_t-OYKLqY5Sw"
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Who <span className="gradient-text">We Are</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Meet our founding team of industry veterans bringing together expertise from leading tech companies
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-none">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-primary font-medium text-center mb-4">{member.role}</p>
                <p className="text-muted-foreground text-center">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};