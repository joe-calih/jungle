import { getAllPosts, getCategories } from '@/lib/api'

export async function BlogData() {
  const allPosts = await getAllPosts()
  const categories = await getCategories()

  return { allPosts, categories }
}