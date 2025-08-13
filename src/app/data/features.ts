import { FiClock, FiGlobe, FiCode, FiLink } from 'react-icons/fi'

export const features = [
  {
    name: 'Timestamp Converter',
    description: 'Convert Unix timestamps to human-readable dates and vice versa',
    icon: FiClock,
    iconClassName: "text-blue-500",
    path: '/tools/timestamp-converter',
    uniqueFact: 'Supports milliseconds precision & multiple timezones',
    bg: 'from-blue-50 to-blue-100'
  },
  {
    name: 'IP Address Lookup',
    icon: FiGlobe,
    iconClassName: "text-purple-500",
    path: '/tools/ip-address',
    uniqueFact: 'Detects VPN/Proxy usage with 90% accuracy',
    bg: 'from-purple-50 to-purple-100'
  },
  {
    name: 'JSON Formatter',
    icon: FiCode,
    iconClassName: "text-emerald-500",
    description: 'Beautify and validate JSON data instantly',
    path: '/tools/json-formatter',
    uniqueFact: 'Handles files up to 10MB with syntax highlighting',
    bg: 'from-emerald-50 to-emerald-100'
  },
  {
    name: 'Slug Generator',
    icon: FiLink,
    iconClassName: "text-amber-500",
    description: 'Create SEO-friendly URL slugs from any text',
    path: '/tools/slug-generator',
    uniqueFact: 'Supports 15+ languages with special character conversion',
    bg: 'from-amber-50 to-amber-100'
  }
]