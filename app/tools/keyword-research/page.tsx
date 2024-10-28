import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, Search, Zap, BarChart, Target, Users, Globe, Rocket, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

export default function KeywordResearchTool() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-[1200px] px-4">
            <h2 className="text-4xl font-extrabold mb-4 text-center">Discover Powerful Keywords</h2>
            <p className="text-xl mb-8 text-center">Boost your SEO strategy with our advanced keyword generator</p>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Select defaultValue="us">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="US" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">US</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                  <SelectItem value="ca">CA</SelectItem>
                  <SelectItem value="au">AU</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="google">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Google" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="bing">Bing</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="amazon">Amazon</SelectItem>
                </SelectContent>
              </Select>
              <Input 
                type="text" 
                placeholder="Enter a topic" 
                className="max-w-xs"
              />
              <Button>
                Generate
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary">
          <div className="container mx-auto max-w-[1200px] px-4">
            <h3 className="text-2xl font-bold mb-4">Generated Keywords</h3>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="long-tail">Long-tail</TabsTrigger>
                <TabsTrigger value="questions">Questions</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <Badge variant="secondary" className="text-sm p-2">
                    Example Keyword
                  </Badge>
                </div>
              </TabsContent>
              <TabsContent value="long-tail" className="mt-4">
                <p>Long-tail keywords would be displayed here.</p>
              </TabsContent>
              <TabsContent value="questions" className="mt-4">
                <p>Question-based keywords would be displayed here.</p>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-[1200px] px-4">
            <nav className="text-sm mb-4" aria-label="Breadcrumb">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link href="/" className="text-blue-500">Home</Link>
                  <ChevronDown className="h-4 w-4 mx-2" />
                </li>
                <li className="flex items-center">
                  <Link href="/tools" className="text-blue-500">Tools</Link>
                  <ChevronDown className="h-4 w-4 mx-2" />
                </li>
                <li className="flex items-center">
                  <span className="text-gray-500">Keyword Generator</span>
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Card className="relative hover:shadow-lg transition-shadow duration-300">
              <Badge variant="secondary" className="absolute top-2 right-2">New</Badge>
                <CardHeader>
                  <CardTitle className="text-lg">Keyword Planner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Plan your keyword strategy with in-depth analysis.</p>
                </CardContent>
              </Card>
              <Card className="relative hover:shadow-lg transition-shadow duration-300">
                <Badge variant="secondary" className="absolute top-2 right-2">Pro</Badge>
                <CardHeader>
                  <CardTitle className="text-lg">Rank Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Monitor your keyword rankings across search engines.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Content Optimizer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Optimize your content for target keywords and improve SEO.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Competitor Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Analyze your competitors&apos; keyword strategies.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Local SEO Tool</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Optimize your local search presence with targeted keywords.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 blur-sm">
                <Card>
                  <CardHeader>
                    <CardTitle>Local SEO Tool</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Optimize your local search presence with targeted keywords.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Backlink Analyzer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Analyze your backlink profile and find keyword opportunities.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>SERP Simulator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Preview how your content might appear in search results.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Keyword Clustering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Group related keywords to optimize your content strategy.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Keyword Clustering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Group related keywords to optimize your content strategy.
                  </CardContent>
                </Card>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/tools">
                  View More Tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              </div>
            </div>
          </div>
        </section>

        
        <section id="pricing" className="py-12 bg-secondary">
          <div className="container mx-auto max-w-[1200px] px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
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
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
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
                  <p className="text-3xl font-bold mb-4">Custom</p>
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

        <section id="how" className="py-12 bg-secondary">
          <div className="container mx-auto max-w-[1200px] px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Search className="mx-auto mb-4 h-12 w-12" />
                <h3 className="text-xl font-semibold mb-2">1. Enter Your Topic</h3>
                <p>Start by entering a seed keyword or topic into our search bar.</p>
              </div>
              <div className="text-center">
                <Zap className="mx-auto mb-4 h-12 w-12" />
                <h3 className="text-xl font-semibold mb-2">2. Generate Keywords</h3>
                <p>Our algorithm instantly generates a list of relevant keywords.</p>
              </div>
              <div className="text-center">
                <BarChart className="mx-auto mb-4 h-12 w-12" />
                <h3 className="text-xl font-semibold mb-2">3. Analyze & Select</h3>
                <p>Review the results, filter as needed, and select the best keywords for your strategy.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12">
          <div className="container mx-auto max-w-[1200px] px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Features That Set Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 mb-2" />
                  <CardTitle>Targeted Results</CardTitle>
                </CardHeader>
                <CardContent>
                  Get keywords tailored to your specific niche and audience.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2" />
                  <CardTitle>Competitor Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  Discover keywords your competitors are ranking for.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2" />
                  <CardTitle>Multilingual Support</CardTitle>
                </CardHeader>
                <CardContent>
                  Generate keywords in multiple languages for global reach.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Rocket className="h-8 w-8 mb-2" />
                  <CardTitle>Trend Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  Stay ahead with insights on trending keywords in your industry.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 bg-secondary">
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Boost Your SEO?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get started with SEO Master today and see the difference in your online presence.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                <Checkbox className="ml-2 h-4 w-4" id="terms" />
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>

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