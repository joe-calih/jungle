import BlogList from '@/components/BlogList'
import Sidebar from '@/components/Sidebar'
import Pagination from '@/components/Pagination'
import { getAllPosts, getCategories } from '@/lib/api'
import SearchForm from '@/components/SearchForm'
import CategoryFilter from '@/components/CategoryFilter'

export default async function BlogPage({ searchParams }: { searchParams: { page?: string, search?: string, category?: string } }) {
  const currentPage = Number(searchParams.page) || 1
  const searchQuery = searchParams.search || ''
  const selectedCategory = searchParams.category || ''
  const postsPerPage = 8

  const allPosts = await getAllPosts()
  const categories = await getCategories()

  let filteredPosts = allPosts

  if (searchQuery) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  if (selectedCategory && selectedCategory !== 'All') {
    filteredPosts = filteredPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase())
  }

  const totalPosts = filteredPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  const posts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Landing Intro */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Discover Web Development Insights</h1>
          <p className="text-xl mb-8 text-gray-600">Stay ahead in the world of web development with our expert articles and tutorials.</p>
          <SearchForm />
          <CategoryFilter categories={['All', ...categories]} selectedCategory={selectedCategory || 'All'} />
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          <main className="flex-grow lg:w-[70%]">
            <BlogList posts={posts} />
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              searchParams={{ search: searchQuery, category: selectedCategory }}
            />
          </main>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}