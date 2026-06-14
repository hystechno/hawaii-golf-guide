import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Hawaii Golf Guide",
  description: "Learn about Hawaii Golf Guide, the complete directory of golf courses across the Hawaiian Islands.",
  alternates: { canonical: "https://hawaiigolf.guide/about/" },
};
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4" style={{fontFamily:'var(--font-cormorant),serif'}}>About Hawaii Golf Guide</h1>
          <p className="text-emerald-200 text-lg">Your trusted resource for golf in paradise</p>
        </div>
      </section>
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">Hawaii Golf Guide was created to be the most comprehensive and accurate directory of golf courses across the Hawaiian Islands. We believe every golfer deserves access to detailed, up-to-date information to plan their perfect Hawaii golf experience.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="font-bold text-emerald-800 mb-2">Complete Course Directory</h3>
                <p className="text-gray-600 text-sm">Detailed information on 80+ golf courses across 6 Hawaiian islands.</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="font-bold text-emerald-800 mb-2">Expert Guides & Rankings</h3>
                <p className="text-gray-600 text-sm">In-depth articles, course rankings, and insider tips.</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="font-bold text-emerald-800 mb-2">Trip Planning Tools</h3>
                <p className="text-gray-600 text-sm">Free trip planner, packing checklists, and sample itineraries.</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="font-bold text-emerald-800 mb-2">Honest Reviews</h3>
                <p className="text-gray-600 text-sm">Unbiased course information for every skill level.</p>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-amber-800 text-sm"><strong>Affiliate Disclosure:</strong> Hawaii Golf Guide is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
