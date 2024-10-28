import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Eye } from "lucide-react"
import type { Post } from '@/types'

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative">
        <Image src={post.image} alt={post.title} width={500} height={300} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="absolute top-6 left-8">
          <Link href={`/category/${encodeURIComponent(post.category.toLowerCase())}`}>
            <Badge variant="secondary" className="hover:bg-secondary-foreground hover:text-secondary cursor-pointer">
              {post.category}
            </Badge>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Link href={`/blog/${post.slug}`}>
        <CardTitle className="text-lg font-semibold leading-tight hover:text-blue-600 line-clamp-2">
            {post.title}
          </CardTitle>
        </Link>
        <div className="flex items-center justify-between">
        <Link href={`/author/${encodeURIComponent(post.author.name)}`} className="flex items-center gap-2 text-sm text-muted-foreground mb-2 hover:text-blue-600">
            <Avatar className="w-6 h-6">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {post.author.name}
          </Link>
          <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
        </div>
        <p className="mb-4">{post.excerpt}</p>
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
  )
}