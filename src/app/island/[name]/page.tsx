import { notFound } from 'next/navigation'
import { MapPin } from 'lucide-react'
import coursesData from '@/data/courses.json'

const islands = [
  { name: 'Oahu', count: 39, color: 'bg-blue-500' },
  { name: 'Maui', count: 15, color: 'bg-green-500' },
  { name: 'Big Island', count: 19, color: 'bg-orange-500' },
  { name: 'Kauai', count: 8, color: 'bg-purple-500' },
  { name: 'Lanai', count: 3, color: 'bg-yellow-500' },
  { name: 'Molokai', count: 1, color: 'bg-red-500' },
]

export default async function IslandPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const islandName = name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ')
  const islandNameKey = islandName === 'Big island' ? 'Big Island' : islandName
  
  const courses = coursesData.courses.filter((c: any) => 
    c.island.toLowerCase() === islandNameKey.toLowerCase()
  )
  
  const island = islands.find(i => i.name.toLowerCase() === islandNameKey.toLowerCase())
  
  if (!island || courses.length === 0) {
    notFound()
  }

  const types = [...new Set(courses.map((c: any) => c.type))]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className={`${island.color} text-white py-16 px-4`}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">{island.name}</h1>
          <p className="text-xl opacity-90">
            {courses.length} golf courses to explore
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 py-2">Filter by type:</span>
          {types.map(type => (
            <button key={type} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors">
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course: any) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border">
              <div className={`${island.color} h-40 flex items-center justify-center opacity-80`}>
                <MapPin className="text-white/50" size={48} />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{course.name}</h3>
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {course.type}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    course.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    course.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>Par {course.par}</span>
                  <span>{course.yardage.toLocaleString()} yds</span>
                </div>
                <a 
                  href={`/courses/${course.id}`}
                  className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export function generateStaticParams() {
  return [
    { name: 'oahu' },
    { name: 'maui' },
    { name: 'big-island' },
    { name: 'kauai' },
    { name: 'lanai' },
    { name: 'molokai' },
  ]
}
