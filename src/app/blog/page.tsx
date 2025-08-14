// app/blog/page.tsx
import { getAllPosts } from '@/lib/mdx'
import Navbar from '@/components/Navbar'
import BlogCard from '@/components/blog/BlogCard'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12 mb-10 ">
        {/* Improved animated header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Blog Insights
            </span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Discover the latest articles and tutorials
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto border border-gray-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No Posts Yet</h2>
            <p className="text-gray-600 mb-4">Start your blogging journey by adding MDX files</p>
            <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
              <code className="block">/posts/your-post.mdx</code>
            </div>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 -z-10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/10 rounded-full filter blur-3xl -z-10" />
      </div>
    </div>
  )
}