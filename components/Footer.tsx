import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800">
      <div className="container mx-auto max-w-[1200px] px-4 pt-12 pb-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <div className="space-y-4 text-sm">
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@semdeals.com</p>
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> + (254) 717771900</p>
              <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 237 Nairobi, Kenya</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/advertising">Advertising</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/tools">Web Tools</Link></li>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/subscriptions">Subscriptions</Link></li>
              <li><Link href="/lessons">Lessons</Link></li>
              <li><Link href="/webinars">Webinars</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/documentation">API Documentation</Link></li>
              <li><Link href="/community">Community Forum</Link></li>
              <li><Link href="#">Status Page</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
              <li><Link href="/licenses">Licenses</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Semdeals. Powered by Semdeals Inc.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-900">Terms</Link>
              <Link href="/cookies" className="hover:text-gray-900">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;