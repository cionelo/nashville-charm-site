import { Droplets, Bug, Wrench } from "lucide-react";

const issues = [
  {
    icon: Droplets,
    title: "Structural Damage",
    text: "Moisture can weaken wooden beams, ruining the integrity of your home's structure.",
  },
  {
    icon: Bug,
    title: "Mold & Pest Infestations",
    text: "Damp environments invite mold growth and pest breeding, creating health risks.",
  },
  {
    icon: Wrench,
    title: "Higher Utility Bills",
    text: "Ineffective insulation from water damage drives up heating and cooling costs.",
  },
];

const WaterIssuesSection = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Water in Crawl Space — A Serious Concern
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Nashville TN homeowners, take note! One of the gravest threats your home could be facing hides silently below—water in your crawl space. Even the tiniest amount of water can escalate into major issues, jeopardizing your home's structural integrity and leading to mold growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {issues.map((issue) => (
              <div
                key={issue.title}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <issue.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {issue.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {issue.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterIssuesSection;
