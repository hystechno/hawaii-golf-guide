import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Hawaii Golf Guide",
  description: "Learn about Hawaii Golf Guide, your comprehensive resource for golf courses across the Hawaiian islands.",
  metadataBase: new URL("https://hawaiigolf.guide"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Hawaii Golf Guide",
    description: "Learn about Hawaii Golf Guide, your comprehensive resource for golf courses across the Hawaiian islands.",
    url: "https://hawaiigolf.guide/about",
    siteName: "Hawaii Golf Guide",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Hawaii Golf Guide
        </h1>
        <p className="text-xl text-emerald-600 font-medium mb-8">
          Your Ultimate Resource for Golfing in Paradise
        </p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Story</h2>
          <p className="mb-4">
            Hawaii Golf Guide was created with a simple mission: to make it easy for golfers to discover, compare, and book the perfect Hawaiian golf experience.
          </p>
          <p className="mb-4">
            Born from a passion for both golf and the Aloha State, our platform brings together comprehensive information on <strong>80+ golf courses</strong> across six Hawaiian islands. Whether you&apos;re a visitor planning your dream golf vacation or a kama&apos;aina (local resident) looking for your next round, we&apos;ve got you covered.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What We Offer</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Comprehensive Course Directory</h3>
          <p className="mb-4">Our database includes detailed information on every golf course in Hawaii:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Oahu</strong> - 37 courses from municipal gems to championship resorts</li>
            <li><strong>Maui</strong> - 15 courses including world-famous Kapalua Plantation</li>
            <li><strong>Kauai</strong> - 8 courses featuring stunning oceanfront layouts</li>
            <li><strong>Big Island</strong> - 19 courses with dramatic volcanic terrain</li>
            <li><strong>Lanai</strong> - 3 exclusive resort courses</li>
            <li><strong>Molokai</strong> - 1 authentic Hawaiian experience</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What You&apos;ll Find for Each Course</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Detailed Descriptions</td>
                  <td className="border border-gray-300 px-4 py-2">Course layout, designer, unique features</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Pricing Information</td>
                  <td className="border border-gray-300 px-4 py-2">Green fees, cart fees, kama&apos;aina rates</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Course Stats</td>
                  <td className="border border-gray-300 px-4 py-2">Yardage, par, slope rating, course rating</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Amenities</td>
                  <td className="border border-gray-300 px-4 py-2">Practice facilities, club rental, dining</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Photos</td>
                  <td className="border border-gray-300 px-4 py-2">High-quality images of each course</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Booking Links</td>
                  <td className="border border-gray-300 px-4 py-2">Direct connections to reserve tee times</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">FAQ Sections</td>
                  <td className="border border-gray-300 px-4 py-2">Answers to common questions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">For Golf Tourists</h3>
          <p className="mb-4">Planning a Hawaii golf vacation? We help you:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Compare courses across all islands</li>
            <li>Find courses matching your skill level and budget</li>
            <li>Discover courses near your hotel or resort</li>
            <li>Understand kama&apos;aina rates (local resident discounts)</li>
            <li>Book tee times directly through our partners</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">For Hawaii Residents</h3>
          <p className="mb-4">Kama&apos;aina golfers can:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Find the best local rates</li>
            <li>Discover hidden gem municipal courses</li>
            <li>Stay updated on course conditions and promotions</li>
            <li>Plan island-hopping golf adventures</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p className="mb-4 font-semibold text-emerald-700">
            To be the most comprehensive, accurate, and user-friendly resource for golf in Hawaii.
          </p>
          <p className="mb-4">We believe that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Golf should be accessible to everyone</li>
            <li>Accurate information leads to better experiences</li>
            <li>Supporting local courses strengthens our communities</li>
            <li>Hawaii&apos;s golf offerings deserve to be celebrated</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Make Money</h2>
          <p className="mb-4">Hawaii Golf Guide is free for users. We generate revenue through:</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Display Advertising</h3>
          <p className="mb-4">We partner with advertising networks to show relevant ads. These ads help us maintain and improve the site.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Affiliate Partnerships</h3>
          <p className="mb-4">When you click on certain links (like booking tee times or purchasing golf equipment) and make a purchase, we may earn a commission. This comes at no additional cost to you.</p>
          <p className="mb-4">Our affiliate partners include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Amazon Associates (golf equipment recommendations)</li>
            <li>GolfNow and TeeOff (tee time bookings)</li>
            <li>Various golf travel services</li>
          </ul>
          <p className="mb-4 font-semibold">We only recommend products and services we believe will genuinely help our users.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Direct Partnerships</h3>
          <p className="mb-4">We work directly with select Hawaii golf courses and tourism partners to feature their offerings.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Editorial Standards</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Accuracy Matters</h3>
          <p className="mb-4">We strive to keep all course information accurate and up-to-date. Our team regularly:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Verifies pricing information</li>
            <li>Updates course conditions</li>
            <li>Adds new courses as they open</li>
            <li>Removes courses that have closed</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Independent Reviews</h3>
          <p className="mb-4">Our course descriptions and ratings are independent. We do not accept payment for favorable reviews or higher rankings.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">User Feedback</h3>
          <p className="mb-4">We welcome corrections and updates from golfers, course staff, and industry professionals. <Link href="/contact/" className="text-emerald-600 hover:underline">Contact us</Link> with any information that needs updating.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Meet the Team</h2>
          <p className="mb-4">Hawaii Golf Guide is maintained by a small team of golf enthusiasts and Hawaii residents who are passionate about sharing the best of Aloha State golf.</p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Founder:</strong> Stuart Shimoda</p>
            <p className="mb-2"><strong>Location:</strong> Honolulu, Hawaii</p>
            <p className="mb-2"><strong>Contact:</strong> <a href="mailto:hys.techno@gmail.com" className="text-emerald-600 hover:underline">hys.techno@gmail.com</a></p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Partnerships and Collaborations</h2>
          <p className="mb-4">We&apos;re always looking to partner with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Hawaii golf courses and resorts</li>
            <li>Golf travel companies</li>
            <li>Tourism boards</li>
            <li>Golf equipment brands</li>
            <li>Local golf communities</li>
          </ul>
          <p className="mb-4">Interested in working with us? <Link href="/contact/" className="text-emerald-600 hover:underline">Contact us</Link>.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Stay Connected</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Newsletter:</strong> Subscribe for weekly Hawaii golf updates</li>
            <li><strong>Social Media:</strong> Follow us for course highlights and tips</li>
            <li><strong>Contact:</strong> Reach out with questions or suggestions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Legal Information</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><Link href="/privacy/" className="text-emerald-600 hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms/" className="text-emerald-600 hover:underline">Terms of Service</Link></li>
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank You</h2>
            <p className="mb-4">Mahalo for visiting Hawaii Golf Guide. We&apos;re honored to help you discover the incredible golf experiences Hawaii has to offer.</p>
            <p className="text-xl text-emerald-600 font-medium">Aloha and happy golfing!</p>
          </div>

          <div className="mt-8 text-sm text-gray-500 text-center">
            <p>Last Updated: April 17, 2026</p>
          </div>
        </div>
      </div>
    </main>
  );
}
