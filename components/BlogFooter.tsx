import Link from "next/link"
import Script from "next/script"

export default function Footer() {
  const footerSchema = {
    "@context": "https://schema.org",
    "@type": "WPFooter",
    "name": "Semdeals Footer",
    "description": "Footer navigation for Semdeals website",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "Components",
        "url": ""
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Templates",
        "url": "/templates"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Aceternity UI",
        "url": "/aceternity-ui"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Pages",
        "url": "/pages"
      }
    ]
  }

  return (
    <footer className="w-full bg-white font-normal text-base -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
      <Script id="footer-schema" type="application/ld+json">
        {JSON.stringify(footerSchema)}
      </Script>
      <div className="container mx-auto max-w-[1200px] px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-medium mb-4">Components</h3>
            <ul className="space-y-4 font-normal text-base -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
              <li><Link href="/membership" className="text-base hover:underline">Membership</Link></li>
              <li><Link href="/disclaimer" className="text-base hover:underline">Disclaimer</Link></li>
              <li><Link href="/lessons" className="text-base hover:underline">Lessons</Link></li>
              <li><Link href="/changelog" className="text-base hover:underline">Changelog</Link></li>
              <li><Link href="/contact" className="text-base hover:underline">Contact</Link></li>
              <li><Link href="/dashboard" className="text-base hover:underline">Dashboard</Link></li>
              <li><Link href="/landing" className="text-base hover:underline">Landing</Link></li>
              <li><Link href="/pricing" className="text-base hover:underline">Pricing</Link></li>
              <li><Link href="/privacy" className="text-base hover:underline">Privacy</Link></li>
              <li><Link href="/products" className="text-base hover:underline">Products</Link></li>
              <li><Link href="/services" className="text-base hover:underline">Services</Link></li>
              <li><Link href="/studio" className="text-base hover:underline">Studio</Link></li>
              <li><Link href="/blog" className="text-base hover:underline">Blog</Link></li>
              <li><Link href="/support" className="text-base hover:underline">Support</Link></li>
              <li><Link href="/faqs" className="text-base hover:underline">FAQs</Link></li>
              <li><Link href="/sidebars" className="text-base hover:underline">Sidebars</Link></li>
              <li><Link href="/stats-sections" className="text-base hover:underline">Stats Sections</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Templates</h3>
            <ul className="space-y-4 font-normal text-base -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
              <li><Link href="/templates/startup-landing-page" className="text-base hover:underline">Startup Landing Page Template</Link></li>
              <li><Link href="/templates/ai-saas" className="text-base hover:underline">AI SaaS Template</Link></li>
              <li><Link href="/templates/proactiv-marketing" className="text-base hover:underline">Proactiv Marketing Template</Link></li>
              <li><Link href="/templates/agenlabs-agency" className="text-base hover:underline">Agenlabs Agency Template</Link></li>
              <li><Link href="/templates/devpro-portfolio" className="text-base hover:underline">DevPro Portfolio Template</Link></li>
              <li><Link href="/templates/foxtrot-marketing" className="text-base hover:underline">Foxtrot Marketing Template</Link></li>
            </ul>
            <h3 className="text-lg font-semibold mt-8 mb-4">Pages</h3>
            <ul className="space-y-4 font-normal text-xs -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
              <li><Link href="/products" className="text-base hover:underline">All Products</Link></li>
              <li><Link href="" className="text-base hover:underline">Components</Link></li>
              <li><Link href="/templates" className="text-base hover:underline">Templates</Link></li>
              <li><Link href="/figma-kit" className="text-base hover:underline">Figma Kit</Link></li>
              <li><Link href="/categories" className="text-base hover:underline">Categories</Link></li>
              <li><Link href="/box-shadows" className="text-base hover:underline">Box Shadows</Link></li>
              <li><Link href="/pricing" className="text-base hover:underline">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Aceternity UI</h3>
            <ul className="space-y-4 font-normal text-xs -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
              <li><Link href="/aceternity-studio" className="text-base hover:underline">Aceternity Studio</Link></li>
              <li><Link href="/licence" className="text-base hover:underline">Licence</Link></li>
              <li><Link href="/refunds" className="text-base hover:underline">Refunds</Link></li>
              <li><Link href="/privacy-policy" className="text-base hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-base hover:underline">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-4 font-normal text-xs -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
              <li><Link href="/best-modern-design-templates" className="text-base hover:underline">Best Modern Design Templates</Link></li>
              <li><Link href="/best-ai-saas-templates" className="text-base hover:underline">Best AI SaaS Templates</Link></li>
              <li><Link href="/best-marketing-templates" className="text-base hover:underline">Best Marketing Templates</Link></li>
              <li><Link href="/best-minimal-templates" className="text-base hover:underline">Best Minimal Templates in React and Next.js</Link></li>
              <li><Link href="/best-framer-motion-components" className="text-base hover:underline">Best components and templates with Framer Motion</Link></li>
              <li><Link href="/amazing-tailwind-framer-motion-components" className="text-base hover:underline">Amazing Tailwind CSS and Framer Motion Components</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-base">© {new Date().getFullYear()} Semdeals. Powered by Semdeals Inc.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-base">
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
              <Link href="/cookies" className="hover:underline">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}