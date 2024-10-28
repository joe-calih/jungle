import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Zap, Shield, BarChart } from "lucide-react"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-24">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex justify-between w-full">
              <span className="text-sm text-gray-500 flex items-center"><Zap className="w-4 h-4 mr-1" /> Fast</span>
              <span className="text-sm text-gray-500 flex items-center"><Globe className="w-4 h-4 mr-1" /> Professional</span>
              <span className="text-sm text-gray-500 flex items-center"><Shield className="w-4 h-4 mr-1" /> Secure</span>
              <span className="text-sm text-gray-500 flex items-center"><BarChart className="w-4 h-4 mr-1" /> Optimized</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Create Winning <span className="text-gray-500">Proposals</span>
            </h1>
            <h2 className="mb-6 text-3xl font-bold sm:text-5xl">
              10X Faster with <span className="inline-block rounded-full bg-black text-white px-4 py-2">AI</span>
            </h2>
            <p className="mb-8 max-w-[700px] text-lg text-gray-600">
              Penna let you build high-converting, website-style proposals with AI, helping you win better customers without wasting time
            </p>
            <Button size="lg">Start free 14-day trial</Button>
            <p className="mt-4 text-sm text-gray-500">Powered by GPT-4</p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full md:col-span-2">
              <CardContent className="p-6">
                <span className="mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm">Studies</span>
                <h3 className="mb-2 text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <p className="mb-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cupiditate dicta accusamus quae nesciunt deserunt cum deleniti atque consequuntur quis!</p>
                <Button variant="link" className="p-0">Continue reading</Button>
              </CardContent>
            </Card>
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Case Study</h3>
                  <p className="mb-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <Button variant="link" className="p-0">Continue reading</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-white py-12 md:py-24">
        <div className="container mx-auto max-w-[1200px] px-4">
          <h2 className="mb-4 text-3xl font-bold text-center">Pricing</h2>
          <p className="mb-12 text-center text-gray-600">Check out our affordable pricing plans below and choose the one that suits you best. If you need a custom plan, please contact us.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Free", price: "$0", description: "For personal use only with limited features and support" },
              { name: "Pro", price: "$29", description: "For small businesses with all the features and support" },
              { name: "Premium", price: "$59", description: "For teams and organizations with advanced features and support" },
              { name: "Enterprise", price: "Custom", description: "For large companies with custom features and support and a dedicated account manager" }
            ].map((plan, i) => (
              <Card key={i} className={i === 1 ? "border-primary" : ""}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                  <p className="mb-4 text-3xl font-bold">{plan.price}</p>
                  <p className="mb-4 text-sm text-gray-600">{plan.description}</p>
                  <Button className="w-full" variant={i === 1 ? "default" : "outline"}>
                    {i === 0 ? "Get Started" : i === 3 ? "Contact sales" : "Try for free"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}