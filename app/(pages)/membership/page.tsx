'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProductLaunchLandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const launchDate = new Date('2024-12-31T00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = launchDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      })

      if (difference < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="mx-auto px-4 py-16 md:py-24 lg:py-32 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Revolutionize Your Workflow
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Introducing ProductX: The all-in-one solution that streamlines your tasks and boosts productivity.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Join the Waitlist
            </Button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/img/?height=400&width=600"
              alt="ProductX Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto px-4 max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Beta Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Johnson',
                role: 'Project Manager',
                content: 'ProductX has transformed how we manage projects. It\'s intuitive and powerful!',
                avatar: 'A',
              },
              {
                name: 'Sarah Lee',
                role: 'Designer',
                content: 'The collaboration features in ProductX are game-changing. Our team\'s productivity has soared!',
                avatar: 'S',
              },
              {
                name: 'Mike Brown',
                role: 'Developer',
                content: 'I\'ve tried many tools, but ProductX stands out with its seamless integration and user-friendly interface.',
                avatar: 'M',
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.name}`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="mx-auto px-4 text-center max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Launching Soon
          </h2>
          <div className="flex justify-center space-x-4 md:space-x-8 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold mb-2">{value}</span>
                <span className="text-sm md:text-base uppercase">{unit}</span>
              </div>
            ))}
          </div>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Get Notified
          </Button>
        </div>
      </section>
    </div>
  )
}