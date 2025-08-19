/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { image } from 'framer-motion/client'

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
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  return {
    title: `${post.frontmatter.title} | Tech Blog`,
    description: post.frontmatter.excerpt,
    image: post.frontmatter.image,
    alternates: {
      canonical: `https://tool-web-zmdw.vercel.app/blog/${slug}`
    },
    openGraph: {
      type: 'article',
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      publishedTime: post.frontmatter.date,
      url: `https://tool-web-zmdw.vercel.app/blog/${slug}`,
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
        <main className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <article className="max-w-3xl mx-auto">
            
            {/* Title Section */}
            <header className="mb-10 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug sm:leading-tight">
                {frontmatter.title}
              </h1>
              <div className="flex items-center text-xs sm:text-sm text-gray-500 flex-wrap gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
             <div className="relative group my-6 overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
  {/* <Image
    src={frontmatter.image}
    alt={frontmatter.title}
    width={900}
    height={600}
    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
  /> */}

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-500"></div>
</div>

            </header>

            {/* Content Section */}
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none prose-pre:overflow-x-auto prose-img:rounded-lg prose-img:mx-auto">
              <MDXRemote source={content} />
            </div>

            {/* Back to Blog Link */}
            <div className="mt-12 sm:mt-16 border-t border-gray-200 pt-6 sm:pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center font-medium 
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-purple-500 to-pink-500 
                           hover:from-pink-500 hover:to-purple-500 
                           transition-colors text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
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
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <div className="max-w-md">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Post Not Found
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
              The article &quot;{slug}&quot; could not be found.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
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
