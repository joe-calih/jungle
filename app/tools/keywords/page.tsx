import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function KeywordResearchLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Unlock the Power of <span className="text-blue-600">Keyword Research</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Discover high-performing keywords to boost your SEO strategy and dominate search results.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Button size="lg" className="w-full flex items-center justify-center">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Powerful Features for SEO Success
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Keyword Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get in-depth insights into search volume, competition, and trends for your target keywords.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Competitor Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Analyze your competitors&apos; keyword strategies and uncover new opportunities for growth.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Real-Time Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access up-to-date information on keyword performance and search engine rankings.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            How KeywordMaster Works
          </h2>
          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="analyze">Analyze</TabsTrigger>
              <TabsTrigger value="implement">Implement</TabsTrigger>
            </TabsList>
            <TabsContent value="research">
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Research</CardTitle>
                  <CardDescription>Discover relevant keywords for your niche</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Use our powerful research tools to find high-potential keywords in your industry.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analyze">
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Analyze</CardTitle>
                  <CardDescription>Evaluate keyword metrics and competition</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Dive deep into keyword data to identify the most promising opportunities for your SEO strategy.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="implement">
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Implement</CardTitle>
                  <CardDescription>Optimize your content with targeted keywords</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Apply your research to create SEO-optimized content that ranks higher in search results.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>For individuals and small teams</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$29/mo</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 100 keyword searches/day</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Basic competitor analysis</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Email support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$79/mo</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Unlimited keyword searches</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Advanced competitor analysis</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Priority support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">Custom</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Custom keyword limits</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> API access</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Dedicated account manager</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-4">
                <p className="text-lg">&quot;KeywordMaster has transformed our SEO strategy. We&apos;ve seen a 200% increase in organic traffic!&quot;</p>
                <p className="mt-4 font-semibold">Jane Doe, Marketing Director</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <p className="text-lg">&quot;The competitor analysis feature is a game-changer. We&apos;re always one step ahead now.&quot;</p>
                <p className="mt-4 font-semibold">John Smith, SEO Specialist</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <p className="text-lg">&quot;Easy to use and incredibly powerful. KeywordMaster is an essential tool for any serious marketer.&quot;</p>
                <p className="mt-4 font-semibold">Alice Johnson, Content Creator</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>How accurate is your keyword data?</CardTitle>
            </CardHeader>
            <CardContent>
              Our keyword data is sourced from multiple reliable APIs and updated in real-time, ensuring high accuracy and relevance for your SEO strategy.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can I export my keyword research results?</CardTitle>
            </CardHeader>
            <CardContent>
              Yes, you can export your keyword research results in various formats including CSV, Excel, and PDF for easy integration with your existing workflows.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Do you offer a free trial?</CardTitle>
            </CardHeader>
            <CardContent>
              We offer a 14-day free trial on all our plans, allowing you to explore all features and functionalities before committing to a subscription.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Supercharge Your SEO?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of satisfied customers and start optimizing your keyword strategy today.
          </p>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  )
}