import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'San Francisco - AI Capital of The World | Read Online',
  description: 'Explore the epicenter of artificial intelligence innovation in Silicon Valley.',
};

export default function SanFranciscoAICapital() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">
        {/* Header */}
        <section className="relative py-16 border-b border-[#d2d2d7] dark:border-[#424245]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link 
              href="/intelligence-amplifier-series" 
              className="inline-flex items-center gap-2 text-[#007AFF] dark:text-[#0A84FF] hover:underline font-medium mb-8"
            >
              ← Back to Series
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Book Cover */}
              <div className="w-64 md:w-80 flex-shrink-0">
                <div className="aspect-[2/3] rounded-[20px] overflow-hidden shadow-2xl">
                  <Image
                    src="/book-covers/san-francisco-ai-capital.jpg.webp"
                    alt="San Francisco - AI Capital of The World Book Cover"
                    width={400}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              
              {/* Book Info */}
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-black text-[#000000] dark:text-white mb-4 tracking-tight leading-tight">
                  San Francisco - AI Capital of The World
                </h1>
                <p className="text-xl text-[#007AFF] dark:text-[#0A84FF] font-bold mb-6 uppercase tracking-wide">
                  Intelligence Amplifier Series - Book 1
                </p>
                <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed font-medium mb-6">
                  Explore the epicenter of artificial intelligence innovation. This book examines how San Francisco and Silicon Valley became the nexus of AI development, featuring insights into the culture, personalities, and groundbreaking ideas that are shaping our AI-driven future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/books/san-francisco-ai-capital">
                    <button className="px-8 py-4 bg-[#007AFF] hover:bg-[#007AFF]/90 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                      📖 Read Online Free
                    </button>
                  </Link>
                  <a href="https://www.amazon.com/San-Francisco-Capital-Intelligence-Amplifier/dp/B0FHGCHVL1" target="_blank" rel="noopener noreferrer">
                    <button className="px-8 py-4 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.09.48-.303.262-.758.5-1.36.7-1.064.4-2.144.725-3.238.975-1.096.25-2.29.45-3.58.6-1.29.15-2.558.225-3.8.225-2.27 0-4.37-.308-6.29-.924-1.92-.616-3.77-1.57-5.55-2.864-.18-.13-.24-.286-.18-.48zM14.68 10.5c0-1.064.104-1.956.312-2.675.208-.72.546-1.407 1.012-2.063.094-.156.245-.18.454-.07l4.55 2.42c.19.104.278.238.266.4-.012.16-.098.28-.26.357-.61.28-1.127.577-1.55.892-.424.316-.777.67-1.06 1.064-.283.394-.492.84-.626 1.338-.134.498-.2 1.084-.2 1.76v4.82c0 .314-.117.47-.35.47h-2.993c-.233 0-.35-.156-.35-.47V10.5zm-8.25 0c0-1.064.104-1.956.312-2.675.208-.72.546-1.407 1.012-2.063.094-.156.245-.18.454-.07l4.55 2.42c.19.104.278.238.266.4-.012.16-.098.28-.26.357-.61.28-1.127.577-1.55.892-.424.316-.777.67-1.06 1.064-.283.394-.492.84-.626 1.338-.134.498-.2 1.084-.2 1.76v4.82c0 .314-.117.47-.35.47H3.785c-.233 0-.35-.156-.35-.47V10.5z"/>
                      </svg>
                      Buy on Amazon
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <article className="py-16 bg-white/50 dark:bg-black/20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-[#1d1d1f] dark:text-white mb-8">What&apos;s Inside</h2>
            
            <div className="space-y-6">
              <div className="glass-card rounded-[20px] p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-white mb-3">📍 The Birth of Silicon Valley</h3>
                <p className="text-[#1d1d1f]/70 dark:text-white/70">From HP&apos;s garage to Fairchild Semiconductor, discover how an orchard became the world&apos;s innovation capital.</p>
              </div>
              
              <div className="glass-card rounded-[20px] p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-white mb-3">🏢 The Tech Giants</h3>
                <p className="text-[#1d1d1f]/70 dark:text-white/70">Intel, Apple, Google, and Facebook built the foundation that made today&apos;s AI revolution possible.</p>
              </div>
              
              <div className="glass-card rounded-[20px] p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-white mb-3">💰 Venture Capital&apos;s Role</h3>
                <p className="text-[#1d1d1f]/70 dark:text-white/70">How Sand Hill Road&apos;s VCs fuel innovation with billions in capital and decades of expertise.</p>
              </div>
              
              <div className="glass-card rounded-[20px] p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-white mb-3">🤖 The AI Awakening</h3>
                <p className="text-[#1d1d1f]/70 dark:text-white/70">From AlphaGo to ChatGPT, the decade-long journey to AI&apos;s mainstream breakthrough.</p>
              </div>
              
              <div className="glass-card rounded-[20px] p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-white mb-3">🏁 The Race for AGI</h3>
                <p className="text-[#1d1d1f]/70 dark:text-white/70">Inside OpenAI, Google, and Anthropic&apos;s competition to build artificial general intelligence.</p>
              </div>
              
              <div className="glass-card rounded-[20px] p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-white mb-3">⚠️ The Dark Side</h3>
                <p className="text-[#1d1d1f]/70 dark:text-white/70">Housing crisis, inequality, and displacement—the costs of concentrated innovation.</p>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}

