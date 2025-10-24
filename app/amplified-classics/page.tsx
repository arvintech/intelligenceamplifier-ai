import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amplified Classics - Rediscover the Living Soul of Literature',
  description: 'Experience timeless literature through Intelligence Amplification. Classic novels enriched with dynamic annotations, contextual essays, and reflective dialogues.',
};

export default function AmplifiedClassics() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#AF52DE]/10 via-[#007AFF]/5 to-[#34C759]/5 dark:from-[#BF5AF2]/15 dark:via-[#0A84FF]/10 dark:to-[#30D158]/10"></div>
        
        {/* Ambient light orbs */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#AF52DE] rounded-full filter blur-[120px] opacity-20 dark:opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#007AFF] rounded-full filter blur-[120px] opacity-20 dark:opacity-10 animate-float-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="text-center space-y-8">
            <Link href="/" className="inline-block mb-8 text-[#AF52DE] dark:text-[#BF5AF2] hover:underline font-medium">
              ← Back to Home
            </Link>
            
            <div className="backdrop-blur-md bg-white/40 dark:bg-black/40 rounded-3xl p-10 sm:p-12 border border-white/50 dark:border-white/10 shadow-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#000000] dark:text-white mb-6 tracking-tight leading-tight [text-shadow:_0_4px_12px_rgb(0_0_0_/_30%),_0_2px_4px_rgb(0_0_0_/_20%)] dark:[text-shadow:_0_4px_16px_rgb(255_255_255_/_40%),_0_2px_8px_rgb(255_255_255_/_30%)]">
                Amplified Classics
              </h1>
              
              <p className="text-xl sm:text-2xl text-[#AF52DE] dark:text-[#BF5AF2] font-bold mb-8 uppercase tracking-wide [text-shadow:_0_0_20px_rgb(255_255_255_/_80%),_0_0_40px_rgb(255_255_255_/_50%)] dark:[text-shadow:_0_0_20px_rgb(191_90_242_/_60%),_0_0_40px_rgb(191_90_242_/_40%)]">
                Rediscover the Living Soul of Literature
              </p>
              
              <div className="space-y-6 text-lg sm:text-xl text-[#1d1d1f] dark:text-white leading-relaxed font-medium max-w-4xl mx-auto">
                <p>
                  <span className="font-bold">Amplified Classics</span> invites readers to experience the timeless power of the world&apos;s great novels through the lens of <span className="font-bold text-[#AF52DE] dark:text-[#BF5AF2]">Intelligence Amplification</span> — where human insight meets reflective AI commentary.
                </p>
                <p>
                  Each title in the collection blends original text with <span className="font-semibold">dynamic annotations</span>, <span className="font-semibold">contextual essays</span>, <span className="font-semibold">teaching prompts</span>, and <span className="font-semibold">reflective dialogues</span> that awaken new dimensions of meaning for modern readers, educators, and thinkers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="glass-card rounded-[32px] p-10 sm:p-12 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 text-center">
              The Inaugural Series
            </h2>
            <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed font-medium text-center max-w-3xl mx-auto">
              We revisit some of the most profound works of the English literary canon — stories that continue to shape our understanding of <span className="font-semibold text-[#AF52DE] dark:text-[#BF5AF2]">love</span>, <span className="font-semibold text-[#007AFF] dark:text-[#0A84FF]">judgment</span>, <span className="font-semibold text-[#34C759] dark:text-[#30D158]">morality</span>, and <span className="font-semibold text-[#FF9500] dark:text-[#FF9F0A]">self-discovery</span>.
            </p>
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
          <div className="space-y-12">
            {books.map((book, index) => (
              <div 
                key={index}
                className="group"
              >
                <div className="glass-card rounded-[32px] p-8 sm:p-10 transition-all duration-500 hover:scale-[1.01] shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {/* Book Cover */}
                    <div className="lg:col-span-1">
                      <div className={`aspect-[2/3] rounded-[20px] ${book.coverBg} flex flex-col items-center justify-center p-6 shadow-2xl`}>
                        <div className="text-center">
                          <div className="text-5xl mb-4">{book.icon}</div>
                          <h3 className="text-lg font-bold text-white drop-shadow-lg leading-tight">
                            {book.shortTitle}
                          </h3>
                          <p className="text-sm text-white/90 mt-2 font-medium">
                            {book.author}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Book Details */}
                    <div className="lg:col-span-3 space-y-5">
                      <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-3 tracking-tight">
                          {book.title}
                        </h2>
                        <p className="text-lg font-semibold text-[#1d1d1f]/70 dark:text-white/70 mb-4">
                          by {book.author}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${book.statusBg} ${book.statusText}`}>
                            {book.status}
                          </span>
                          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-[#1d1d1f]/10 dark:bg-white/10 text-[#1d1d1f] dark:text-white">
                            {book.era}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-base sm:text-lg text-[#1d1d1f] dark:text-white leading-relaxed font-medium">
                        {book.description}
                      </p>
                      
                      {book.amplifiedFocus && (
                        <div className="pt-2">
                          <p className="text-base text-[#AF52DE] dark:text-[#BF5AF2] font-semibold italic">
                            {book.amplifiedFocus}
                          </p>
                        </div>
                      )}
                      
                      {book.themes && (
                        <div>
                          <h4 className="text-sm font-bold text-[#1d1d1f]/70 dark:text-white/70 uppercase tracking-wide mb-3">
                            Amplified Themes
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {book.themes.map((theme, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 rounded-full text-sm bg-[#AF52DE]/10 dark:bg-[#BF5AF2]/20 text-[#AF52DE] dark:text-[#BF5AF2] border border-[#AF52DE]/20 dark:border-[#BF5AF2]/30 font-medium"
                              >
                                {theme}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-4">
                        <button className="px-8 py-4 bg-[#AF52DE] dark:bg-[#BF5AF2] text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                          Explore This Edition
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Them Amplified Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#AF52DE] via-[#007AFF] to-[#34C759] dark:from-[#BF5AF2] dark:via-[#0A84FF] dark:to-[#30D158]">
        <div className="absolute inset-0 opacity-[0.95] dark:opacity-[0.85]">
          <Image
            src="/abstractMind.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#AF52DE] via-[#007AFF] to-[#34C759] dark:from-[#BF5AF2] dark:via-[#0A84FF] dark:to-[#30D158] mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="backdrop-blur-sm bg-white/10 dark:bg-black/20 rounded-3xl p-10 sm:p-12 border border-white/30 shadow-2xl">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 drop-shadow-2xl text-center">
                What Makes Them Amplified?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white drop-shadow-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-base text-white/95 leading-relaxed font-medium drop-shadow-md">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-white/30 mt-8">
                <p className="text-lg sm:text-xl text-white leading-relaxed font-medium drop-shadow-md text-center">
                  Each <span className="font-bold">Amplified Classic</span> transforms reading into a <span className="font-bold border-b-2 border-white/70">dialogue</span> — between past and present, reader and text, human insight and machine intelligence.
                </p>
              </div>
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
    title: "Pride and Prejudice – Amplified",
    shortTitle: "Pride and Prejudice",
    author: "Jane Austen",
    icon: "💍",
    era: "1813",
    coverBg: "bg-gradient-to-br from-[#FF9500] to-[#FF9F0A]",
    description: "Jane Austen's keen social wit and moral clarity meet contemporary reflections on perception, pride, and the art of understanding one another.",
    amplifiedFocus: "Amplified through questions of modern identity and emotional intelligence.",
    themes: ["Perception", "Pride", "Social Dynamics", "Emotional Intelligence", "Marriage", "Class"],
    status: "Available",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]"
  },
  {
    title: "Sense and Sensibility – Amplified",
    shortTitle: "Sense and Sensibility",
    author: "Jane Austen",
    icon: "🎭",
    era: "1811",
    coverBg: "bg-gradient-to-br from-[#007AFF] to-[#0A84FF]",
    description: "A study in balance between reason and feeling, Austen's world expands through modern parallels on emotional regulation, empathy, and the ethics of love.",
    amplifiedFocus: "Amplified with insights on emotional balance and modern relationships.",
    themes: ["Reason vs Feeling", "Emotional Regulation", "Empathy", "Love Ethics", "Sisterhood"],
    status: "Available",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]"
  },
  {
    title: "Jane Eyre – Amplified",
    shortTitle: "Jane Eyre",
    author: "Charlotte Brontë",
    icon: "🔥",
    era: "1847",
    coverBg: "bg-gradient-to-br from-[#FF2D55] to-[#FF375F]",
    description: "Charlotte Brontë's fiercely independent heroine finds her voice anew, framed within themes of autonomy, moral courage, and the amplification of human spirit in the face of oppression.",
    amplifiedFocus: "Amplified through frameworks of autonomy and moral courage.",
    themes: ["Independence", "Moral Courage", "Human Spirit", "Gender Equality", "Self-Worth", "Love"],
    status: "Available",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]"
  },
  {
    title: "Wuthering Heights – Amplified",
    shortTitle: "Wuthering Heights",
    author: "Emily Brontë",
    icon: "🌪️",
    era: "1847",
    coverBg: "bg-gradient-to-br from-[#AF52DE] to-[#BF5AF2]",
    description: "Emily Brontë's haunting exploration of passion and obsession becomes a study in psychological amplification — an unflinching look at love's destructive and redemptive extremes.",
    amplifiedFocus: "Amplified as psychological study of passion's extremes.",
    themes: ["Passion", "Obsession", "Revenge", "Psychological Depth", "Nature", "Class Conflict"],
    status: "Available",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]"
  },
  {
    title: "A Room with a View – Amplified",
    shortTitle: "A Room with a View",
    author: "E.M. Forster",
    icon: "🪟",
    era: "1908",
    coverBg: "bg-gradient-to-br from-[#34C759] to-[#30D158]",
    description: "E.M. Forster's subtle meditation on freedom, class, and awakening unfolds through amplified perspectives on authenticity, travel, and the courage to see life anew.",
    amplifiedFocus: "Amplified with reflections on authenticity and personal awakening.",
    themes: ["Freedom", "Authenticity", "Class", "Awakening", "Travel", "Self-Discovery"],
    status: "Available",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]"
  }
];

const features = [
  {
    icon: "📝",
    title: "Dynamic Annotations",
    description: "Contextual notes that illuminate historical context, character motivations, and thematic connections throughout the narrative."
  },
  {
    icon: "💭",
    title: "Reflective Dialogues",
    description: "AI-powered prompts that engage readers in deeper contemplation of moral dilemmas, character choices, and universal themes."
  },
  {
    icon: "🎓",
    title: "Teaching Prompts",
    description: "Discussion questions and activities designed for educators, book clubs, and independent learners to deepen understanding."
  },
  {
    icon: "🔗",
    title: "Contextual Essays",
    description: "Scholarly insights connecting classic literature to contemporary issues, modern psychology, and timeless human experiences."
  },
  {
    icon: "🌟",
    title: "Character Deep Dives",
    description: "Psychological profiles and modern interpretations of beloved characters through contemporary lenses."
  },
  {
    icon: "🗺️",
    title: "Thematic Mapping",
    description: "Visual and conceptual connections between ideas, showing how themes evolve and interconnect throughout the work."
  }
];

