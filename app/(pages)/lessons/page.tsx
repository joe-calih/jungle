import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from 'lucide-react'

export const metadata = {
  title: 'Lessons',
  description: 'Get in touch with Your Company Name for inquiries, support, and feedback. We are here to assist you.',
  keywords: ['Contact', 'Support', 'Customer Service', 'Your Company Name'],
  openGraph: {
    title: 'Lessons',
    description: 'Reach out to us for inquiries or support. Contact Your Company Name today!',
    url: 'https://yourwebsite.com/contact-us',
    images: [
      {
        url: 'https://yourwebsite.com/images/contact-us-banner.jpg',
        width: 800,
        height: 600,
        alt: 'Lessons Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lessons',
    description: 'Have any questions? Contact Your Company Name for support and inquiries.',
    images: ['https://yourwebsite.com/images/contact-us-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const tabContent = {
  product: {
    title: "Ready to use blocks",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, voluptatibus.",
    features: ["Integrations", "Components", "Blocks", "Templates"],
    image: "/img/marketing.webp?height=300&width=300"
  },
  services: {
    title: "Comprehensive services",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: ["Consulting", "Development", "Support", "Training"],
    image: "/img/seo-2.png?height=300&width=300"
  },
  company: {
    title: "About our company",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    features: ["Our Team", "Mission", "Vision", "Values"],
    image: "/img/starting.webp?height=300&width=300"
  },
  portfolio: {
    title: "Our work portfolio",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: ["Case Studies", "Client Testimonials", "Project Gallery", "Industries Served"],
    image: "/img/star.webp?height=300&width=300"
  },
  blog: {
    title: "Latest from our blog",
    description: "Stay updated with our latest insights, tips, and industry trends.",
    features: ["Tech Trends", "Best Practices", "Success Stories", "Tutorials"],
    image: "/img/seotize.webp?height=300&width=300"
  }
} as const

type TabKey = keyof typeof tabContent

function StatCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0 space-y-2 text-center">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-5xl md:text-6xl font-bold">{value}</p>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  )
}

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabKey>("product")

  return (
    <div className="w-full bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Landing Page Section */}
        <section className="py-16 md:py-24 lg:py-32 space-y-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              title="Reduce your time to hire by"
              value="4x"
              subtitle="quicker"
            />
            <StatCard
              title="Clients have seen a decrease in"
              value="50%"
              subtitle="in time to hire"
            />
            <StatCard
              title="The average number of hires per"
              value="3"
              subtitle="months"
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            This is where your feature goes
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aut doloribus voluptatum distinctio! Eum
          </p>
        </section>

        {/* Navigation and Content Section */}
<Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabKey)} className="mb-20">
  <TabsList className="grid w-full grid-cols-5 max-w-[600px] mx-auto mb-12">
    <TabsTrigger value="product">Product</TabsTrigger>
    <TabsTrigger value="services">Services</TabsTrigger>
    <TabsTrigger value="company">Company</TabsTrigger>
    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
    <TabsTrigger value="blog">Blog</TabsTrigger>
  </TabsList>
  {Object.entries(tabContent).map(([key, content]) => (
    <TabsContent key={key} value={key}>
      <Card className="mb-20">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 md:p-12">
              <CardHeader className="p-0">
                <CardTitle className="text-3xl sm:text-4xl font-bold mb-4">
                  {content.title}
                </CardTitle>
              </CardHeader>
              <p className="text-muted-foreground mb-6">
                {content.description}
              </p>
              <ul className="space-y-2 mb-6">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <Button variant="secondary" className="w-full sm:w-auto mr-4">
                  Discover tool
                </Button>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-foreground hover:text-muted-foreground">
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
              {/* Overlay with white fade effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-transparent pointer-events-none rounded-b-lg md:rounded-r-lg md:rounded-bl-none"></div>

              
              <Image
                src={content.image}
                alt={`${key} illustration`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  ))}
</Tabs>

      </div>
    </div>
  )
}