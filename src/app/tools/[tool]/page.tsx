// app/tools/[tool]/page.tsx
import IPAddressTool from '@/components/tools/IPAddressLookup'
import JSONFormatter from '@/components/tools/JSONEditor'
import TimestampConverter from '@/components/tools/TimestampConverter'
import SlugGenerator from '@/components/tools/SlugGenerator'

// Enable dynamic rendering
export const dynamic = 'force-dynamic'

interface PageProps {
  params: { tool: string }
}

// SEO Metadata
export async function generateMetadata({ params }: PageProps) {
  const toolNameMap: Record<string, string> = {
    'ip-address': 'IP Address Lookup',
    'json-formatter': 'JSON Formatter',
    'timestamp-converter': 'Timestamp Converter',
    'slug-generator': 'Slug Generator'
  }

  const toolName = toolNameMap[params.tool] || 'Developer Tool'
  const description = `Free online ${toolName.toLowerCase()} for developers`
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  const imageUrl = `${baseUrl}/images/tools/${params.tool}.jpg`

  return {
    title: `${toolName} | Dev Tools`,
    description,
    alternates: {
      canonical: `${baseUrl}/tools/${params.tool}`
    },
    openGraph: {
      type: 'website',
      title: `${toolName} Tool`,
      description,
      url: `${baseUrl}/tools/${params.tool}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${toolName} Tool Preview`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${toolName} Tool`,
      description,
      images: [imageUrl]
    },
    robots: {
      index: false,
      follow: true
    }
  }
}

export default function ToolPage({ params }: PageProps) {
  const tool = params.tool
  
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