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
import { Heart, Star, Search, Sparkles, Box, LayoutGrid, LineChart, Monitor, Settings, Shapes } from 'lucide-react'

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
                <NavigationMenuTrigger className="text-sm px-3 py-2 rounded-full hover:bg-secondary transition-colors">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                          ⚡ Semdeals
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI and
                            Tailwind CSS.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm px-3 py-2 rounded-full hover:bg-secondary transition-colors">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-8 p-6 w-[800px]">
                  <div>
                    <h4 className="text-sm font-medium leading-none mb-4 text-muted-foreground">Use Cases</h4>
                    <div className="grid gap-4">
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-muted">
                            <Sparkles className="size-5 text-foreground" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">AI Apps</div>
                            <p className="text-sm text-muted-foreground">Deploy at the speed of AI</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-muted">
                            <Box className="size-5 text-foreground" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Composable Commerce</div>
                            <p className="text-sm text-muted-foreground">Power storefronts that convert</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-muted">
                            <LineChart className="size-5 text-foreground" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Marketing Sites</div>
                            <p className="text-sm text-muted-foreground">Launch campaigns fast</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-muted">
                            <LayoutGrid className="size-5 text-foreground" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Multi-tenant Platforms</div>
                            <p className="text-sm text-muted-foreground">Scale apps with one codebase</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-muted">
                            <Monitor className="size-5 text-foreground" />
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
                          <div className="flex items-center justify-center size-10 rounded-md bg-muted">
                            <Settings className="size-5 text-foreground" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">Platform Engineers</div>
                            <p className="text-sm text-muted-foreground">Automate away repetition</p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="group grid grid-cols-[40px_1fr] items-start gap-4 p-2 hover:bg-muted rounded-md">
                          <div className="flex items-center justify-center size-10 rounded-md bg-muted">
                            <Shapes className="size-5 text-foreground" />
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
                <NavigationMenuTrigger className="text-sm px-3 py-2 rounded-full hover:bg-secondary transition-colors">Resources</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="text-sm px-3 py-2 rounded-full hover:bg-secondary transition-colors">Services</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="text-sm px-3 py-2 rounded-full transition-colors">Pricing</NavigationMenuTrigger>
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
                <Link href="/company" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Company
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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