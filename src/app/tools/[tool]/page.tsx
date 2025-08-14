import { toolMetadata } from '@/lib/tools-config'

export async function generateMetadata({ params }: { params: { tool: string } }) {
  const { name, description, image } = toolMetadata[params.tool] || {
    name: 'Developer Tool',
    description: 'Free online development utility',
    // image: '/images/tools/default.jpg'
  }

  return {
    title: `${name} | Dev Tools`,
    description,
    openGraph: {
      title: name,
      description,
      images: [{ url: image, width: 1200, height: 630 }]
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
      images: [image]
    }
  }
}