// app/blog/page.tsx
import { getAllPosts } from '@/lib/mdx'
import Navbar from '@/components/Navbar'
import BlogCard from '@/components/blog/BlogCard'
import Footer from '@/components/Footer'

import type { Metadata } from "next";

// ✅ SEO metadata for Blog main page
export const metadata: Metadata = {
  title: "Blog Insights",
  description:
    "Discover the latest articles and tutorials",
  keywords: [
    "IP Address",
    "JSON Formatter",
    "Slug Generator",
    "Timestamp Converter",
  ],
  alternates: {
    canonical: "http://localhost:3000/blog",
  },
  openGraph: {
    title: "Blog Insights",
    description:
      "Discover the latest articles and tutorials",
    url: "http://localhost:3000/blog",
    siteName: "Dev Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Insights",
    description:
      "Latest blogs, tutorials, and guides on programming, SEO, and productivity.",
  },
};


export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Animated header with floating elements */}
        <div className="relative text-center mb-16">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200/30 rounded-full filter blur-xl animate-float-slow" />
          <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-200/30 rounded-full filter blur-xl animate-float-medium" />
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 relative z-10">
            <span className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              Blog Insights
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto relative z-10">
            Discover the latest <span className="text-purple-500 font-medium">articles</span> and <span className="text-blue-500 font-medium">tutorials</span>
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md mx-auto border border-gray-100 transform transition-all hover:scale-[1.02] hover:shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">No Posts Yet</h2>
            <p className="text-gray-500 mb-6">Start your blogging journey by adding MDX files</p>
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-200/50 inline-block">
              <code>/posts/your-post.mdx</code>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {posts.map((post) => (
    <BlogCard key={post.slug} post={post} />
  ))}
</div>
        )}

        {/* Floating background elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full filter blur-3xl animate-float-slow" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full filter blur-3xl animate-float-medium" />
          <div className="absolute bottom-1/3 left-1/2 w-80 h-80 bg-gradient-to-bl from-cyan-100/20 to-blue-100/20 rounded-full filter blur-3xl animate-float-fast" />
        </div>
      </div>
      <Footer />
    </div>
  )
}