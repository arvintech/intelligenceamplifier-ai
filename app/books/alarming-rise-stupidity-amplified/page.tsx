import { generateSEO, generateBookSchema, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BOOK_SERIES_INFO } from '@/lib/seo-constants';

export const metadata: Metadata = generateSEO({
  title: 'The Alarming Rise of Stupidity Amplified - Full Book',
  description: 'Read the complete book exploring how AI can amplify human ignorance and stupidity, and what we can do about it. A critical examination of misinformation, bias, and the dark side of AI amplification.',
  keywords: [
    'AI ethics',
    'stupidity amplified',
    'misinformation',
    'AI bias',
    'artificial intelligence',
    'critical thinking',
    'media literacy',
    'technology ethics',
    'human stupidity',
    'Arvin Lioanag',
  ],
  url: '/books/alarming-rise-stupidity-amplified',
  type: 'book',
  image: '/book-covers/alarming-rise-stupidity-amplified.jpg.webp',
});

const chapters = [
  { num: 0, title: 'Prologue: Navigating the Ethical Risks Beyond Intelligence', slug: 'prologue' },
  { num: 1, title: 'The Paradox of Modern Intelligence', slug: 'chapter-1-paradox-of-modern-intelligence' },
  { num: 2, title: 'Understanding Intelligence in the Age of AI', slug: 'chapter-2-understanding-intelligence' },
  { num: 3, title: 'Distinguishing Ignorance from Stupidity', slug: 'chapter-3-ignorance-vs-stupidity' },
  { num: 4, title: 'How AI Amplifies Human Potential', slug: 'chapter-4-ai-amplifies-potential' },
  { num: 5, title: 'The Dark Mirror: Amplifying Ignorance', slug: 'chapter-5-amplifying-ignorance' },
  { num: 6, title: 'The Greater Threat: Amplified Stupidity', slug: 'chapter-6-amplified-stupidity' },
  { num: 7, title: 'Measuring the Impact', slug: 'chapter-7-measuring-impact' },
  { num: 8, title: 'The Human Responsibility', slug: 'chapter-8-human-responsibility' },
  { num: 9, title: 'Bias and Fairness', slug: 'chapter-9-bias-and-fairness' },
  { num: 10, title: 'Transparency and Trust', slug: 'chapter-10-transparency-trust' },
  { num: 11, title: 'Privacy and Autonomy', slug: 'chapter-11-privacy-autonomy' },
  { num: 12, title: 'Education as the Primary Defense', slug: 'chapter-12-education-defense' },
  { num: 13, title: 'The Amplified Human Spirit', slug: 'chapter-13-amplified-human-spirit' },
  { num: 14, title: 'Epilogue', slug: 'epilogue' },
  { num: 15, title: 'Appendix: The AI Exploration Guide', slug: 'appendix' },
];

export default function AlarmingRiseBookPage() {
  const bookSchema = generateBookSchema({
    name: 'The Alarming Rise of Stupidity Amplified',
    description: 'A critical examination of how AI can amplify human ignorance and stupidity, exploring misinformation, bias, and the darker implications of artificial intelligence.',
    author: 'Arvin Lioanag',
    isbn: BOOK_SERIES_INFO['alarming-rise-stupidity-amplified'].isbn || 'B0FHGGT5HD',
    image: '/book-covers/alarming-rise-stupidity-amplified.jpg.webp',
    url: '/books/alarming-rise-stupidity-amplified',
    datePublished: '2024',
    numberOfPages: 308,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Intelligence Amplifier Series', url: '/intelligence-amplifier-series' },
    { name: 'Alarming Rise of Stupidity Amplified', url: '/intelligence-amplifier-series/alarming-rise-stupidity-amplified' },
    { name: 'Read Online', url: '/books/alarming-rise-stupidity-amplified' },
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
              href="/intelligence-amplifier-series/alarming-rise-stupidity-amplified"
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
                      src="/book-covers/alarming-rise-stupidity-amplified.jpg.webp"
                      alt="The Alarming Rise of Stupidity Amplified Book Cover"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  {/* Download PDF Button */}
                  <a
                    href="/books/The Alarming Rise of Stupidity Hard.pdf"
                    download
                    className="mt-6 block w-full px-6 py-4 bg-[#FF9500] dark:bg-[#FF9F0A] text-white text-center rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg max-w-2xl mx-auto"
                  >
                    📥 Download PDF
                  </a>
                  
                  <div className="mt-4 text-center text-sm text-[#1d1d1f]/70 dark:text-white/70 max-w-2xl mx-auto">
                    308 pages • PDF format
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="lg:col-span-2">
                <div className="glass-card rounded-[24px] p-8 sm:p-10">
                  <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-4 tracking-tight">
                    The Alarming Rise of Stupidity Amplified
                  </h1>
                  
                  <p className="text-xl text-[#1d1d1f]/70 dark:text-white/70 mb-6">
                    By Arvin Lioanag
                  </p>
                  
                  <div className="prose dark:prose-invert max-w-none mb-8">
                    <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed">
                      Alongside AI&apos;s triumphs, we&apos;ve seen the darker reflection: a tsunami of AI-generated 
                      misinformation flooding our information ecosystems. Conspiracy theories crafted with the 
                      coherence and confidence previously reserved for peer-reviewed research. Sophisticated scams 
                      targeting the vulnerable with unprecedented precision.
                    </p>
                    <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed mt-4">
                      The problem isn&apos;t the technology itself. <strong>THE PROBLEM IS US.</strong>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#FF9500]/10 dark:bg-[#FF9F0A]/20 text-[#FF9500] dark:text-[#FF9F0A]">
                      AI Ethics
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#FF9500]/10 dark:bg-[#FF9F0A]/20 text-[#FF9500] dark:text-[#FF9F0A]">
                      Misinformation
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#FF9500]/10 dark:bg-[#FF9F0A]/20 text-[#FF9500] dark:text-[#FF9F0A]">
                      Critical Thinking
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#FF9500]/10 dark:bg-[#FF9F0A]/20 text-[#FF9500] dark:text-[#FF9F0A]">
                      Technology Impact
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
                    href={`/books/alarming-rise-stupidity-amplified/${chapter.slug}`}
                    className="block group"
                  >
                    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-[#007AFF]/5 dark:hover:bg-[#0A84FF]/10 transition-all duration-300 border border-transparent hover:border-[#007AFF]/20 dark:hover:border-[#0A84FF]/20">
                      <div className="flex items-center gap-4">
                        {chapter.num > 0 && chapter.num < 14 && (
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FF9500]/10 dark:bg-[#FF9F0A]/20 text-[#FF9500] dark:text-[#FF9F0A] flex items-center justify-center font-bold">
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








