const ProcessSection = () => {
    const steps = [
      { title: "Audit & Analysis", description: "We follow a proven process to ensure your SEO success." },
      { title: "Strategy Development", description: "We develop a custom strategy tailored to your needs." },
      { title: "Implementation", description: "Executing the plan with precision and expertise." },
      { title: "Monitoring & Reporting", description: "Continuous monitoring and reporting to measure success." },
    ];
  
    return (
      <section id="process" className="container mx-auto max-w-[1230px] px-4 py-10 border-t">
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
  