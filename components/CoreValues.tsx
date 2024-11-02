import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const values = [
    {
      title: "Customers First",
      description:
        "Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers",
    },
    {
      title: "Act With Integrity",
      description:
        "We're honest, transparent and committed to doing what's best for our customers and our company. We openly collaborate in pursuit of the truth. We have no tolerance for politics, hidden agendas or passive-aggressive behavior.",
    },
    {
      title: "Make a Difference Every Day",
      description:
        "Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.",
    },
    {
      title: "Think Big",
      description:
        "Being the world's leading commerce platform requires unrivaled vision, innovation and execution. We never settle. We challenge our ideas of what's possible in order to better meet the needs of our customers.",
    },
    {
      title: "Do the right thing",
      description:
        "Integrity is the foundation for everything we do. We are admired and respected for our commitment to honesty, trust, and transparency.",
    },
    {
      title: "Stronger united",
      description:
        "We've created a positive and inclusive culture that fosters open, honest, and meaningful relationships.",
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] opacity-10">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <path
            d="M0,50 C0,50 50,100 50,50 C50,0 100,50 100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,50 C0,50 50,100 50,50 C50,0 100,50 100,50;
                      M0,50 C0,0 50,50 50,50 C50,50 100,100 100,50;
                      M0,50 C0,50 50,0 50,50 C50,100 100,50 100,50;
                      M0,50 C0,100 50,50 50,50 C50,50 100,0 100,50;
                      M0,50 C0,50 50,100 50,50 C50,0 100,50 100,50"
            />
          </path>
        </svg>
      </div>
      <div className="mx-auto max-w-[1300px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative z-10 grid gap-12 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
              Core values
            </h2>
            <p className="text-lg text-muted-foreground">
              We break down barriers so teams can focus on what matters – working together to create products their customers
              love.
            </p>
            <div>
              <Button asChild className="rounded-full bg-background text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="#">JOIN OUR TEAM TODAY</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
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
  )
}