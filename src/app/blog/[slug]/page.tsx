/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PageProps) {
  const resolvedParams = await params // ✅ Await params
  const slug = resolvedParams.slug

  try {
    console.log('Received slug:', slug)

    const { content, frontmatter } = await getPostBySlug(slug)

    return (
      <article className="prose mx-auto py-8 px-4">
        <h1>{frontmatter.title}</h1>
        <div className="text-gray-500 mb-8">
          {new Date(frontmatter.date).toLocaleDateString()}
        </div>
        <MDXRemote source={content} />
      </article>
    )
  } catch (error) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <p>Couldn&lsquo;t find: {slug}</p>
      </div>
    )
  }
}
