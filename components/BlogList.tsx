import BlogCard from '@/components/BlogCard'
import { Post } from '@/types'

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}