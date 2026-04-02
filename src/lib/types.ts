export interface GolfCourse {
  id: string
  name: string
  island: string
  city: string
  type: 'Municipal' | 'Public' | 'Resort' | 'Private' | 'Military'
  address: string
  phone: string
  website?: string
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
  booking_url?: string
  status: 'active' | 'closed' | 'renovation'
  featured: boolean
}

export interface Island {
  name: string
  count: number
  image: string
  slug: string
}

export interface GolfStore {
  id: string
  name: string
  island: string
  city: string
  address: string
  phone: string
  website?: string
  hours: string
  services: string[]
}
