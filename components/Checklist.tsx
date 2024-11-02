import { Check } from "lucide-react"

export default function Component() {
  const steps = [
    {
      title: "Define Your Campaign Goal",
      description:
        "Clearly articulate what you want to achieve with your ad campaign (brand awareness, increasing sales or getting more leads).",
    },
    {
      title: "Select the Right Tools",
      description:
        "Choose a landing page builder that fit your goals and an ad creative tool that matches your brand's visual identity and messaging needs.",
    },
    {
      title: "Do Market Research",
      description:
        "Use tools like AdClarity to study what your competitors are doing and find out what your target audience likes and how they behave.",
    },
    {
      title: "Build Your Landing Page",
      description:
        "Use the landing page builder to create a landing page that grabs attention and work well on phones (mobile-friendly and loads quickly).",
    },
    {
      title: "Generate Ad Creatives and Copy",
      description:
        "Try AI tools to make engaging and high-converting ad visuals and messages that people will want to click on. A/B test different creatives to see which works best.",
    },
    {
      title: "Launch Your Campaign",
      description:
        "If you're a beginner, consider using Ads Launch Assistant for guided help. Set up your campaign on the chosen platforms (Google Ads, Facebook Ads, etc.).",
    },
    {
      title: "Implement Advertising Research",
      description:
        "Keep researching to stay on top of trends and use insights to make your campaign better. Use advertising research tools to get the most accurate insights.",
    },
    {
      title: "Monitor and Optimize",
      description:
        "Regularly check your campaign's performance and tweak your ads and landing page as needed.",
    },
    {
      title: "Client Reporting (if applicable)",
      description:
        "For agencies, make reports that that highlight campaign performance and ROI for clients.",
    },
    {
      title: "Stay Updated",
      description:
        "Always look for new tools and ways to make your ad campaigns better and more effective.",
    },
  ]

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="container max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Checklist:
          </h1>
          <h2 className="max-w-[900px] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            How to Optimize Your Digital Advertising Campaign
          </h2>
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}