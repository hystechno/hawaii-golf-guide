import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Hawaii Golf Guide",
  description: "Get in touch with Hawaii Golf Guide for questions, feedback, or partnership inquiries.",
  metadataBase: new URL("https://hawaiigolf.guide"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Hawaii Golf Guide",
    description: "Get in touch with Hawaii Golf Guide for questions, feedback, or partnership inquiries.",
    url: "https://hawaiigolf.guide/contact",
    siteName: "Hawaii Golf Guide",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Hawaii Golf Guide
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We&apos;d love to hear from you! Whether you have questions, feedback, or partnership inquiries, here are the best ways to reach us.
        </p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">General Inquiries</h2>
          <div className="bg-emerald-50 p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:hys.techno@gmail.com" className="text-emerald-600 hover:underline">hys.techno@gmail.com</a></p>
            <p className="text-sm text-gray-600"><strong>Response Time:</strong> 24-48 hours</p>
          </div>
          <p className="mb-4">For general questions about:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Course information</li>
            <li>Website features</li>
            <li>Technical issues</li>
            <li>Suggestions for improvement</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Course Updates</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:updates@hawaiigolf.guide" className="text-emerald-600 hover:underline">updates@hawaiigolf.guide</a></p>
            <p className="text-sm text-gray-600"><strong>Response Time:</strong> 24-48 hours</p>
          </div>
          <p className="mb-4">Are you a golf course representative? Contact us to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Update course information</li>
            <li>Correct pricing or hours</li>
            <li>Submit new photos</li>
            <li>Report course closures or renovations</li>
            <li>Add new courses to our directory</li>
          </ul>
          <p className="mb-4 font-semibold">Please include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Course name</li>
            <li>Specific changes needed</li>
            <li>Any supporting documentation</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Partnership Opportunities</h2>
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:partnerships@hawaiigolf.guide" className="text-emerald-600 hover:underline">partnerships@hawaiigolf.guide</a></p>
            <p className="text-sm text-gray-600"><strong>Response Time:</strong> 2-3 business days</p>
          </div>
          <p className="mb-4">Interested in partnering with Hawaii Golf Guide? We work with:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Golf courses and resorts</li>
            <li>Tee time booking services</li>
            <li>Golf travel companies</li>
            <li>Equipment brands</li>
            <li>Tourism organizations</li>
            <li>Golf instructors and schools</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Advertising</h2>
          <div className="bg-amber-50 p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:advertising@hawaiigolf.guide" className="text-emerald-600 hover:underline">advertising@hawaiigolf.guide</a></p>
            <p className="text-sm text-gray-600"><strong>Response Time:</strong> 2-3 business days</p>
          </div>
          <p className="mb-4">For advertising inquiries including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Display advertising</li>
            <li>Sponsored content</li>
            <li>Featured course listings</li>
            <li>Newsletter sponsorships</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Media Inquiries</h2>
          <div className="bg-pink-50 p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:media@hawaiigolf.guide" className="text-emerald-600 hover:underline">media@hawaiigolf.guide</a></p>
            <p className="text-sm text-gray-600"><strong>Response Time:</strong> 24 hours</p>
          </div>
          <p className="mb-4">For press, media, and interview requests.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Connect With Us</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Social Media</h3>
          <p className="mb-4">Follow us for daily course highlights, golf tips, and Hawaii travel inspiration:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Instagram:</strong> @hawaiigolfguide (coming soon)</li>
            <li><strong>Facebook:</strong> /hawaiigolfguide (coming soon)</li>
            <li><strong>Twitter/X:</strong> @higolfguide (coming soon)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Newsletter</h3>
          <p className="mb-4">Subscribe to our weekly newsletter for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Featured courses</li>
            <li>Tee time deals</li>
            <li>Golf tips for Hawaii conditions</li>
            <li>Travel planning advice</li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-gray-600 italic">Newsletter signup coming soon!</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Report an Issue</h2>
          <p className="mb-4">Found incorrect information on our site? Let us know:</p>
          <div className="bg-red-50 p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:corrections@hawaiigolf.guide" className="text-emerald-600 hover:underline">corrections@hawaiigolf.guide</a></p>
          </div>
          <p className="mb-4">Please include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>URL of the page with the error</li>
            <li>Description of what&apos;s wrong</li>
            <li>Correct information (if known)</li>
          </ul>
          <p className="mb-4">We appreciate your help in keeping our information accurate!</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Business Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Hawaii Golf Guide</strong></p>
            <p className="mb-2"><strong>Location:</strong> Honolulu, Hawaii</p>
            <p className="text-sm text-gray-600"><strong>Business Hours:</strong> Monday-Friday, 9am-5pm HST</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can you help me book a tee time?</h3>
              <p className="text-gray-600">We don&apos;t handle bookings directly. Visit the course&apos;s website or use our booking links to reserve directly with the course or through our partners like GolfNow and TeeOff.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer golf vacation packages?</h3>
              <p className="text-gray-600">We don&apos;t sell packages directly, but we partner with golf travel companies. Check our partnerships page for recommendations.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I add my golf course to your directory?</h3>
              <p className="text-gray-600">Email us at <a href="mailto:updates@hawaiigolf.guide" className="text-emerald-600 hover:underline">updates@hawaiigolf.guide</a> with your course information. We&apos;re always looking to expand our database.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I write for Hawaii Golf Guide?</h3>
              <p className="text-gray-600">We&apos;re open to guest contributions from golf writers and photographers. Email <a href="mailto:partnerships@hawaiigolf.guide" className="text-emerald-600 hover:underline">partnerships@hawaiigolf.guide</a> with your pitch.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer kama&apos;aina rates?</h3>
              <p className="text-gray-600">We list kama&apos;aina rates when available, but we don&apos;t set pricing. Contact courses directly for resident discounts.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">We&apos;re Here to Help</h2>
            <p className="mb-4">Whether you&apos;re planning your first Hawaii golf trip or you&apos;re a local looking for new courses to try, we&apos;re here to make your experience better.</p>
            <p className="text-xl text-emerald-600 font-medium">Aloha!</p>
          </div>

          <div className="mt-8 text-sm text-gray-500 text-center">
            <p>Last Updated: April 17, 2026</p>
          </div>
        </div>
      </div>
    </main>
  );
}
