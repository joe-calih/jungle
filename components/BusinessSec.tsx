import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Network, ClipboardList, Presentation, Search, Share2, Building2, Users2 } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-emerald-800">How it work</p>
            <h2 className="text-4xl font-bold tracking-tight text-emerald-900 lg:text-5xl">
              Grow your online business now
            </h2>
            <p className="text-lg text-muted-foreground">
              Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-emerald-900 hover:bg-emerald-800">
                Download App
              </Button>
              <Button variant="link" className="text-emerald-900">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-6">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Cross-Platform</h3>
              <p className="mb-4 text-muted-foreground">
                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
              </p>
              <Button variant="link" className="p-0 text-emerald-900">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
            
            <Card className="bg-blue-50 p-6">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
                <Network className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Social Media</h3>
              <p className="mb-4 text-muted-foreground">
                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
              </p>
              <Button variant="link" className="p-0 text-emerald-900">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: ClipboardList, title: "Certification" },
            { icon: Presentation, title: "Conference" },
            { icon: Search, title: "Research" },
            { icon: Share2, title: "Dispersal" },
            { icon: Building2, title: "Enterprise" },
            { icon: Users2, title: "Team Building" },
          ].map((feature, index) => (
            <Card key={index} className="p-4 hover:bg-muted/50">
              <Link href="#" className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                  <feature.icon className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-sm font-medium">{feature.title}</h3>
                <ArrowRight className="h-4 w-4 text-emerald-600" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}