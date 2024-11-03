import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Account Creation",
      description:
        "Begin your journey by creating an account with Quad! Click on the 'Sign Up' button and fill in your details to access your personalised dashboard.",
    },
    {
      number: "02",
      title: "Comprehensive Keyword Research",
      description:
        "Our software begins by conducting thorough keyword research tailored to your industry and target audience. We identify high-value keywords with optimal search volume.",
    },
    {
      number: "03",
      title: "On-Page Optimisation Guidance",
      description:
        "Our software provides detailed on-page optimization recommendation to enhance your website's visibility and relevance to search engines.",
    },
  ]

  return (
    <section className="w-full bg-white py-12 md:py-24 border-t">
      <div className="mx-auto max-w-[1250px] px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <Badge className="w-fit bg-primary/10 text-primary rounded-full" variant="secondary">
              Step-by-Step
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Path to SEO Success Mastering Every Step With Quad
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Welcome to the ultimate solution for managing your SEO strategies
              effectively. Our SEO Management Software empowers businesses to
              streamline their SEO efforts, optimize website
            </p>
            <div className="pt-2">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative space-y-6 before:absolute before:left-[17px] before:top-0 before:h-full before:w-[1px] before:bg-border">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.number}
                </div>
                 <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}