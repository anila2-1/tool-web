'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface PaginationProps {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export default function Pagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
}: PaginationProps) {
  const searchParams = useSearchParams()

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    return `?${params.toString()}`
  }

  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const delta = 2

    if (currentPage > delta + 1) {
      pages.push(1)
      if (currentPage > delta + 2) pages.push('...')
    }

    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      pages.push(i)
    }

    if (currentPage < totalPages - delta) {
      if (currentPage < totalPages - delta - 1) pages.push('...')
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  const baseBtn =
    'flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400'

  const disabledBtn = 'text-gray-300 cursor-not-allowed'

  return (
    <div className="mt-20 mb-10 flex justify-center">
      <nav className="flex items-center gap-1 rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg shadow-indigo-500/5 px-2 py-2">
        {/* Previous */}
        {hasPrevPage ? (
          <Link
            href={createPageUrl(currentPage - 1)}
            className={`${baseBtn} text-gray-600 hover:text-indigo-600 hover:bg-indigo-50`}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </Link>
        ) : (
          <div className={`${baseBtn} ${disabledBtn}`}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </div>
        )}

        {/* Pages */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((page, i) =>
            page === '...' ? (
              <span
                key={i}
                className="px-3 py-2 text-sm text-gray-400 select-none"
              >
                …
              </span>
            ) : (
              <Link
                key={i}
                href={createPageUrl(page as number)}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  page === currentPage
                    ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/30 scale-105'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {page}
                {page === currentPage && (
                  <span className="absolute inset-0 rounded-xl ring-1 ring-white/40"></span>
                )}
              </Link>
            )
          )}
        </div>

        {/* Next */}
        {hasNextPage ? (
          <Link
            href={createPageUrl(currentPage + 1)}
            className={`${baseBtn} text-gray-600 hover:text-indigo-600 hover:bg-indigo-50`}
          >
            Next
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div className={`${baseBtn} ${disabledBtn}`}>
            Next
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </nav>
    </div>
  )
}
