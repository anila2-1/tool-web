/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params // ✅ Await params in Next.js 15+

  try {
    const { content, frontmatter } = await getPostBySlug(slug)

    return (
      <>
        <Navbar /> {/* ✅ Navbar at top */}
        <main className="min-h-screen bg-gray-50 py-10">
  <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
    {/* Title */}
    <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
      {frontmatter.title}
    </h1>

    {/* Meta info */}
    <div className="text-sm text-gray-500 mb-8 border-b border-gray-200 pb-4">
      Published on {new Date(frontmatter.date).toLocaleDateString()}
    </div>

    {/* Post content */}
    <div className="prose prose-lg prose-headings:mt-8 prose-headings:mb-4 prose-p:leading-relaxed prose-a:text-blue-600 hover:prose-a:underline">
      <MDXRemote source={content} />
    </div>
  </article>
</main>

        <Footer /> {/* ✅ Footer at bottom */}
      </>
    )
  } catch (error) {
    return (
      <>
        <Navbar />
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold">Post Not Found</h1>
          <p>Couldn&lsquo;t find: {slug}</p>
        </div>
        <Footer />
      </>
    )
  }
}
