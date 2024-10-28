'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ArrowRight  } from "lucide-react"

export default function Footer() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <footer className={`w-full ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
 <section
  className="w-full relative bg-cover bg-center py-20"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')"
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-80"></div>
  
  {/* Content */}
  <div className="container mx-auto max-w-[1200px] text-center relative z-10">
    <div className="inline-block">
      <h1 className="text-4xl font-bold mb-4 text-white">
        Start molding your dream campaigns today
      </h1>
      <p className="text-base mb-8 text-white/90">
        Unlock the power of data-driven SEO tools and skyrocket your online presence
      </p>
      <Button size="lg" className="bg-white text-primary hover:bg-white/90">
        Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
</section>

      <div className="container mx-auto max-w-[1200px] px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Components</h3>
            <ul className="space-y-2">
              {["Hero Sections", "Logo Clouds", "Bento Grids", "CTA Sections", "Testimonials", "Feature Sections", "Pricing Sections", "Cards", "Navbars", "Footers", "Login and Signup", "Contact sections", "Blog Sections", "Blog Content Sections", "FAQs", "Sidebars", "Stats Sections"].map((item) => (
                <li key={item}>
                  <Link href="#" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Templates</h3>
            <ul className="space-y-2">
              {["Startup Landing Page Template", "AI SaaS Template", "Proactiv Marketing Template", "Agenlabs Agency Template", "DevPro Portfolio Template", "Foxtrot Marketing Template"].map((item) => (
                <li key={item}>
                  <Link href="#" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-8 mb-4 text-white">Pages</h3>
            <ul className="space-y-2">
              {["All Products", "Components", "Templates", "Figma Kit", "Categories", "Box Shadows", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href="#" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Aceternity UI</h3>
            <ul className="space-y-2">
              {["Aceternity Studio", "Licence", "Refunds", "Privacy Policy", "Terms and Conditions"].map((item) => (
                <li key={item}>
                  <Link href="#" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Pages</h3>
            <ul className="space-y-2">
              {["Best Modern Design Templates", "Best AI SaaS Templates", "Best Marketing Templates", "Best Minimal Templates in React and Next.js", "Best components and templates with Framer Motion", "Amazing Tailwind CSS and Framer Motion Components"].map((item) => (
                <li key={item}>
                  <Link href="#" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-center ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>© {new Date().getFullYear()} Semdeals. Powered by Semdeals Inc.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link href="/privacy" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>Privacy</Link>
              <Link href="/terms" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>Terms</Link>
              <Link href="/cookies" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>Cookies</Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`${isDarkTheme ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}
              >
                {isDarkTheme ? <Sun className="h-1 w-1" /> : <Moon className="h-1 w-1" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}