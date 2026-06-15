import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hawaii Golf Blog | Tips, Guides & Course Rankings",
  description: "Expert guides, course rankings, and insider tips to help you plan the perfect Hawaii golf vacation.",
  openGraph: { title: "Hawaii Golf Blog", description: "Expert guides and rankings", url: "https://hawaiigolf.guide/blog/" },
  alternates: { canonical: "https://hawaiigolf.guide/blog/" },
};

const posts = [
  { slug: "top-10-golf-courses-hawaii-2026", title: "Top 10 Golf Courses in Hawaii (2026 Rankings)", excerpt: "Our definitive rankings of Hawaii's best golf courses.", date: "April 23, 2026", readTime: "15 min", category: "Rankings" },
  { slug: "complete-guide-golfing-hawaii", title: "Complete Guide to Golfing in Hawaii", excerpt: "Everything you need to know about golfing in Hawaii.", date: "April 21, 2026", readTime: "12 min", category: "Guide" },
  { slug: "trip-planner-download", title: "Hawaii Golf Trip Planner (Free Download)", excerpt: "Download our comprehensive trip planner.", date: "April 20, 2026", readTime: "5 min", category: "Free Download" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4" style={{fontFamily:'var(--font-cormorant),serif'}}>Hawaii Golf Blog</h1>
          <p className="text-emerald-200 text-lg">Expert guides, course rankings, and insider tips</p>
        </div>
      </section>
      <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.slug} className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="p-6">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">{p.category}</span>
                <span>{p.date}</span><span>&#183;</span><span>{p.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-emerald-700 transition-colors">
                <Link href={`/blog/${p.slug}/`}>{p.title}</Link>
              </h2>
              <p className="text-gray-600 text-sm mb-4">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}/`} className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">Read Article &rarr;</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
