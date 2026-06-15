import { notFound } from 'next/navigation'
import { MapPin, Phone, Globe, Star } from 'lucide-react'
import coursesData from '@/data/courses.json'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const course = coursesData.courses.find((c: any) => c.id === id)
  if (!course) return { title: 'Course Not Found' }
  return {
    title: `${course.name} | ${course.city}, ${course.island} | Hawaii Golf Guide`,
    description: `${course.name} is a ${course.type.toLowerCase()} golf course on ${course.island}. Par ${course.par}, ${course.yardage?.toLocaleString() || 'N/A'} yards, ${course.difficulty} difficulty.`,
    alternates: { canonical: `https://hawaiigolf.guide/courses/${course.id}/` },
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const course = coursesData.courses.find((c: any) => c.id === id)
  
  if (!course) {
    notFound()
  }

  // JSON-LD structured data (invisible to users)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: course.name,
    description: course.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: course.address,
      addressLocality: course.city,
      addressRegion: 'HI',
      addressCountry: 'US',
    },
    telephone: course.phone,
    url: course.website,
    ...(course.lat && course.lng ? {
      geo: { '@type': 'GeoCoordinates', latitude: course.lat, longitude: course.lng }
    } : {}),
  }

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {course.type}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              course.difficulty === 'Easy' ? 'bg-green-500' :
              course.difficulty === 'Medium' ? 'bg-yellow-500' :
              'bg-red-500'
            }`}>
              {course.difficulty}
            </span>
            {course.featured && (
              <span className="bg-yellow-500 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Star size={14} /> Featured
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold mb-2">{course.name}</h1>
          <p className="text-emerald-100 text-lg">
            {course.city}, {course.island}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">About This Course</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {course.description}
              </p>
              <p className="text-gray-600">
                <strong>Style:</strong> {course.style}
              </p>
            </section>

            {/* Stats */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Course Stats</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">{course.par}</div>
                  <div className="text-sm text-gray-600">Par</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">{course.yardage.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Yards</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">{course.difficulty}</div>
                  <div className="text-sm text-gray-600">Difficulty</div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Features</h2>
              <div className="flex flex-wrap gap-2">
                {course.features.map((feature: string) => (
                  <span key={feature} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            {/* Amenities */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {course.amenities.map((amenity: string) => (
                  <span key={amenity} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Contact */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Contact & Location</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-emerald-600 mt-1" size={20} />
                  <div>
                    <p className="text-gray-800">{course.address}</p>
                    <p className="text-gray-600">{course.city}, {course.island}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-emerald-600" size={20} />
                  <a href={`tel:${course.phone}`} className="text-emerald-600 hover:underline">
                    {course.phone}
                  </a>
                </div>
                {course.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="text-emerald-600" size={20} />
                    <a href={course.website} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline truncate">
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </section>

            {/* Rates */}
            <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Green Fees</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Resident (Weekday)</span>
                  <span className="font-medium">{course.rates.resident_weekday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Resident (Weekend)</span>
                  <span className="font-medium">{course.rates.resident_weekend}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Visitor (Weekday)</span>
                  <span className="font-medium">{course.rates.non_resident_weekday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Visitor (Weekend)</span>
                  <span className="font-medium">{course.rates.non_resident_weekend}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Rates are estimates. Contact course for current pricing.
              </p>
            </section>

            {/* Booking */}
            {course.online_booking && (
              <section className="bg-emerald-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Book a Tee Time</h2>
                <p className="text-gray-600 mb-4">
                  This course accepts online reservations.
                </p>
                <a 
                  href={course.booking_url || '#'}
                  className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Online
                </a>
              </section>
            )}
            
            {!course.online_booking && (
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Booking</h2>
                <p className="text-gray-600">
                  Call the course directly to book your tee time.
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return coursesData.courses.map((course: any) => ({
    id: course.id,
  }))
}
