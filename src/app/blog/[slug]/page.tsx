/* eslint-disable @typescript-eslint/no-unused-vars */
// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function PostPage({
  params
}: {
  params: { slug: string }
}) {
  // No need to await params, but keep the async/await for getPostBySlug
  const slug = params.slug // Get slug synchronously
  
  try {
    const { content, frontmatter } = await getPostBySlug(slug)

    return (
      <article className="prose mx-auto py-8 px-4">
        <h1>{frontmatter.title}</h1>
        <div className="text-gray-500 mb-8">
          {new Date(frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        <div className="prose-lg">
          <MDXRemote source={content} />
        </div>
      </article>
    )
  } catch (error) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <p className="text-gray-600 mt-4">
          The post &ldquo;{slug}&ldquo; could not be found.
        </p>
      </div>
    )
  }
}