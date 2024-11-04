import { Card, CardContent } from "@/components/ui/card"
import { Flower2, MapPin, Building2, Users } from "lucide-react"

export default function Component() {
  const features = [
    {
      icon: Flower2,
      title: "Business Strategy",
      description: "You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attention to details, comps and overall vibe.",
      bgColor: "bg-[#f1f7ea]",
      iconBgColor: "bg-[#f1f7ea]",
    },
    {
      icon: MapPin,
      title: "Local Marketing",
      description: "You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attention to details, comps and overall vibe.",
      bgColor: "bg-[#e4f2ff]",
      iconBgColor: "bg-[#e4f2ff]",
    },
    {
      icon: Building2,
      title: "Social media",
      description: "You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attention to details, comps and overall vibe.",
      bgColor: "bg-[#fff3ea]",
      iconBgColor: "bg-[#fff3ea]",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attention to details, comps and overall vibe.",
      bgColor: "bg-[#f0ebff]",
      iconBgColor: "bg-[#f0ebff]",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`border-none ${feature.bgColor} relative overflow-hidden`}>
              <CardContent className="p-6 pt-8">
                <div className={`w-12 h-12 rounded-lg ${feature.iconBgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="absolute bottom-0 right-0 opacity-10">
                  <feature.icon className="w-24 h-24 -mb-6 -mr-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}