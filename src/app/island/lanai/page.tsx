import coursesData from '@/data/courses.json'
import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lanai Golf Courses | Hawaii Golf Guide',
  description: 'Discover golf courses on Lanai, including the world-class Manele Golf Course at Four Seasons Resort.',
  alternates: { canonical: 'https://hawaiigolf.guide/island/lanai/' },
}

export default function LanaiPage() {
  const courses = coursesData.courses.filter(c => c.island === 'Lanai')

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#0c4a6e] via-[#075985] to-[#0369a1] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            Back to All Islands
          </Link>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{ fontFamily: 'var(--font-dancing-script), cursive' }}
          >
            Lanai Golf Courses
          </h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            {courses.length} exclusive courses on the Pineapple Isle. Including Jack Nicklaus signature designs.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">{course.type}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    course.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    course.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>{course.difficulty}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h2>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <MapPin size={16} />
                  {course.city}
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="bg-emerald-50 text-emerald-800 px-2 py-1 rounded">Par {course.par}</span>
                  <span>{course.yardage?.toLocaleString() || 'N/A'} yds</span>
                </div>
                <a href={`/courses/${course.id}`} className="block w-full text-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 rounded-lg font-medium transition-all">
                  View Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
