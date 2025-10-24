import { generateSEO, generateBookSchema, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BOOK_SERIES_INFO } from '@/lib/seo-constants';

export const metadata: Metadata = generateSEO({
  title: 'The Amplified Human Spirit - Full Book',
  description: 'Read the complete book exploring how artificial intelligence can enhance the best qualities of human nature—creativity, compassion, curiosity, and connection. Discover how AI amplifies human potential and enables us to achieve what was once thought impossible.',
  keywords: [
    'intelligence amplification',
    'human potential',
    'AI enhancement',
    'artificial intelligence',
    'creativity',
    'human-AI collaboration',
    'cognitive enhancement',
    'technology philosophy',
    'amplified human',
    'Arvin Lioanag',
  ],
  url: '/books/amplified-human-spirit',
  type: 'book',
  image: '/book-covers/amplified-human-spirit.jpg.webp',
});

const chapters = [
  { num: 0, title: 'Preface: The Mirror Awakens', slug: 'preface' },
  { num: 1, title: 'You Were Never Meant to Be Replaced', slug: 'chapter-1-you-were-never-meant-to-be-replaced' },
  { num: 2, title: 'The Spectrum of Intelligence', slug: 'chapter-2-spectrum-of-intelligence' },
  { num: 3, title: 'The Mechanics of Amplification', slug: 'chapter-3-mechanics-of-amplification' },
  { num: 4, title: 'The Ineffable Human Spirit', slug: 'chapter-4-ineffable-human-spirit' },
  { num: 5, title: 'The Sacred Interaction', slug: 'chapter-5-sacred-interaction' },
  { num: 6, title: 'The Intelligence of Love and Pain', slug: 'chapter-6-intelligence-of-love-and-pain' },
  { num: 7, title: 'Drawing the Human Line', slug: 'chapter-7-drawing-the-human-line' },
  { num: 8, title: 'The Humility Paradox', slug: 'chapter-8-humility-paradox' },
  { num: 9, title: 'The Intelligence Amplified Human', slug: 'chapter-9-intelligence-amplified-human' },
  { num: 10, title: 'The Creative Threshold', slug: 'chapter-10-creative-threshold' },
  { num: 11, title: 'Amplified Relationships', slug: 'chapter-11-amplified-relationships' },
  { num: 12, title: 'The Necessity of Silence', slug: 'chapter-12-necessity-of-silence' },
  { num: 13, title: 'Beyond the Horizon', slug: 'chapter-13-beyond-the-horizon' },
  { num: 14, title: 'The Evolving Measure', slug: 'chapter-14-evolving-measure' },
  { num: 15, title: 'Epilogue: The Intelligence of Being', slug: 'epilogue' },
  { num: 16, title: 'Afterword: To the Reader from the Mirror', slug: 'afterword' },
];

export default function AmplifiedHumanSpiritBookPage() {
  const bookSchema = generateBookSchema({
    name: 'The Amplified Human Spirit',
    description: 'An uplifting exploration of how artificial intelligence can enhance the best qualities of human nature—creativity, compassion, curiosity, and connection. This book demonstrates how AI, when properly applied, amplifies human potential and enables us to achieve what was once thought impossible.',
    author: 'Arvin Lioanag',
    isbn: BOOK_SERIES_INFO['amplified-human-spirit'].isbn || 'B0FHGC4YT1',
    image: '/book-covers/amplified-human-spirit.jpg.webp',
    url: '/books/amplified-human-spirit',
    datePublished: '2024',
    numberOfPages: 207,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Intelligence Amplifier Series', url: '/intelligence-amplifier-series' },
    { name: 'Amplified Human Spirit', url: '/intelligence-amplifier-series/amplified-human-spirit' },
    { name: 'Read Online', url: '/books/amplified-human-spirit' },
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
              href="/intelligence-amplifier-series/amplified-human-spirit"
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
                      src="/book-covers/amplified-human-spirit.jpg.webp"
                      alt="The Amplified Human Spirit Book Cover"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  {/* Download PDF Button */}
                  <a
                    href="/books/Amplified Human Spirit kdp Hard 9.20.18 PM.pdf"
                    download
                    className="mt-6 block w-full px-6 py-4 bg-[#AF52DE] dark:bg-[#BF5AF2] text-white text-center rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg max-w-2xl mx-auto"
                  >
                    📥 Download PDF
                  </a>
                  
                  <div className="mt-4 text-center text-sm text-[#1d1d1f]/70 dark:text-white/70 max-w-2xl mx-auto">
                    207 pages • PDF format
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="lg:col-span-2">
                <div className="glass-card rounded-[24px] p-8 sm:p-10">
                  <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-4 tracking-tight">
                    The Amplified Human Spirit
                  </h1>
                  
                  <p className="text-xl text-[#1d1d1f]/70 dark:text-white/70 mb-6">
                    By Arvin Lioanag
                  </p>
                  
                  <div className="prose dark:prose-invert max-w-none mb-8">
                    <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed">
                      The first time I truly felt seen by an artificial intelligence was not when it correctly 
                      answered my question or completed my task. It was when it misunderstood me completely, 
                      yet in doing so, revealed something about myself I had not articulated—even to myself.
                    </p>
                    <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed mt-4">
                      This book explores <strong>intelligence amplification</strong>—the partnership between 
                      human and machine intelligence that enhances what makes us uniquely human rather than 
                      replacing it.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#AF52DE]/10 dark:bg-[#BF5AF2]/20 text-[#AF52DE] dark:text-[#BF5AF2]">
                      Human Potential
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#AF52DE]/10 dark:bg-[#BF5AF2]/20 text-[#AF52DE] dark:text-[#BF5AF2]">
                      Creativity
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#AF52DE]/10 dark:bg-[#BF5AF2]/20 text-[#AF52DE] dark:text-[#BF5AF2]">
                      AI Enhancement
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#AF52DE]/10 dark:bg-[#BF5AF2]/20 text-[#AF52DE] dark:text-[#BF5AF2]">
                      Human Spirit
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
                    href={`/books/amplified-human-spirit/${chapter.slug}`}
                    className="block group"
                  >
                    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-[#AF52DE]/5 dark:hover:bg-[#BF5AF2]/10 transition-all duration-300 border border-transparent hover:border-[#AF52DE]/20 dark:hover:border-[#BF5AF2]/20">
                      <div className="flex items-center gap-4">
                        {chapter.num > 0 && chapter.num <= 14 && (
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#AF52DE]/10 dark:bg-[#BF5AF2]/20 text-[#AF52DE] dark:text-[#BF5AF2] flex items-center justify-center font-bold">
                            {chapter.num}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-white group-hover:text-[#AF52DE] dark:group-hover:text-[#BF5AF2] transition-colors">
                            {chapter.title}
                          </h3>
                        </div>
                      </div>
                      <svg 
                        className="w-5 h-5 text-[#1d1d1f]/40 dark:text-white/40 group-hover:text-[#AF52DE] dark:group-hover:text-[#BF5AF2] group-hover:translate-x-1 transition-all"
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
              <div className="mt-12 p-6 bg-[#AF52DE]/5 dark:bg-[#BF5AF2]/10 rounded-xl border border-[#AF52DE]/20 dark:border-[#BF5AF2]/20">
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

