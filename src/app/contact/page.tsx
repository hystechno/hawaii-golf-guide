import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Hawaii Golf Guide",
  description: "Get in touch with Hawaii Golf Guide. List your course, advertise, or ask questions.",
  alternates: { canonical: "https://hawaiigolf.guide/contact/" },
};
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4" style={{fontFamily:'var(--font-cormorant),serif'}}>Contact Us</h1>
        </div>
      </section>
      <section className="py-12 px-4 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Name</label><input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="Your name" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="your@email.com" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Subject</label><select className="w-full px-4 py-2 border rounded-lg"><option>General Inquiry</option><option>List Your Course</option><option>Advertising</option><option>Report an Error</option></select></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Message</label><textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="Your message..."></textarea></div>
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors">Send Message</button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">List Your Course</h2>
            <p className="text-gray-600 mb-4">Are you a golf course owner? Get listed in Hawaii's most comprehensive golf directory.</p>
            <ul className="space-y-2 text-sm text-gray-600"><li>&#10003; Reach thousands of golfers</li><li>&#10003; Free basic listing option</li><li>&#10003; Featured placement available</li></ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Advertising</h2>
            <p className="text-gray-600 mb-4">Promote your golf-related business to a targeted audience.</p>
            <ul className="space-y-2 text-sm text-gray-600"><li>&#10003; Banner advertising</li><li>&#10003; Sponsored content</li><li>&#10003; Newsletter features</li></ul>
          </div>
        </div>
      </section>
    </main>
  );
}
