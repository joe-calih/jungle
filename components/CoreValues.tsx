import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Component() {
  const values = [
    {
      title: "Community First",
      description:
        "At Jungle Foundation, we prioritize the well-being of the communities we serve. Our mission is to empower people through sustainable and impactful initiatives.",
    },
    {
      title: "Integrity & Transparency",
      description:
        "We operate with honesty, openness, and a commitment to doing what's best for society. We hold ourselves accountable and collaborate for the greater good.",
    },
    {
      title: "Creating Positive Change",
      description:
        "Every action we take is focused on creating lasting, positive change in communities. We are driven by a deep desire to make a difference through every project we support.",
    },
    {
      title: "Innovative Solutions",
      description:
        "We believe in the power of innovative approaches to solving complex social issues. Our work is guided by fresh ideas and new perspectives to support community progress.",
    },
    {
      title: "Do Good, Together",
      description:
        "We value collaboration and believe that together, we can achieve more. By fostering partnerships, we amplify our impact and help communities thrive.",
    },
    {
      title: "Inclusivity & Respect",
      description:
        "We embrace diversity and foster an inclusive environment where everyone’s voice is heard and valued. We are stronger when we unite for a common cause.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background border-b border-t">
      <div className="mx-auto max-w-[1200px] py-16 sm:px-6">
        <div className="relative z-10">
          <div className="space-y-6 lg:col-span-1 pb-10">
            <h2 className="text-2xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-4xl/none">
              Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              At Jungle Foundation, we are committed to creating a better future for all. Our core values guide us in making a lasting impact on society.
            </p>
          
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-2">
            {values.map((value, i) => (
              <Card
                key={i}
                className="space-y-2 border-none bg-transparent p-0 shadow-none [&:not(:first-child)]:border-t [&:not(:first-child)]:border-primary/10 sm:border-t-0"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
