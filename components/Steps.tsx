import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Component() {
  const steps = [
    {
      number: "01",
      title: "Join the Cause",
      description:
        "Start by signing up to become part of Jungle Foundation. Click on 'Join Now' to access your personalized dashboard and get involved in our mission.",
    },
    {
      number: "02",
      title: "Support Impactful Projects",
      description:
        "We guide you in selecting impactful projects to support. Your involvement will make a real difference in local communities and society.",
    },
    {
      number: "03",
      title: "Track Your Contribution",
      description:
        "Monitor the progress of the projects you support and see the tangible impact you're helping create. We provide regular updates on the success of each initiative.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-24 border-t">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <Badge className="w-fit bg-primary/10 text-primary rounded-full" variant="secondary">
              Join Our Mission
            </Badge>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                Community Impact Initiatives
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                Local Project Partnerships
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                Transparent Reporting
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                Volunteer Opportunities
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                24/7 Support
              </li>
            </ul>
            <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Jungle Foundation empowers individuals to make a lasting social impact. Join us in creating a better future by supporting meaningful projects in communities.
            </p>
            <div className="pt-2">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Get Involved Now
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
  );
}
