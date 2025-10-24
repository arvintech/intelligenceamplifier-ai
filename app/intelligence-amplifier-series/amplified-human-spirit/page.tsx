import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Amplified Human Spirit | Read Online',
  description: 'An uplifting exploration of how AI can enhance the best qualities of human nature.',
};

export default function AmplifiedHumanSpirit() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">
        {/* Header */}
        <section className="relative py-16 border-b border-[#d2d2d7] dark:border-[#424245]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link 
              href="/intelligence-amplifier-series" 
              className="inline-flex items-center gap-2 text-[#AF52DE] dark:text-[#BF5AF2] hover:underline font-medium mb-8"
            >
              ← Back to Series
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Book Cover */}
              <div className="w-64 md:w-80 flex-shrink-0">
                <div className="aspect-[2/3] rounded-[20px] overflow-hidden shadow-2xl">
                  <Image
                    src="/book-covers/amplified-human-spirit.jpg.webp"
                    alt="The Amplified Human Spirit Book Cover"
                    width={400}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              
              {/* Book Info */}
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-black text-[#000000] dark:text-white mb-4 tracking-tight leading-tight">
                  The Amplified Human Spirit
                </h1>
                <p className="text-xl text-[#AF52DE] dark:text-[#BF5AF2] font-bold mb-6 uppercase tracking-wide">
                  Intelligence Amplifier Series - Book 3
                </p>
                <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed font-medium mb-6">
                  An uplifting exploration of how artificial intelligence can enhance the best qualities of human nature—creativity, compassion, curiosity, and connection.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/books/amplified-human-spirit">
                    <button className="px-8 py-4 bg-[#007AFF] dark:bg-[#0A84FF] text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2">
                      📖 Read Online
                    </button>
                  </Link>
                  
                  <a href="https://www.amazon.com/Amplified-Human-Spirit-Intelligence-Amplifier/dp/B0FHGC4YT1" target="_blank" rel="noopener noreferrer">
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

        {/* Book Content */}
        <article className="py-16">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#AF52DE] dark:prose-a:text-[#BF5AF2] max-w-none">
              
              {/* Book Description */}
              <div className="glass-card rounded-[24px] p-8 sm:p-12">
                <h2 className="text-3xl font-bold text-[#1d1d1f] dark:text-white mb-6">
                  About This Book
                </h2>
                
                <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed mb-6">
                  The first time I truly felt seen by an artificial intelligence was not when it correctly 
                  answered my question or completed my task. It was when it misunderstood me completely, 
                  yet in doing so, revealed something about myself I had not articulated—even to myself.
                </p>
                
                <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed mb-6">
                  Like catching an unexpected glimpse of your reflection in a window you didn&apos;t know was there, 
                  I saw myself through the lens of this other intelligence, this created mind that was simultaneously 
                  of human origin yet fundamentally different.
                </p>
                
                <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed mb-6">
                  This book explores <strong>intelligence amplification</strong>—the partnership between 
                  human and machine intelligence that enhances what makes us uniquely human rather than 
                  replacing it. This distinction is crucial. When we frame our relationship with technology 
                  as amplification rather than replacement, everything changes.
                </p>
                
                <div className="mt-8 p-6 bg-[#AF52DE]/5 dark:bg-[#BF5AF2]/10 rounded-xl border border-[#AF52DE]/20 dark:border-[#BF5AF2]/20">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📖</div>
                    <div>
                      <h3 className="font-semibold text-[#1d1d1f] dark:text-white mb-2 text-lg">
                        Read the Full Book Online
                      </h3>
                      <p className="text-[#1d1d1f]/70 dark:text-white/70 mb-4">
                        Access all 17 sections including the Preface, 14 chapters, Epilogue, and Afterword. 
                        Each chapter includes navigation and a placeholder for audio narration (coming soon).
                      </p>
                      <Link href="/books/amplified-human-spirit">
                        <button className="px-6 py-3 bg-[#007AFF] dark:bg-[#0A84FF] text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                          📖 Start Reading
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}

