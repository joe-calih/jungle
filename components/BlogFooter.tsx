import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  const footerSchema = {
    "@context": "https://schema.org",
    "@type": "WPFooter",
    "name": "Jungle Foundation Footer",
    "description": "Footer navigation for Jungle Foundation website",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "About Us",
        "url": "/about"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Our Impact",
        "url": "/impact"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Support Us",
        "url": "/support"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Contact",
        "url": "/contact"
      }
    ]
  };

  return (
    <footer className="w-full bg-white font-normal text-base">
      <Script id="footer-schema" type="application/ld+json">
        {JSON.stringify(footerSchema)}
      </Script>
      <div className="container mx-auto max-w-[1200px] px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-base hover:underline">About Us</Link></li>
              <li><Link href="/impact" className="text-base hover:underline">Our Impact</Link></li>
              <li><Link href="/contact" className="text-base hover:underline">Contact</Link></li>
              <li><Link href="/projects" className="text-base hover:underline">Our Projects</Link></li>
              <li><Link href="/team" className="text-base hover:underline">Our Team</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-medium mb-4">Get Involved</h3>
            <ul className="space-y-4">
            <li><Link href="/partnerships" className="text-base hover:underline">Partnerships</Link></li>
              <li><Link href="/donate" className="text-base hover:underline">Donate</Link></li>
              <li><Link href="/volunteer" className="text-base hover:underline">Volunteer</Link></li>
              <li><Link href="/events" className="text-base hover:underline">Events</Link></li>
              <li><Link href="/Documentation" className="text-base hover:underline">Documentation</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-4">
            <li><Link href="/reports" className="text-base hover:underline">Annual Reports</Link></li>
              <li><Link href="/Support" className="text-base hover:underline">Support</Link></li>
              <li><Link href="/membership" className="text-base hover:underline">Membership</Link></li>
              <li><Link href="/Support" className="text-base hover:underline">Support</Link></li>
              <li><Link href="/Business" className="text-base hover:underline">Businesses</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-base hover:underline">Privacy Policy</Link></li>
              <li><Link href="/changelog" className="text-base hover:underline">Changelog</Link></li>
              <li><Link href="/cookies" className="text-base hover:underline">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="text-base hover:underline">Disclaimer</Link></li>
              <li><Link href="/terms" className="text-base hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-base">
              © {new Date().getFullYear()} Jungle Foundation. Powered by Jungle Initiative.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-base">
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
              <Link href="/cookies" className="hover:underline">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
