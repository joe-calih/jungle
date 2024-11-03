import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Replace with the correct path to your Button and Badge components
import { ArrowRight, Star, Users, Heart, Play } from "lucide-react"; // Import icons you’re using
import Image from "next/image"; // For handling images in Next.js

const HeaderSection: React.FC = () => {
    return (
      <section className="flex items-center justify-center w-full bg-white py-12 md:py-24 lg:py-30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[1200px] space-b-1 text-center">
            <div className="mb-8 inline-flex items-center rounded-full border bg-background px-1 py-1 text-sm">
              <Badge variant="secondary" className="mr-2 rounded-full px-2 font-normal">
                New Release
              </Badge>
              Get started with our new product release today
              <ArrowRight className="mr-2 ml-2 h-4 w-4" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Creative resources{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">automation</span>
              <br />
              better data enrichment
            </h1>
            <p className="mx-auto mb-6 max-w-[700px] text-muted-foreground md:text-xl">
              Help your RevOps & growth teams implement any outreach idea. Maximize data coverage with 75+ enrichment tools & our AI agents. Use intelligence to craft relevant outreach at scale.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-10">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-gray-600">5 rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-gray-600 mr-2" />
                <span className="text-gray-600">15k+ growth community</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-gray-600 mr-2" />
                <span className="text-gray-600">150K+ resources</span>
              </div>
            </div>
            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </div>
            <div className="space-y-4 pt-10">
              <h2 className="text-base font-medium text-stone-600">Trusted by these six companies so far</h2>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {[
                  { name: "Proline", logo: "/img/logos/proline.webp" },
                  { name: "InnovateX", logo: "/img/logos/vertigo.webp" },
                  { name: "DataDrive", logo: "/img/logos/vimeo.webp" },
                  { name: "Webflow", logo: "/img/logos/webflow.webp" },
                  { name: "TechCorp", logo: "/img/logos/behance.webp" },
                  { name: "SmartSystems", logo: "/img/logos/envanto.webp" },
                  { name: "GlobalSolutions", logo: "/img/logos/minty.webp" },
                ].map((company) => (
                  <div key={company.name} className="flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={120}
                      height={60}
                      className="max-w-[120px] max-h-[60px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeaderSection;