import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Network } from "lucide-react"

export default function Component() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1250px] px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-base font-medium">— How it work</p>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            More data. More insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.  Monitor markets, manage your portfolio, and trade crypto on the go.
            </p>
            <div className="flex items-center gap-4">
              <Button className=" hover:bg-emerald-800">
                Download App
              </Button>
              <Button variant="link" className="">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-6">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
                <Users className="h-6 w-6 " />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Cross-Platform</h3>
              <p className="mb-4 text-muted-foreground">
                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
              </p>
              <Button variant="link" className="p-0">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
            
            <Card className="bg-blue-50 p-6">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Social Media</h3>
              <p className="mb-4 text-muted-foreground">
                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
              </p>
              <Button variant="link" className="p-0">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>

      </div>
    </section>
  )
}