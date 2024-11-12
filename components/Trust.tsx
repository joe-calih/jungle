import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Component() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block">
                <span className="text-base text-muted-foreground">— Why choose us?</span>
              </div>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                See why we are trusted the world over
              </h2>
              <p className="text-[16px] text-muted-foreground">
                Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level. Apply to our team and see what we can do together. You&apos;re good enough. Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani pertiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="w-fit text-white">
                Download App
              </Button>
              <Button variant="link" className="w-fit px-0 ">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="flex flex-col justify-center rounded-2xl bg-[#e3f2fd] p-4 text-center">
              <div className="text-4xl font-bold ">469k</div>
              <div className="mt-1 text-sm ">Social followers</div>
            </Card>
            <Card className="flex flex-col justify-center rounded-2xl bg-[#fff3e0] p-4 text-center">
              <div className="text-4xl font-bold ">756+</div>
              <div className="mt-1 text-sm">Project Done</div>
            </Card>
            <Card className="flex flex-col justify-center rounded-2xl bg-[#fff3e0] p-4 text-center">
              <div className="text-4xl font-bold">5000+</div>
              <div className="mt-1 text-sm ">Happy Clients</div>
            </Card>
            <Card className="flex flex-col justify-center rounded-2xl bg-[#e3f2fd] p-4 text-center">
              <div className="text-4xl font-bold ">100%</div>
              <div className="mt-1 text-sm ">Client Satisfaction</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}