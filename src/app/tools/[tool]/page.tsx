// app/tools/[tool]/page.tsx
import IPAddressTool from '@/components/tools/IPAddressLookup'
import JSONFormatter from '@/components/tools/JSONEditor'
import TimestampConverter from '@/components/tools/TimestampConverter'
import SlugGenerator from '@/components/tools/SlugGenerator'
import { Metadata } from 'next'

// Enable dynamic rendering
export const dynamic = 'force-dynamic'

// Define proper PageProps matching Next.js expectations
interface PageProps {
  params: {
    tool: string
  }
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}

// SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const toolNameMap: Record<string, string> = {
    'ip-address': 'IP Address Lookup',
    'json-formatter': 'JSON Formatter',
    'timestamp-converter': 'Timestamp Converter',
    'slug-generator': 'Slug Generator'
  }

  const toolName = toolNameMap[params.tool] || 'Developer Tool'
  const description = `Free online ${toolName.toLowerCase()} for developers`
  const baseUrl = 'http://localhost:3000'

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
     
    },
    twitter: {
      card: 'summary_large_image',
      title: `${toolName} Tool`,
      description,
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