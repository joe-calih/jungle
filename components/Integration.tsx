import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const integrations = [
    { name: "Shopify", logo: "/img/icon/apple.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "Slack", logo: "/img/icon/canva.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "Notion", logo: "/img/icon/drive.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "Google Ads", logo: "/img/icon/elementor.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "Dropbox", logo: "/img/icon/windows.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "Webflow", logo: "/img/icon/windows.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "Google Analytics", logo: "/img/icon/word.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "Asana", logo: "/placeholder.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "ClickUp", logo: "/placeholder.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "Zapier", logo: "/placeholder.svg", bgColor: "bg-[#f6f6f7]" },
    { name: "Zendesk", logo: "/placeholder.svg", bgColor: "bg-[#f6f6f7]" },
  ]

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Integrate with your entire tech stack
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our integrated partner ecosystem brings all your favorite technology, tools, and datasets together in one platform.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:underline"
        >
          <span>See All</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="grid max-w-5xl grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className={`flex aspect-square items-center justify-center rounded-full ${integration.bgColor} p-4`}
            >
              <Image
                src={integration.logo}
                alt={`${integration.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}