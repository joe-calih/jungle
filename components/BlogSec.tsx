import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { getAllPosts } from '@/lib/api'

export default async function BlogSection() {
  const posts = await getAllPosts()
  const displayPosts = posts.slice(0, 3) // Display only the first 3 posts

  return (
    <div className="w-full bg-white pb-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <Card key={post.slug} className="border-none shadow-none">
              <CardHeader className="p-0">
                <div className="bg-gray-100 aspect-video flex items-center justify-center overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 225))}`}
                  />
                </div>
              </CardHeader>
              <CardContent className="px-0 pt-6">
              <Link href={`/blog/${post.slug}`} className="text-black inline-flex items-center hover:underline transition-all duration-300 group-hover:w-full">
                <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                  {post.title}
                </h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="px-0">
                <Link href={`/blog/${post.slug}`} className="text-black inline-flex items-center hover:underline">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mb-12 py-5">
          <Link
  href="/blog"
  className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-black hover:underline transition-colors">
  Explore all posts <ArrowRight className="ml-2 h-4 w-4" />
</Link>

        </div>
      </div>
    </div>
  )
}

// Helper functions for image placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)