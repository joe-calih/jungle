import { notFound } from 'next/navigation'
import BlogList from '@/components/BlogList'
import Sidebar from '@/components/Sidebar'
import Pagination from '@/components/Pagination'
import { getAllPosts, getAuthorInfo } from '@/lib/api'
import AuthorInfo from '@/components/AuthorInfo'

export default async function AuthorPage({ params, searchParams }: { params: { name: string }, searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1
  const postsPerPage = 8
  
  try {
    const authorInfo = await getAuthorInfo(decodeURIComponent(params.name))
    const allPosts = await getAllPosts()
    const authorPosts = allPosts.filter(post => post.author.name.toLowerCase() === authorInfo.name.toLowerCase())

    const totalPosts = authorPosts.length
    const totalPages = Math.ceil(totalPosts / postsPerPage)

    const posts = authorPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <AuthorInfo author={authorInfo} postCount={totalPosts} />
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <main className="flex-grow lg:w-[70%]">
              <h2 className="text-3xl font-bold mb-8">Posts by {authorInfo.name}</h2>
              <BlogList posts={posts} />
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                searchParams={{ author: params.name }}
              />
            </main>
            <Sidebar />
          </div>
        </div>
      </div>
    )
  } catch {
    notFound()
  }
}