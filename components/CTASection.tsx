import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="py-12 border-b border-t">
      <div className="container mx-auto max-w-[1200px] px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 text-gray-600">Sign up now and supercharge your keyword research!</p>
        <Button size="lg">Start Your Free Trial</Button>
      </div>
    </section>
  );
};

export default CTASection;
