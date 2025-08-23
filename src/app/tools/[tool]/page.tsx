// src/app/tools/[tool]/page.tsx
import type { Metadata } from 'next'

import IPAddressTool from '@/components/tools/IPAddressLookup'
import JSONFormatter from '@/components/tools/JSONEditor'
import TimestampConverter from '@/components/tools/TimestampConverter'
import SlugGenerator from '@/components/tools/SlugGenerator'

export const dynamic = 'force-dynamic'

// ✅ Props type
interface ToolPageProps {
  params: Promise<{ tool: string }>
}

// ✅ Metadata generator
export async function generateMetadata(
  { params }: ToolPageProps
): Promise<Metadata> {
  const { tool } = await params

  // Har tool ka apna name aur description
  const toolMeta: Record<string, { title: string; description: string }> = {
    'ip-address': {
      title: 'IP Address Lookup Tool',
      description: 'Find your public IP address and get detailed IP information instantly.'
    },
    'json-formatter': {
      title: 'JSON Formatter & Editor',
      description: 'Format, validate, and edit your JSON data with our free online JSON Formatter.'
    },
    'timestamp-converter': {
      title: 'Unix Timestamp Converter',
      description: 'Convert between Unix timestamps and human-readable dates instantly.'
    },
    'slug-generator': {
      title: 'AI Slug Generator Tool',
      description: 'Generate SEO-friendly slugs for your blog posts, products, or websites instantly.'
    }
  }

  const meta = toolMeta[tool] || {
    title: 'Developer Tools',
    description: 'Free online tools for developers including JSON, IP, Slug Generator and more.'
  }

  return {
    title: `${meta.title} | Dev Tools`,
    description: meta.description,
    alternates: {
      canonical: `http://localhost:3000/tools/${tool}`
    },
    openGraph: {
      type: 'website',
      title: meta.title,
      description: meta.description,
      url: `http://localhost:3000/tools/${tool}`,
      siteName: 'Dev Tools & Blog',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,   // ✅ Google ab crawl karega
      follow: true
    }
  }
}

// ✅ Page renderer
export default async function ToolPage({ params }: ToolPageProps) {
  const { tool } = await params

  return (
    <div className="tool-container">
      {tool === 'ip-address' && <IPAddressTool />}
      {tool === 'json-formatter' && <JSONFormatter />}
      {tool === 'timestamp-converter' && <TimestampConverter />}
      {tool === 'slug-generator' && <SlugGenerator />}
      {!['ip-address', 'json-formatter', 'timestamp-converter', 'slug-generator'].includes(tool) && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold">Tool Not Found</h2>
          <p>No tool exists with name: {tool}</p>
        </div>
      )}
    </div>
  )
}
