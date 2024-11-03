import { Badge } from "@/components/ui/badge";
import { Zap, Check } from "lucide-react"; 
import Image from "next/image";

const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <Badge variant="secondary" className="rounded-full space-x-8">
              <Zap className="mr-1 h-3 w-3" />
              Real-time
            </Badge>
            <p className="text-muted-foreground leading-loose">
              Our Team Has Extensive Experience Collaborating With The World Bank On Various Projects, Bringing A Wealth Of Knowledge And Insights To Our Clients.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Competitor keyword analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Long-tail keyword suggestions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Search volume and difficulty metrics</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="space-y-2 rounded-lg bg-muted p-4">
                <div className="text-3xl font-bold">20</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
              <div className="space-y-2 rounded-lg bg-muted p-4">
                <div className="text-3xl font-bold">30K</div>
                <div className="text-sm font-medium">Customers</div>
              </div>
              <div className="space-y-2 rounded-lg bg-muted p-4">
                <div className="text-3xl font-bold">40+</div>
                <div className="text-sm font-medium">Countries Available</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/img/landing/scr_3.png?height=400&width=600"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
