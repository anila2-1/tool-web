'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { toolMetadata } from '@/lib/tools-config'

interface ToolsSidebarProps {
  isMobile?: boolean
}

export default function ToolsSidebar({ isMobile = false }: ToolsSidebarProps) {
  const pathname = usePathname()
  const currentSlug = pathname.split('/').pop()

  return (
    <aside
      className={`
        ${isMobile
          ? 'w-full p-6'
          : 'hidden lg:block w-74 shrink-0 p-5 sticky top-30 max-h-[calc(100vh-5rem)] overflow-y-auto'}
        
      `}
    >
      {/* Header */}
      <h2 className="text-lg font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2">
         <span>All Tools</span>
      </h2>

      <ul className="space-y-2">
        {Object.entries(toolMetadata).map(([slug, tool]) => {
          const isActive = currentSlug === slug

          return (
            <li key={slug}>
              <Link
                href={`/tools/${slug}`}
                className={`
                  group relative block p-3 rounded-xl transition-all duration-200
                  ${isActive
                    ? 'bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 border border-blue-100 hover:shadow-sm'}
                `}
              >
                {/* Active Indicator */}
                {isActive && (
                  <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-white/80" />
                )}

                <div className="font-semibold leading-tight">
                  {tool.name}
                </div>

                <div
                  className={`text-sm mt-0.5 leading-snug ${
                    isActive
                      ? 'text-purple-100'
                      : 'text-gray-500 group-hover:text-gray-600'
                  }`}
                >
                  {tool.description}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
