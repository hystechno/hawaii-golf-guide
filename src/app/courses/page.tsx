import { Search, MapPin, Filter } from 'lucide-react'
import coursesData from '@/data/courses.json'

const courses = coursesData.courses

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">All Golf Courses</h1>
          <p className="text-emerald-200">{courses.length} courses across Hawaii</p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-white border-b px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border rounded-lg text-sm">
              <option>All Islands</option>
              <option>Oahu</option>
              <option>Maui</option>
              <option>Big Island</option>
              <option>Kauai</option>
            </select>
            <select className="px-4 py-2 border rounded-lg text-sm">
              <option>All Types</option>
              <option>Municipal</option>
              <option>Resort</option>
              <option>Private</option>
            </select>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <a
              key={course.id}
              href={`/courses/${course.id}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-emerald-500 to-teal-600 relative">
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 px-2.5 py-1 rounded text-xs font-medium text-gray-800">
                    {course.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded text-xs font-medium ${
                    course.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    course.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{course.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{course.city}, {course.island}</p>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>Par {course.par}</span>
                  <span className="text-gray-300">|</span>
                  <span>{course.yardage.toLocaleString()} yds</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
