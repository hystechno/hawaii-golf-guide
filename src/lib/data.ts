import coursesData from '@/data/courses.json'

export interface Course {
  id: string
  name: string
  island: string
  city: string
  type: string
  address: string
  phone: string
  website?: string
  style: string
  description: string
  rates: Record<string, string | undefined>
  amenities: string[]
  difficulty: string
  par: number
  yardage: number
  features: string[]
  online_booking: boolean
  booking_url?: string
  status: string
  featured: boolean
  image_hero?: string
  image_thumb?: string
  lat?: number
  lng?: number
  notes?: string
  faq?: { question: string; answer: string }[]
}

export interface IslandStats {
  name: string
  count: number
  image: string
  color: string
}

export const courses: Course[] = coursesData.courses

export function getCourses(): Course[] {
  return courses
}

export const islands: IslandStats[] = [
  { name: 'Oahu', count: courses.filter(c => c.island === 'Oahu').length, image: '/images/oahu.jpg', color: 'bg-blue-500' },
  { name: 'Maui', count: courses.filter(c => c.island === 'Maui').length, image: '/images/maui.jpg', color: 'bg-green-500' },
  { name: 'Big Island', count: courses.filter(c => c.island === 'Big Island').length, image: '/images/bigisland.jpg', color: 'bg-orange-500' },
  { name: 'Kauai', count: courses.filter(c => c.island === 'Kauai').length, image: '/images/kauai.jpg', color: 'bg-purple-500' },
  { name: 'Lanai', count: courses.filter(c => c.island === 'Lanai').length, image: '/images/lanai.jpg', color: 'bg-yellow-500' },
  { name: 'Molokai', count: courses.filter(c => c.island === 'Molokai').length, image: '/images/molokai.jpg', color: 'bg-red-500' },
]

export const totalCourses = courses.length
