import coursesData from '@/data/courses.json'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import FilteredCourseGrid from '@/components/FilteredCourseGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Molokai Golf Courses — Complete Guide | Hawaii Golf Guide',
  description: 'Golf on Molokai: Ironwood Hills and the Friendly Isle golf scene with prices, access details, and booking tips.',
  alternates: { canonical: '/island/molokai/' },
}

export default function MolokaiPage() {
  const courses = coursesData.courses.filter(c => c.island === 'Molokai')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero - Banner image with overlay */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <img
            src="/images/islands/molokai-banner.jpg"
            alt="Scenic view of Molokai's sea cliffs and coastline, Hawaii"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 py-8 md:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/island" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={20} />
              Back to All Islands
            </Link>
            <h1 className="text-5xl font-bold mb-4 text-white">Molokai</h1>
            <p className="text-xl opacity-90 text-emerald-100">The Friendly Isle</p>
            <p className="text-lg opacity-80 text-emerald-100 mt-2">
              {courses.length} golf courses to explore
            </p>
          </div>
        </div>
      </section>

      {/* Filtered Course Grid with Sidebar */}
      <FilteredCourseGrid courses={courses} islandColor="bg-red-500" />
    </main>
  )
}
