// components/blog/BlogCard.tsx
import Link from 'next/link'
import type { BlogPost } from '@/types/blog'
import Image from 'next/image'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group relative h-full">
      {/* Outer Glow on Hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                      rounded-2xl blur opacity-0 group-hover:opacity-40 group-hover:blur-sm 
                      transition-all duration-200"></div>
      
      {/* Main Card */}
      <div className="relative h-full flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 
                      group-hover:shadow-2xl group-hover:shadow-indigo-100 
                      group-hover:scale-[1.02] transition-all duration-200 will-change-transform overflow-hidden">
        
        {/* Blog Image */}
        {post.image && (
          <div className="relative w-full h-48 overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-105"
                sizes="(max-width: 758px) 100vw, 33vw"
                priority={false}
              />
            </Link>
          </div>
        )}

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div className="space-y-3">
            {/* Title Clickable */}
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 
                             transition-colors duration-200 line-clamp-2 leading-tight hover:underline">
                {post.title}
              </h2>
            </Link>

            {/* Date */}
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-indigo-600 
            hover:text-indigo-800 font-semibold text-sm mt-6 px-4 py-2 
            rounded-full border border-indigo-200 bg-indigo-50/60 
            hover:bg-indigo-100 transition-all duration-200"
          >
            Read more
            <svg
              className="w-4 h-4 transform translate-x-0 
              group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
