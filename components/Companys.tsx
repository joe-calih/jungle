import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface Company {
  name: string;
  logo: string;
  quote: string;
  personName: string;
  personTitle: string;
  personAvatar: string;
}

const companies: Company[] = [
  {
    name: "Intercom",
    logo: "/img/company/intercom-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Verkada",
    logo: "/img/company/verkada-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Brex",
    logo: "/img/company/brex-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Notion",
    logo: "/img/company/notion-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Vanta",
    logo: "/img/company/vanta-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Replit",
    logo: "/img/company/replit-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Anthropic",
    logo: "/img/company/anthropic-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Ramp",
    logo: "/img/company/ramp-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Hightouch",
    logo: "/img/company/hightouch-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Mercury",
    logo: "/img/company/mercury-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "dbt",
    logo: "/img/company/dbt-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Hex",
    logo: "/img/company/hex-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Dropbox",
    logo: "/img/company/dropbox-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Deel",
    logo: "/img/company/deel-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Grafana Labs",
    logo: "/img/company/grafana-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Sigma",
    logo: "/img/company/sigma-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "Square",
    logo: "/img/company/square-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
  {
    name: "LaunchDarkly",
    logo: "/img/company/launch-logo.svg",
    quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program.",
    personName: "Josh Kim",
    personTitle: "Head of Growth Programs",
    personAvatar: "/josh-kim-avatar.jpg",
  },
]

export default function Component() {
  return (
    <section className="w-full py-2">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8">
          {companies.map((company) => (
            <CompanyLogo key={company.name} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CompanyLogo({ company }: { company: Company }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center justify-center h-16 cursor-pointer">
          <Image src={company.logo} alt={`${company.name} logo`} width={120} height={40} className="max-w-full max-h-full object-contain" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0 transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-500/20 transform -translate-y-full -mt-16 ">
        <div className="p-4">
          <div className="flex items-left space-x-2 mb-1">
            <Image src={company.logo} alt={`${company.name} logo`} width={100} height={24} />
          </div>
          <p className="text-sm mb-4">&ldquo;{company.quote}&rdquo;</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{company.personName}</p>
              <p className="text-xs text-muted-foreground">{company.personTitle}</p>
            </div>
            <Avatar className="h-10 w-10">
              <AvatarImage src={company.personAvatar} alt={company.personName} />
              <AvatarFallback>{company.personName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}