import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Accessibility, Activity, Upload, Cloud, Lock, Zap, Users, Layout, ArrowRight } from "lucide-react"
import { ReactNode } from 'react'

export default function Component() {
  return (
    <section className="w-full flex items-center justify-center md:py-4 lg:py-4 bg-background text-foreground">
      <div className="container max-w-[1200px] ">
      <header className="text-center mb-16">
              <p className="text-sm font-medium text-gray-600 mb-4">Top-notch Craft</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Shape tomorrow</h1>
              <p className="text-xl text-gray-600 mb-12">Join us to build flawless web solutions.</p>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">Boost Revenue</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">Higher Engagement</span>
                </div>
                <div className="flex items-center">
                  <Layout className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">Stunning Layouts</span>
                </div>
              </div>
            </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Code className="h-6 w-6" />}
            title="Setting on Auto"
            description="Automate everything from lead qualification to setting meetings with our product."
          />
          <FeatureCard
            icon={<Accessibility className="h-6 w-6" />}
            title="Easy To Customize"
            description="We tailor to your unique needs, integrating seamlessly with your workflow."
          />
          <FeatureCard
            icon={<Activity className="h-6 w-6" />}
            title="Scale with Data"
            description="Gain valuable insights into your conversions rates via 30+ metrics."
          />
          <FeatureCard
            icon={<Upload className="h-6 w-6" />}
            title="Quick Deployment"
            description="Our deployments require no technical expertise or lengthy setup processes."
          />
          <FeatureCard
            icon={<Cloud className="h-6 w-6" />}
            title="Cloud based access"
            description="The cloud offers easy setup, high availability and lower to maintenance costs."
          />
          <FeatureCard
            icon={<Lock className="h-6 w-6" />}
            title="Enterprise Security"
            description="Sensitive client data is handled with enterprise protection measures."
          />
        </div>
        <div className="flex justify-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book a Call<ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-card relative hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-base">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}