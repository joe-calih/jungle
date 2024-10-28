'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchForm() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/blog?search=${encodeURIComponent(search)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
      <Input 
        type="search" 
        placeholder="Search posts..." 
        className="max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit">
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </form>
  )
}