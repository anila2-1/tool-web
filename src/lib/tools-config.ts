// lib/tools-config.ts
export interface ToolMetadata {
  name: string
  description: string
  // Add other SEO fields as needed
}

export const toolMetadata: Record<string, ToolMetadata> = {
  'ip-address': {
    name: 'IP Address Lookup',
    description: 'Free IP address information tool',
  },
  'json-formatter': {
    name: 'JSON Formatter',
    description: 'Format and validate JSON data',
  },
  'timestamp-converter': {
    name: 'Timestamp Converter',
    description: 'Convert between timestamps and dates',
  },
  'slug-generator': {
    name: 'Slug Generator',
    description: 'Generate URL-friendly slugs',
}
}