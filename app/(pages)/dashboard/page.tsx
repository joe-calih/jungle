import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Eye, Mail, ExternalLink, ChevronRight, MessageSquare, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: 'Dashboard',
  description: 'Get in touch with Your Company Name for inquiries, support, and feedback. We are here to assist you.',
  keywords: ['Contact', 'Support', 'Customer Service', 'Your Company Name'],
  openGraph: {
    title: 'Dashboard',
    description: 'Reach out to us for inquiries or support. Contact Your Company Name today!',
    url: 'https://yourwebsite.com/contact-us',
    images: [
      {
        url: 'https://yourwebsite.com/images/contact-us-banner.jpg',
        width: 800,
        height: 600,
        alt: 'Contact Us Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard',
    description: 'Have any questions? Contact Your Company Name for support and inquiries.',
    images: ['https://yourwebsite.com/images/contact-us-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function SinglePostPage() {
  const currentPost = {
    title: "Understanding React Hooks: A Comprehensive Guide",
    image: "/img/apple.webp?height=400&width=800&text=React+Hooks",
    author: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40&text=JD"
    },
    date: "2023-05-15",
    category: "React",
    readingTime: "10 min",
    views: 5432,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  const latestPosts = [
    { title: "Introduction to Next.js", date: "2023-05-20", image: "/placeholder.svg?height=80&width=80&text=Next.js" },
    { title: "State Management with Redux", date: "2023-05-18", image: "/placeholder.svg?height=80&width=80&text=Redux" },
    { title: "Building Responsive Layouts", date: "2023-05-16", image: "/placeholder.svg?height=80&width=80&text=CSS" },
  ]

  const webTools = [
    { name: "Keyword Resource", description: "Find the best keywords for your content", isNew: true },
    { name: "SEO Analyzer", description: "Optimize your website for search engines", isNew: false },
    { name: "Code Formatter", description: "Clean and format your code instantly", isNew: true },
    { name: "Color Palette Generator", description: "Create beautiful color schemes", isNew: false },
  ]

  const relatedPosts = [
    {
      title: "Advanced React Patterns",
      excerpt: "Explore advanced React patterns to build more efficient and maintainable components.",
      date: "2023-05-10",
      image: "/img/apple.webp?height=300&width=500&text=Advanced+React",
      readingTime: "8 min",
      views: 3210,
      category: "React",
    },
    {
      title: "React Performance Optimization",
      excerpt: "Learn techniques to optimize your React applications for better performance.",
      date: "2023-05-05",
      image: "/img/chatgpt.webp?height=300&width=500&text=React+Performance",
      readingTime: "12 min",
      views: 4567,
      category: "React",
    },
  ]

  const tableOfContents = [
    { title: "Introduction to React Hooks", id: "introduction" },
    { title: "Types of React Hooks", id: "types-of-hooks" },
    { title: "Best Practices for Using Hooks", id: "best-practices" },
    { title: "Conclusion", id: "conclusion" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-width image with meta section */}
      <div className="relative w-full h-[60vh]">
        <Image 
          src={currentPost.image} 
          alt={currentPost.title} 
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="max-w-[1200px]  mx-auto w-full">
            <h1 className="text-4xl font-bold mb-4 text-white">{currentPost.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={currentPost.author.avatar} alt={currentPost.author.name} />
                  <AvatarFallback>{currentPost.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{currentPost.author.name}</span>
              </div>
              <Separator orientation="vertical" className="h-6 bg-white/50" />
              <span>{currentPost.date}</span>
              <Separator orientation="vertical" className="h-6 bg-white/50" />
              <span className="rounded-full">{currentPost.category}</span>
              <Separator orientation="vertical" className="h-6 bg-white/50" />
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {currentPost.readingTime}
              </span>
              <Separator orientation="vertical" className="h-6 bg-white/50" />
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {currentPost.views} views
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1230px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-grow lg:w-[70%]">
            {/* Breadcrumbs */}
            <nav className="flex mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li><Link href="/">Home</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li className="text-foreground">{currentPost.title}</li>
              </ol>
            </nav>

            <article>
              {/* Table of Contents */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Table of Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <Link href={`#${item.id}`} className="text-blue-600 hover:underline">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Post Content */}
              <div className="prose max-w-none">
                <h2 id="introduction">Introduction to React Hooks</h2>
                <p>{currentPost.content}</p>
                <h2 id="types-of-hooks">Types of React Hooks</h2>
                <h3>useState</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h3>useEffect</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h2 id="best-practices">Best Practices for Using Hooks</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h2 id="conclusion">Conclusion</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </article>

            {/* Social Share */}
            <div className="mt-8 flex justify-center space-x-4">
              <Button variant="outline">
                <Facebook className="mr-2 h-4 w-4" />
                Share on Facebook
              </Button>
              <Button variant="outline">
                <Twitter className="mr-2 h-4 w-4" />
                Share on Twitter
              </Button>
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                Share on LinkedIn
              </Button>
            </div>

            {/* Comment Section Button */}
            <div className="mt-8 flex justify-center">
              <Button className="w-auto px-8">
                <MessageSquare className="mr-2 h-4 w-4" />
                View Comments
              </Button>
            </div>

            {/* Related Posts */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((post, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <Image src={post.image} alt={post.title} width={500} height={300} className="w-full h-48 object-cover rounded-t-lg" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="mb-2">{post.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                      <p className="mb-4">{post.excerpt}</p>
                      <Badge variant="secondary" className="rounded-full">{post.category}</Badge>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {post.readingTime}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
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
                        <h3 className="font-semibold">{post.title}</h3>
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
                  <input type="email" placeholder="Your email address" className="w-full px-3 py-2 border rounded-md" />
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
        </div>
      </div>
    </div>
  )
}