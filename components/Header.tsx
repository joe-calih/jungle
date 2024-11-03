import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Search, Sparkles, Box, LayoutGrid, LineChart, Monitor, Settings, Shapes, BarChart, Code, FileText, Paintbrush, PieChart, Plug, Users } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between container mx-auto max-w-[1300px] px-4">
        <div className="mr-4 flex items-center">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image src="/favicon.ico" alt="Semdeals Logo" width={26} height={26} />
            <span className="hidden font-bold sm:inline-block">Semdeals</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="px-3 py-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[15px] px-3 py-2 rounded-full hover:bg-secondary transition-colors">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                        <div className="w-[1010px] flex flex-col items-center">
                          <div className="max-w-[1200px] mx-auto p-6">
                            <div className="grid grid-cols-4 gap-8">
                              <div>
                                <h3 className="font-semibold text-base mb-4">Content Writing</h3>
                                <nav className="flex flex-col space-y-3">
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Articles & Blog Posts
                                  </Link>
                                  <div className="flex items-center space-x-2">
                                    <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                      Content Strategy
                                    </Link>
                                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                                      NEW
                                    </Badge>
                                  </div>
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Website Content
                                  </Link>
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Scriptwriting
                                  </Link>
                                </nav>
                              </div>

                              <div>
                                <h3 className="font-semibold text-base mb-4">Book & eBook Publishing</h3>
                                <nav className="flex flex-col space-y-3">
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Book & eBook Writing
                                  </Link>
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Book Editing
                                  </Link>
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Beta Reading
                                  </Link>
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900 flex items-center">
                                    Self-Publish Your Book
                                    <svg
                                      className="w-4 h-4 ml-1"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                  </Link>
                                </nav>
                              </div>

                              <div>
                                <h3 className="font-semibold text-base mb-4">Business & Marketing Copy</h3>
                                <nav className="flex flex-col space-y-3">
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Brand Voice & Tone
                                  </Link>
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Business Names & Slogans
                                  </Link>
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Case Studies
                                  </Link>
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    White Papers
                                  </Link>
                                </nav>
                              </div>

                              <div>
                                <h3 className="font-semibold text-base mb-4">Translation & Transcription</h3>
                                <nav className="flex flex-col space-y-3">
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Translation
                                  </Link>
                                  <div className="flex items-center space-x-2">
                                    <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                      Localization
                                    </Link>
                                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                                      NEW
                                    </Badge>
                                  </div>
                                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                                    Transcription
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
              </NavigationMenuItem>
              

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[15px] px-3 py-2 rounded-full hover:bg-secondary transition-colors">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-8 p-6 w-[800px]">
                  <div>
                    <h4 className="text-sm font-medium leading-none mb-4 text-muted-foreground">Use Cases</h4>
                    <div className="grid gap-4">
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-purple-50">
                            <Sparkles className="size-5 text-purple-500" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">AI Apps</div>
                            <p className="text-sm text-muted-foreground">Deploy at the speed of AI</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-pink-50">
                            <Box className="size-5 text-pink-500" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Composable Commerce</div>
                            <p className="text-sm text-muted-foreground">Power storefronts that convert</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-green-50">
                            <LineChart className="size-5 text-green-500" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Marketing Sites</div>
                            <p className="text-sm text-muted-foreground">Launch campaigns fast</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-blue-50">
                            <LayoutGrid className="size-5 text-blue-500" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Multi-tenant Platforms</div>
                            <p className="text-sm text-muted-foreground">Scale apps with one codebase</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-orange-50">
                            <Monitor className="size-5 text-orange-500" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Web Apps</div>
                            <p className="text-sm text-muted-foreground">Ship features, not infrastructure</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium leading-none mb-4 text-muted-foreground">Users</h4>
                    <div className="grid gap-4">
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-sky-50">
                            <Settings className="size-5 text-sky-500" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Platform Engineers</div>
                            <p className="text-sm text-muted-foreground">Automate away repetition</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-indigo-50">
                            <Shapes className="size-5 text-indigo-500" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Design Engineers</div>
                            <p className="text-sm text-muted-foreground">Deploy for every idea</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[15px] text-600 px-3 py-2 rounded-full hover:bg-secondary transition-colors">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                    <ListItem href="/resources/blog" title="Blog">
                      Read our latest articles and insights.
                    </ListItem>
                    <ListItem href="/resources/case-studies" title="Case Studies">
                      Explore success stories from our clients.
                    </ListItem>
                    <ListItem href="/resources/seo-tools" title="SEO Tools">
                      Powerful tools to boost your SEO efforts.
                    </ListItem>
                    <ListItem href="/resources/seo-checklist" title="SEO Checklist">
                      Comprehensive guide for optimizing your website.
                    </ListItem>
                    <ListItem href="/resources/keyword-research" title="Keyword Research">
                      Tools and tips for effective keyword research.
                    </ListItem>
                    <ListItem href="/resources/backlink-analyzer" title="Backlink Analyzer">
                      Analyze and improve your backlink profile.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[15px] px-3 py-2 rounded-full hover:bg-secondary transition-colors">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-4 gap-3 p-6 md:w-[800px]">
                    <ul className="space-y-2">
                      <ListItem href="/resources/blog" title="Blog">
                        Latest articles and insights
                      </ListItem>
                      <ListItem href="/resources/case-studies" title="Case Studies">
                        Success stories from our clients
                      </ListItem>
                      <ListItem href="/resources/webinars" title="Webinars">
                        Educational online sessions
                      </ListItem>
                    </ul>
                    <ul className="space-y-2">
                      <ListItem href="/resources/seo-tools" title="SEO Tools">
                        Boost your SEO performance
                      </ListItem>
                      <ListItem href="/resources/seo-checklist" title="SEO Checklist">
                        Optimize your website revenue
                      </ListItem>
                      <ListItem href="/resources/keyword-research" title="Keyword Research">
                        Effective keyword strategies
                      </ListItem>
                    </ul>
                    <ul className="space-y-2">
                      <ListItem href="/resources/backlink-analyzer" title="Backlink Analyzer">
                        Improve your backlink profile
                      </ListItem>
                      <ListItem href="/resources/site-audit" title="Site Audit">
                        Comprehensive website analysis
                      </ListItem>
                      <ListItem href="/resources/rank-tracker" title="Rank Tracker">
                        Monitor your search rankings
                      </ListItem>
                    </ul>
                    <ul className="space-y-4">
                      <ListItemWithIcon
                        href="/resources/ai-seo-assistant"
                        title="AI SEO"
                        icon={<Heart className="h-4 w-4" />}
                        bgColor="bg-blue-100"
                      >
                        AI-powered SEO recommendations
                      </ListItemWithIcon>
                      <ListItemWithIcon
                        href="/resources/content-optimizer"
                        title="Content Optimizer"
                        icon={<Star className="h-4 w-4" />}
                        bgColor="bg-green-100"
                      >
                        Optimize your content for SEO
                      </ListItemWithIcon>
                      <ListItemWithIcon
                        href="/resources/local-seo-toolkit"
                        title="Local SEO Toolkit"
                        icon={<Search className="h-4 w-4" />}
                        bgColor="bg-yellow-100"
                      >
                        Boost your local search presence
                      </ListItemWithIcon>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[15px] px-3 py-2 rounded-full transition-colors">Pricing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                    <ListItem href="/pricing/basic" title="Basic Plan">
                      Perfect for individuals and small teams.
                    </ListItem>
                    <ListItem href="/pricing/pro" title="Pro Plan">
                      Advanced features for growing businesses.
                    </ListItem>
                    <ListItem href="/pricing/enterprise" title="Enterprise Plan">
                      Custom solutions for large organizations.
                    </ListItem>
                    <ListItem href="/pricing/compare" title="Compare Plans">
                      See all features side by side.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-sm rounded-full transition-colors">
              <NavigationMenuTrigger className="text-[15px] px-3 py-2 rounded-full transition-colors">Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                <div className="grid gap-6 w-[600px]">
                  <div className="grid grid-cols-2 p-4 gap-4">
                    <NavigationMenuLink asChild>
                      <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center justify-center size-10 rounded-md bg-purple-50">
                          <FileText className="size-5 text-purple-500" />
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1">Automated Reports</div>
                          <p className="text-sm text-muted-foreground">Put your reporting on autopilot</p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center justify-center size-10 rounded-md bg-pink-50">
                          <PieChart className="size-5 text-pink-500" />
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1">Custom Dashboards</div>
                          <p className="text-sm text-muted-foreground">Fully customizable client dashboards</p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center justify-center size-10 rounded-md bg-green-50">
                          <Paintbrush className="size-5 text-green-500" />
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1">White Label</div>
                          <p className="text-sm text-muted-foreground">Add your own logo & branding</p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center justify-center size-10 rounded-md bg-blue-50">
                          <Users className="size-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1">Client & Staff Management</div>
                          <p className="text-sm text-muted-foreground">Manage team & user activity</p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center justify-center size-10 rounded-md bg-orange-50">
                          <Code className="size-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1">SEO Tools</div>
                          <p className="text-sm text-muted-foreground">Rankings, site audits & more</p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center justify-center size-10 rounded-md bg-sky-50">
                          <Plug className="size-5 text-sky-500" />
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1">80+ Integrations</div>
                          <p className="text-sm text-muted-foreground">Connect all your clients data</p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </div>
                  
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-6">
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                      <div className="flex items-center justify-center size-10 rounded-md bg-blue-50">
                        <BarChart className="size-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">Automated Reporting for Marketing Agencies</div>
                        <p className="text-sm text-muted-foreground">Discover our full suite of features</p>
                      </div>
                    </div>
                    <Button variant="outline" className="text-primary">See All Features</Button>
                  </div>
                </div>
              </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                    Enterprise
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-2">
          <Link href="/login">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Semdeals",
        "url": "https://www.semdeals.com",
        "logo": "https://www.semdeals.com/favicon.ico",
        "sameAs": [
          "https://www.facebook.com/semdeals",
          "https://www.twitter.com/semdeals",
          "https://www.linkedin.com/company/semdeals"
        ]
      })}} />
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const ListItemWithIcon = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode; badgeText?: string; bgColor: string }
>(({ className, title, children, icon, badgeText, bgColor, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
            bgColor
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {icon}
            <span className="text-sm font-medium leading-none">{title}</span>
            {badgeText && (
              <Badge variant="secondary" className="ml-2">
                {badgeText}
              </Badge>
            )}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItemWithIcon.displayName = "ListItemWithIcon"