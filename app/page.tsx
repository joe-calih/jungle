import CoreValues from "@/components/CoreValues";
import Steps from "@/components/Steps";
import BlogSection from "@/components/BlogSec";
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import ProcessSection from '@/components/ProcessSection';
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-1">
    <HeroSection/>
    <ProcessSection/>
    <BlogSection/>
    <Steps/>
    <CoreValues/>
    <FAQSection/>
    <CTASection/>
    </main>
    </div>
  )
}