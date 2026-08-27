import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { marked } from 'marked'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import EmailSignup from '@/components/EmailSignup'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src', 'data', 'blog')

function getPostData(slug: string): BlogPost | null {
  const filePath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')

  // Extract metadata from markdown
  const titleMatch = fileContent.match(/^# (.+)$/m)
  const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ')

  const dateMatch = fileContent.match(/\*\*Last Updated:\*\* (.+)$/m)
  const date = dateMatch ? dateMatch[1].trim() : ''

  const readingTimeMatch = fileContent.match(/\*\*Reading Time:\*\* (.+)$/m)
  const readingTime = readingTimeMatch ? readingTimeMatch[1].trim() : '5 minutes'

  // Extract description from first paragraph after introduction
  const descMatch = fileContent.match(/## Introduction\s*\n\n(.+)$/m)
  const description = descMatch
    ? descMatch[1].substring(0, 160) + (descMatch[1].length > 160 ? '...' : '')
    : `Read ${title} on Hawaii Golf Guide.`

  // Convert markdown to HTML
  const htmlContent = marked(fileContent, {
    gfm: true,
    breaks: true,
  })

  return {
    slug,
    title,
    description,
    date,
    readingTime,
    content: htmlContent as string,
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory)
  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({ slug: file.replace('.md', '') }))

  return slugs
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostData(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Hawaii Golf Guide Blog',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | Hawaii Golf Guide Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Hawaii Golf Guide Editorial Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostData(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            {post.date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            )}
            {post.readingTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-a:text-emerald-600 prose-a:hover:text-emerald-700 prose-strong:text-gray-900 prose-table:text-gray-700 prose-thead:bg-gray-100 prose-th:text-gray-900 prose-td:border-gray-200 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Email Capture - After Article Content */}
        <EmailSignup variant="blog" />

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t">
          <div className="bg-emerald-50 rounded-xl p-8">
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Plan Your Hawaii Golf Trip
            </h3>
            <p className="text-gray-700 mb-6">
              Browse all 80+ golf courses across the Hawaiian Islands and find the perfect
              courses for your vacation.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Organization',
              name: 'Hawaii Golf Guide Editorial Team',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Hawaii Golf Guide',
              logo: {
                '@type': 'ImageObject',
                url: 'https://hawaiigolf.guide/favicon.ico',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://hawaiigolf.guide/blog/${slug}/`,
            },
          }),
        }}
      />
    </article>
  )
}
