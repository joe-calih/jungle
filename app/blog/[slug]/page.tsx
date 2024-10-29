import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock, Eye, MessageSquare, ChevronRight,  Facebook, Twitter, Linkedin } from "lucide-react"
import Sidebar from '@/components/Sidebar'
import RelatedPosts from '@/components/RelatedPosts'
import { getPostBySlug, getAllPosts } from '@/lib/api'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-grow lg:w-[70%]">
            <nav className="flex mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li><Link href="/">Home</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li className="text-foreground">{post.title}</li>
              </ol>
            </nav>

            <article>
              <Image 
                src={post.image} 
                alt={post.title} 
                width={800} 
                height={400} 
                className="w-full h-auto rounded-lg mb-6"
              />

              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <Link href={`/author/${encodeURIComponent(post.author.name)}`} className="font-medium hover:text-blue-600">
                    {post.author.name}
                  </Link>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <span className="text-muted-foreground">{post.date}</span>
                <Separator orientation="vertical" className="h-6" />
                <Link href={`/category/${encodeURIComponent(post.category.toLowerCase())}`} className="font-medium hover:text-blue-600">
                 {post.category}
                </Link>
                <Separator orientation="vertical" className="h-6" />
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
                <Separator orientation="vertical" className="h-6" />
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  {post.views} views
                </span>
              </div>

              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
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
            <RelatedPosts currentPost={post} />
          </main>

          <Sidebar />
        </div>
      </div>
    </div>
  )
}