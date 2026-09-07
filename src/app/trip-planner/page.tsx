import type { Metadata } from "next";
import Link from "next/link";
import { Download, MapPin, Calendar, ClipboardCheck, Luggage } from "lucide-react";

export const metadata: Metadata = {
  title: "FREE Hawaii Golf Trip Planner | Hawaii Golf Guide",
  description: "Download our free Hawaii Golf Trip Planner with island selection guide, 3 sample itineraries, and packing checklist.",
  alternates: { canonical: "/trip-planner/" },
};

export default function TripPlannerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hawaii Golf Trip Planner
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Your complete guide to planning the perfect Hawaii golf vacation — FREE
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <Download className="w-4 h-4" />
            Instant PDF Download
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* What's Inside */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Island Selection Guide</h3>
            <p className="text-sm text-gray-600">
              Compare all 6 Hawaiian islands. Best courses, weather patterns, and travel tips for golfers.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">3 Sample Itineraries</h3>
            <p className="text-sm text-gray-600">
              Budget ($150/day), Luxury ($500+/day), and Mixed options with specific courses and tee times.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <ClipboardCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Packing Checklist</h3>
            <p className="text-sm text-gray-600">
              Essential golf gear, clothing, documents, and Hawaii-specific items you won't want to forget.
            </p>
          </div>
        </div>

        {/* Itinerary Previews */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Itinerary Preview</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-800">Budget Explorer — $150/day</h3>
              <p className="text-sm text-gray-600 mt-1">
                Municipal courses, twilight rates, shared carts. Perfect for the cost-conscious golfer who still wants great Hawaii golf.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Ala Wai GC</span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Hilo Muni</span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Kukuiolono GC</span>
              </div>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-gray-800">Luxury Experience — $500+/day</h3>
              <p className="text-sm text-gray-600 mt-1">
                Championship resort courses, morning tee times, caddies. The ultimate Hawaii golf vacation experience.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">Kapalua Plantation</span>
                <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">Mauna Kea</span>
                <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">Princeville Makai</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-800">Best of Both Worlds — $300/day</h3>
              <p className="text-sm text-gray-600 mt-1">
                Mix of premium public and resort courses. Great value without sacrificing the Hawaii golf experience.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Turtle Bay</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Poipu Bay</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Waikoloa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Packing Checklist Preview */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Packing Checklist Preview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Golf Essentials</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Golf clubs & travel bag
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Golf shoes (waterproof recommended)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Golf gloves (pack extras)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Tees, balls, markers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Rangefinder or GPS watch
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Hawaii Specific</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Reef-safe sunscreen (SPF 50+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Lightweight rain jacket
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Breathable polo shirts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Hat with brim
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Sunglasses (polarized)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Get Your Free Trip Planner</h2>
          <p className="text-emerald-100 mb-6">
            Join 500+ golfers who've planned their perfect Hawaii golf vacation with our guide.
          </p>
          <a
            href="/downloads/hawaii-golf-trip-planner.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Free PDF
          </a>
          <p className="text-xs text-emerald-200 mt-4">
            No spam. Unsubscribe anytime. We'll never share your email.
          </p>
        </div>
      </div>
    </main>
  );
}
