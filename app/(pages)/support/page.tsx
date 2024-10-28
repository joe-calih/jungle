import { ArrowRight, BarChart2, FileSearch, Lightbulb, LineChart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto max-w-[1200px] px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Revolutionize Your SEO with AI-Powered Tools</h1>
          <p className="text-xl mb-8">Boost your online presence and dominate search rankings</p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Powerful SEO & AI Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-3 text-purple-600" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-[1200px] px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-[1200px] px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`flex flex-col ${plan.featured ? 'border-purple-500 border-2' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold">${plan.price}</span> / month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className={`w-full ${plan.featured ? 'bg-purple-600 hover:bg-purple-700' : ''}`}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto max-w-[1200px] px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your SEO?</h2>
          <p className="text-xl mb-8">Start your free trial today and see the results for yourself.</p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">Start Free Trial</Button>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Keyword Research",
    description: "Discover high-performing keywords to target your audience effectively.",
    icon: Search,
  },
  {
    title: "Site Audit",
    description: "Identify and fix technical SEO issues to improve your site's performance.",
    icon: FileSearch,
  },
  {
    title: "Keyword Analytics",
    description: "Track and analyze your keyword rankings over time.",
    icon: BarChart2,
  },
  {
    title: "Content Optimization",
    description: "AI-powered suggestions to optimize your content for better rankings.",
    icon: FileSearch,
  },
  {
    title: "Competitor Analysis",
    description: "Gain insights into your competitors' strategies and performance.",
    icon: LineChart,
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations to improve your SEO strategy.",
    icon: Lightbulb,
  },
]

const steps = [
  {
    title: "Connect Your Site",
    description: "Easily integrate our tools with your website or app.",
  },
  {
    title: "Analyze & Optimize",
    description: "Get in-depth analysis and AI-powered optimization suggestions.",
  },
  {
    title: "Track Progress",
    description: "Monitor your SEO performance and rankings over time.",
  },
]

const testimonials = [
  {
    quote: "These SEO tools have completely transformed our online presence. Our organic traffic has increased by 200% in just three months!",
    name: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
  },
  {
    quote: "The AI-powered insights have been a game-changer for our content strategy. We're now ranking for keywords we never thought possible.",
    name: "Mike Chen",
    position: "SEO Specialist, GrowthGenius",
  },
  {
    quote: "I've tried many SEO tools, but this one stands out with its user-friendly interface and accurate data. It's become an essential part of our toolkit.",
    name: "Emily Rodriguez",
    position: "Founder, DigitalEdge",
  },
]

const pricingPlans = [
  {
    name: "Basic",
    price: 29,
    features: ["Keyword Research", "Site Audit", "Keyword Analytics", "24/7 Support"],
    featured: false,
  },
  {
    name: "Pro",
    price: 79,
    features: ["All Basic features", "Content Optimization", "Competitor Analysis", "API Access", "Priority Support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: 199,
    features: ["All Pro features", "AI-Powered Insights", "Custom Reporting", "Dedicated Account Manager", "Training Sessions"],
    featured: false,
  },
]

function Check(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}