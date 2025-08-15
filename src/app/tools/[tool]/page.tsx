// src/app/tools/[tool]/page.tsx
import type { Metadata } from 'next'

import IPAddressTool from '@/components/tools/IPAddressLookup'
import JSONFormatter from '@/components/tools/JSONEditor'
import TimestampConverter from '@/components/tools/TimestampConverter'
import SlugGenerator from '@/components/tools/SlugGenerator'

export const dynamic = 'force-dynamic'

// Apna custom props type
type ToolPageProps = {
  params: {
    tool: string
  }
}

export async function generateMetadata(
  { params }: ToolPageProps
): Promise<Metadata> {
  const toolNameMap: Record<string, string> = {
    'ip-address': 'IP Address Lookup',
    'json-formatter': 'JSON Formatter',
    'timestamp-converter': 'Timestamp Converter',
    'slug-generator': 'Slug Generator'
  }

  const toolName = toolNameMap[params.tool] || 'Developer Tool'
  const description = `Free online ${toolName.toLowerCase()} for developers`

  return {
    title: `${toolName} | Dev Tools`,
    description,
    alternates: {
      canonical: `http://localhost:3000/tools/${params.tool}`
    },
    openGraph: {
      type: 'website',
      title: `${toolName} Tool`,
      description,
      url: `http://localhost:3000/tools/${params.tool}`,
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

export default function ToolPage({ params }: ToolPageProps) {
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
