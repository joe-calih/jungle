import { notFound } from 'next/navigation'
import BlogList from '@/components/BlogList'
import Sidebar from '@/components/Sidebar'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/api'

export default async function CategoryPage({ params, searchParams }: { params: { name: string }, searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1
  const postsPerPage = 8
  const allPosts = await getAllPosts()
  const categoryPosts = allPosts.filter(post => post.category.toLowerCase() === decodeURIComponent(params.name).toLowerCase())
  
  if (categoryPosts.length === 0) notFound()

  const totalPosts = categoryPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  const posts = categoryPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Posts in {decodeURIComponent(params.name)}</h1>
        <div className="flex flex-col lg:flex-row gap-12">
          <main className="flex-grow lg:w-[70%]">
            <BlogList posts={posts} />
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              searchParams={{ category: params.name }}
            />
          </main>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}