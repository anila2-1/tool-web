// types/blog.d.ts
export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  [key: string]: unknown
}