import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'

export const metadata: Metadata = {
  title: 'Locksmith Blog | Tips & Guides | Chorlton Locksmiths',
  description:
    'Read expert locksmith tips, home security guides, and helpful advice from Chorlton Locksmiths. Learn about locks, security, and more.',
}

const blogPosts = [
  {
    title: 'What to Do If You\'re Locked Out of Your House',
    slug: 'locked-out-of-house',
    excerpt: 'Get locked out of your home? Learn the steps to take and when to call a professional locksmith.',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    title: 'How to Improve Your Home Security in Manchester',
    slug: 'improve-home-security',
    excerpt:
      'Practical tips to enhance your home security and protect your property from break-ins.',
    date: '2024-01-10',
    readTime: '7 min read',
  },
  {
    title: 'Signs You Need to Replace Your Door Locks',
    slug: 'replace-door-locks',
    excerpt:
      'Learn the warning signs that indicate it\'s time to replace your old locks.',
    date: '2024-01-05',
    readTime: '6 min read',
  },
  {
    title: 'Common uPVC Door Lock Problems & Solutions',
    slug: 'upvc-door-problems',
    excerpt:
      'uPVC doors are popular but can develop lock problems. Here\'s what you need to know.',
    date: '2023-12-28',
    readTime: '6 min read',
  },
  {
    title: 'Best Locks for Home Security',
    slug: 'best-locks-home-security',
    excerpt:
      'A guide to choosing the best locks for maximum home security and peace of mind.',
    date: '2023-12-20',
    readTime: '8 min read',
  },
  {
    title: 'Emergency Locksmith Services: When You Need Them',
    slug: 'emergency-locksmith-services',
    excerpt:
      'Understanding when to call an emergency locksmith and what to expect.',
    date: '2023-12-15',
    readTime: '5 min read',
  },
]

export default function BlogPage() {
  return (
    <>
      <HeroSection
        title="Locksmith Tips & Security Guides"
        subtitle="Expert advice on home security, lock maintenance, and emergency locksmith services."
      />

      <Section>
        <Container>
          <SectionHeading
            title="Latest Articles"
            subtitle="Read our expert guide to locks, security, and locksmith services"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, idx) => (
              <Link
                key={idx}
                href={`/blog/${post.slug}`}
                className="group h-full"
              >
                <div className="h-full p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg hover:border-amber-400 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      {post.readTime}
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="text-amber-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Don't wait for a blog post - if you need emergency locksmith services right now, call us immediately.
            </p>
            <a
              href="tel:+447388789881"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
