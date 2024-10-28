import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Author } from '@/types'

interface AuthorInfoProps {
  author: Author
  postCount: number
}

export default function AuthorInfo({ author, postCount }: AuthorInfoProps) {
  return (
    <Card className="mb-8">
      <CardContent className="flex items-center space-x-4 p-6">
        <Image
          src={author.avatar}
          alt={author.name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{author.name}</h1>
          <p className="text-gray-600 mb-2">{author.description}</p>
          <p className="text-sm text-gray-500">{postCount} {postCount === 1 ? 'post' : 'posts'}</p>
        </div>
      </CardContent>
    </Card>
  )
}