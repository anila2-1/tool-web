import { toolMetadata } from '@/lib/tools-config'

export async function generateMetadata({ params }: { params: { tool: string } }) {
  const defaultMetadata = {
    name: 'Developer Tool',
    description: 'Free online development utility',
    image: '/images/tools/default.jpg' // Make sure this exists
  }
  
  const { name, description, image } = toolMetadata[params.tool] || defaultMetadata

  // Ensure image URL is always valid
  const imageUrl = image || defaultMetadata.image
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `http://localhost:3000${imageUrl}`

  return {
    title: `${name} | Dev Tools`,
    description,
    openGraph: {
      title: name,
      description,
      images: [{
        url: fullImageUrl,
        width: 1200,
        height: 630,
        alt: `${name} Tool Preview`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
      images: [fullImageUrl]
    }
  }
}