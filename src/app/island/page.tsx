import coursesData from '@/data/courses.json'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hawaii Golf Courses by Island | Hawaii Golf Guide',
  description: 'Browse every golf course in Hawaii by island: Oahu, Maui, Big Island, Kauai, Lanai, and Molokai — with prices, reviews, and booking tips.',
  alternates: { canonical: '/island/' },
}

const islands = [
  {
    slug: 'oahu',
    name: 'Oahu',
    nickname: 'The Gathering Place',
    islandKey: 'Oahu',
    image: '/images/islands/oahu-banner.jpg',
    alt: 'Oahu golf course beneath the Koolau mountains',
    blurb: 'Championship resorts, municipal gems, and the most courses in the state.',
  },
  {
    slug: 'maui',
    name: 'Maui',
    nickname: 'The Valley Isle',
    islandKey: 'Maui',
    image: '/images/islands/maui-banner.jpg',
    alt: 'Maui coastline and golf scenery',
    blurb: 'Kapalua, Wailea, and world-class resort golf with ocean views.',
  },
  {
    slug: 'big-island',
    name: 'Big Island',
    nickname: 'The Island of Hawaiʻi',
    islandKey: 'Big Island',
    image: '/images/islands/big-island-banner.jpg',
    alt: 'Big Island lava coastline and golf scenery',
    blurb: 'Kohala Coast resort courses carved through ancient lava flows.',
  },
  {
    slug: 'kauai',
    name: 'Kauai',
    nickname: 'The Garden Isle',
    islandKey: 'Kauai',
    image: '/images/islands/kauai-banner.jpg',
    alt: 'Kauai lush landscape and golf scenery',
    blurb: 'Princeville cliffs, Poipu Bay, and the Ocean Course at Hokuala.',
  },
  {
    slug: 'lanai',
    name: 'Lanai',
    nickname: 'The Pineapple Isle',
    islandKey: 'Lanai',
    image: '/images/islands/lanai-banner.jpg',
    alt: 'Clifftop golf green above a turquoise bay on Lanai',
    blurb: 'Manele’s clifftop holes above Hulopoe Bay.',
  },
  {
    slug: 'molokai',
    name: 'Molokai',
    nickname: 'The Friendly Isle',
    islandKey: 'Molokai',
    image: '/images/islands/molokai-banner.jpg',
    alt: 'Rural golf fairway with ironwood trees on Molokai',
    blurb: 'Old Hawaii golf at its most laid-back.',
  },
]

export default function IslandIndexPage() {
  const counts = Object.fromEntries(
    islands.map((i) => [
      i.slug,
      coursesData.courses.filter((c) => c.island === i.islandKey).length,
    ])
  )

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0c4a6e] via-[#075985] to-[#0369a1] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{ fontFamily: 'var(--font-dancing-script), cursive' }}
          >
            Hawaii Golf by Island
          </h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            {coursesData.courses.length} courses across six islands — pick your paradise.
          </p>
        </div>
      </section>

      {/* Island Grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {islands.map((island) => (
            <Link
              key={island.slug}
              href={`/island/${island.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={island.image}
                  alt={island.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white">{island.name}</h2>
                  <p className="text-emerald-200 text-sm">{island.nickname}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-3">{island.blurb}</p>
                <p className="text-emerald-700 font-medium text-sm">
                  {counts[island.slug]} courses →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
