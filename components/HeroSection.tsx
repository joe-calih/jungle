import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Component() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                We Are Leading
                <br />
                Digital University
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-[17px]">
                Enable highly motivating non-cash micropayments and offer in-demand prepaid solutions – with a single connection.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pb-5">
              <Button
                className="text-white hover:bg-black/90"
                size="lg"
              >
                Download App
              </Button>
              <Button
                variant="ghost"
                size="lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">469K</h3>
                <p className="text-sm text-gray-500">Social followers</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">25K+</h3>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">756+</h3>
                <p className="text-sm text-gray-500">Project Done</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-sm text-gray-500">Global branch</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative">
              <Image
                src="/img/landing/infographics/persona.webp"
                alt="Student sitting on a chair"
                width={600}
                height={400}
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