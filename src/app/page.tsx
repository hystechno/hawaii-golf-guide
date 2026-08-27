import coursesData from '@/data/courses.json'
import InteractiveHawaiiMap from '@/components/InteractiveHawaiiMap'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link'

const courses = coursesData.courses
const islandCount = new Set(courses.map(c => c.island)).size

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://3.bp.blogspot.com/-wt0uo1OUUoM/UL9gxr1u4ZI/AAAAAAAA2yA/bNfhkomhs2A/s1600/mauna-kea-golf-course.jpg')`,
            backgroundPosition: 'center bottom'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl mb-4 tracking-wide bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 bg-clip-text text-transparent"
            style={{ 
              fontFamily: 'var(--font-dancing-script), cursive',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 25px rgba(217,119,6,0.3)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
            }}
          >
            Hawaii Golf Guide
          </h1>
          
          <p 
            className="font-[var(--font-cormorant)] text-xl md:text-2xl lg:text-3xl text-amber-100 mb-4 tracking-wide"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Every Golf Course in Paradise
          </p>
          
          <p 
            className="font-[var(--font-cormorant)] text-base md:text-lg text-amber-200/90 mb-8 max-w-2xl mx-auto font-light"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}
          >
            Discover {courses.length} exceptional courses across {islandCount} islands, from championship resorts to hidden municipal gems
          </p>
          
          <SearchBar />
          
          {/* Elegant Stats */}
          <div className="flex justify-center gap-10 text-white">
            <div className="text-center">
              <div className="font-[var(--font-cormorant)] text-5xl font-light mb-1 text-amber-400">
                {courses.length}
              </div>
              <div className="text-sm tracking-widest uppercase text-amber-100/80">Courses</div>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <div className="font-[var(--font-cormorant)] text-5xl font-light mb-1 text-amber-400">
                {islandCount}
              </div>
              <div className="text-sm tracking-widest uppercase text-amber-100/80">Islands</div>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <div className="font-[var(--font-cormorant)] text-5xl font-light mb-1 text-amber-400">
                ∞
              </div>
              <div className="text-sm tracking-widest uppercase text-amber-100/80">Memories</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-[var(--font-cormorant)] text-xl md:text-2xl mb-1 font-semibold text-emerald-800">
            Explore by Island
          </h2>
          <p className="font-[var(--font-cormorant)] text-gray-600 text-sm max-w-xl mx-auto">
            Click on an island to discover golf courses.
          </p>
        </div>
        
        <InteractiveHawaiiMap />
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-[var(--font-cormorant)] text-4xl mb-3 font-semibold text-emerald-800">
            Featured Courses
          </h2>
          <p className="font-[var(--font-cormorant)] text-gray-600 text-xl">
            Exceptional destinations for your Hawaii golf experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.filter(c => c.featured).slice(0, 8).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className="h-40 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
                {course.image_thumb ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url('${course.image_thumb}')`
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="bg-amber-500/90 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
                    {course.type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-gray-800 mb-0.5 group-hover:text-emerald-700 transition-colors leading-tight">
                  {course.name}
                </h3>
                <p className="text-gray-500 text-xs mb-2 italic">{course.city}, {course.island}</p>
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full font-medium">Par {course.par}</span>
                  <span className="text-gray-400">|</span>
                  <span>{course.yardage.toLocaleString()} yds</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                    course.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    course.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-xs line-clamp-2 mb-3">
                  {course.description}
                </p>
                <Link
                  href={`/courses/${course.id}/`}
                  className="block w-full text-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-2 rounded-md font-medium text-sm transition-all shadow-sm hover:shadow-md"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 px-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a5f4a 0%, #0d3b2e 50%, #1a5f4a 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 
            className="text-4xl md:text-5xl mb-6 text-amber-400"
            style={{ fontFamily: 'var(--font-dancing-script), cursive' }}
          >
            Own a Golf Course?
          </h2>
          <p className="font-[var(--font-cormorant)] text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join Hawaii's most comprehensive golf directory. Connect with thousands of golfers planning their perfect Hawaii golf vacation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-xl hover:shadow-2xl"
            >
              List Your Business
            </Link>
            <Link 
              href="/about/"
              className="bg-white/10 backdrop-blur-sm border-2 border-amber-400/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
