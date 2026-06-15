import coursesData from "@/data/courses.json";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tee Times | Hawaii Golf Guide",
  description: "Book tee times at Hawaii's best golf courses. Find online booking links across all islands.",
  alternates: { canonical: "https://hawaiigolf.guide/tee-times/" },
};

export default function TeeTimesPage() {
  const bookable = coursesData.courses.filter(c => c.online_booking && c.booking_url).sort((a, b) => a.island.localeCompare(b.island));
  const islands = [...new Set(bookable.map(c => c.island))];
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4" style={{fontFamily:'var(--font-cormorant),serif'}}>Book Tee Times</h1>
          <p className="text-emerald-200 text-lg">{bookable.length} courses with online booking available</p>
        </div>
      </section>
      <section className="py-12 px-4 max-w-6xl mx-auto">
        {islands.map(island => {
          const ic = bookable.filter(c => c.island === island);
          return ic.length ? (
            <div key={island} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500"></span>{island}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ic.map(c => (
                  <div key={c.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1"><Link href={`/courses/${c.id}/`} className="hover:text-emerald-600 transition-colors">{c.name}</Link></h3>
                    <p className="text-gray-500 text-sm mb-3">{c.city}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-4">
                      <span className="bg-emerald-50 text-emerald-800 px-2 py-1 rounded">{c.type}</span><span>{c.difficulty}</span>
                    </div>
                    <a href={c.booking_url} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition-colors text-sm">Book Online</a>
                  </div>
                ))}
              </div>
            </div>
          ) : null;
        })}
      </section>
    </main>
  );
}
