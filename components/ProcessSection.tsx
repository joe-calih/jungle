const ProcessSection = () => {
  const steps = [
    { title: "Community Engagement", description: "We begin by engaging with local communities to understand their needs and challenges." },
    { title: "Project Planning", description: "We develop tailored plans to address key social issues, focusing on sustainability and long-term impact." },
    { title: "Implementation & Action", description: "We put plans into action, ensuring precision and collaboration with local partners." },
    { title: "Impact Reporting", description: "We monitor progress, evaluate outcomes, and share transparent reports on the impact made." },
  ];

  return (
    <section id="process" className="container mx-auto max-w-[1200px] px-4 py-10 border-t">
      <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <li key={step.title} className="flex items-start">
            <span className="flex items-center justify-center bg-primary text-primary-foreground rounded-full w-8 h-8 mr-4 flex-shrink-0">
              {index + 1}
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ProcessSection;
