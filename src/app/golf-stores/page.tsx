import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Golf Stores in Hawaii | Hawaii Golf Guide",
  description: "Find golf stores, pro shops, and equipment retailers across the Hawaiian Islands.",
  alternates: { canonical: "https://hawaiigolf.guide/golf-stores/" },
};

const stores = [
  { name: "Golf Galaxy - Honolulu", island: "Oahu", city: "Honolulu", address: "333 Ward Avenue, Honolulu, HI 96814", phone: "808-593-2929", services: ["Club Fitting","Lessons","Repair","Wide Selection"] },
  { name: "Roger Dunn Golf Shop", island: "Oahu", city: "Honolulu", address: "1534 Dillingham Blvd, Honolulu, HI 96817", phone: "808-847-1323", services: ["Trade-ins","Used Clubs","New Equipment","Apparel"] },
  { name: "Tee Times Golf Shop", island: "Oahu", city: "Waipahu", address: "94-799 Lumiaina St, Waipahu, HI 96797", phone: "808-680-6088", services: ["Club Fitting","Lessons","Equipment"] },
  { name: "Maui Golf Shop", island: "Maui", city: "Kahului", address: "270 Dairy Rd, Kahului, HI 96732", phone: "808-871-7663", services: ["Equipment","Apparel","Accessories"] },
  { name: "The Golf Store - Kona", island: "Big Island", city: "Kailua-Kona", address: "75-5591 Palani Rd, Kailua-Kona, HI 96740", phone: "808-329-1860", services: ["Club Fitting","Equipment","Apparel"] },
  { name: "Hilo Golf Shop", island: "Big Island", city: "Hilo", address: "126 Kilauea Ave, Hilo, HI 96720", phone: "808-935-7555", services: ["Equipment","Repair","Apparel"] },
];

export default function GolfStoresPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4" style={{fontFamily:'var(--font-cormorant),serif'}}>Golf Stores in Hawaii</h1>
          <p className="text-emerald-200 text-lg">Find equipment, apparel, and services at golf stores across the islands</p>
        </div>
      </section>
      <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map(s => (
          <div key={s.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-gray-800">{s.name}</h3>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs">{s.island}</span>
            </div>
            <p className="text-gray-500 text-sm mb-2">{s.city}</p>
            <p className="text-gray-600 text-sm mb-2">{s.address}</p>
            <p className="text-gray-600 text-sm mb-3"><a href={`tel:${s.phone}`} className="text-emerald-600 hover:underline">{s.phone}</a></p>
            <div className="flex flex-wrap gap-1">{s.services.map(x => <span key={x} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{x}</span>)}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
