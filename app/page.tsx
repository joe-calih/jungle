import CoreValues from "@/components/CoreValues";
import Steps from "@/components/Steps";
import Pricecard from "@/components/PriceCards";
import BlogSection from "@/components/BlogSec";
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import HeaderSection from '@/components/HeaderSection';
import PopularServices from "@/components/PopularServices";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-1">
    <PopularServices/>
    <Steps/>
    <ProcessSection/>
    <PricingSection/>
    <BlogSection/>
    <Pricecard/>
    <HeaderSection/>
    <CoreValues/>
    <FAQSection/>
    <CTASection/>
    </main>
    </div>
  )
}