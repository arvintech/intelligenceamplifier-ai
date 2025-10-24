import { generateSEO, generateBookSchema, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BOOK_SERIES_INFO } from '@/lib/seo-constants';

export const metadata: Metadata = generateSEO({
  title: 'San Francisco: AI Capital of the World - Full Book',
  description: 'Read the complete book exploring how San Francisco and Silicon Valley became the undisputed epicenter of artificial intelligence innovation, shaping the future of technology and humanity.',
  keywords: [
    'San Francisco',
    'Silicon Valley',
    'AI capital',
    'artificial intelligence',
    'tech innovation',
    'startup culture',
    'venture capital',
    'technology hub',
    'Bay Area',
    'AI development',
    'tech giants',
    'Arvin Lioanag',
  ],
  url: '/books/san-francisco-ai-capital',
  type: 'book',
  image: '/book-covers/san-francisco-ai-capital.jpg.webp',
});

const chapters = [
  { num: 0, title: 'Prologue: The Golden Gate to the Future', slug: 'prologue' },
  { num: 1, title: 'The Birth of Silicon Valley', slug: 'chapter-1-birth-of-silicon-valley' },
  { num: 2, title: 'The Tech Giants: Building the Foundation', slug: 'chapter-2-tech-giants' },
  { num: 3, title: 'Venture Capital: Fueling the Fire', slug: 'chapter-3-venture-capital' },
  { num: 4, title: 'The Startup Culture', slug: 'chapter-4-startup-culture' },
  { num: 5, title: 'The AI Awakening', slug: 'chapter-5-ai-awakening' },
  { num: 6, title: 'OpenAI, Google, and the Race for AGI', slug: 'chapter-6-race-for-agi' },
  { num: 7, title: 'The Talent Magnet', slug: 'chapter-7-talent-magnet' },
  { num: 8, title: 'The Dark Side: Housing, Inequality, and Displacement', slug: 'chapter-8-dark-side' },
  { num: 9, title: 'Regulation and Ethics in the AI Age', slug: 'chapter-9-regulation-ethics' },
  { num: 10, title: 'The Future of AI Capital', slug: 'chapter-10-future' },
  { num: 11, title: 'Epilogue: Beyond the Bay', slug: 'epilogue' },
];

export default function SanFranciscoAICapitalBookPage() {
  const bookSchema = generateBookSchema({
    name: 'San Francisco: AI Capital of the World',
    description: 'An in-depth exploration of how San Francisco and Silicon Valley became the epicenter of artificial intelligence innovation, examining the people, companies, and culture that are shaping the future of technology.',
    author: 'Arvin Lioanag',
    isbn: BOOK_SERIES_INFO['san-francisco-ai-capital'].isbn || 'B0FHGCHVL1',
    image: '/book-covers/san-francisco-ai-capital.jpg.webp',
    url: '/books/san-francisco-ai-capital',
    datePublished: '2024',
    numberOfPages: 250, // Estimate - update with actual page count
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Intelligence Amplifier Series', url: '/intelligence-amplifier-series' },
    { name: 'San Francisco: AI Capital of the World', url: '/intelligence-amplifier-series/san-francisco-ai-capital' },
    { name: 'Read Online', url: '/books/san-francisco-ai-capital' },
  ]);

  return (
    <>
      <StructuredData data={[bookSchema, breadcrumbSchema]} />
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 opacity-[0.54] dark:opacity-[0.36]">
            <Image
              src="/abstractMind.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link 
              href="/intelligence-amplifier-series/san-francisco-ai-capital"
              className="inline-block mb-8 text-[#007AFF] dark:text-[#0A84FF] hover:underline font-medium"
            >
              ← Back to Book Info
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Book Cover */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 px-4 sm:px-6 lg:px-8">
                  <div className="aspect-square rounded-[20px] overflow-hidden shadow-2xl relative mx-auto max-w-2xl bg-white dark:bg-gray-100">
                    <Image
                      src="/book-covers/san-francisco-ai-capital.jpg.webp"
                      alt="San Francisco: AI Capital of the World Book Cover"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  {/* Buy on Amazon Button */}
                  <a
                    href="https://www.amazon.com/San-Francisco-Capital-Intelligence-Amplifier/dp/B0FHGCHVL1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block w-full px-6 py-4 bg-[#007AFF] dark:bg-[#0A84FF] text-white text-center rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg max-w-2xl mx-auto"
                  >
                    📚 Buy on Amazon
                  </a>
                  
                  <div className="mt-4 text-center text-sm text-[#1d1d1f]/70 dark:text-white/70 max-w-2xl mx-auto">
                    Available in paperback and Kindle
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="lg:col-span-2">
                <div className="glass-card rounded-[24px] p-8 sm:p-10">
                  <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-4 tracking-tight">
                    San Francisco: AI Capital of the World
                  </h1>
                  
                  <p className="text-xl text-[#1d1d1f]/70 dark:text-white/70 mb-6">
                    By Arvin Lioanag
                  </p>
                  
                  <div className="prose dark:prose-invert max-w-none mb-8">
                    <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed">
                      From the garages of Palo Alto to the towering offices of San Francisco, this book 
                      chronicles the remarkable journey of how one region became the undisputed epicenter 
                      of artificial intelligence innovation.
                    </p>
                    <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed mt-4">
                      Explore the people, companies, and culture that transformed the Bay Area into 
                      <strong> the AI Capital of the World</strong> and discover what the future holds 
                      for this extraordinary hub of technological advancement.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#007AFF]/10 dark:bg-[#0A84FF]/20 text-[#007AFF] dark:text-[#0A84FF]">
                      Silicon Valley
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#007AFF]/10 dark:bg-[#0A84FF]/20 text-[#007AFF] dark:text-[#0A84FF]">
                      AI Innovation
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#007AFF]/10 dark:bg-[#0A84FF]/20 text-[#007AFF] dark:text-[#0A84FF]">
                      Tech Culture
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#007AFF]/10 dark:bg-[#0A84FF]/20 text-[#007AFF] dark:text-[#0A84FF]">
                      Startup Ecosystem
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 relative">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="glass-card rounded-[24px] p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-8 tracking-tight">
                Table of Contents
              </h2>
              
              <div className="space-y-3">
                {chapters.map((chapter) => (
                  <Link
                    key={chapter.slug}
                    href={`/books/san-francisco-ai-capital/${chapter.slug}`}
                    className="block group"
                  >
                    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-[#007AFF]/5 dark:hover:bg-[#0A84FF]/10 transition-all duration-300 border border-transparent hover:border-[#007AFF]/20 dark:hover:border-[#0A84FF]/20">
                      <div className="flex items-center gap-4">
                        {chapter.num > 0 && chapter.num < 11 && (
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#007AFF]/10 dark:bg-[#0A84FF]/20 text-[#007AFF] dark:text-[#0A84FF] flex items-center justify-center font-bold">
                            {chapter.num}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-white group-hover:text-[#007AFF] dark:group-hover:text-[#0A84FF] transition-colors">
                            {chapter.title}
                          </h3>
                        </div>
                      </div>
                      <svg 
                        className="w-5 h-5 text-[#1d1d1f]/40 dark:text-white/40 group-hover:text-[#007AFF] dark:group-hover:text-[#0A84FF] group-hover:translate-x-1 transition-all"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Reading Note */}
              <div className="mt-12 p-6 bg-[#007AFF]/5 dark:bg-[#0A84FF]/10 rounded-xl border border-[#007AFF]/20 dark:border-[#0A84FF]/20">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📖</div>
                  <div>
                    <h4 className="font-semibold text-[#1d1d1f] dark:text-white mb-2">
                      Read Online
                    </h4>
                    <p className="text-sm text-[#1d1d1f]/70 dark:text-white/70">
                      Click any chapter to start reading. Your progress will be saved automatically. 
                      Each chapter includes a placeholder for audio narration (coming soon).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

