import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, User, UserPlus } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-center text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Choose your level
            </h2>
            <div className="flex space-x-2 rounded-full bg-muted p-1">
              <Button variant="secondary" className="rounded-full bg-primary text-primary-foreground">
                Personal
              </Button>
              <Button variant="ghost" className="rounded-full">
                Enterprise
              </Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="relative overflow-hidden bg-[#e8f4f4] border-none">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="rounded-lg bg-white p-3 shadow-sm">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Social Media</h3>
                <p className="text-center text-muted-foreground">
                  Discover powerful features to boost your productivity. You are always welcome to visit our little den.
                  Professional in their craft! All products were super amazing with strong attention to details, comps and
                  overall vibe.
                </p>
                <Link
                  href="#"
                  className="group flex items-center text-primary hover:text-primary/80"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-[#fdfde8] border-none">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="rounded-lg bg-white p-3 shadow-sm">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Customer Service</h3>
                <p className="text-center text-muted-foreground">
                  Discover powerful features to boost your productivity. You are always welcome to visit our little den.
                  Professional in their craft! All products were super amazing with strong attention to details, comps and
                  overall vibe.
                </p>
                <Link
                  href="#"
                  className="group flex items-center text-primary hover:text-primary/80"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-[#fdf0f0] border-none">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="rounded-lg bg-white p-3 shadow-sm">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Social advertising</h3>
                <p className="text-center text-muted-foreground">
                  Discover powerful features to boost your productivity. You are always welcome to visit our little den.
                  Professional in their craft! All products were super amazing with strong attention to details, comps and
                  overall vibe.
                </p>
                <Link
                  href="#"
                  className="group flex items-center text-primary hover:text-primary/80"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}