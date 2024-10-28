"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      alert("Thank you for subscribing!")
    }, 2000)
  }

  if (isLoading) {
    return <NewsletterSkeleton />
  }

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-flex items-center">
              <Badge variant="outline" className="rounded-full">Stay Updated</Badge>
              <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Subscribe to Our Newsletter</h2>
            <p className="text-gray-500">Get the latest news and exclusive offers directly in your inbox.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">Email address</Label>
                <div className="flex space-x-2">
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow"
                  />
                  <Button type="submit" className="transition-all hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/img/landing/target.png?height=200&width=200"
              alt="SEO Newsletter"
              width={200}
              height={200}
              className="rounded-lg transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsletterSkeleton() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
          <div className="w-full md:w-1/2 space-y-4">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex space-x-2">
              <Skeleton className="h-10 flex-grow" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Skeleton className="h-[200px] w-[200px] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}