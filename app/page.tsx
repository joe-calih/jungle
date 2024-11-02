import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CoreValues from "@/components/CoreValues";
import Feature from "@/components/Feature";
import Steps from "@/components/Steps";
import Pricecard from "@/components/PriceCards";
import BlogSection from "@/components/BlogSec";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Play, Users, Star, Heart, Zap, Bell, Trophy} from "lucide-react"
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section */}
        <section className="flex items-center justify-center w-full bg-white py-12 md:py-24 lg:py-30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[1200px] space-b-1 text-center">
            <div className="mb-8 inline-flex items-center rounded-full border bg-background px-1 py-1 text-sm">
          <Badge variant="secondary" className="mr-2 rounded-full px-2 font-normal">
            New Release
          </Badge>
          Get started with our new product release today
          <ArrowRight className="mr-2 ml-2 h-4 w-4" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Creative resources <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">automation</span> 
          <br />
          better data enrichment
        </h1>
        <p className="mx-auto mb-6 max-w-[700px] text-muted-foreground md:text-xl ">
          Help your RevOps & growth teams implement any outreach idea. Maximize data coverage with 75+ enrichment tools & our AI agents. Use inteligence to craft relevant outreach at scale.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-10">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-2 text-gray-600">5 rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-600">15k+ growth community</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-600">150K+ resources</span>
            </div>
          </div>
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            <Play className="mr-2 h-4 w-4" /> Watch Demo
          </Button>
        </div>
              <div className="space-y-4 pt-10">
                <h2 className="text-base font-medium text-stone-600">Trusted by these six companies so far</h2>
                <div className="flex flex-wrap justify-center items-center gap-12">
                  {[
                   { name: "Proline", logo: "/img/logos/proline.webp" },
                   { name: "InnovateX", logo: "/img/logos/vertigo.webp" },
                   { name: "DataDrive", logo: "/img/logos/vimeo.webp" },
                   { name: "Webflow", logo: "/img/logos/webflow.webp" },
                   { name: "TechCorp", logo: "/img/logos/behance.webp" },
                   { name: "SmartSystems", logo: "/img/logos/envanto.webp" },
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

  {/* Stats Section */}
  <section className="py-20">
  <div className="container mx-auto max-w-[1200px] px-4">
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
      <Badge variant="secondary" className="rounded-full space-x-8" >
                    <Zap className="mr-1 h-3 w-3" />
                    Real-time
                  </Badge>
        <p className="text-muted-foreground leading-loose">
          Our Team Has Extensive Experience Collaborating With The World Bank On Various Projects, Bringing A Wealth Of Knowledge And Insights To Our Clients.
        </p>
        <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Competitor keyword analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Long-tail keyword suggestions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Long-tail keyword suggestions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Search volume and difficulty metrics</span>
                  </div>
                </div>
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="space-y-2 rounded-lg bg-muted p-4">
            <div className="text-3xl font-bold">20</div>
            <div className="text-sm font-medium">Years Experience</div>
          </div>
          <div className="space-y-2 rounded-lg bg-muted p-4">
            <div className="text-3xl font-bold">30K</div>
            <div className="text-sm font-medium">Customers</div>
          </div>
          <div className="space-y-2 rounded-lg bg-muted p-4">
            <div className="text-3xl font-bold">40+</div>
            <div className="text-sm font-medium">Countries Available</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/img/landing/scr_3.png?height=400&width=600"
          alt="Team Collaboration"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
</section>

        <CoreValues/>
        <Feature/>
        <BlogSection/>
        <Steps/>
        <Pricecard/>

        <section id="process" className="container mx-auto max-w-[1200px] px-4 py-10">
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Audit & Analysis', 'Strategy Development', 'Implementation', 'Monitoring & Reporting'].map((step, index) => (
              <li key={step} className="flex items-start">
                <span className="flex items-center justify-center bg-primary text-primary-foreground rounded-full w-8 h-8 mr-4 flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{step}</h3>
                  <p className="text-gray-600">We follow a proven process to ensure your SEO success.</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="pricing" className="py-12 bg-secondary">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative hover:shadow-lg transition-shadow duration-300">
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
                  <Button className="w-full" variant="outline">Try for free</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary  relative hover:shadow-lg transition-shadow duration-300">
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
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      PPC Research
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="relative hover:shadow-lg transition-shadow duration-300">
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
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Data Engineering
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
                <AccordionTrigger className="text-base font-medium leading-loose">What is a keyword generator?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  A keyword generator is a tool that helps you discover relevant search terms and phrases related to your topic or niche. It&apos;s designed to assist in creating effective SEO and content strategies by providing a list of keywords that your target audience is likely to use when searching for information online.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-medium leading-loose">How does the keyword generator work?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  Our keyword generator uses advanced algorithms and data from various sources to analyze your input and generate a list of related keywords. It considers factors such as search volume, competition, and relevance to provide you with the most useful keyword suggestions for your content and SEO efforts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-medium leading-loose">Can I use the generated keywords for PPC campaigns?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  Yes, absolutely! The keywords generated by our tool can be used for various purposes, including Pay-Per-Click (PPC) campaigns. They can help you identify potential ad keywords, improve your ad targeting, and optimize your campaign structure for better performance and ROI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base font-medium leading-loose">How often is the keyword data updated?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  We update our keyword data regularly to ensure you have access to the most current and relevant information. Our system refreshes the data weekly, incorporating the latest search trends and algorithm changes from major search engines.
                </AccordionContent>
              
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base font-medium leading-loose">Is there a limit to how many keywords I can generate?</AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  The number of keywords you can generate depends on your subscription plan. Our free plan allows for a limited number of keyword generations per day, while our premium plans offer higher or unlimited generation capabilities. Check our pricing page for more details on the limits for each plan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center space-y-8 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-full bg-amber-100 p-3">
            <Trophy className="h-6 w-6 text-amber-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why wait to take advantage?</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get words for free right now and save money on your content
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex w-full max-w-3xl flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium">10x faster content writing</div>
            <div className="rounded-lg bg-pink-50 px-4 py-2 text-sm font-medium">Save money</div>
            <div className="rounded-lg bg-yellow-50 px-4 py-2 text-sm font-medium">500% less time to write</div>
            <div className="rounded-lg bg-green-50 px-4 py-2 text-sm font-medium">Unlimited possibilities</div>
          </div>
        </div>
        <Button className="bg-indigo-500 hover:bg-indigo-600" size="lg">
          Get Started for Free
        </Button>
      </div>
    </section>

        
{/* Newsletter */}
<section className="border-t py-12 border-b">
  <div className="max-w-[1200px] mx-auto px-4">
    <div className="flex items-center gap-6">
      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
        <Bell className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Subscribe to our newsletter</h2>
        <p className="text-muted-foreground">We&apos;ll keep you updated with the best new jobs.</p>
      </div>
      <div className="flex gap-2">
        <Input placeholder="Enter your email" className="w-[300px]" />
        <Button>Subscribe</Button>
      </div>
    </div>
  </div>
</section>



        {/* CTA Section */}
        <section id="cta" className="py-12">
          <div className="container mx-auto max-w-[1200px] px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8 text-gray-600">Sign up now and supercharge your keyword research!</p>
            <Button size="lg">Start Your Free Trial</Button>
          </div>
        </section>

      </main>
    </div>
  )
}