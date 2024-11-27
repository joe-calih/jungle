import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Component() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 pt-10 md:pt-14 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                We Are Leading
                <br />
                Society Accelerator
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-[17px]">
                Enable highly motivating non-profits micropayments incentive that aims towards a noble course of positively impacting the society.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pb-5">
              <Button
                className="text-white hover:bg-black/90"
                size="lg"
              >
                Learn More
              </Button>
              <Button
                variant="ghost"
                size="lg"
              >
                Discover
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">469K</h3>
                <p className="text-sm text-gray-500">Social feedback</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">25K+</h3>
                <p className="text-sm text-gray-500">Happy Residents</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">756+</h3>
                <p className="text-sm text-gray-500">Project Done</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-sm text-gray-500">Communities</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative">
              <Image
                src="/img/jungle/1.png"
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