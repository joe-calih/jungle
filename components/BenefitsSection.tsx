import { Trophy } from "lucide-react"; // Adjust the import path as per your project setup
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center space-y-8 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-full bg-amber-100 p-3">
            <Trophy className="h-6 w-6 text-amber-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why wait to take advantage?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get words for free right now and save money on your content
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex w-full max-w-3xl flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium">10x faster content writing</div>
            <div className="rounded-lg bg-pink-50 px-4 py-2 text-sm font-medium">Save money</div>
            <div className="rounded-lg bg-yellow-50 px-4 py-2 text-sm font-medium">500% less time to write</div>
            <div className="rounded-lg bg-green-50 px-4 py-2 text-sm font-medium">Unlimited possibilities</div>
          </div>
        </div>
        <Button className="bg-indigo-500 hover:bg-indigo-600" size="lg">
          Get Started for Free
        </Button>
      </div>
    </section>
  );
};

export default BenefitsSection;
