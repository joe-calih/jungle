import BlogCard from '@/components/BlogCard'
import { getRelatedPosts } from '@/lib/api'
import { Post } from '@/types'

export default async function RelatedPosts({ currentPost }: { currentPost: Post }) {
  const relatedPosts = await getRelatedPosts(currentPost)

  return (
    <section className="mt-12">
      <div className="grid md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}