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

    const posts = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug: fileName.replace(/\.mdx$/, '').replace(/\s+/g, '-').toLowerCase(),
          title: data.title || 'Untitled Post',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
          ...data
        }
      })

    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

// Function to get paginated posts
export async function getPaginatedPosts(page: number = 1, postsPerPage: number = 6) {
  const allPosts = await getAllPosts()
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  // Ensure page is within valid range
  const currentPage = Math.max(1, Math.min(page, totalPages))

  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const posts = allPosts.slice(startIndex, endIndex)

  return {
    posts,
    currentPage,
    totalPages,
    totalPosts,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1
  }
}

// Function to get a single post by slug
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  // if (!fs.existsSync(fullPath)) {
  //   throw new Error(`Post not found: ${slug}`)
  // }

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
