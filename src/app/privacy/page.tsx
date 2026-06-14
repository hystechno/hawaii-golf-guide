import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Hawaii Golf Guide",
  description: "Privacy policy for Hawaii Golf Guide.",
  robots: "index, follow",
  alternates: { canonical: "https://hawaiigolf.guide/privacy/" },
};
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto"><h1 className="text-4xl md:text-5xl mb-4" style={{fontFamily:'var(--font-cormorant),serif'}}>Privacy Policy</h1></div>
      </section>
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 space-y-6 text-gray-600">
          <p className="text-sm text-gray-500">Last updated: April 2026</p>
          <p>Hawaii Golf Guide is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
          <h2 className="text-xl font-bold text-gray-800 mt-6">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2"><li><strong>Personal Information:</strong> Name, email address, and other information you voluntarily provide.</li><li><strong>Usage Data:</strong> Information about how you interact with our website.</li><li><strong>Device Information:</strong> Browser type, IP address, operating system.</li></ul>
          <h2 className="text-xl font-bold text-gray-800 mt-6">Third-Party Services</h2>
          <p>We use Google Analytics, Google Translate, and Amazon Associates. Their privacy policies apply.</p>
          <h2 className="text-xl font-bold text-gray-800 mt-6">Contact</h2>
          <p>Questions? Reach out through our <a href="/contact/" className="text-emerald-600 hover:underline">contact page</a>.</p>
        </div>
      </section>
    </main>
  );
}
