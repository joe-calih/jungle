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
                <span className="text-sm text-muted-foreground">Why choose us?</span>
                <div className="mt-1 h-[1px] w-12 bg-gray-300" />
              </div>
              <h2 className="text-3xl font-bold leading-tight text-[#00513b] md:text-4xl">
                See why we are trusted the world over
              </h2>
              <p className="text-sm text-muted-foreground">
                Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level. Apply to our team and see what we can do together. You&apos;re good enough. Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani pertiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="w-fit bg-[#00513b] text-white hover:bg-[#00513b]/90">
                Download App
              </Button>
              <Button variant="link" className="w-fit px-0 text-[#00513b]">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="flex flex-col justify-center rounded-2xl bg-[#e3f2fd] p-4 text-center">
              <div className="text-4xl font-bold text-[#00513b]">469k</div>
              <div className="mt-1 text-sm text-[#00513b]">Social followers</div>
            </Card>
            <Card className="flex flex-col justify-center rounded-2xl bg-[#fff3e0] p-4 text-center translate-y-6">
              <div className="text-4xl font-bold text-[#00513b]">756+</div>
              <div className="mt-1 text-sm text-[#00513b]">Project Done</div>
            </Card>
            <Card className="flex flex-col justify-center rounded-2xl bg-[#fff3e0] p-4 text-center">
              <div className="text-4xl font-bold text-[#00513b]">5000+</div>
              <div className="mt-1 text-sm text-[#00513b]">Happy Clients</div>
            </Card>
            <Card className="flex flex-col justify-center rounded-2xl bg-[#e3f2fd] p-4 text-center translate-y-6">
              <div className="text-4xl font-bold text-[#00513b]">100%</div>
              <div className="mt-1 text-sm text-[#00513b]">Client Satisfaction</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}