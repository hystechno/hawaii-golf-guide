import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Golf Instructors in Hawaii | Hawaii Golf Guide",
  description: "Find certified golf instructors, coaches, and academies across the Hawaiian Islands.",
  alternates: { canonical: "https://hawaiigolf.guide/instructors/" },
};

const instructors = [
  { name: "Hawaii Kai Golf Academy", island: "Oahu", city: "Honolulu", location: "Hawaii Kai Golf Course", phone: "808-395-2358", specialties: ["All Skill Levels","Junior Golf","Group Lessons"] },
  { name: "Turtle Bay Golf Academy", island: "Oahu", city: "Kahuku", location: "Turtle Bay Resort", phone: "808-293-8814", specialties: ["Resort Guests","Video Analysis","Short Game"] },
  { name: "Ko Olina Golf Academy", island: "Oahu", city: "Kapolei", location: "Ko Olina Golf Club", phone: "808-676-5300", specialties: ["Championship Course","Private Lessons","Corporate Clinics"] },
  { name: "Kapalua Golf Academy", island: "Maui", city: "Lahaina", location: "Kapalua Resort", phone: "808-669-6500", specialties: ["Tour-Level Instruction","Junior Camps","Playing Lessons"] },
  { name: "Wailea Golf Academy", island: "Maui", city: "Wailea", location: "Wailea Golf Club", phone: "808-875-7450", specialties: ["Resort Instruction","Couples Lessons","Short Game Clinic"] },
  { name: "Hualalai Golf Academy", island: "Big Island", city: "Kailua-Kona", location: "Four Seasons Hualalai", phone: "808-325-8000", specialties: ["Luxury Instruction","Playing Lessons","Custom Fitting"] },
  { name: "Princeville Golf Academy", island: "Kauai", city: "Princeville", location: "Princeville Makai Golf Club", phone: "808-826-1912", specialties: ["Scenic Practice","All Levels","Vacation Lessons"] },
];

export default function InstructorsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4" style={{fontFamily:'var(--font-cormorant),serif'}}>Golf Instructors in Hawaii</h1>
          <p className="text-emerald-200 text-lg">Certified coaches and academies to help improve your game</p>
        </div>
      </section>
      <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {instructors.map(i => (
          <div key={i.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-gray-800">{i.name}</h3>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs whitespace-nowrap">{i.island}</span>
            </div>
            <p className="text-emerald-600 text-sm mb-1">{i.location}</p>
            <p className="text-gray-500 text-sm mb-3">{i.city}</p>
            <p className="text-gray-600 text-sm mb-3"><a href={`tel:${i.phone}`} className="text-emerald-600 hover:underline">{i.phone}</a></p>
            <div className="flex flex-wrap gap-1">{i.specialties.map(s => <span key={s} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs">{s}</span>)}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
