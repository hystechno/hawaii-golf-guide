import { notFound } from "next/navigation";
import type { Metadata } from "next";

const posts: Record<string, any> = {
  "top-10-golf-courses-hawaii-2026": {
    title: "Top 10 Golf Courses in Hawaii (2026 Rankings)",
    description: "Our definitive rankings of Hawaii's best golf courses.",
    content: `<h2>1. Plantation Course at Kapalua (Maui)</h2><p>The Plantation Course at Kapalua Resort is Hawaii's most famous golf course. Designed by Ben Crenshaw and Bill Coore, this par-73 championship course stretches 7,596 yards with dramatic elevation changes and stunning ocean views. Hosts the PGA Tour's Sentry Tournament of Champions.</p><p><strong>Green fees:</strong> \$295-\$395</p><h2>2. Manele Golf Course (Lanai)</h2><p>Jack Nicklaus signature design at Four Seasons Lanai. Perched atop 200-foot cliffs with sweeping Pacific views from all 18 holes.</p><p><strong>Green fees:</strong> \$225-\$295</p><h2>3. Princeville Makai Golf Club (Kauai)</h2><p>Winds around serene lakes, native woodlands, and spectacular coastline with views of Bali Hai and Hanalei Bay.</p><p><strong>Green fees:</strong> \$250-\$350</p><h2>4. Hualalai Golf Course (Big Island)</h2><p>Jack Nicklaus-designed championship course at Four Seasons Hualalai with ancient lava flows and oceanfront holes.</p><p><strong>Green fees:</strong> \$295-\$395</p><h2>5. Turtle Bay Resort - Arnold Palmer Course (Oahu)</h2><p>Renovated Arnold Palmer design on Oahu's North Shore with ocean views and challenging coastline play.</p><p><strong>Green fees:</strong> \$285-\$342</p><h2>6. Kapalua - Bay Course (Maui)</h2><p>Arnold Palmer design featuring the only hole in Hawaii that plays over the ocean.</p><p><strong>Green fees:</strong> \$225-\$295</p><h2>7. The Club at Hokulia (Big Island)</h2><p>Exclusive Jack Nicklaus signature design on the Kona coast stretching 7,337 yards.</p><p><strong>Green fees:</strong> Private/Invitation only</p><h2>8. Poipu Bay Golf Course (Kauai)</h2><p>Former home of the PGA Grand Slam with ocean and mountain views by Robert Trent Jones Jr.</p><p><strong>Green fees:</strong> \$195-\$295</p><h2>9. Royal Ka'anapali Course (Maui)</h2><p>Robert Trent Jones Sr. design - Arnold Palmer called the 18th one of the best finishing holes ever.</p><p><strong>Green fees:</strong> \$185-\$245</p><h2>10. Hapuna Golf Course (Big Island)</h2><p>Arnold Palmer/Ed Seay oceanfront course at The Westin Hapuna Beach Resort, revitalized in 2025.</p><p><strong>Green fees:</strong> \$175-\$225</p><hr><p><em><strong>Note:</strong> Green fees fluctuate by season and tee time. Always check current rates when booking. <a href="/courses/">See all 80+ Hawaii golf courses with live rates &rarr;</a></em></p>`,
  },
  "complete-guide-golfing-hawaii": {
    title: "Complete Guide to Golfing in Hawaii: Everything You Need to Know",
    description: "Everything you need to know about golfing in Hawaii.",
    content: `<p>Hawaii is a golfer's paradise. With year-round tropical weather, stunning ocean views, and world-class courses designed by legends like Jack Nicklaus, Arnold Palmer, and Ben Crenshaw.</p><h2>Best Islands for Golf</h2><h3>Oahu - 37 Courses</h3><p>Oahu offers the most golf courses, ranging from municipal courses like Ala Wai to luxury resort tracks like Turtle Bay.</p><h3>Maui - 15 Courses</h3><p>Home to the world-famous Plantation Course at Kapalua.</p><h3>Big Island - 19 Courses</h3><p>Dramatic volcanic landscapes create unique golfing terrain.</p><h3>Kauai - 8 Courses</h3><p>Known as the "Garden Isle" with stunningly beautiful courses.</p><h2>When to Golf in Hawaii</h2><ul><li><strong>Peak Season (Dec-Mar):</strong> Best weather but highest prices. Book in advance.</li><li><strong>Shoulder Season (Apr-Jun, Sep-Nov):</strong> Great weather with moderate prices.</li><li><strong>Low Season (Jul-Aug):</strong> Best deals. Morning tee times recommended.</li></ul><h2>Green Fee Ranges</h2><ul><li><strong>Municipal courses:</strong> \$28-\$86</li><li><strong>Public courses:</strong> \$65-\$195</li><li><strong>Resort courses:</strong> \$175-\$395</li></ul><h2>Must-Know Tips</h2><ul><li>Book tee times 2-4 weeks in advance for resort courses</li><li>Bring reef-safe sunscreen (required by law in Hawaii)</li><li>Morning tee times offer calmer winds</li><li>Respect dress codes - collared shirts required at most courses</li><li>Kama'aina (Hawaii resident) rates available with valid ID</li></ul>`,
  },
  "trip-planner-download": {
    title: "Hawaii Golf Trip Planner (Free Download)",
    description: "Download our comprehensive trip planner.",
    content: `<h2>Your Complete Guide to Planning the Perfect Hawaii Golf Vacation</h2><p>Our free Hawaii Golf Trip Planner includes:</p><ul><li><strong>Island Selection Guide</strong> - Which island fits your style and budget</li><li><strong>3 Sample Itineraries</strong> - Budget, Luxury, and Mixed options</li><li><strong>Packing Checklist</strong> - Everything you need for Hawaii golf</li><li><strong>Booking Tips</strong> - When and how to book for the best rates</li></ul><h3>Sample Budget Itinerary (Oahu, 5 Days)</h3><ul><li>Day 1: Ala Wai Golf Course (\$28 resident rate)</li><li>Day 2: Bay View Golf Park (\$40)</li><li>Day 3: Pearl Country Club (\$75)</li><li>Day 4: Ko Olina Golf Club (\$150 twilight)</li><li>Day 5: Turtle Bay Palmer Course (\$185 twilight)</li></ul><p><strong>Total green fees: ~\$478</strong></p><div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:.5rem;padding:1.5rem;text-align:center;margin-top:2rem"><h3 style="color:#065f46;margin-bottom:.5rem">Get Your Free Planner</h3><p style="color:#047857;font-size:.875rem;margin-bottom:1rem">Enter your email to receive the complete Hawaii Golf Trip Planner PDF.</p><form onsubmit="event.preventDefault();alert('Thank you! Check your email for the trip planner.');" style="display:flex;gap:.5rem;max-width:24rem;margin:0 auto"><input type="email" placeholder="Enter your email" style="flex:1;padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.5rem" required><button type="submit" style="background:#059669;color:#fff;padding:.5rem 1rem;border-radius:.5rem;border:none;cursor:pointer">Download</button></form></div>`,
  },
};

export function generateStaticParams() { return Object.keys(posts).map(slug => ({ slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = posts[params.slug];
  if (!p) return { title: "Not Found" };
  return { title: `${p.title} | Hawaii Golf Guide`, description: p.description, alternates: { canonical: `https://hawaiigolf.guide/blog/${params.slug}/` } };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const p = posts[params.slug];
  if (!p) notFound();
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{fontFamily:'var(--font-cormorant),serif'}}>{p.title}</h1>
        </div>
      </section>
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <article className="bg-white rounded-xl shadow-sm p-8 md:p-12 prose prose-lg max-w-none" dangerouslySetInnerHTML={{__html:p.content}} />
      </section>
    </main>
  );
}
