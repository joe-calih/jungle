'use client'

import { useState } from 'react'
import Image from 'next/image'
import Integration from "@/components/Integration";
import Checklist from "@/components/Checklist";
import CoreValues from "@/components/CoreValues";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Company from "@/components/Companys";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, BarChart2, Globe, Target, PenTool, Users, Mail, ArrowRight, Tag } from 'lucide-react'

export default function SEOLandingPage() {
  const [activeTab, setActiveTab] = useState('content')

  const tools = [
    { name: 'Keyword Explorer', icon: Search, description: 'Discover high-value keywords for your SEO strategy' },
    { name: 'Backlink Analyzer', icon: Globe, description: 'Analyze and improve your backlink profile' },
    { name: 'Rank Tracker', icon: BarChart2, description: 'Monitor your search engine rankings in real-time' },
    { name: 'Content Optimizer', icon: PenTool, description: 'Optimize your content for better search engine visibility' },
    { name: 'Site Audit', icon: Target, description: 'Identify and fix technical SEO issues on your website' },
    { name: 'Competitor Analysis', icon: Users, description: 'Analyze your competitors\' SEO strategies' },
    // ... add more tools up to 10
  ]

  const keywordMetrics = [
    'Keyword Difficulty',
    'Search Volume',
    'Cost Per Click (CPC)',
    'Competition',
    'Trend',
  ]

  const marketingTabs = [
    { id: 'content', label: 'Content Marketing', icon: PenTool },
    { id: 'ppc', label: 'PPC', icon: Target },
    { id: 'social', label: 'Social Media', icon: Users },
    { id: 'email', label: 'Email Marketing', icon: Mail },
  ]

  const faqs = [
    { question: 'What is SEO?', answer: 'SEO stands for Search Engine Optimization. It&apos;s the practice of optimizing your website to increase its visibility in search engine results pages (SERPs) for relevant keywords.' },
    { question: 'How long does it take to see results from SEO?', answer: 'SEO is a long-term strategy. Typically, it can take 3-6 months to start seeing significant results, but this can vary depending on factors such as competition, content quality, and the age of your website.' },
    { question: 'What&apos;s the difference between on-page and off-page SEO?', answer: 'On-page SEO refers to optimizations made directly on your website, such as content and HTML source code. Off-page SEO involves external factors like backlinks and social signals that influence your site&apos;s authority and rankings.' },
    // ... add more FAQs
  ]

  const blogPosts = [
    {
      title: 'The Future of SEO in 2025',
      description: 'Trends and predictions for the coming year',
      content: 'Discover the emerging trends and technologies that will shape the future of SEO. Stay ahead of the curve and prepare your strategy for success.',
      image: '/placeholder.svg?height=200&width=400',
      date: 'May 15, 2024',
    },
    {
      title: 'Mastering Voice Search Optimization',
      description: 'Strategies for the voice-first era',
      content: 'Learn how to optimize your content for voice search and stay relevant in the age of virtual assistants and smart speakers.',
      image: '/placeholder.svg?height=200&width=400',
      date: 'April 28, 2024',
    },
    {
      title: 'The Impact of AI on SEO',
      description: 'Embracing artificial intelligence in your SEO strategy',
      content: 'Explore how AI is revolutionizing SEO and learn how to leverage machine learning to improve your search rankings.',
      image: '/placeholder.svg?height=200&width=400',
      date: 'April 10, 2024',
    },
  ]

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-t from-primary to-primary-foreground py-20">
        <div className="container mx-auto max-w-[1200px] text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Supercharge Your SEO Strategy</h1>
          <p className="text-xl mb-8 text-white/80">Unlock the power of data-driven SEO tools and skyrocket your online presence</p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">Get Started Free</Button>
        </div>
        <Company/>
      </section>

      {/* Tools Center */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-center">Our SEO Toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {tools.slice(0, 6).map((tool, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <tool.icon className="w-6 h-6" />
                    {tool.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{tool.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" style={{ top: '66.67%' }} />
            {[1, 2, 3, 4].map((_, index) => (
              <Card key={`skeleton-${index}`} className="opacity-50 blur-sm">
                <CardHeader>
                  <Skeleton className="h-6 w-[250px]" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-[300px]" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center relative z-10">
            <Button size="lg" asChild>
              <Link href="/tools">
                Explore All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Integration/>
      <CoreValues/>
      <Checklist/>
<section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight">
                Upwork Chat Pro
              </h3>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Use AI to do your work faster.
                <br />
                Generate ideas, draft content, and
                <br />
                more with Uma and GPT-4o.
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-[#14A800] text-white hover:bg-[#14A800]/90"
              >
                Get Upwork Chat Pro
              </Button>
              <Button
                variant="link"
                size="lg"
                className="text-[#14A800] hover:text-[#14A800]/90"
              >
                Learn more
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tag className="h-4 w-4" />
              <span>Included with Freelancer Plus ($20/month)</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Upwork Chat Pro interface preview"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#14A800]/20 to-[#14A800]/40" />
          </div>
        </div>
      </div>
    </section>

      {/* Keyword Research Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-center">Powerful Keyword Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Uncover High-Value Keywords</h3>
              <p className="mb-6">Our advanced keyword research tools help you discover the most relevant and profitable keywords for your niche.</p>
              <ul className="space-y-2">
                {keywordMetrics.map((metric, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Badge variant="secondary">{metric}</Badge>
                  </li>
                ))}
              </ul>
              <Button className="mt-6">Start Researching</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Keyword Difficulty Spectrum</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gradient-to-r from-green-500 to-red-500 h-4 rounded-full" />
                  <span className="text-sm font-medium">0-100</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-green-500 font-bold">Easy</div>
                    <div className="text-sm">0-30</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-500 font-bold">Moderate</div>
                    <div className="text-sm">31-70</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-500 font-bold">Difficult</div>
                    <div className="text-sm">71-100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section with Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Marketing Solutions</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {marketingTabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Content Marketing Tools</CardTitle>
                  <CardDescription>Create and optimize content that ranks and converts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>AI-powered content generator</li>
                    <li>SEO content optimizer</li>
                    <li>Content performance tracker</li>
                    <li>Topic research tool</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Explore Content Tools</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="ppc">
              <Card>
                <CardHeader>
                  <CardTitle>PPC Campaign Management</CardTitle>
                  <CardDescription>Maximize your ROI with data-driven PPC strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Keyword bid optimizer</li>
                    <li>Ad copy A/B testing</li>
                    <li>Landing page converter</li>
                    <li>Budget allocation tool</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Explore PPC Tools</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="social">
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Marketing</CardTitle>
                  <CardDescription>Engage your audience and build brand awareness</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Social media scheduler</li>
                    <li>Hashtag research tool</li>
                    <li>Engagement analytics</li>
                    <li>Influencer discovery platform</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Explore Social Tools</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardTitle>Email Marketing Automation</CardTitle>
                  <CardDescription>Nurture leads and drive conversions with targeted campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Email template builder</li>
                    <li>Segmentation and personalization</li>
                    <li>A/B testing suite</li>
                    <li>Conversion tracking</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Explore Email Tools</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest SEO Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">{post.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button variant="outline">Read More</Button>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">View All Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20  bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay Ahead of the SEO Curve</h2>
            <p className="text-xl">Subscribe to our newsletter for the latest SEO tips, tricks, and strategies</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-primary-foreground text-primary" />
            <Button type="submit" variant="secondary">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
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
  )
}