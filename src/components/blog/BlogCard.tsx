// components/blog/BlogCard.tsx
import Link from 'next/link'
import type { BlogPost } from '@/types/blog'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-200/50 hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-500 text-sm mb-4">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        {post.excerpt && (
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
        )}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}