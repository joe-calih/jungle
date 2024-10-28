"use client"

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
import { Heart, Star, Search} from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${isScrolled ? 'bg-white' : 'bg-background'}`}>
      <div className="flex h-14 items-center justify-between container mx-auto max-w-[1200px] px-4">
        <div className="mr-4 flex items-center">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image src="/favicon.ico" alt="Favicon" width={24} height={24} />
            <span className="hidden font-bold sm:inline-block">Semdeals</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/services"
                        >
                          
                          <div className="mb-2 mt-4 text-lg font-medium">
                           Image Services
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Powerful image editing and manipulation tools at your fingertips.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/services/photo-effects" title="Photo Effects">
                      Enhance your images with our wide range of photo effects.
                    </ListItem>
                    <ListItem href="/services/photo-filters" title="Photo Filters">
                      Apply professional-grade filters to transform your photos.
                    </ListItem>
                    <ListItem href="/services/tools" title="Tools">
                      Access our suite of image editing and manipulation tools.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
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
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Company
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Enterprice
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
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

export default Header
