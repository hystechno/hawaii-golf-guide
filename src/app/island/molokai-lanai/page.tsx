import coursesData from '@/data/courses.json'
import FilteredCourseGrid from '@/components/FilteredCourseGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Molokai & Lanai Golf Courses | Hawaii Golf Guide',
  description: 'Golf on Molokai and Lanai: Ironwood Hills, Manele, and Cavendish with prices, access details, and booking tips.',
  alternates: { canonical: '/island/molokai-lanai/' },
}

export default function MolokaiLanaiPage() {
  const courses = coursesData.courses.filter(c => 
    c.island === 'Molokai' || c.island === 'Lanai'
  )

  const molokaiCount = courses.filter(c => c.island === 'Molokai').length
  const lanaiCount = courses.filter(c => c.island === 'Lanai').length

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero - Banner image with overlay */}
      <section className="relative">
        {/* Banner Image - Full Width */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <img 
            src="/images/islands/molokai-lanai-banner.jpg"
            alt="Molokai and Lanai aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 py-8 md:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-white">Molokai & Lanai</h1>
            <p className="text-xl opacity-90 text-emerald-100">
              The Friendly Isle & The Pineapple Isle
            </p>
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
