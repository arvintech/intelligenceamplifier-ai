import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intelligence Amplifier Series - Attitudes Towards AI',
  description: 'A groundbreaking book series exploring our evolving relationship with artificial intelligence, from Silicon Valley to philosophical depths.',
};

export default function IntelligenceAmplifierSeries() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Abstract Mind Background */}
        <div className="absolute inset-0 opacity-[0.54] dark:opacity-[0.36]">
          <Image
            src="/abstractMind.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 via-[#AF52DE]/5 to-[#34C759]/5 dark:from-[#0A84FF]/10 dark:via-[#BF5AF2]/10 dark:to-[#30D158]/10"></div>
        
        {/* Ambient light orbs */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#007AFF] rounded-full filter blur-[120px] opacity-20 dark:opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#AF52DE] rounded-full filter blur-[120px] opacity-20 dark:opacity-10 animate-float-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="text-center space-y-6">
            <Link href="/" className="inline-block mb-8 text-[#007AFF] dark:text-[#0A84FF] hover:underline font-medium">
              ← Back to Home
            </Link>
            
            <div className="backdrop-blur-md bg-white/40 dark:bg-black/40 rounded-3xl p-10 border border-white/50 dark:border-white/10 shadow-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#000000] dark:text-white mb-6 tracking-tight leading-tight [text-shadow:_0_4px_12px_rgb(0_0_0_/_30%),_0_2px_4px_rgb(0_0_0_/_20%)] dark:[text-shadow:_0_4px_16px_rgb(255_255_255_/_40%),_0_2px_8px_rgb(255_255_255_/_30%)]">
                Intelligence Amplifier Series
              </h1>
              
              <p className="text-xl sm:text-2xl text-[#007AFF] dark:text-[#0A84FF] font-bold mb-8 uppercase tracking-wide">
                Attitudes Towards AI
              </p>
              
              <p className="text-lg sm:text-xl text-[#1d1d1f] dark:text-white leading-relaxed font-medium max-w-3xl mx-auto">
                A groundbreaking series exploring our evolving relationship with artificial intelligence, examining how AI shapes society, amplifies human potential, and challenges our understanding of intelligence itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-[0.36] dark:opacity-[0.27]">
          <Image
            src="/abstractMind.png"
            alt=""
            fill
            className="object-cover scale-110"
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
            {books.map((book, index) => (
              <div 
                key={index}
                className="group"
              >
                <div className="glass-card rounded-[32px] p-8 sm:p-12 transition-all duration-500 hover:scale-[1.01] shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Book Cover */}
                    <div className="lg:col-span-2">
                      <div className="aspect-[2/3] rounded-[20px] overflow-hidden shadow-2xl relative group max-w-md mx-auto lg:mx-0">
                        {book.coverImage ? (
                          <Image
                            src={book.coverImage}
                            alt={`${book.title} Book Cover`}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className={`w-full h-full ${book.coverBg} flex items-center justify-center`}>
                            <div className="text-center p-8">
                              <div className="text-6xl mb-4">{book.icon}</div>
                              <h3 className="text-xl font-bold text-white drop-shadow-lg">
                                {book.title}
                              </h3>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Book Details */}
                    <div className="lg:col-span-3 space-y-6">
                      <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-3 tracking-tight">
                          {book.title}
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-6">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${book.statusBg} ${book.statusText}`}>
                            {book.status}
                          </span>
                          {book.subtitle && (
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-[#1d1d1f]/10 dark:bg-white/10 text-[#1d1d1f] dark:text-white">
                              {book.subtitle}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed font-medium">
                        {book.description}
                      </p>
                      
                      {book.themes && (
                        <div>
                          <h4 className="text-sm font-bold text-[#1d1d1f]/70 dark:text-white/70 uppercase tracking-wide mb-3">
                            Key Themes
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {book.themes.map((theme, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 rounded-full text-sm bg-[#1d1d1f]/5 dark:bg-white/5 text-[#1d1d1f] dark:text-white border border-[#1d1d1f]/10 dark:border-white/10"
                              >
                                {theme}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-4 flex flex-wrap gap-4">
                        {book.readOnlineUrl && (
                          <Link href={book.readOnlineUrl}>
                            <button className="px-8 py-4 bg-[#007AFF] dark:bg-[#0A84FF] text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                              Read Online
                            </button>
                          </Link>
                        )}
                        {book.amazonUrl && (
                          <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-4 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.09.48-.303.262-.758.5-1.36.7-1.064.4-2.144.725-3.238.975-1.096.25-2.29.45-3.58.6-1.29.15-2.558.225-3.8.225-2.27 0-4.37-.308-6.29-.924-1.92-.616-3.77-1.57-5.55-2.864-.18-.13-.24-.286-.18-.48zM14.68 10.5c0-1.064.104-1.956.312-2.675.208-.72.546-1.407 1.012-2.063.094-.156.245-.18.454-.07l4.55 2.42c.19.104.278.238.266.4-.012.16-.098.28-.26.357-.61.28-1.127.577-1.55.892-.424.316-.777.67-1.06 1.064-.283.394-.492.84-.626 1.338-.134.498-.2 1.084-.2 1.76v4.82c0 .314-.117.47-.35.47h-2.993c-.233 0-.35-.156-.35-.47V10.5zm-8.25 0c0-1.064.104-1.956.312-2.675.208-.72.546-1.407 1.012-2.063.094-.156.245-.18.454-.07l4.55 2.42c.19.104.278.238.266.4-.012.16-.098.28-.26.357-.61.28-1.127.577-1.55.892-.424.316-.777.67-1.06 1.064-.283.394-.492.84-.626 1.338-.134.498-.2 1.084-.2 1.76v4.82c0 .314-.117.47-.35.47H3.785c-.233 0-.35-.156-.35-.47V10.5z"/>
                              </svg>
                              Buy on Amazon
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series Philosophy Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#007AFF] via-[#AF52DE] to-[#34C759] dark:from-[#0A84FF] dark:via-[#BF5AF2] dark:to-[#30D158]">
        <div className="absolute inset-0 opacity-[0.95] dark:opacity-[0.85]">
          <Image
            src="/abstractMind.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF] via-[#AF52DE] to-[#34C759] dark:from-[#0A84FF] dark:via-[#BF5AF2] dark:to-[#30D158] mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="backdrop-blur-sm bg-white/10 dark:bg-black/20 rounded-3xl p-10 border border-white/30 shadow-2xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-2xl">
                The Series Philosophy
              </h2>
              <p className="text-lg sm:text-xl text-white leading-relaxed font-medium drop-shadow-md">
                The Intelligence Amplifier Series challenges conventional wisdom about artificial intelligence. Rather than viewing AI as a replacement for human intelligence, these books explore how AI can <span className="font-bold border-b-2 border-white/70">amplify</span> human capability, <span className="font-bold border-b-2 border-white/70">enhance</span> our understanding, and <span className="font-bold border-b-2 border-white/70">expand</span> the boundaries of what's possible when human insight meets machine intelligence.
              </p>
              <p className="text-lg sm:text-xl text-white leading-relaxed font-medium drop-shadow-md pt-4">
                Each book offers a unique lens through which to examine our AI-augmented future, from the innovation capitals of Silicon Valley to the philosophical depths of human spirit and thought.
              </p>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  );
}

const books = [
  {
    title: "San Francisco - AI Capital of The World",
    subtitle: "Book 1",
    icon: "🌉",
    coverBg: "bg-gradient-to-br from-[#007AFF] to-[#0A84FF]",
    coverImage: "/book-covers/san-francisco-ai-capital.jpg.webp",
    description: "Explore the epicenter of artificial intelligence innovation. This book examines how San Francisco and Silicon Valley became the nexus of AI development, featuring insights into the culture, personalities, and groundbreaking ideas that are shaping our AI-driven future.",
    themes: ["Innovation", "Silicon Valley", "Tech Culture", "AI Development", "Entrepreneurship"],
    status: "Published",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]",
    available: true,
    readOnlineUrl: "/intelligence-amplifier-series/san-francisco-ai-capital",
    amazonUrl: "https://www.amazon.com/San-Francisco-Capital-Intelligence-Amplifier/dp/B0FHGCHVL1"
  },
  {
    title: "Alarming Rise of Stupidity Amplified",
    subtitle: "Book 2",
    icon: "⚠️",
    coverBg: "bg-gradient-to-br from-[#FF9500] to-[#FF9F0A]",
    coverImage: "/book-covers/alarming-rise-stupidity-amplified.jpg.webp",
    description: "A critical examination of how AI, when misapplied or misunderstood, can amplify human folly rather than wisdom. This provocative work explores the dangers of algorithmic bias, misinformation amplification, and the dumbing down of discourse in the age of artificial intelligence.",
    themes: ["Critical Analysis", "AI Ethics", "Misinformation", "Social Impact", "Digital Culture"],
    status: "Published",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]",
    available: true,
    readOnlineUrl: "/intelligence-amplifier-series/alarming-rise-stupidity-amplified",
    amazonUrl: "https://www.amazon.com/Alarming-Stupidity-Amplified-Intelligence-Amplifier/dp/B0FHGGT5HD"
  },
  {
    title: "The Amplified Human Spirit",
    subtitle: "Book 3",
    icon: "✨",
    coverBg: "bg-gradient-to-br from-[#AF52DE] to-[#BF5AF2]",
    coverImage: "/book-covers/amplified-human-spirit.jpg.webp",
    description: "An uplifting exploration of how artificial intelligence can enhance the best qualities of human nature—creativity, compassion, curiosity, and connection. This book demonstrates how AI, when properly applied, amplifies human potential and enables us to achieve what was once thought impossible.",
    themes: ["Human Potential", "Creativity", "Empathy", "Collaboration", "Positive AI"],
    status: "Published",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]",
    available: true,
    readOnlineUrl: "/intelligence-amplifier-series/amplified-human-spirit",
    amazonUrl: "https://www.amazon.com/Amplified-Human-Spirit-Intelligence-Amplifier/dp/B0FHGC4YT1"
  },
  {
    title: "Amplified Nietzsche",
    subtitle: "Book 4",
    icon: "🏛️",
    coverBg: "bg-gradient-to-br from-[#FF2D55] to-[#FF375F]",
    coverImage: null, // No cover image yet
    description: "A philosophical tour de force that brings Nietzsche's profound insights into dialogue with artificial intelligence. This upcoming work explores concepts of will, power, morality, and the übermensch through the lens of AI amplification, asking: what does it mean to be human in an age of intelligent machines?",
    themes: ["Philosophy", "Ethics", "Will to Power", "Human Nature", "Existentialism"],
    status: "Coming Soon",
    statusBg: "bg-[#007AFF]/10 dark:bg-[#0A84FF]/20",
    statusText: "text-[#007AFF] dark:text-[#0A84FF]",
    available: false,
    readOnlineUrl: "/intelligence-amplifier-series/amplified-nietzsche"
  }
];

