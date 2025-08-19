// components/blog/BlogCard.tsx
import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import Image from "next/image";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group relative h-full">
      {/* Gradient Glow on Hover */}
      <div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r 
        from-indigo-500 via-purple-500 to-pink-500 opacity-0 
        group-hover:opacity-100 blur-lg transition duration-500"
      ></div>

      {/* Main Card */}
      <div
        className="relative h-full flex flex-col rounded-2xl 
        bg-white/90 backdrop-blur-xl border border-gray-100/70 
        shadow-md group-hover:shadow-2xl group-hover:shadow-indigo-200/40 
        group-hover:scale-[1.03] transition-all duration-500 overflow-hidden"
      >
        {/* Blog Image */}
        {post.image && (
          <div className="relative w-full h-45 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition duration-500"></div>
            <h2
              className="absolute bottom-4 left-4 text-lg sm:text-xl md:text-2xl 
              font-bold text-white drop-shadow-md group-hover:text-indigo-200 
              transition-colors duration-300 line-clamp-2"
            >
              {post.title}
            </h2>
          </div>
        )}

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div className="space-y-3">
            {/* Date */}
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
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
            hover:bg-indigo-100 transition-all duration-300"
          >
            Read more
            <svg
              className="w-4 h-4 transform translate-x-0 
              group-hover:translate-x-1 transition-transform duration-300"
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
  );
}
