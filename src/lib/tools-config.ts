// lib/tools-config.ts
export interface ToolMetadata {
  name: string
  description: string
  image: string
  // Add other SEO fields as needed
}

export const toolMetadata: Record<string, ToolMetadata> = {
  'ip-address': {
    name: 'IP Address Lookup',
    description: 'Free IP address information tool',
    image: '/images/tools/ip-address.jpg'
  },
  'json-formatter': {
    name: 'JSON Formatter',
    description: 'Format and validate JSON data',
    image: '/images/tools/json-formatter.jpg'
  },
  'timestamp-converter': {
    name: 'Timestamp Converter',
    description: 'Convert between timestamps and dates',
    image: '/images/tools/timestamp-converter.jpg'
  },
  'slug-generator': {
    name: 'Slug Generator',
    description: 'Generate URL-friendly slugs',
    image: '/images/tools/slug-generator.jpg'
  }
}