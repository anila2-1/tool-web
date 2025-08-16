// components/blog/BlogCard.tsx
import Link from 'next/link'
import type { BlogPost } from '@/types/blog'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group relative h-full">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-all duration-300"></div>
      
      <div className="relative h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group-hover:shadow-xl transition-all duration-300">
        <div className="p-6 h-full flex flex-col">
          <div className="flex-grow">
            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
            {post.excerpt && (
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
            )}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors mt-auto"
          >
            Read more
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}