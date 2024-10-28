import { Button } from "@/components/ui/button"
import { Star, Users, Heart, ArrowRight, Check } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-[1200px] px-4 py-16 relative">
       
        
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            Scale personalized outreach with<br />better data enrichment
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Help your RevOps & growth teams implement any outreach idea. First, maximize data coverage
            with 75+ enrichment tools & our AI agent with just your Clay account. Then, use AI to craft
            relevant outreach at scale.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-2 text-gray-600">4.9 rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-600">15k+ growth community</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-600">150+ testimonials</span>
            </div>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800">
            Start building for free <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        

        <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Check out our affordable pricing plans below and choose the one that suits you best. If you need a custom
          plan, please contact us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingCard
            title="Free"
            price="$0"
            description="For personal use only with limited features and support"
            buttonText="Get Started"
            features={[
              "Live Collaboration",
              "1 GB Storage",
              "2 Projects",
              "Basic Support",
              "Limited Customization",
              "Limited Integration",
              "Limited API Access",
            ]}
          />
          <PricingCard
            title="Pro"
            price="$29"
            description="For small businesses with all the features and support"
            buttonText="Try for free"
            features={[
              "2 Team Members",
              "10 GB Storage",
              "10 Projects",
              "Priority Support",
              "Full Customization",
              "Full Integration",
              "Full API Access",
            ]}
            highlighted={true}
            billingPeriod="Per user, per month billed annually"
            monthlyPrice="$34 billed monthly"
            purchaseLink="purchase now"
          />
          <PricingCard
            title="Premium"
            price="$59"
            description="For teams and organizations with advanced features and support"
            buttonText="Try for free"
            features={[
              "5 Team Members",
              "50 GB Storage",
              "50 Projects",
              "Dedicated Support",
              "Advanced Customization",
              "Analytics",
              "Reports",
            ]}
            billingPeriod="Per user, per month billed annually"
            monthlyPrice="$69 billed monthly"
            purchaseLink="purchase now"
          />
          <PricingCard
            title="Entreprise"
            price="Custom"
            description="For large companies with custom features and support and a dedicated account manager"
            buttonText="Contact sales"
            features={[
              "10+ Team Members",
              "100+ GB Storage",
              "100+ Projects",
              "Dedicated Account Manager",
              "Custom Features",
              "Custom Support",
              "Custom Integration",
            ]}
          />
        </div>
      </div>
    </section>
       
        </div>
      </div>
  )
}

function PricingCard({
  title,
  price,
  description,
  buttonText,
  features,
  highlighted = false,
  billingPeriod,
  monthlyPrice,
  purchaseLink,
}: {
  title: string
  price: string
  description: string
  buttonText: string
  features: string[]
  highlighted?: boolean
  billingPeriod?: string
  monthlyPrice?: string
  purchaseLink?: string
}) {
  return (
    <div
      className={`flex flex-col p-6 ${
        highlighted ? "bg-gray-100" : "bg-white"
      } rounded-lg border border-gray-200`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-4xl font-bold mb-4">{price}</div>
      {billingPeriod && <p className="text-sm text-gray-600 mb-1">{billingPeriod}</p>}
      {monthlyPrice && <p className="text-sm text-gray-600 mb-4">{monthlyPrice}</p>}
      <Button variant={highlighted ? "default" : "outline"} className="mb-6">
        {buttonText}
      </Button>
      {purchaseLink && (
        <p className="text-sm text-center mb-6">
          or{" "}
          <a href="#" className="text-blue-600 hover:underline">
            {purchaseLink}
          </a>
        </p>
      )}
      <h4 className="font-bold mb-4">{title === "Free" ? "Features" : `Everything in ${title === "Pro" ? "Free" : "Pro"}, and:`}</h4>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      <a href="#" className="text-blue-600 hover:underline mt-auto">
        Learn more
      </a>
    </div>
  )
}