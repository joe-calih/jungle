import { Bell, Link } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

{/* Newsletter */}
<section className="border-t py-12">
  <div className="max-w-[1200px] mx-auto px-4">
    <div className="flex items-center gap-6">
      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
        <Bell className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Subscribe to our newsletter</h2>
        <p className="text-muted-foreground">We&apos;ll keep you updated with the best new jobs.</p>
      </div>
      <div className="flex gap-2">
        <Input placeholder="Enter your email" className="w-[300px]" />
        <Button>Subscribe</Button>
      </div>
    </div>
  </div>
</section>


{/* Footer */}
<footer className="border-t py-12 bg-muted/50">
<div className="max-w-[1200px] mx-auto px-4">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
    <div className="space-y-4">
      <h3 className="font-semibold">About Us</h3>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris nunc, bibendum a
        porttitor ut, varius ut elit ipsum.
      </p>
      <div className="text-sm">
        <div>T. (00) 658 54332</div>
        <div>E. hello@super.co</div>
      </div>
    </div>
    <div className="space-y-4">
      
      <h3 className="font-semibold">Company</h3>
      <div className="space-y-2">
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          About us
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Career
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Blog
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Contact
        </Link>
      </div>
    </div>
    <div className="space-y-4">
      <h3 className="font-semibold">Services</h3>
      <div className="space-y-2">
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Jobs
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Companies
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Candidates
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Pricing
        </Link>
      </div>
    </div>
    <div className="space-y-4">
      <h3 className="font-semibold">Support</h3>
      <div className="space-y-2">
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Privacy Policy
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Terms of Use
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Help center
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Documentation
        </Link>
      </div>
    </div>
    <div className="space-y-4">
      <h3 className="font-semibold">Connect</h3>
      <div className="space-y-2">
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          LinkedIn
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Twitter
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Facebook
        </Link>
        <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
          Youtube
        </Link>
      </div>
    </div>
  </div>
  <div className="mt-12 text-center text-sm text-muted-foreground">
    © 2023 Upixer. All Right Reserved.
  </div>
</div>
</footer>