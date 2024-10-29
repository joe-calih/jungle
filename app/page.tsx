import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Company from "@/components/Companys";
import BlogSection from "@/components/BlogSec";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayCircle, Check,Zap, Users, Layout} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section */}
        <section className="flex items-center justify-center w-full bg-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[1200px] space-y-12 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Marketing <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">made simple</span>
                <br />
                for small businesses.
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Most bookkeeping software is accurate, but hard to use. We make the
                opposite trade-off, and hope you don&apos;t get audited.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row items-center justify-center">
                <Button size="lg" className="bg-[#0f172a] text-white hover:bg-[#0f172a]/90">
                  Get 6 months free
                </Button>
                <Button size="lg" variant="outline" className="gap-1">
                  <PlayCircle className="h-5 w-5" />
                  Watch video
                </Button>
              </div>
              <div className="space-y-4 pt-20">
                <h2 className="text-base font-medium text-stone-600">Trusted by these six companies so far</h2>
                <div className="flex flex-wrap justify-center items-center gap-12">
                  {[
                   { name: "Proline", logo: "/img/logos/proline.webp" },
                   { name: "SmartSystems", logo: "/img/logos/envanto.webp" },
                   { name: "DataDrive", logo: "/img/logos/vimeo.webp" },
                   { name: "Webflow", logo: "/img/logos/webflow.webp" },
                   { name: "TechCorp", logo: "/img/logos/behance.webp" },
                   { name: "InnovateX", logo: "/img/logos/vertigo.webp" },
                   { name: "GlobalSolutions", logo: "/img/logos/minty.webp" },
                  ].map((company) => (
                    <div key={company.name} className="flex items-center justify-center">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={120}
                        height={60}
                        className="max-w-[120px] max-h-[60px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
         {/* Barner Section */}
        <div className="min-h-screen bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <p className="text-sm font-medium text-gray-600 mb-4">Top-notch Craft</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Shape tomorrow</h1>
              <p className="text-xl text-gray-600 mb-12">Join us to build flawless web solutions.</p>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">Boost Revenue</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">Higher Engagement</span>
                </div>
                <div className="flex items-center">
                  <Layout className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">Stunning Layouts</span>
                </div>
              </div>
            </header>
            <Card className="mt-16 bg-gray-50 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="p-8 lg:p-12 lg:w-1/2">
                  <p className="text-sm font-medium text-gray-600 mb-4">Modern Tactics</p>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Make your site a true standout.</h2>
                  <p className="text-gray-600 mb-8">
                    Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.
                  </p>
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    See Plans
                    <span className="sr-only">, opens pricing page</span>
                  </Button>
                </div>
                <div className="lg:w-1/2 bg-gray-200 flex items-center justify-center p-12">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-32 h-32 text-gray-400"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
        </div>

<BlogSection/>


        {/* Section 3: Trusted Partners */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Trusted by Industry Leaders</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We&apos;re proud to collaborate with forward-thinking companies that are shaping the future of technology and innovation. Our partnerships drive mutual growth and success.
            </p>

        <Company/>
          </div>
        </section>

        <section id="testimonials" className="w-full py-4 md:py-4 lg:py-4">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-4">
                  <p className="mb-4">&quot;SEO Master transformed our online presence. Our organic traffic has increased by 200% in just 3 months!&quot;</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/img/authors/08.jpg?height=40&width=40" alt="John Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">John Doe — TechStart</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <p className="mb-4">&quot;The insights provided by SEO Master helped us refine our content strategy and boost our rankings significantly.&quot;</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/img/authors/07.webp?height=40&width=40" alt="Jane Smith" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">Jane Smith — GrowFast</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <p className="mb-4">&quot;We&apos;ve seen a 150% increase in lead generation since implementing SEO Master&apos;s recommendations.&quot;</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/img/authors/06.png?height=40&width=40" alt="Mike Johnson" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">Mike Johnson — Glassdoor</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 bg-secondary">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For individuals and small teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4">$19<span className="text-xl font-normal">/month</span></p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      100 keyword searches per day
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Basic filtering options
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Email support
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Keyword Research
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      24/7 Support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Pro
                    <Badge variant="secondary">Most Popular</Badge>
                  </CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4">$49<span className="text-xl font-normal">/month</span></p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Unlimited keyword searches
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Advanced filtering and analysis
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      API access
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4">$89<span className="text-xl font-normal">/year</span></p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Custom keyword limits
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Advanced API access
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Custom integrations
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 bg-secondary">
          <div className="container mx-auto max-w-[800px] px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-medium">What is a keyword generator?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  A keyword generator is a tool that helps you discover relevant search terms and phrases related to your topic or niche. It&apos;s designed to assist in creating effective SEO and content strategies by providing a list of keywords that your target audience is likely to use when searching for information online.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-medium">How does the keyword generator work?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  Our keyword generator uses advanced algorithms and data from various sources to analyze your input and generate a list of related keywords. It considers factors such as search volume, competition, and relevance to provide you with the most useful keyword suggestions for your content and SEO efforts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-medium">Can I use the generated keywords for PPC campaigns?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  Yes, absolutely! The keywords generated by our tool can be used for various purposes, including Pay-Per-Click (PPC) campaigns. They can help you identify potential ad keywords, improve your ad targeting, and optimize your campaign structure for better performance and ROI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base font-medium">How often is the keyword data updated?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  We update our keyword data regularly to ensure you have access to the most current and relevant information. Our system refreshes the data weekly, incorporating the latest search trends and algorithm changes from major search engines.
                </AccordionContent>
              
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base font-medium">Is there a limit to how many keywords I can generate?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  The number of keywords you can generate depends on your subscription plan. Our free plan allows for a limited number of keyword generations per day, while our premium plans offer higher or unlimited generation capabilities. Check our pricing page for more details on the limits for each plan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  )
}