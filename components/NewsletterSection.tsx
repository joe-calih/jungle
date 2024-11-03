import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react"

const NewsletterSection = () => {
  return (
    <section className="border-t py-12 border-b">
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
  );
};

export default NewsletterSection;
