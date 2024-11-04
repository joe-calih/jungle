'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
}

export default function CategoryFilter({ categories, selectedCategory }: CategoryFilterProps) {
  const router = useRouter()

  const handleCategoryClick = (category: string) => {
    if (category === 'All' || category === selectedCategory) {
      router.push('/blog')
    } else {
      router.push(`/blog?category=${encodeURIComponent(category)}`)
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <Button 
          key={category} 
          variant={category === selectedCategory ? "default" : "outline"} 
          size="sm"
          onClick={() => handleCategoryClick(category)}
          className="rounded-full hover:shadow-sm transition-shadow duration-300 text-[14px] p-4"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}