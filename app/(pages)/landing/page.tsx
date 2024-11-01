import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Zap, Target, BarChart, Search, Globe, Lock, Users, Lightbulb, Rocket } from "lucide-react"

export default function Component() {
  const patterns = [
    { type: 'circle', count: 5 },
    { type: 'lines', count: 8 },
    { type: 'dots', count: 100 },
  ]

  const faqs = [
    { question: "What topics does this blog cover?", answer: "Our blog covers a wide range of web development topics, including React, TypeScript, CSS, JavaScript, and Node.js." },
    { question: "How often is new content published?", answer: "We publish new articles twice a week, typically on Tuesdays and Thursdays." },
    { question: "Can I contribute to the blog?", answer: "Yes! We welcome guest contributions. Please check our 'Write for Us' page for more information on how to submit your articles." },
    { question: "How can I stay updated with new posts?", answer: "You can subscribe to our newsletter or follow us on social media to get notified about new posts." },
  ]


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Start solving your marketing challenges today
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    With 55+ tools and reports, our platform helps you conquer the digital marketing landscape.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Input 
                    placeholder="Enter a keyword" 
                    className="max-w-md" 
                    aria-label="Enter a keyword for SEO research"
                  />
                  <Button className="inline-flex items-center justify-center bg-white text-purple-600 hover:bg-gray-100">
                    <Search className="mr-2 h-4 w-4" />
                    Research
                  </Button>
                </div>
              </div>
              <Image
                alt="SEO Superhero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Boost Your SEO Performance
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Powerful tools to optimize your website&apos;s search engine rankings and drive organic traffic.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button 
              variant="outline" 
              className="bg-white text-black hover:bg-gray-100 hover:text-black"
            >
              Learn More
            </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="absolute inset-0">
        {patterns.map((pattern, patternIndex) => (
          <div key={patternIndex} className="absolute inset-0">
            {[...Array(pattern.count)].map((_, i) => {
              const size = `${(i + 1) * (100 / pattern.count)}%`
              const commonStyles = {
                width: size,
                height: size,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }

              switch (pattern.type) {
                case 'circle':
                  return (
                    <div
                      key={i}
                      className="absolute border border-gray-800 rounded-full"
                      style={commonStyles}
                    />
                  )
                case 'lines':
                  return (
                    <div
                      key={i}
                      className="absolute border-t border-gray-800"
                      style={{
                        ...commonStyles,
                        transform: `translate(-50%, -50%) rotate(${(i * 180) / pattern.count}deg)`,
                      }}
                    />
                  )
                case 'dots':
                  return (
                    <div
                      key={i}
                      className="absolute bg-gray-800 rounded-full"
                      style={{
                        width: '2px',
                        height: '2px',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  )
              }
            })}
          </div>
        ))}
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Boost Your SEO Performance
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Powerful tools to optimize your website&apos;s search engine rankings and drive organic traffic.
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="default">Get Started</Button>
            <Button 
              variant="outline" 
              className="bg-white text-black hover:bg-gray-100 hover:text-black"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>

        {/* Feature Spotlight Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                alt="SEO Analytics Dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/img/landing/3.png?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline">Feature Spotlight</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Advanced SEO Analytics</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get deep insights into your website&apos;s SEO performance with our comprehensive analytics tools.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex items-center justify-center">
                    Try Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">View Demo</Button>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What metrics are included?</AccordionTrigger>
                    <AccordionContent>
                      Our analytics cover keyword rankings, organic traffic, backlink profile, and more.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How often is data updated?</AccordionTrigger>
                    <AccordionContent>
                      Data is refreshed daily, with real-time updates available for premium users.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Keyword Research Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <Image
                alt="Keyword Research Tool"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/img/landing/2.webp?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Keyword Research Made Easy</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover high-performing keywords and optimize your content strategy with our advanced research tools.
                  </p>
                </div>
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
                    <span>Search volume and difficulty metrics</span>
                  </div>
                </div>
                <Button className="w-fit">
                  Try Keyword Research Tool
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time SEO Monitoring */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary">
                    <Zap className="mr-1 h-3 w-3" />
                    Real-time
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SEO Monitoring</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Stay on top of your SEO performance with instant alerts and live dashboards.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Instant ranking changes notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Live traffic and conversion tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Competitor movement alerts</span>
                  </li>
                </ul>
                <Button className="w-fit">Learn More</Button>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  alt="Real-time SEO Monitoring Dashboard"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* On-Page SEO Optimizer */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full">
                <Image
                  alt="On-Page SEO Optimizer"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary">
                    <Target className="mr-1 h-3 w-3" />
                    On-Page SEO
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Page Optimizer</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Optimize your web pages for maximum search engine visibility and user engagement.
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Content Optimization</AccordionTrigger>
                    <AccordionContent>
                      Get suggestions for improving your content&apos;s relevance and readability.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Technical SEO Checks</AccordionTrigger>
                    <AccordionContent>
                      Identify and fix technical issues that may be holding back your rankings.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>User Experience Analysis</AccordionTrigger>
                    <AccordionContent>
                      Improve your page&apos;s usability and engagement metrics for better SEO performance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button className="w-fit">Try Page Optimizer</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Backlink Analysis */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Backlink Analysis</h2>
              <p className="mt-4 text-gray-500 md:text-xl">Uncover your link profile&apos;s strengths and weaknesses</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="mr-2 h-4 w-4" />
                    Link Metrics
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p>Analyze domain authority, trust flow, and other crucial link metrics.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search className="mr-2 h-4 w-4" />
                    Competitor Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Compare your backlink profile with your top competitors to find opportunities.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Link Building Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Discover high-quality link prospects to boost your domain authority.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg">Start Your Backlink Analysis</Button>
            </div>
          </div>
        </section>


        {/* Local SEO Tools */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary">
                    <Globe className="mr-1 h-3 w-3" />
                    Local SEO
                  </Badge>
                  <h2  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dominate Local Search</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Boost your local business visibility with our specialized local SEO tools.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Google My Business optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Local citation building and management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Local keyword research and tracking</span>
                  </li>
                </ul>
                <Button className="w-fit">Explore Local SEO Tools</Button>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  alt="Local SEO Dashboard"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Audit Tool */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive SEO Audit</h2>
              <p className="mt-4 text-gray-500 md:text-xl">Identify and fix SEO issues across your entire website</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="mr-2 h-4 w-4" />
                    Technical SEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Analyze site speed, mobile-friendliness, and crawlability.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search className="mr-2 h-4 w-4" />
                    On-Page SEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Evaluate content quality, meta tags, and internal linking structure.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Off-Page SEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Assess backlink profile and social signals.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    User Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Measure site engagement and conversion optimization opportunities.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg">Start Your SEO Audit</Button>
            </div>
          </div>
        </section>

        {/* Content Optimization */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full">
                <Image
                  alt="Content Optimization Tool"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary">
                    <Lightbulb className="mr-1 h-3 w-3" />
                    Content Optimization
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Craft SEO-Friendly Content</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Create content that ranks higher and engages your audience.
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Keyword Integration</AccordionTrigger>
                    <AccordionContent>
                      Get suggestions for naturally incorporating target keywords into your content.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Readability Analysis</AccordionTrigger>
                    <AccordionContent>
                      Ensure your content is easy to read and understand for your target audience.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Content Structure Optimization</AccordionTrigger>
                    <AccordionContent>
                      Improve your content&apos;s structure with suggestions for headings, paragraphs, and formatting.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button className="w-fit">Try Content Optimizer</Button>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Reporting */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive SEO Reporting</h2>
              <p className="mt-4 text-gray-500 md:text-xl">Generate insightful reports to track your SEO progress</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="mr-2 h-4 w-4" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track rankings, organic traffic, and conversions over time.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    Goal Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monitor progress towards your SEO objectives and KPIs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Client Reporting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Create branded, professional reports for clients or stakeholders.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg">Generate Your SEO Report</Button>
            </div>
          </div>
        </section>

        {/* SEO Learning Center */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary">
                    <Rocket className="mr-1 h-3 w-3" />
                    SEO Education
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SEO Learning Center</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Enhance your SEO knowledge with our comprehensive learning resources.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Video tutorials and webinars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>In-depth SEO guides and articles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Interactive quizzes and assessments</span>
                  </li>
                </ul>
                <Button className="w-fit">Explore Learning Center</Button>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  alt="SEO Learning Center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
              <p className="mt-4 text-gray-500 md:text-xl">Select the perfect plan for your SEO needs</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For small businesses and startups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$49/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Basic keyword research
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      On-page SEO analysis
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Monthly site audit
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For growing businesses and agencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$99/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Advanced keyword research
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Competitor analysis
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Weekly site audits
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Content optimization
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large businesses and enterprises</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">Custom</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      All Professional features
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      API access
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Custom integrations
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Trusted Partners */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Trusted by Industry Leaders</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We&apos;re proud to collaborate with forward-thinking companies that are shaping the future of technology and innovation. Our partnerships drive mutual growth and success.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {[
                { name: "TechCorp", logo: "/img/logos/behance.webp" },
                { name: "InnovateX", logo: "/img/logos/vertigo.webp" },
                { name: "GlobalSolutions", logo: "/img/logos/corsera.webp" },
                { name: "SmartSystems", logo: "/img/logos/envanto.webp" },
                { name: "DataDrive", logo: "/img/logos/vimeo.webp" },
                { name: "FutureTech", logo: "/img/logos/webflow.webp" },
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
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-16">
          <div className="mx-auto px-4 max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Alex Johnson',
                  role: 'Project Manager',
                  content: 'ProductX has transformed how we manage projects. It&apos;s intuitive and powerful!',
                  avatar: 'A',
                },
                {
                  name: 'Sarah Lee',
                  role: 'Designer',
                  content: 'The collaboration features in ProductX are game-changing. Our team&apos;s productivity has soared!',
                  avatar: 'S',
                },
                {
                  name: 'Mike Brown',
                  role: 'Developer',
                  content: 'I&apos;ve tried many tools, but ProductX stands out with its seamless integration and user-friendly interface.',
                  avatar: 'M',
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.name}`} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ&apos;s Section */}
        <section id="faq" className="py-12">
          <div className="container mx-auto max-w-[800px] px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a keyword generator?</AccordionTrigger>
                <AccordionContent>
                  A keyword generator is a tool that helps you discover relevant search terms and phrases related to your topic or niche. It&apos;s designed to assist in creating effective SEO and content strategies by providing a list of keywords that your target audience is likely to use when searching for information online.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does the keyword generator work?</AccordionTrigger>
                <AccordionContent>
                  Our keyword generator uses advanced algorithms and data from various sources to analyze your input and generate a list of related keywords. It considers factors such as search volume, competition, and relevance to provide you with the most useful keyword suggestions for your content and SEO efforts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I use the generated keywords for PPC campaigns?</AccordionTrigger>
                <AccordionContent>
                  Yes, absolutely! The keywords generated by our tool can be used for various purposes, including Pay-Per-Click (PPC) campaigns. They can help you identify potential ad keywords, improve your ad targeting, and optimize your campaign structure for better performance and ROI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How often is the keyword data updated?</AccordionTrigger>
                <AccordionContent>
                  We update our keyword data regularly to ensure you have access to the most current and relevant information. Our system refreshes the data weekly, incorporating the latest search trends and algorithm changes from major search engines.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is there a limit to how many keywords I can generate?</AccordionTrigger>
                <AccordionContent>
                  The number of keywords you can generate depends on your subscription plan. Free users have a daily limit, while paid plans offer higher or unlimited keyword generation. Check our pricing page for detailed information on the limits for each plan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>



          {/* FAQ Section */}
          <section className="mt-16">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <Image src="/img/landing/1.webp?height=400&width=600&text=FAQ+Image" alt="FAQ Illustration" width={600} height={400} className="rounded-lg" />
            </div>
            <div className="lg:w-1/2">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
              <p className="mt-4 text-gray-500 md:text-xl">Hear from businesses that have transformed their SEO with our tools</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Amazing Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>&quot;We&apos;ve seen a 200% increase in organic traffic since using these SEO tools. Highly recommended!&quot;</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">- John Doe, CEO of TechStart</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>User-Friendly Interface</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>&quot;The tools are incredibly intuitive. Even as a beginner, I was able to improve our site&apos;s SEO significantly.&quot;</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">- Jane Smith, Marketing Manager</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>&quot;From keyword research to backlink analysis, this platform has everything we need for our SEO strategy.&quot;</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">- Mike Johnson, SEO Specialist</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}