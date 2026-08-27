'use client';

import { AffiliateDisclosure } from './AffiliateDisclosure';
import { MapPin, Building2, Compass } from 'lucide-react';

interface TravelPayoutsLinksProps {
  city: string;
  island: string;
  courseName: string;
}

// TravelPayouts marker ID - Ono Oahu project
const TP_MARKER = '2867209';

// Booking.com search URL generator
function getBookingUrl(city: string): string {
  const checkin = getFutureDate(30);
  const checkout = getFutureDate(37);
  const dest = encodeURIComponent(`${city}, Hawaii, USA`);
  return `https://www.booking.com/searchresults.html?ss=${dest}&checkin=${checkin}&checkout=${checkout}&group_adults=2&no_rooms=1&aid=${TP_MARKER}`;
}

// Viator activities search URL generator  
function getViatorUrl(island: string): string {
  const dest = encodeURIComponent(island.toLowerCase());
  return `https://www.viator.com/search/${dest}`;
}

// Get future date for booking links
function getFutureDate(daysAhead: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  return date.toISOString().split('T')[0];
}

export function NearbyHotels({ city, island, courseName }: TravelPayoutsLinksProps) {
  if (!city) return null;
  
  const bookingUrl = getBookingUrl(city);
  
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-sm p-6 mb-6">
      <AffiliateDisclosure inline />
      <div className="flex items-center gap-2 mb-3">
        <Building2 className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-800">
          Stay Near {courseName}
        </h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Find hotels and resorts within minutes of the course in {city}
      </p>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
      >
        <MapPin className="w-4 h-4" />
        Find Hotels in {city}
      </a>
      <p className="text-xs text-gray-400 mt-3">
        via Booking.com • Free cancellation on most rooms
      </p>
    </section>
  );
}

export function IslandActivities({ island, courseName }: { island: string; courseName: string }) {
  const viatorUrl = getViatorUrl(island);
  
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg shadow-sm p-6 mb-6">
      <AffiliateDisclosure inline />
      <div className="flex items-center gap-2 mb-3">
        <Compass className="w-5 h-5 text-emerald-600" />
        <h3 className="text-lg font-bold text-gray-800">
          Explore {island}
        </h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Tours, activities, and experiences to round out your golf trip
      </p>
      <a
        href={viatorUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
      >
        <Compass className="w-4 h-4" />
        Discover {island} Activities
      </a>
      <p className="text-xs text-gray-400 mt-3">
        via Viator • Skip-the-line tickets • Local guides
      </p>
    </section>
  );
}

export function TravelPayoutsLinks({ city, island, courseName }: TravelPayoutsLinksProps) {
  return (
    <div className="space-y-6">
      <NearbyHotels city={city} island={island} courseName={courseName} />
      <IslandActivities island={island} courseName={courseName} />
    </div>
  );
}
