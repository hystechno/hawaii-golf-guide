// Course data - loaded from master database
export interface Course {
  id: string
  name: string
  island: string
  city: string
  type: 'Municipal' | 'Public' | 'Private' | 'Resort' | 'Military' | 'Semi-Private'
  address: string
  phone: string
  website: string
  style: string
  description: string
  rates: {
    resident_weekday: string
    resident_weekend: string
    non_resident_weekday: string
    non_resident_weekend: string
  }
  amenities: string[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
  par: number
  yardage: number
  features: string[]
  online_booking: boolean
  booking_url: string
  status: 'active' | 'maintenance' | 'closed'
  featured: boolean
}

export interface IslandStats {
  name: string
  count: number
  image: string
  color: string
}

// Async function to load courses
export async function getCourses(): Promise<Course[]> {
  const res = await fetch('/data/courses.json')
  const data = await res.json()
  return data.courses
}

export const islands: IslandStats[] = [
  { name: 'Oahu', count: 39, image: '/images/oahu.jpg', color: 'bg-blue-500' },
  { name: 'Maui', count: 15, image: '/images/maui.jpg', color: 'bg-green-500' },
  { name: 'Big Island', count: 19, image: '/images/bigisland.jpg', color: 'bg-orange-500' },
  { name: 'Kauai', count: 8, image: '/images/kauai.jpg', color: 'bg-purple-500' },
  { name: 'Lanai', count: 3, image: '/images/lanai.jpg', color: 'bg-yellow-500' },
  { name: 'Molokai', count: 1, image: '/images/molokai.jpg', color: 'bg-red-500' },
]

export const totalCourses = 85
