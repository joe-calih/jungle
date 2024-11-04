import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Component() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-[#004D3C] sm:text-5xl xl:text-6xl/none">
                We Are Leading
                <br />
                Digital University
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Enable highly motivating non-cash micropayments and offer in-demand prepaid solutions – with a single connection.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#004D3C] text-white hover:bg-[#004D3C]/90"
                size="lg"
              >
                Download App
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-[#004D3C]"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-[#004D3C]">469K</h3>
                <p className="text-sm text-gray-500">Social followers</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-[#004D3C]">25K+</h3>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-[#004D3C]">756+</h3>
                <p className="text-sm text-gray-500">Project Done</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-[#004D3C]">100+</h3>
                <p className="text-sm text-gray-500">Global branch</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0">
              <svg
                className="h-full w-full"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M400 150C500 250 500 350 400 450C300 550 200 550 100 450C0 350 0 250 100 150C200 50 300 50 400 150Z"
                  fill="#FCD34D"
                />
                <path
                  d="M350 200C425 275 425 350 350 425C275 500 200 500 125 425C50 350 50 275 125 200C200 125 275 125 350 200Z"
                  fill="#EF4444"
                  fillOpacity="0.8"
                />
                <path
                  d="M300 250C350 300 350 350 300 400C250 450 200 450 150 400C100 350 100 300 150 250C200 200 250 200 300 250Z"
                  fill="#10B981"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-10-11-04-2024_10_39_AM-mhW3ZfWEGOpRVxuGxfh975rArqOnG5.png"
                alt="Student sitting on a chair"
                width={600}
                height={600}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}