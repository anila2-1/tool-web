/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Static Generation
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({
    slug: post.slug
  }))
}

// SEO Metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params // ✅ Await params in Next.js 15+
  const post = await getPostBySlug((await params).slug)
  
  return {
    title: `${post.frontmatter.title} | Tech Blog`,
    description: post.frontmatter.excerpt,
    alternates: {
      canonical: `https://tool-web-zmdw.vercel.app/blog/${(await params).slug}`
    },
    openGraph: {
      type: 'article',
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      publishedTime: post.frontmatter.date,
      url: `https://tool-web-zmdw.vercel.app/blog/${(await params).slug}`,
      
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
    }
  }
}


export default async function PostPage({ params }: PageProps) {
  const { slug } = await params

  try {
    const { content, frontmatter } = await getPostBySlug(slug)

    return (
      <>
        <Navbar />
        <main className="min-h-screen py-16">
          <article className="max-w-3xl mx-auto px-4">
            {/* Title Section */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {frontmatter.title}
              </h1>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </header>

            {/* Content Section */}
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={content} />
            </div>

            {/* Back to Blog Link */}
            <div className="mt-16 border-t border-gray-200 pt-8">
              <Link
                href="/blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </>
    )
  } catch (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The article &quot;{slug}&quot; could not be found.</p>
            <Link
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}