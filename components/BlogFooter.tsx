import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-800">
      <div className="container mx-auto max-w-[1300px] px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-medium mb-4">Components</h3>
            <ul className="space-y-2">
              {["Hero Sections", "Logo Clouds", "Bento Grids", "CTA Sections", "Testimonials", "Feature Sections", "Pricing Sections", "Cards", "Navbars", "Footers", "Login and Signup", "Contact sections", "Blog Sections", "Blog Content Sections", "FAQs", "Sidebars", "Stats Sections"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Templates</h3>
            <ul className="space-y-2">
              {["Startup Landing Page Template", "AI SaaS Template", "Proactiv Marketing Template", "Agenlabs Agency Template", "DevPro Portfolio Template", "Foxtrot Marketing Template"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-8 mb-4">Pages</h3>
            <ul className="space-y-2">
              {["All Products", "Components", "Templates", "Figma Kit", "Categories", "Box Shadows", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Aceternity UI</h3>
            <ul className="space-y-2">
              {["Aceternity Studio", "Licence", "Refunds", "Privacy Policy", "Terms and Conditions"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              {["Best Modern Design Templates", "Best AI SaaS Templates", "Best Marketing Templates", "Best Minimal Templates in React and Next.js", "Best components and templates with Framer Motion", "Amazing Tailwind CSS and Framer Motion Components"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-gray-500s">© {new Date().getFullYear()} Semdeals. Powered by Semdeals Inc.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-gray-500s">
              <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-900">Terms</Link>
              <Link href="/cookies" className="hover:text-gray-900">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
