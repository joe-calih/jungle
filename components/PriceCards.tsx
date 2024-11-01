import { Clock, Diamond, LineChart, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Pricecard() {
  const features = [
    {
      title: "Engaging Content",
      icon: Clock,
      variant: "default",
    },
    {
      title: "SEO Services",
      icon: Diamond,
      variant: "featured",
    },
    {
      title: "Boost Google Search",
      icon: LineChart,
      variant: "default",
    },
  ]

  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={
                feature.variant === "featured"
                  ? "bg-primary text-primary-foreground"
                  : ""
              }
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-full p-3 ${
                      feature.variant === "featured"
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <feature.icon
                      className={
                        feature.variant === "featured"
                          ? "h-6 w-6 text-primary-foreground"
                          : "h-6 w-6 text-primary"
                      }
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base">
                  Get organic traffic and high rankings with multi-team
                  collaboration that will help you optimize on-page and off-page
                  SEO.
                </p>
                <ul className="space-y-3">
                  {["Best keyword strategy", "Competitors analysis & reports", "technical site audit checklist"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check
                        className={
                          feature.variant === "featured"
                            ? "h-5 w-5 text-primary-foreground"
                            : "h-5 w-5 text-primary"
                        }
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={feature.variant === "featured" ? "secondary" : "default"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}