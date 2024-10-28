export interface Author {
  name: string
  avatar: string
  description: string
}

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: Author
  category: string
  image: string
  readingTime: string
  views: number
}
