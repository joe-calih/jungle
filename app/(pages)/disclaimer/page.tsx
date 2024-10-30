import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Link, Search,Play, AlertTriangle  } from "lucide-react"
import Company from "@/components/Companys";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">KeywordMaster</h1>
        </header>
        <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto" />
             {/* Header Section */}
             <section className="flex items-center justify-center w-full bg-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[1200px] space-b-1 text-center">
            <div className="mb-8 inline-flex items-center rounded-full border bg-background px-1 py-1 text-sm">
          <Badge variant="secondary" className="mr-2 rounded-full px-2 font-normal">
            New Release
          </Badge>
          Get started with our new product release today
          <ArrowRight className="mr-2 ml-2 h-4 w-4" />
        </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Marketing <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">made simple</span>
                <br />
                for small businesses.
              </h1>
              <p className="mx-auto mb-8 max-w-[700px] text-muted-foreground md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus fugit ab cumque
          consequuntur pariatur provident? Nulla consequuntur nisi eum!
        </p>
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            <Play className="mr-2 h-4 w-4" /> Watch Demo
          </Button>
        </div>
              <div className="space-y-4 pt-20">
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

        <main className="flex-1">
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Unlock the Power of Keywords</h2>
            <p className="text-xl mb-6">Discover, analyze, and optimize your keyword strategy with KeywordMaster</p>
            <div className="flex gap-4">
              <Input placeholder="Enter a keyword" className="max-w-md" />
              <Button>
                <Search className="mr-2 h-4 w-4" /> Research
              </Button>
            </div>
          </section>

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

        {/* Barner Section */}
        <div className="min-h-screen bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
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

          <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Important Notice</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  By accessing and using this website, you acknowledge and agree to the following terms:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>The information provided on this website is for general informational purposes only.</li>
                  <li>It is not intended to be a substitute for professional advice or consultation.</li>
                  <li>We do not guarantee the accuracy, completeness, or timeliness of the information.</li>
                  <li>Your use of any information or materials on this website is entirely at your own risk.</li>
                  <li>We shall not be liable for any loss or damage arising from your reliance on this information.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>This website may contain links to external sites that are not provided or maintained by us.</li>
                  <li>We do not guarantee the accuracy of information on linked sites.</li>
                  <li>The inclusion of any links does not necessarily imply a recommendation or endorsement.</li>
                  <li>We reserve the right to make changes to this disclaimer at any time without notice.</li>
                  <li>By continuing to use this site, you agree to the updated terms.</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/home">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  I Understand and Agree to Proceed
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. Enter Keywords</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Start by entering your target keywords or phrases into our powerful search tool.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Analyze Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our AI-powered engine analyzes search volumes, competition, and trends for your keywords.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Optimize Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Use our insights to refine your content and SEO strategy for maximum impact.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sarah J.</CardTitle>
                  <CardDescription>Digital Marketing Manager</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>&quot;KeywordMaster has revolutionized our content strategy. We&apos;ve seen a 40% increase in organic traffic since using their tools.&quot;</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mark T.</CardTitle>
                  <CardDescription>E-commerce Entrepreneur</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>&quot;The competitor analysis feature is a game-changer. It&apos;s like having X-ray vision into our rivals&apos; keyword strategies.&quot;</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">FAQ</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>How accurate is the keyword data?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our data is sourced from multiple reliable APIs and updated daily to ensure the highest accuracy.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can I export the keyword results?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Yes, you can export your keyword research results in various formats, including CSV and PDF.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="container mx-auto max-w-[1200px]">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>Have questions? We&apos;re here to help!</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea
                        id="message"
                        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Send Message</Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </main>

        <footer className="mt-12 text-center">
          <p>&copy; 2023 KeywordMaster. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}