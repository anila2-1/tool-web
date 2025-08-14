/* eslint-disable @typescript-eslint/no-unused-vars */
// types/blog.d.ts
export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  [key: string]: unknown
}
// lib/mdx.ts
export async function getPostBySlug(slug: string): Promise<{
  content: string
  frontmatter: {
    title: string
    date: string
    [key: string]: never
  }
}> {
  // ... implementation
}