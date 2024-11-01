import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  searchParams?: {
    search?: string
    category?: string
    author?: string
  }
}

export default function Pagination({ currentPage, totalPages, searchParams }: PaginationProps) {
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams()
    params.set('page', page.toString())
    if (searchParams?.search) params.set('search', searchParams.search)
    if (searchParams?.category) params.set('category', searchParams.category)
    if (searchParams?.author) params.set('author', searchParams.author)
    
    // Determine the base URL based on the presence of author or category
    let baseUrl = '/blog'
    if (searchParams?.author) {
      baseUrl = `/author/${searchParams.author}`
    } else if (searchParams?.category) {
      baseUrl = `/category/${searchParams.category}`
    }
    
    return `${baseUrl}?${params.toString()}`
  }

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <Button
        variant="outline"
        disabled={currentPage === 1}
        asChild
        className="hover:shadow-lg hover:bg-color-white transition-shadow duration-300"
      >
        <Link href={createPageUrl(currentPage - 1)}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Link>
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        asChild
        className="hover:shadow-lg hover:bg-color-white transition-shadow duration-300"
      >
        <Link href={createPageUrl(currentPage + 1)}>
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  )
}