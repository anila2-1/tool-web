// src/lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

// Function to get all posts
export async function getAllPosts() {
  try {
    // Create posts directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory)
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug: fileName.replace(/\.mdx$/, ''),
          title: data.title || 'Untitled Post',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
          ...data
        }
      })
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

// Function to get a single post by slug
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)

  return {
    content,
    frontmatter: {
      slug,
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      image: data.image || '',
      ...data
    }
  }
}