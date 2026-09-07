import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Hawaii Golf Courses | Hawaii Golf Guide',
  description: 'Browse every golf course in Hawaii — filter by island, type, and difficulty. Prices, reviews, and booking info for 85+ courses.',
  alternates: { canonical: '/courses/' },
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
