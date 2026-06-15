"use client";

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="your@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
        <select className="w-full px-4 py-2 border rounded-lg">
          <option>General Inquiry</option>
          <option>List Your Course</option>
          <option>Advertising</option>
          <option>Report an Error</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="Your message..."></textarea>
      </div>
      <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors">
        Send Message
      </button>
    </form>
  );
}
