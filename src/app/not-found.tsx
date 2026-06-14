import Link from "next/link";

export const metadata = { title: "Page Not Found | Hawaii Golf Guide", robots: "noindex, follow" };

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-4">&#9971;</div>
        <h1 className="text-4xl md:text-5xl mb-4 text-gray-800" style={{fontFamily:'var(--font-dancing-script),cursive'}}>Fore! Page Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">Looks like this ball landed in the rough.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">Back to Homepage</Link>
          <Link href="/courses/" className="bg-white hover:bg-gray-100 text-emerald-700 border-2 border-emerald-600 px-8 py-3 rounded-lg font-medium transition-colors">Browse All Courses</Link>
        </div>
      </div>
    </main>
  );
}
