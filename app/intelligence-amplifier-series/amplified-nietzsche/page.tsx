import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amplified Nietzsche | Read Online',
  description: 'A philosophical tour de force bringing Nietzsche into dialogue with artificial intelligence.',
};

export default function AmplifiedNietzsche() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">
        {/* Header */}
        <section className="relative py-16 border-b border-[#d2d2d7] dark:border-[#424245]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link 
              href="/intelligence-amplifier-series" 
              className="inline-flex items-center gap-2 text-[#FF2D55] dark:text-[#FF375F] hover:underline font-medium mb-8"
            >
              ← Back to Series
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Book Cover */}
              <div className="w-64 md:w-80 flex-shrink-0">
                <div className="aspect-[2/3] rounded-[20px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#FF2D55] to-[#FF375F] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🏛️</div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      Coming Soon
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Book Info */}
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-black text-[#000000] dark:text-white mb-4 tracking-tight leading-tight">
                  Amplified Nietzsche
                </h1>
                <p className="text-xl text-[#FF2D55] dark:text-[#FF375F] font-bold mb-6 uppercase tracking-wide">
                  Intelligence Amplifier Series - Book 4
                </p>
                <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed font-medium">
                  A philosophical tour de force that brings Nietzsche&apos;s profound insights into dialogue with artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Book Content */}
        <article className="py-16">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#FF2D55] dark:prose-a:text-[#FF375F] max-w-none">
              
              {/* MDX CONTENT WILL GO HERE */}
              <div className="glass-card rounded-[24px] p-8 sm:p-12 text-center">
                <p className="text-xl text-[#1d1d1f] dark:text-white font-medium mb-4">
                  📖 Book content coming soon
                </p>
                <p className="text-base text-[#1d1d1f]/70 dark:text-white/70">
                  The full text will be available here once uploaded.
                </p>
              </div>
              
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}

