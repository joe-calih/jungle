import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { Post, Author } from '@/types'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      category: data.category,
      image: data.image,
      readingTime: data.readingTime,
      views: data.views,
      content: contentHtml,
    } as Post
  }))

  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    category: data.category,
    image: data.image,
    readingTime: data.readingTime,
    views: data.views,
    content: contentHtml,
  } as Post
}

export async function getLatestPosts(limit = 3): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.slice(0, limit)
}

export async function getRelatedPosts(currentPost: Post, limit = 2): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts
    .filter(post => post.slug !== currentPost.slug && post.category === currentPost.category)
    .slice(0, limit)
}

export async function getCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const categories = new Set(posts.map(post => post.category))
  return Array.from(categories)
}

export async function getAuthorInfo(name: string): Promise<Author & { postCount: number }> {
  const posts = await getAllPosts()
  const authorPosts = posts.filter(post => post.author.name.toLowerCase() === name.toLowerCase())
  
  if (authorPosts.length === 0) {
    throw new Error(`Author not found: ${name}`)
  }

  const author = authorPosts[0].author
  return {
    ...author,
    postCount: authorPosts.length
  }
}