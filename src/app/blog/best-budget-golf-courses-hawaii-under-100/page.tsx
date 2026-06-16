import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Budget Golf Courses in Hawaii: Play for Under $100 | 2026",
  description: "32 affordable golf courses in Hawaii under $100. Municipal gems from $28, public courses with twilight rates, and money-saving tips for your Hawaii golf vacation.",
  keywords: "cheap golf Hawaii, affordable golf courses Hawaii, budget golf Hawaii, municipal golf Hawaii, Hawaii golf under $100",
  openGraph: {
    title: "Best Budget Golf Courses in Hawaii: Play for Under $100",
    description: "32 affordable golf courses in Hawaii under $100. From $28 municipal gems to twilight deals.",
    url: "https://hawaiigolf.guide/blog/best-budget-golf-courses-hawaii-under-100/",
    images: [{ url: "https://hawaiigolf.guide/images/blog/budget-golf-hawaii.jpg" }],
  },
  alternates: { canonical: "https://hawaiigolf.guide/blog/best-budget-golf-courses-hawaii-under-100/" },
};

export default function BudgetGolfPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/blog/budget-golf-hawaii.jpg"
          alt="Affordable Hawaiian golf course at sunset with ocean views"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              Budget Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Best Budget Golf Courses in Hawaii
            </h1>
            <p className="text-emerald-200 text-lg md:text-xl max-w-2xl">
              32 courses under $100 — from $28 municipal gems to twilight steals. Play paradise without breaking the bank.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Think golfing in Hawaii means spending $300+ per round? Think again. The islands are home to 
            <strong> 32 golf courses where you can play for under $100</strong>, including municipal courses 
            that start as low as $28. You don't need a resort budget to experience world-class golf in paradise.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In this guide, we break down the best affordable golf courses on every Hawaiian island, 
            share money-saving strategies locals use, and show you exactly how much you can expect to pay.
          </p>
        </div>

        {/* Quick Answer Box - AEO */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-emerald-800 mb-4">Quick Answer: What's the Cheapest Golf in Hawaii?</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Cheapset round:</strong> <Link href="/courses/oahu-001/" className="text-emerald-600 hover:underline">Ala Wai Golf Course</Link> (Oahu) — $28 for residents, $86 for visitors</li>
            <li><strong>Best value public:</strong> <Link href="/courses/oahu-005/" className="text-emerald-600 hover:underline">Ewa Villages Golf Course</Link> (Oahu) — $28-$86</li>
            <li><strong>Best budget on Maui:</strong> <Link href="/courses/maui-008/" className="text-emerald-600 hover:underline">Waiehu Golf Course</Link> — typically under $60</li>
            <li><strong>Best budget on Big Island:</strong> <Link href="/courses/bi-005/" className="text-emerald-600 hover:underline">Hilo Municipal Golf Course</Link> — under $50</li>
            <li><strong>Pro tip:</strong> Book twilight tee times (after 2-3pm) for 30-50% off regular rates</li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-gray-600">
            <li><a href="#municipal" className="text-emerald-600 hover:underline">1. Municipal Courses: Hawaii's Best-Kept Secret ($28-$86)</a></li>
            <li><a href="#public" className="text-emerald-600 hover:underline">2. Public Courses Under $100 (With the Right Timing)</a></li>
            <li><a href="#island" className="text-emerald-600 hover:underline">3. Best Budget Courses by Island</a></li>
            <li><a href="#twilight" className="text-emerald-600 hover:underline">4. The Twilight Hack: Save 50% on Any Course</a></li>
            <li><a href="#kamaaina" className="text-emerald-600 hover:underline">5. Kama'aina Rates: How Locals Save</a></li>
            <li><a href="#tips" className="text-emerald-600 hover:underline">6. 7 Money-Saving Tips for Hawaii Golf</a></li>
          </ol>
        </div>

        {/* Section 1: Municipal */}
        <section id="municipal" className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            Municipal Courses: Hawaii's Best-Kept Secret
          </h2>
          <p className="text-gray-600 mb-4">
            Hawaii's 8 municipal golf courses offer the best value in the islands. Maintained by county governments, 
            these courses deliver solid conditioning at a fraction of resort prices.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Course</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Island</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Par</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Est. Visitor Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3"><Link href="/courses/oahu-001/" className="text-emerald-600 hover:underline font-medium">Ala Wai Golf Course</Link></td>
                  <td className="p-3 text-gray-600">Oahu (Honolulu)</td>
                  <td className="p-3 text-gray-600">70</td>
                  <td className="p-3 font-medium text-emerald-700">$28-$86</td>
                </tr>
                <tr>
                  <td className="p-3"><Link href="/courses/oahu-005/" className="text-emerald-600 hover:underline font-medium">Ewa Villages Golf Course</Link></td>
                  <td className="p-3 text-gray-600">Oahu (Ewa Beach)</td>
                  <td className="p-3 text-gray-600">73</td>
                  <td className="p-3 font-medium text-emerald-700">$28-$86</td>
                </tr>
                <tr>
                  <td className="p-3"><Link href="/courses/oahu-012/" className="text-emerald-600 hover:underline font-medium">Kahuku Golf Course</Link></td>
                  <td className="p-3 text-gray-600">Oahu (Kahuku)</td>
                  <td className="p-3 text-gray-600">72</td>
                  <td className="p-3 font-medium text-emerald-700">Under $60</td>
                </tr>
                <tr>
                  <td className="p-3"><Link href="/courses/oahu-024/" className="text-emerald-600 hover:underline font-medium">Pali Golf Course</Link></td>
                  <td className="p-3 text-gray-600">Oahu (Kaneohe)</td>
                  <td className="p-3 text-gray-600">72</td>
                  <td className="p-3 font-medium text-emerald-700">Under $60</td>
                </tr>
                <tr>
                  <td className="p-3"><Link href="/courses/oahu-033/" className="text-emerald-600 hover:underline font-medium">West Loch Golf Course</Link></td>
                  <td className="p-3 text-gray-600">Oahu (Ewa Beach)</td>
                  <td className="p-3 text-gray-600">72</td>
                  <td className="p-3 font-medium text-emerald-700">Under $60</td>
                </tr>
                <tr>
                  <td className="p-3"><Link href="/courses/maui-008/" className="text-emerald-600 hover:underline font-medium">Waiehu Golf Course</Link></td>
                  <td className="p-3 text-gray-600">Maui (Wailuku)</td>
                  <td className="p-3 text-gray-600">72</td>
                  <td className="p-3 font-medium text-emerald-700">Under $60</td>
                </tr>
                <tr>
                  <td className="p-3"><Link href="/courses/kauai-002/" className="text-emerald-600 hover:underline font-medium">Wailua Golf Course</Link></td>
                  <td className="p-3 text-gray-600">Kauai (Lihue)</td>
                  <td className="p-3 text-gray-600">72</td>
                  <td className="p-3 font-medium text-emerald-700">Under $60</td>
                </tr>
                <tr>
                  <td className="p-3"><Link href="/courses/bi-005/" className="text-emerald-600 hover:underline font-medium">Hilo Municipal Golf Course</Link></td>
                  <td className="p-3 text-gray-600">Big Island (Hilo)</td>
                  <td className="p-3 text-gray-600">71</td>
                  <td className="p-3 font-medium text-emerald-700">Under $50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Public Under $100 */}
        <section id="public" className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            Public Courses Under $100 (With the Right Timing)
          </h2>
          <p className="text-gray-600 mb-4">
            Many public courses in Hawaii have regular rates above $100, but offer twilight, early-bird, or 
            weekday specials that drop well below that threshold.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2"><Link href="/courses/oahu-002/" className="text-emerald-600 hover:underline">Bay View Golf Park</Link></h3>
              <p className="text-sm text-gray-600">Oahu (Kaneohe) — Par 60</p>
              <p className="text-sm text-emerald-700 font-medium mt-1">Early bird: $33 | Twilight: $33 | Ladies Day: $30</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2"><Link href="/courses/oahu-003/" className="text-emerald-600 hover:underline">Coral Creek Golf Course</Link></h3>
              <p className="text-sm text-gray-600">Oahu (Ewa Beach) — Par 72</p>
              <p className="text-sm text-emerald-700 font-medium mt-1">Twilight: $65 | Super twilight: $25-45</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2"><Link href="/courses/oahu-006/" className="text-emerald-600 hover:underline">Hawaii Country Club</Link></h3>
              <p className="text-sm text-gray-600">Oahu (Wahiawa) — Par 72</p>
              <p className="text-sm text-emerald-700 font-medium mt-1">$30-50 (new lower rates)</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2"><Link href="/courses/oahu-011/" className="text-emerald-600 hover:underline">Honolulu Country Club</Link></h3>
              <p className="text-sm text-gray-600">Oahu (Honolulu) — Semi-Private</p>
              <p className="text-sm text-emerald-700 font-medium mt-1">Weekday specials under $100</p>
            </div>
          </div>
        </section>

        {/* Section 3: By Island */}
        <section id="island" className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            Best Budget Courses by Island
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Oahu — Budget Golf Capital (17 courses under $100)</h3>
              <p className="text-gray-600 text-sm">
                Oahu has the most affordable golf of any island. From Ala Wai's $28 resident rate to twilight 
                deals at Coral Creek, budget golfers have endless options. 
                <Link href="/island/oahu/" className="text-emerald-600 hover:underline ml-1">See all Oahu courses &rarr;</Link>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Big Island — Volcanoes & Value (6 courses under $100)</h3>
              <p className="text-gray-600 text-sm">
                Hilo Municipal leads the pack at under $50. Waikoloa Village and Makalei Golf Club also 
                offer excellent value with unique volcanic terrain.
                <Link href="/island/big-island/" className="text-emerald-600 hover:underline ml-1">See all Big Island courses &rarr;</Link>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Maui — Limited but Worth It (3 courses under $100)</h3>
              <p className="text-gray-600 text-sm">
                Waiehu Golf Course is Maui's best budget option. Kahili Golf Course and Maui Nui Golf Club 
                offer twilight specials that can drop below $100.
                <Link href="/island/maui/" className="text-emerald-600 hover:underline ml-1">See all Maui courses &rarr;</Link>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Kauai — Garden Isle Gems (2 courses under $100)</h3>
              <p className="text-gray-600 text-sm">
                Wailua Golf Course (municipal) and Puakea Golf Course offer the best value on Kauai. 
                Both provide stunning tropical scenery.
                <Link href="/island/kauai/" className="text-emerald-600 hover:underline ml-1">See all Kauai courses &rarr;</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Twilight */}
        <section id="twilight" className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            The Twilight Hack: Save 30-50% on Any Course
          </h2>
          <p className="text-gray-600 mb-4">
            The single best money-saving strategy in Hawaii golf is booking <strong>twilight tee times</strong>. 
            Most courses define twilight as starting between 1:30pm and 3:30pm, depending on the season.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-4">
            <h3 className="font-bold text-amber-800 mb-3">How Much Can You Save?</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Coral Creek (Oahu):</strong> $125 regular → $65 twilight (48% off)</li>
              <li><strong>Hawaii Prince (Oahu):</strong> $179 regular → $69 twilight walk (61% off)</li>
              <li><strong>Ko Olina (Oahu):</strong> $250 regular → $150 twilight (40% off)</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              In Hawaii's warm climate, afternoon rounds are just as enjoyable — and you get sunset views.
            </p>
          </div>
        </section>

        {/* Section 5: Kama'aina */}
        <section id="kamaaina" className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            Kama'aina Rates: How Locals Save
          </h2>
          <p className="text-gray-600 mb-4">
            Most Hawaii golf courses offer <strong>Kama'aina (local resident) rates</strong> that are 
            30-60% below visitor prices. To qualify, you need a Hawaii state ID.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4">
              <h4 className="font-bold text-emerald-800 mb-2">Ala Wai (Oahu)</h4>
              <p className="text-sm text-gray-600">Resident: $28 | Visitor: $86</p>
              <p className="text-sm font-bold text-emerald-700">You save: $58 (67%)</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <h4 className="font-bold text-emerald-800 mb-2">Hawaii Kai (Oahu)</h4>
              <p className="text-sm text-gray-600">Resident: $53-73 | Visitor: $160-170</p>
              <p className="text-sm font-bold text-emerald-700">You save: $100+ (60%+)</p>
            </div>
          </div>

          <p className="text-gray-600 mt-4 text-sm">
            Visiting for an extended stay? Some courses offer <strong>multi-round passes</strong> that bring 
            the per-round cost down significantly. Ask the pro shop about 5-round or 10-round packages.
          </p>
        </section>

        {/* Section 6: Tips */}
        <section id="tips" className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            7 Money-Saving Tips for Hawaii Golf
          </h2>

          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
              <div>
                <h4 className="font-bold text-gray-800">Book twilight tee times</h4>
                <p className="text-gray-600 text-sm">Save 30-60% by playing after 2-3pm. Sunset views are a bonus.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
              <div>
                <h4 className="font-bold text-gray-800">Play municipal courses</h4>
                <p className="text-gray-600 text-sm">8 municipals across the islands, starting at $28. Same Hawaiian scenery, fraction of the price.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
              <div>
                <h4 className="font-bold text-gray-800">Avoid peak season (Dec-Mar)</h4>
                <p className="text-gray-600 text-sm">Rates drop significantly in shoulder season (Apr-Jun, Sep-Nov).</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
              <div>
                <h4 className="font-bold text-gray-800">Book online in advance</h4>
                <p className="text-gray-600 text-sm">Many courses offer online-only discounts. Book 7-14 days ahead for best rates.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
              <div>
                <h4 className="font-bold text-gray-800">Look for stay-and-play packages</h4>
                <p className="text-gray-600 text-sm">Hotels often bundle golf at rates lower than booking separately.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">6</span>
              <div>
                <h4 className="font-bold text-gray-800">Walk instead of ride</h4>
                <p className="text-gray-600 text-sm">Walking rates are $15-25 cheaper. Hawaii's mild climate makes walking pleasant.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">7</span>
              <div>
                <h4 className="font-bold text-gray-800">Bring your own clubs</h4>
                <p className="text-gray-600 text-sm">Rental sets cost $40-75/day. Ship your clubs ahead or bring as checked luggage.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Plan Your Hawaii Golf Trip?</h3>
          <p className="text-emerald-200 mb-6 max-w-xl mx-auto">
            Browse all 82+ courses with live rates, or download our free Hawaii Golf Trip Planner with 
            3 sample itineraries and a complete packing checklist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses/" className="bg-white text-emerald-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Browse All Courses
            </Link>
            <Link href="/blog/trip-planner-download/" className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-400 transition-colors">
              Free Trip Planner
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
