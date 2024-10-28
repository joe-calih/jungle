import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import { getLatestPosts } from '@/lib/api'

export default async function Sidebar() {
  const latestPosts = await getLatestPosts()

  const webTools = [
    { name: "Keyword Resource", description: "Find the best keywords for your content", isNew: true },
    { name: "SEO Analyzer", description: "Optimize your website for search engines", isNew: false },
    { name: "Code Formatter", description: "Clean and format your code instantly", isNew: true },
    { name: "Color Palette Generator", description: "Create beautiful color schemes", isNew: false },
  ]

  return (
    <aside className="w-full lg:w-[30%] space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Latest Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {latestPosts.map((post, index) => (
              <li key={index} className="flex items-center gap-4">
                <Image src={post.image} alt={post.title} width={80} height={80} className="rounded-md" />
                <div>
                  <Link href={`/blog/${post.slug}`} className="font-semibold hover:text-blue-600 transition duration-200">
                    {post.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

    
      <Card>
        <CardHeader>
          <CardTitle>Web Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {webTools.map((tool, index) => (
              <li key={index}>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{tool.name}</h3>
                      {tool.isNew && <Badge variant="secondary">New</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Try it now <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Join Our Community</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Stay up-to-date with the latest web development trends, tips, and exclusive content. Join our newsletter today!</p>
          <form className="space-y-4">
            <Input type="email" placeholder="Your email address" />
            <Button className="w-full">
              <Mail className="mr-2 h-4 w-4" /> Subscribe Now
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-2">By subscribing, you agree to our Privacy Policy and consent to receive updates from us.</p>
        </CardContent>
      </Card>

      <Card>
              <CardHeader>
                <CardTitle>Advertisement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-60 flex items-center justify-center">
                  <p className="text-gray-500">Your Ad Here</p>
                </div>
              </CardContent>
            </Card>

    </aside>
  )
}