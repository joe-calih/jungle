"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

function YouTubeVideo({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (isPlaying) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )
  }

  return (
    <button
      onClick={handlePlay}
      className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground"
    >
      <Play className="mr-2 h-12 w-12" />
      <span className="text-lg font-semibold">Play Video</span>
    </button>
  )
}


export const metadata = {
  title: 'Services',
  description: 'Get in touch with Your Company Name for inquiries, support, and feedback. We are here to assist you.',
  keywords: ['Contact', 'Support', 'Customer Service', 'Your Company Name'],
  openGraph: {
    title: 'Services',
    description: 'Reach out to us for inquiries or support. Contact Your Company Name today!',
    url: 'https://yourwebsite.com/contact-us',
    images: [
      {
        url: 'https://yourwebsite.com/images/contact-us-banner.jpg',
        width: 800,
        height: 600,
        alt: 'Services Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services',
    description: 'Have any questions? Contact Your Company Name for support and inquiries.',
    images: ['https://yourwebsite.com/images/contact-us-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SmartHomeHero() {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-[1200px] px-4 py-20 text-center">
        <div className="mb-8 inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
          <Badge variant="secondary" className="mr-2 rounded-full px-2 font-normal">
            New Release
          </Badge>
          Get started with our new product release today
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Smart home automation
          <br />
          and security system for you
        </h1>
        <p className="mx-auto mb-8 max-w-[700px] text-muted-foreground md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus fugit ab cumque
          consequuntur pariatur provident? Nulla consequuntur nisi eum!
        </p>
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            <Play className="mr-2 h-4 w-4" /> Watch Demo
          </Button>
        </div>
        <Button variant="link" className="text-lg font-semibold">
          Schedule a call <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <div className="mt-16 aspect-video w-full overflow-hidden rounded-lg">
          <YouTubeVideo videoId="WLVMVCwWJxk" />
        </div>
      </div>
    </div>
  )
}