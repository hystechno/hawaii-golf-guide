import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  excerpt: string
  thumb: string | null
}

const postsDirectory = path.join(process.cwd(), 'src', 'data', 'blog')

function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs.readdirSync(postsDirectory)
  const posts: BlogPostMeta[] = []

  for (const file of files) {
    if (!file.endsWith('.md')) continue

    const slug = file.replace('.md', '')
    const filePath = path.join(postsDirectory, file)
    const content = fs.readFileSync(filePath, 'utf-8')

    const titleMatch = content.match(/^# (.+)$/m)
    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ')

    const dateMatch = content.match(/\*\*Last Updated:\*\* (.+)$/m)
    const date = dateMatch ? dateMatch[1].trim() : ''

    const readingTimeMatch = content.match(/\*\*Reading Time:\*\* (.+)$/m)
    const readingTime = readingTimeMatch ? readingTimeMatch[1].trim() : '5 minutes'

    // Extract description from first paragraph after introduction, or first paragraph
    const descMatch = content.match(/## Introduction\s*\n\n(.+)$/m)
    let description = ''
    if (descMatch) {
      description = descMatch[1].substring(0, 200) + (descMatch[1].length > 200 ? '...' : '')
    } else {
      const firstPara = content.match(/\n\n([^#\n].{50,300})\n/)
      if (firstPara) {
        description = firstPara[1].substring(0, 200) + (firstPara[1].length > 200 ? '...' : '')
      }
    }

    // Extract excerpt (first ~150 chars of description)
    const excerpt = description.substring(0, 150) + (description.length > 150 ? '...' : '')

    const thumbFile = path.join(process.cwd(), 'public', 'images', 'blog', `${slug}-thumb.jpg`)
    const thumb = fs.existsSync(thumbFile) ? `/images/blog/${slug}-thumb.jpg` : null

    posts.push({
      slug,
      title,
      description,
      date,
      readingTime,
      excerpt,
      thumb,
    })
  }

  // Sort by date (newest first) - if no date, keep original order
  return posts.sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export const metadata: Metadata = {
  title: 'Blog | Hawaii Golf Guide',
  description: 'Expert guides, course rankings, and tips for golfing in Hawaii. Discover the best courses, plan your trip, and improve your game.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'Hawaii Golf Guide Blog',
    description: 'Expert guides, course rankings, and tips for golfing in Hawaii.',
    type: 'website',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Hawaii Golf Blog
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl">
            Expert guides, course rankings, and insider tips to help you plan the perfect Hawaii golf vacation.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                {post.thumb && (
                  <Link href={`/blog/${post.slug}/`} className="block">
                    <img
                      src={post.thumb}
                      alt={post.title}
                      className="w-full h-52 object-cover hover:opacity-95 transition-opacity"
                      loading="lazy"
                    />
                  </Link>
                )}
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    {post.date && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    )}
                    {post.readingTime && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                      </div>
                    )}
                  </div>

                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    <Link href={`/blog/${post.slug}/`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Hawaii Golf Guide Blog',
            description: 'Expert guides, course rankings, and tips for golfing in Hawaii.',
            url: 'https://hawaiigolf.guide/blog/',
            publisher: {
              '@type': 'Organization',
              name: 'Hawaii Golf Guide',
            },
            blogPost: posts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              url: `https://hawaiigolf.guide/blog/${post.slug}/`,
            })),
          }),
        }}
      />
    </div>
  )
}
