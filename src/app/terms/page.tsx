import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service | Hawaii Golf Guide",
  description: "Terms of service for Hawaii Golf Guide.",
  robots: "index, follow",
  alternates: { canonical: "https://hawaiigolf.guide/terms/" },
};
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto"><h1 className="text-4xl md:text-5xl mb-4" style={{fontFamily:'var(--font-cormorant),serif'}}>Terms of Service</h1></div>
      </section>
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 space-y-6 text-gray-600">
          <p className="text-sm text-gray-500">Last updated: April 2026</p>
          <h2 className="text-xl font-bold text-gray-800 mt-6">Use of Website</h2>
          <p>For personal, non-commercial purposes only.</p>
          <h2 className="text-xl font-bold text-gray-800 mt-6">Accuracy of Information</h2>
          <p>Course rates and availability subject to change. Verify directly with courses.</p>
          <h2 className="text-xl font-bold text-gray-800 mt-6">Affiliate Disclosure</h2>
          <p>We participate in affiliate programs including Amazon Associates.</p>
          <h2 className="text-xl font-bold text-gray-800 mt-6">Limitation of Liability</h2>
          <p>Not liable for damages from website use or reliance on information provided.</p>
        </div>
      </section>
    </main>
  );
}
