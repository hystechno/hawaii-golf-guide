import type { Metadata } from "next";
import ContactForm from "./ContactForm";

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
          <ContactForm />
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
