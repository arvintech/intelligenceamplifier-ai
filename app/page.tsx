import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo';
import { BookStack, BookOpen, Rocket, Dice, Rice, Brain, Edit, Users, FileText, Map, MessageCircle, RefreshCw, GraduationCap, Lightbulb, Target, Globe, Clock, Eye } from '@/components/icons';

export default function Home() {
  // Generate structured data for SEO
  const organizationSchema = generateOrganizationSchema();
  const webPageSchema = generateWebPageSchema({
    title: 'Intelligence Amplifier™ - AI-Powered Intelligence Enhancement',
    description: 'Amplify your intelligence with cutting-edge AI technology.',
    url: '/',
    image: '/IA-logo.png',
  });

  // Amplified Classics Collection Schema
  const amplifiedClassicsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Amplified Classics Collection',
    description: 'Classic literature enriched with Intelligence Amplification - dynamic annotations, contextual essays, and reflective dialogues',
    itemListElement: [
      {
        '@type': 'Book',
        position: 1,
        name: 'Pride and Prejudice - Amplified',
        author: { '@type': 'Person', name: 'Jane Austen' },
        genre: 'Classic Literature',
        description: 'Jane Austen\'s masterpiece enriched with modern insights on perception, pride, and emotional intelligence',
      },
      {
        '@type': 'Book',
        position: 2,
        name: 'Sense and Sensibility - Amplified',
        author: { '@type': 'Person', name: 'Jane Austen' },
        genre: 'Classic Literature',
        description: 'A study in balance between reason and feeling with modern perspectives on emotional regulation',
      },
      {
        '@type': 'Book',
        position: 3,
        name: 'Jane Eyre - Amplified',
        author: { '@type': 'Person', name: 'Charlotte Brontë' },
        genre: 'Classic Literature',
        description: 'Charlotte Brontë\'s fierce heroine explored through frameworks of autonomy and moral courage',
      },
      {
        '@type': 'Book',
        position: 4,
        name: 'Wuthering Heights - Amplified',
        author: { '@type': 'Person', name: 'Emily Brontë' },
        genre: 'Classic Literature',
        description: 'Emily Brontë\'s haunting exploration of passion as a psychological study of love\'s extremes',
      },
      {
        '@type': 'Book',
        position: 5,
        name: 'A Room with a View - Amplified',
        author: { '@type': 'Person', name: 'E.M. Forster' },
        genre: 'Classic Literature',
        description: 'E.M. Forster\'s meditation on freedom amplified with reflections on authenticity and awakening',
      },
    ],
  };

  // Educational Resource Schema for Amplified Classics
  const educationalResourceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Amplified Classics - Enhanced Literature Study',
    description: 'Experience timeless literature through Intelligence Amplification with dynamic annotations, contextual essays, and reflective dialogues',
    provider: {
      '@type': 'Organization',
      name: 'Intelligence Amplifier™',
      url: 'https://intelligenceamplifier.ai',
    },
    educationalLevel: 'All Levels',
    teaches: [
      'Literary Analysis',
      'Critical Thinking',
      'Historical Context',
      'Character Psychology',
      'Thematic Understanding',
    ],
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        name: 'Pride and Prejudice - Amplified Edition',
        courseMode: 'Self-paced',
      },
      {
        '@type': 'CourseInstance',
        name: 'Sense and Sensibility - Amplified Edition',
        courseMode: 'Self-paced',
      },
      {
        '@type': 'CourseInstance',
        name: 'Jane Eyre - Amplified Edition',
        courseMode: 'Self-paced',
      },
      {
        '@type': 'CourseInstance',
        name: 'Wuthering Heights - Amplified Edition',
        courseMode: 'Self-paced',
      },
      {
        '@type': 'CourseInstance',
        name: 'A Room with a View - Amplified Edition',
        courseMode: 'Self-paced',
      },
    ],
  };

  // FAQ Schema for Amplified Classics
  const amplifiedClassicsFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are Amplified Classics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Amplified Classics are classic literary works enriched with Intelligence Amplification features including dynamic annotations, contextual essays, character analysis, thematic mapping, and reflective dialogues to deepen understanding and engagement with timeless literature.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which books are available in the Amplified Classics collection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The current collection includes Pride and Prejudice, Sense and Sensibility, Jane Eyre, Wuthering Heights, and A Room with a View. Each edition preserves the original text while adding modern insights and educational enhancements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Intelligence Amplification enhance classic literature?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Intelligence Amplification enhances classics through six key features: dynamic annotations that decode historical context, character psychology analysis using modern frameworks, contextual essays on social and cultural forces, thematic mapping to track ideas across chapters, reflective discussion prompts, and optional modern language bridges for accessibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Amplified Classics suitable for educators and students?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Amplified Classics are designed for all readers including educators, students, book clubs, speed readers, slow readers, and literature enthusiasts. They include teaching prompts, lesson plans, classroom activities, and discussion questions perfect for educational settings.',
        },
      },
    ],
  };

  // Classic Authors Schema
  const classicAuthorsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Classic Literature Authors',
    description: 'Celebrated authors whose works are featured in the Amplified Classics collection',
    itemListElement: [
      {
        '@type': 'Person',
        position: 1,
        name: 'Jane Austen',
        birthDate: '1775',
        deathDate: '1817',
        jobTitle: 'Author',
        description: 'Master of social commentary and romantic irony',
        sameAs: 'https://en.wikipedia.org/wiki/Jane_Austen',
      },
      {
        '@type': 'Person',
        position: 2,
        name: 'Charlotte Brontë',
        birthDate: '1816',
        deathDate: '1855',
        jobTitle: 'Author',
        description: 'Pioneer of feminist Gothic literature',
        sameAs: 'https://en.wikipedia.org/wiki/Charlotte_Bront%C3%AB',
      },
      {
        '@type': 'Person',
        position: 3,
        name: 'Emily Brontë',
        birthDate: '1818',
        deathDate: '1848',
        jobTitle: 'Author',
        description: 'Poet of passion and psychological depth',
        sameAs: 'https://en.wikipedia.org/wiki/Emily_Bront%C3%AB',
      },
      {
        '@type': 'Person',
        position: 4,
        name: 'E.M. Forster',
        birthDate: '1879',
        deathDate: '1970',
        jobTitle: 'Author',
        description: 'Observer of class and human connection',
        sameAs: 'https://en.wikipedia.org/wiki/E._M._Forster',
      },
      {
        '@type': 'Person',
        position: 5,
        name: 'Charles Dickens',
        birthDate: '1812',
        deathDate: '1870',
        jobTitle: 'Author',
        description: 'Victorian chronicler of social conscience',
        sameAs: 'https://en.wikipedia.org/wiki/Charles_Dickens',
      },
      {
        '@type': 'Person',
        position: 6,
        name: 'George Eliot',
        birthDate: '1819',
        deathDate: '1880',
        jobTitle: 'Author',
        description: 'Sage of provincial life and moral complexity',
        sameAs: 'https://en.wikipedia.org/wiki/George_Eliot',
      },
      {
        '@type': 'Person',
        position: 7,
        name: 'Thomas Hardy',
        birthDate: '1840',
        deathDate: '1928',
        jobTitle: 'Author',
        description: 'Master of tragic realism and fate',
        sameAs: 'https://en.wikipedia.org/wiki/Thomas_Hardy',
      },
      {
        '@type': 'Person',
        position: 8,
        name: 'Virginia Woolf',
        birthDate: '1882',
        deathDate: '1941',
        jobTitle: 'Author',
        description: 'Modernist pioneer of consciousness',
        sameAs: 'https://en.wikipedia.org/wiki/Virginia_Woolf',
      },
      {
        '@type': 'Person',
        position: 9,
        name: 'Oscar Wilde',
        birthDate: '1854',
        deathDate: '1900',
        jobTitle: 'Author',
        description: 'Aesthete of wit and paradox',
        sameAs: 'https://en.wikipedia.org/wiki/Oscar_Wilde',
      },
      {
        '@type': 'Person',
        position: 10,
        name: 'Edith Wharton',
        birthDate: '1862',
        deathDate: '1937',
        jobTitle: 'Author',
        description: 'Chronicler of Gilded Age society',
        sameAs: 'https://en.wikipedia.org/wiki/Edith_Wharton',
      },
      {
        '@type': 'Person',
        position: 11,
        name: 'Henry James',
        birthDate: '1843',
        deathDate: '1916',
        jobTitle: 'Author',
        description: 'Master of psychological realism',
        sameAs: 'https://en.wikipedia.org/wiki/Henry_James',
      },
    ],
  };

  return (
    <>
      <StructuredData data={[organizationSchema, webPageSchema, amplifiedClassicsSchema, educationalResourceSchema, amplifiedClassicsFAQ, classicAuthorsSchema]} />
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Abstract Mind Background */}
        <div className="absolute inset-0 opacity-[0.81] dark:opacity-[0.54]">
          <Image
            src="/abstractMind.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* macOS-style gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 via-[#AF52DE]/5 to-[#34C759]/5 dark:from-[#0A84FF]/10 dark:via-[#BF5AF2]/10 dark:to-[#30D158]/10"></div>
        
        {/* Ambient light orbs - macOS style */}
        <div className="absolute top-40 left-20 w-[600px] h-[600px] bg-[#007AFF] rounded-full filter blur-[120px] opacity-20 dark:opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-40 right-20 w-[600px] h-[600px] bg-[#AF52DE] rounded-full filter blur-[120px] opacity-20 dark:opacity-10 animate-float-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="text-center space-y-8">
            {/* Logo with frosted glass effect */}
            <div className="flex justify-center mb-16 animate-fade-in-scale">
              <div className="relative p-10 glass-effect rounded-[40px]">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                  <Image
                    src="/IA-logo.png"
                    alt="Intelligence Amplifier Logo"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#000000] dark:text-white mb-4 animate-fade-in-up tracking-tight leading-[1.08] [text-shadow:_0_4px_12px_rgb(0_0_0_/_30%),_0_2px_4px_rgb(0_0_0_/_20%)] dark:[text-shadow:_0_4px_16px_rgb(255_255_255_/_40%),_0_2px_8px_rgb(255_255_255_/_30%)]">
              The Intelligence<br />Amplifier
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#007A3D] dark:text-[#30D158] font-black mb-12 animate-fade-in-up uppercase tracking-wide [text-shadow:_0_0_20px_rgb(255_255_255_/_80%),_0_0_40px_rgb(255_255_255_/_50%),_0_2px_8px_rgb(255_255_255_/_60%)] dark:[text-shadow:_0_0_20px_rgb(48_209_88_/_60%),_0_0_40px_rgb(48_209_88_/_40%)]" style={{ animationDelay: '0.1s' }}>
              Methods of Amplification
            </p>
            
            <div className="max-w-2xl mx-auto space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="backdrop-blur-md bg-white/40 dark:bg-black/40 rounded-3xl p-8 border border-white/50 dark:border-white/10 shadow-xl">
                <p className="text-lg sm:text-xl text-[#1d1d1f] dark:text-white leading-relaxed font-medium">
                  The Intelligence Amplifier (IA) is not merely an invention — it is an <span className="font-bold text-[#AF52DE] dark:text-[#BF5AF2]">evolution</span> in how we learn, create, and perceive.
                </p>
                <p className="text-lg sm:text-xl text-[#1d1d1f] dark:text-white leading-relaxed font-medium mt-4">
                  Where Artificial Intelligence (AI) aims to replace human effort, Intelligence Amplification seeks to <span className="font-bold text-[#007AFF] dark:text-[#0A84FF]">expand it</span>.
                </p>
                <div className="py-6 mt-4 border-t border-[#1d1d1f]/10 dark:border-white/10">
                  <p className="text-2xl sm:text-3xl font-medium italic text-[#1d1d1f] dark:text-white leading-snug">
                    &quot;What happens when intelligence is not substituted, but multiplied?&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Abstract Mind Background - Subtle */}
        <div className="absolute inset-0 opacity-[0.54] dark:opacity-[0.405]">
          <Image
            src="/abstractMind.png"
            alt=""
            fill
            className="object-cover scale-110"
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight drop-shadow-md">
              Five Methods of Amplification
            </h2>
            <p className="text-xl text-[#1d1d1f] dark:text-white max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm">
              A living framework of practices that help individuals, educators, and creators work <span className="italic font-semibold">with</span> intelligent systems rather than <span className="italic font-semibold">for</span> them.
            </p>
          </div>
          
          <div className="space-y-6">
            {methods.map((method, index) => (
              <div 
                key={index}
                className="group method-card"
              >
                <div className="glass-card rounded-[24px] p-8 sm:p-10 transition-all duration-500 hover:scale-[1.02] shadow-lg">
                  <div className="flex items-start gap-6 sm:gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-[14px] ${method.bgColor} ${method.textColor} flex items-center justify-center text-xl font-bold shadow-md`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
                        {method.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#1d1d1f] dark:text-white leading-relaxed font-medium">
                        {method.description}
                      </p>
                      <p className="text-sm sm:text-base text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed">
                        <span className="font-semibold text-[#1d1d1f] dark:text-white">Examples:</span> {method.examples}
                      </p>
                      <p className={`text-lg sm:text-xl font-medium italic ${method.accentColor} pt-2`}>
                        {method.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amplified Classics Introduction Section - WSJ Style */}
      <section 
        id="amplified-classics" 
        className="py-24 relative overflow-hidden bg-white dark:bg-[#1a1a1a]"
        aria-labelledby="amplified-classics-heading"
      >
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <header className="text-center mb-16 border-b-4 border-black dark:border-white pb-12">
            <h2 id="amplified-classics-heading" className="text-4xl sm:text-5xl font-serif font-bold text-black dark:text-white mb-4 tracking-tight">
              Amplified Classics
            </h2>
            <p className="text-xl sm:text-2xl text-black dark:text-white font-serif italic mb-6">
              Rediscover the Living Soul of Literature
            </p>
            <p className="text-base text-black dark:text-white/90 mt-6 max-w-3xl mx-auto leading-relaxed font-serif">
              Where classic literature meets Intelligence Amplification — enriching timeless narratives with contextual depth and reflective insight.
            </p>
          </header>

          {/* Core Message - Dark Panel - WSJ Style */}
          <div className="p-10 sm:p-14 mb-12 bg-black dark:bg-white border-4 border-black dark:border-white">
            <div className="text-center space-y-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white dark:text-black leading-tight">
                In Awe of Humanity&apos;s Greatest Gift
              </h3>
              
              <p className="text-lg sm:text-xl text-white dark:text-black leading-relaxed max-w-4xl mx-auto font-serif">
                For thousands of years, humanity has created stories—not just to entertain, but to <span className="font-bold underline">understand ourselves</span>, to <span className="font-bold underline">question our world</span>, and to <span className="font-bold underline">connect across the barriers</span> of time, language, and culture.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-6">
                {/* Stories That Endure */}
                <div className="bg-white dark:bg-gray-900 p-8 text-left border-2 border-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                  <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 border-b-2 border-black dark:border-white pb-2">Stories That Endure</h4>
                  <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                    These works have survived centuries not by accident, but because they touch something fundamental in the human experience
                  </p>
                </div>

                {/* Ideas That Challenge */}
                <div className="bg-white dark:bg-gray-900 p-8 text-left border-2 border-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                  <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 border-b-2 border-black dark:border-white pb-2">Ideas That Challenge</h4>
                  <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                    From questioning authority to exploring identity, classics push us to think beyond our assumptions and comfort zones
                  </p>
                </div>

                {/* Wisdom That Transforms */}
                <div className="bg-white dark:bg-gray-900 p-8 text-left border-2 border-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                  <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 border-b-2 border-black dark:border-white pb-2">Wisdom That Transforms</h4>
                  <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                    The insights gained from great literature don&apos;t just inform—they change how we see ourselves and our place in the world
                  </p>
                </div>

                {/* Voices That Unite */}
                <div className="bg-white dark:bg-gray-900 p-8 text-left border-2 border-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                  <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 border-b-2 border-black dark:border-white pb-2">Voices That Unite</h4>
                  <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                    Across every language, culture, and era, classic literature reveals our shared humanity and collective dreams
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t-2 border-white dark:border-black">
                <p className="text-base sm:text-lg text-white dark:text-black leading-relaxed max-w-3xl mx-auto font-serif">
                  <span className="font-bold italic">Amplified Classics</span> transforms reading into dialogue — between past and present, between reader and text, between human insight and reflective intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Your Digital Study Companion - WSJ Style */}
          <article className="py-16 border-t-2 border-black dark:border-white" aria-labelledby="study-companion-heading">
            <header className="text-center mb-12">
              <h3 id="study-companion-heading" className="text-3xl sm:text-4xl font-serif font-bold text-black dark:text-white mb-4 tracking-tight">
                Your Digital Study Companion
              </h3>
              <p className="text-base text-black dark:text-white max-w-2xl mx-auto leading-relaxed font-serif">
                Modern learning tools designed to enhance your understanding of classic literature
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Intelligence-Amplified Analysis */}
              <div className="bg-white dark:bg-black p-8 text-left border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black dark:border-white">
                  <Brain className="w-6 h-6 text-black dark:text-white" />
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white uppercase tracking-wide">Intelligence-Amplified Analysis</h4>
                </div>
                <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                  Get instant insights, character analysis, and thematic exploration with our advanced AI study assistant
                </p>
              </div>

              {/* Study Guides */}
              <div className="bg-white dark:bg-black p-8 text-left border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black dark:border-white">
                  <FileText className="w-6 h-6 text-black dark:text-white" />
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white uppercase tracking-wide">Study Guides</h4>
                </div>
                <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                  Comprehensive summaries, discussion questions, and modern adaptations for every chapter
                </p>
              </div>

              {/* Critical Thinking */}
              <div className="bg-white dark:bg-black p-8 text-left border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black dark:border-white">
                  <Target className="w-6 h-6 text-black dark:text-white" />
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white uppercase tracking-wide">Critical Thinking</h4>
                </div>
                <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                  Essay prompts, literary techniques, and activities to deepen your understanding
                </p>
              </div>

              {/* Teacher's Hub */}
              <div className="bg-white dark:bg-black p-8 text-left border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black dark:border-white">
                  <GraduationCap className="w-6 h-6 text-black dark:text-white" />
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white uppercase tracking-wide">Teacher&apos;s Hub</h4>
                </div>
                <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                  Custom lesson plans, classroom activities, and AI-amplified learning resources
                </p>
              </div>
            </div>
          </article>

          {/* Experience & Appreciation - WSJ Style */}
          <article className="py-16 border-t-2 border-black dark:border-white" aria-labelledby="experience-appreciation-heading">
            <header className="text-center mb-12">
              <h3 id="experience-appreciation-heading" className="text-3xl sm:text-4xl font-serif font-bold text-black dark:text-white mb-4 tracking-tight">
                Experience & Appreciation
              </h3>
              <p className="text-base text-black dark:text-white max-w-3xl mx-auto leading-relaxed font-serif">
                Different readers, different journeys—Amplified Classics meets you where you are and enhances how you engage with literature
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* FOR SPEED READERS */}
              <div className="bg-white dark:bg-black p-8 text-left border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="mb-4">
                  <p className="text-xs font-serif font-bold text-black dark:text-white uppercase tracking-widest mb-3 border-b border-black dark:border-white pb-2">FOR SPEED READERS</p>
                  <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-4">Beyond Comprehension</h4>
                </div>
                <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                  Speed reading isn&apos;t just about finishing the book, but <span className="font-bold italic">appreciate the artistry</span>—the turn of phrase that captures a lifetime of longing, the dialogue that reveals character, the language that has endured not because of the story, but because of how it&apos;s told.
                </p>
              </div>

              {/* FOR SLOW READERS */}
              <div className="bg-white dark:bg-black p-8 text-left border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="mb-4">
                  <p className="text-xs font-serif font-bold text-black dark:text-white uppercase tracking-widest mb-3 border-b border-black dark:border-white pb-2">FOR SLOW READERS</p>
                  <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-4">The Joy of Immersion</h4>
                </div>
                <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                  You savor. You linger. This is exactly how great literature is meant to be experienced. <span className="font-bold italic">Reading slowly means reading deeply</span>—experiencing the texture of language, the weight of moral dilemmas. Take your time. The joy is in the journey.
                </p>
              </div>

              {/* FOR EDUCATORS */}
              <div className="bg-white dark:bg-black p-8 text-left border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="mb-4">
                  <p className="text-xs font-serif font-bold text-black dark:text-white uppercase tracking-widest mb-3 border-b border-black dark:border-white pb-2">FOR EDUCATORS</p>
                  <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-4">The Ease of Flow</h4>
                </div>
                <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                  Our method creates <span className="font-bold italic">effortless flow</span> from resistance to engagement. Modern adaptations make historical context click. <span className="font-bold italic">AI</span> meets students where they are. The text becomes accessible without being diminished. Your students don&apos;t just complete the assignment—they convince themselves.
                </p>
              </div>

              {/* FOR AFICIONADOS */}
              <div className="bg-white dark:bg-black p-8 text-left border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="mb-4">
                  <p className="text-xs font-serif font-bold text-black dark:text-white uppercase tracking-widest mb-3 border-b border-black dark:border-white pb-2">FOR AFICIONADOS</p>
                  <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-4">Fresh Eyes on Familiar Pages</h4>
                </div>
                <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                  Every reading reveals something <span className="font-bold italic">new</span>. Our Intelligence Amplified analysis offers perspectives you might not have considered. Even beloved classics surprise you when viewed through new lenses. The conversation continues. The discovery never ends.
                </p>
              </div>
            </div>
          </article>

          {/* How We Amplify Classic Literature - WSJ Style */}
          <article className="py-16 border-t-4 border-black dark:border-white" aria-labelledby="amplification-methods-heading">
            <header className="text-center mb-12">
              <h3 id="amplification-methods-heading" className="text-3xl sm:text-4xl font-serif font-bold text-black dark:text-white mb-4 tracking-tight">
                How We Amplify Classic Literature
              </h3>
              <p className="text-base text-black dark:text-white max-w-3xl mx-auto leading-relaxed font-serif">
                Every Amplified Classic preserves the original text while enriching your reading experience with carefully crafted enhancements
              </p>
            </header>

            <div className="space-y-4 max-w-5xl mx-auto">
              {/* Dynamic Annotations */}
              <div className="bg-white dark:bg-black p-8 border-l-4 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center">
                      <Edit className="w-6 h-6 text-black dark:text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 uppercase tracking-wide">Dynamic Annotations</h4>
                    <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                      Contextual notes illuminate historical references, decode archaic language, and reveal literary devices as you read. Our annotations adapt to your reading level, providing exactly the context you need without overwhelming the narrative flow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Character Deep Dives */}
              <div className="bg-white dark:bg-black p-8 border-l-4 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center">
                      <Users className="w-6 h-6 text-black dark:text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 uppercase tracking-wide">Character Analysis & Psychology</h4>
                    <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                      Explore character motivations through modern psychological frameworks. Our AI-powered analysis connects timeless characters to contemporary understanding of human behavior, revealing why Elizabeth Bennet, Jane Eyre, and Heathcliff still resonate today.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contextual Essays */}
              <div className="bg-white dark:bg-black p-8 border-l-4 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-black dark:text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 uppercase tracking-wide">Contextual Essays & Historical Insights</h4>
                    <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                      Understand the social, political, and cultural forces that shaped each work. From Victorian marriage markets to industrial revolution impacts, we connect historical context to the text, making distant eras feel immediate and relevant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Thematic Mapping */}
              <div className="bg-white dark:bg-black p-8 border-l-4 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center">
                      <Map className="w-6 h-6 text-black dark:text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 uppercase tracking-wide">Thematic Mapping & Connections</h4>
                    <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                      Follow themes as they develop across chapters. See how concepts like pride, prejudice, freedom, and identity evolve throughout the narrative. Our visual guides help you track motifs, symbols, and recurring ideas that might otherwise slip by unnoticed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reflective Dialogues */}
              <div className="bg-white dark:bg-black p-8 border-l-4 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-black dark:text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 uppercase tracking-wide">Reflective Dialogues & Discussion Prompts</h4>
                    <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                      Engage with thought-provoking questions that deepen comprehension and spark personal reflection. Our AI-powered prompts encourage you to connect the text to your own experiences, ethical dilemmas, and modern-day parallels—transforming passive reading into active dialogue.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modern Adaptations */}
              <div className="bg-white dark:bg-black p-8 border-l-4 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center">
                      <RefreshCw className="w-6 h-6 text-black dark:text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-black dark:text-white mb-3 uppercase tracking-wide">Modern Language Bridges</h4>
                    <p className="text-base text-black dark:text-white leading-relaxed font-serif">
                      Optional modern language summaries help bridge the gap between 19th-century prose and contemporary comprehension—without replacing the original beauty. Perfect for students, ESL readers, or anyone who wants to ensure they&apos;re capturing every nuance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white dark:bg-black p-8 border-4 border-black dark:border-white max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-black dark:text-white leading-relaxed font-serif">
                  <span className="font-bold italic underline">The result?</span> Classic literature that feels alive, accessible, and deeply relevant—without losing a single word of the original masterpiece.
                </p>
              </div>
            </div>
          </article>

          {/* Classic Authors Section - WSJ Style */}
          <article className="py-16 border-t-4 border-black dark:border-white" aria-labelledby="classic-authors-heading">
            <header className="text-center mb-12">
              <h3 id="classic-authors-heading" className="text-3xl sm:text-4xl font-serif font-bold text-black dark:text-white mb-4 tracking-tight">
                Masters of Classic Literature
              </h3>
              <p className="text-base text-black dark:text-white max-w-3xl mx-auto leading-relaxed font-serif">
                Amplifying the works of history&apos;s most celebrated authors
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {/* Jane Austen */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Jane Austen</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1775–1817</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Master of social commentary and romantic irony
                  </p>
                </div>
              </div>

              {/* Charlotte Brontë */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Charlotte Brontë</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1816–1855</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Pioneer of feminist Gothic literature
                  </p>
                </div>
              </div>

              {/* Emily Brontë */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Emily Brontë</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1818–1848</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Poet of passion and psychological depth
                  </p>
                </div>
              </div>

              {/* E.M. Forster */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">E.M. Forster</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1879–1970</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Observer of class and human connection
                  </p>
                </div>
              </div>

              {/* Charles Dickens */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Charles Dickens</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1812–1870</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Victorian chronicler of social conscience
                  </p>
                </div>
              </div>

              {/* George Eliot */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">George Eliot</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1819–1880</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Sage of provincial life and moral complexity
                  </p>
                </div>
              </div>

              {/* Thomas Hardy */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Thomas Hardy</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1840–1928</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Master of tragic realism and fate
                  </p>
                </div>
              </div>

              {/* Virginia Woolf */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Virginia Woolf</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1882–1941</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Modernist pioneer of consciousness
                  </p>
                </div>
              </div>

              {/* Oscar Wilde */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Oscar Wilde</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1854–1900</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Aesthete of wit and paradox
                  </p>
                </div>
              </div>

              {/* Edith Wharton */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Edith Wharton</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1862–1937</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Chronicler of Gilded Age society
                  </p>
                </div>
              </div>

              {/* Henry James */}
              <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Henry James</h4>
                  <p className="text-xs font-serif text-black dark:text-white/80 mb-3">1843–1916</p>
                  <p className="text-sm font-serif text-black dark:text-white leading-relaxed">
                    Master of psychological realism
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Call to Action - WSJ Style */}
          <footer className="text-center pt-12 border-t-2 border-black dark:border-white mt-16">
            <Link href="/amplified-classics" aria-label="Explore Amplified Classics Library">
              <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black text-base font-serif font-bold uppercase tracking-widest border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300">
                Explore the Library
              </button>
            </Link>
          </footer>
        </div>
      </section>

      {/* Book Series Section */}
      <section id="books" className="py-32 relative bg-[#f5f5f7] dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight drop-shadow-md">
              Our Book Series
            </h2>
            <p className="text-xl text-[#1d1d1f] dark:text-white max-w-3xl mx-auto leading-relaxed font-medium">
              Explore our published book series that amplify human intelligence and reimagine literature
            </p>
          </div>

          <div className="space-y-20">
            {/* Intelligence Amplifier Series */}
            <div className="glass-card rounded-[32px] p-10 sm:p-14 transition-all duration-500 hover:scale-[1.01] shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                {/* Series Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-[16px] bg-[#007AFF] dark:bg-[#0A84FF] flex items-center justify-center shadow-md">
                      <BookStack className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
                        Intelligence Amplifier Series
                      </h3>
                      <p className="text-lg font-semibold text-[#007AFF] dark:text-[#0A84FF] italic">
                        Attitudes Towards AI
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-[#1d1d1f] dark:text-white leading-relaxed font-medium">
                    A groundbreaking series exploring our evolving relationship with artificial intelligence. From Silicon Valley&apos;s innovation culture to the philosophical depths of human spirit, each book offers a unique lens to examine our AI-augmented future.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-[#1d1d1f]/70 dark:text-white/70 uppercase tracking-wide">
                      Books in the Series
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[#1d1d1f] dark:text-white">
                        <span className="text-[#34C759] dark:text-[#30D158]">✓</span>
                        <span className="font-medium">San Francisco: AI Capital of the World</span>
                      </li>
                      <li className="flex items-center gap-2 text-[#1d1d1f] dark:text-white">
                        <span className="text-[#34C759] dark:text-[#30D158]">✓</span>
                        <span className="font-medium">Alarming Rise of Stupidity Amplified</span>
                      </li>
                      <li className="flex items-center gap-2 text-[#1d1d1f] dark:text-white">
                        <span className="text-[#34C759] dark:text-[#30D158]">✓</span>
                        <span className="font-medium">The Amplified Human Spirit</span>
                      </li>
                      <li className="flex items-center gap-2 text-[#1d1d1f] dark:text-white">
                        <span className="text-[#007AFF] dark:text-[#0A84FF]">→</span>
                        <span className="font-medium italic">Amplified Nietzsche (Coming Soon)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-6">
                    <Link href="/intelligence-amplifier-series">
                      <button className="px-8 py-4 bg-[#007AFF] dark:bg-[#0A84FF] text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                        Explore the Series
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Book Covers */}
                <div className="lg:col-span-3 flex justify-center lg:justify-end px-4 sm:px-6 lg:px-8">
                  <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
                      <div className="aspect-[2/3] rounded-[24px] overflow-hidden shadow-2xl hover:scale-[1.05] transition-all duration-300 relative">
                        <Image
                          src="/book-covers/san-francisco-ai-capital.jpg.webp"
                          alt="San Francisco: AI Capital of the World"
                          width={500}
                          height={750}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="aspect-[2/3] rounded-[24px] overflow-hidden shadow-2xl hover:scale-[1.05] transition-all duration-300 relative">
                        <Image
                          src="/book-covers/alarming-rise-stupidity-amplified.jpg.webp"
                          alt="Alarming Rise of Stupidity Amplified"
                          width={500}
                          height={750}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-1/2 px-3 sm:px-4 lg:px-5">
                        <div className="aspect-[2/3] rounded-[24px] overflow-hidden shadow-2xl hover:scale-[1.05] transition-all duration-300 relative">
                          <Image
                            src="/book-covers/amplified-human-spirit.jpg.webp"
                            alt="The Amplified Human Spirit"
                            width={500}
                            height={750}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative bg-[#f5f5f7] dark:bg-[#000000]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight drop-shadow-md">
              Our Projects
            </h2>
            <p className="text-xl text-[#1d1d1f] dark:text-white max-w-3xl mx-auto leading-relaxed font-medium">
              Explore how we&apos;re applying Intelligence Amplification to real-world challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const CardContent = (
                <div className="glass-card rounded-[24px] p-8 h-full transition-all duration-500 hover:scale-[1.02] shadow-lg">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-[16px] ${project.iconBg} flex items-center justify-center mb-6 shadow-md`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-base font-semibold text-[#1d1d1f]/70 dark:text-white/70 italic">
                      {project.subtitle}
                    </p>
                    <p className="text-base text-[#1d1d1f] dark:text-white leading-relaxed font-medium">
                      {project.description}
                    </p>
                    <div className="pt-4">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${project.statusBg} ${project.statusText}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={index} className="group relative">
                  {project.link ? (
                    <Link href={project.link}>
                      {CardContent}
                    </Link>
                  ) : (
                    CardContent
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amplified Premise Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Abstract Mind Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-100 dark:opacity-100">
            <Image
              src="/abstractMind.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          {/* macOS-style vibrant background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF] via-[#AF52DE] to-[#34C759] dark:from-[#0A84FF] dark:via-[#BF5AF2] dark:to-[#30D158] mix-blend-multiply dark:mix-blend-screen"></div>
        </div>
        
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
        
        {/* Floating light elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-8">
            <div className="w-12 h-1 bg-white/50 mx-auto mb-8 rounded-full shadow-lg"></div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tight leading-tight drop-shadow-2xl">
              The Amplified Premise
            </h2>
            
            <div className="backdrop-blur-sm bg-white/10 dark:bg-black/20 rounded-3xl p-10 border border-white/30 shadow-2xl">
              <div className="space-y-8 max-w-2xl mx-auto">
                <p className="text-2xl sm:text-3xl font-bold text-white leading-snug drop-shadow-lg">
                  You were never meant to be replaced.
                </p>
                <p className="text-lg sm:text-xl text-white leading-relaxed font-medium drop-shadow-md">
                  You were meant to be amplified — to <span className="font-bold border-b-2 border-white/70 pb-1">see farther</span>, <span className="font-bold border-b-2 border-white/70 pb-1">feel deeper</span>, and <span className="font-bold border-b-2 border-white/70 pb-1">understand faster</span>.
                </p>
                <p className="text-lg sm:text-xl text-white leading-relaxed font-medium pt-4 drop-shadow-md">
                  The Methods of Amplification remind us that the true measure of intelligence is not computation, but <span className="font-bold text-2xl">connection</span>.
                </p>
              </div>
            </div>
            
            <div className="w-12 h-1 bg-white/50 mx-auto mt-12 rounded-full shadow-lg"></div>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  );
}

const projects = [
  {
    icon: BookStack,
    iconBg: "bg-[#007AFF] dark:bg-[#0A84FF]",
    title: "Intelligence Amplifier Series",
    subtitle: "Attitudes towards AI",
    description: "A series of books exploring our relationship with artificial intelligence: San Francisco: AI Capital of the World, Alarming Rise of Stupidity Amplified, The Amplified Human Spirit, and Amplified Nietzsche (coming soon).",
    status: "Published",
    statusBg: "bg-[#007AFF]/10 dark:bg-[#0A84FF]/20",
    statusText: "text-[#007AFF] dark:text-[#0A84FF]",
    link: "/intelligence-amplifier-series"
  },
  {
    icon: BookOpen,
    iconBg: "bg-[#AF52DE] dark:bg-[#BF5AF2]",
    title: "Amplified Classics",
    subtitle: "Rediscover the Living Soul of Literature",
    description: "Experience timeless literature through Intelligence Amplification — Pride and Prejudice, Sense and Sensibility, Jane Eyre, Wuthering Heights, and A Room with a View — enriched with dynamic annotations, contextual essays, and reflective dialogues.",
    status: "Available",
    statusBg: "bg-[#AF52DE]/10 dark:bg-[#BF5AF2]/20",
    statusText: "text-[#AF52DE] dark:text-[#BF5AF2]",
    link: "/amplified-classics"
  },
  {
    icon: Brain,
    iconBg: "bg-[#34C759] dark:bg-[#30D158]",
    title: "Arvintech",
    subtitle: "An Innovative Attitude to AI—Collaboration",
    description: "Unlearn to relearn. Measure intelligence by possibility. Prepare for new, exciting ways to live our human lives amplified.",
    status: "Active",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]"
  },
  {
    icon: Dice,
    iconBg: "bg-[#FF9500] dark:bg-[#FF9F0A]",
    title: "Lottery Predictor",
    subtitle: "Statistical Analysis & Pattern Recognition",
    description: "An AI-powered analysis tool that examines historical lottery data patterns, statistical probabilities, and number frequency to provide insights. A fascinating exploration of randomness, probability, and the limits of prediction.",
    status: "Research",
    statusBg: "bg-[#FF9500]/10 dark:bg-[#FF9F0A]/20",
    statusText: "text-[#FF9500] dark:text-[#FF9F0A]"
  },
  {
    icon: Rice,
    iconBg: "bg-[#FF2D55] dark:bg-[#FF375F]",
    title: "Global Rice",
    subtitle: "An Amplified Global Farm to Kitchen Table Cookbook",
    description: "A culinary journey exploring rice cultivation, cultural traditions, and recipes from around the world. This amplified cookbook connects farmers, traditions, and home cooks through the universal grain that feeds humanity, enriched with cultural context and agricultural insights.",
    status: "In Development",
    statusBg: "bg-[#FF2D55]/10 dark:bg-[#FF375F]/20",
    statusText: "text-[#FF2D55] dark:text-[#FF375F]"
  }
];

const methods = [
  {
    title: "Direct Amplification",
    bgColor: "bg-[#007AFF] dark:bg-[#0A84FF]",
    textColor: "text-white",
    accentColor: "text-[#007AFF] dark:text-[#0A84FF]",
    description: "This is the act of co-creation — writing, thinking, or designing with an AI partner in real time. It leverages rapid feedback loops where human intuition meets machine precision.",
    examples: "writing essays through guided dialogue, generating hypotheses with LLMs, composing music through iterative prompts.",
    tagline: "You think, it refines. You feel, it translates."
  },
  {
    title: "Selective Amplification",
    bgColor: "bg-[#AF52DE] dark:bg-[#BF5AF2]",
    textColor: "text-white",
    accentColor: "text-[#AF52DE] dark:text-[#BF5AF2]",
    description: "Here, the focus shifts to curation and discernment. Not every generated idea deserves preservation — amplification demands judgment. This method teaches how to select what deserves to grow.",
    examples: "summarizing large bodies of text, extracting insights from data, or choosing the most resonant phrasing from AI drafts.",
    tagline: "Amplification is not abundance — it is refinement."
  },
  {
    title: "Shaped Amplification",
    bgColor: "bg-[#34C759] dark:bg-[#30D158]",
    textColor: "text-white",
    accentColor: "text-[#34C759] dark:text-[#30D158]",
    description: "This method introduces contextual framing — applying ethical, emotional, or aesthetic boundaries that shape how intelligence operates. It is where human values sculpt machine outputs.",
    examples: "crafting educational materials aligned with empathy; training personal AI models with cultural sensitivity; embedding moral reflection into creative works.",
    tagline: "Shaping defines the soul of amplification."
  },
  {
    title: "Reflective Amplification",
    bgColor: "bg-[#FF9500] dark:bg-[#FF9F0A]",
    textColor: "text-white",
    accentColor: "text-[#FF9500] dark:text-[#FF9F0A]",
    description: "Every amplified act must lead to reflection — a feedback mirror that teaches the human as much as it instructs the machine.",
    examples: "journaling with AI, Socratic dialogue prompts, self-assessment cycles, iterative refinement through reflection logs.",
    tagline: "Amplification without reflection is automation."
  },
  {
    title: "Collective Amplification",
    bgColor: "bg-[#FF2D55] dark:bg-[#FF375F]",
    textColor: "text-white",
    accentColor: "text-[#FF2D55] dark:text-[#FF375F]",
    description: "The intelligence amplifier ultimately connects many minds into one learning field. This is the social dimension of amplification — where communities of readers, teachers, and thinkers contribute to shared growth.",
    examples: "collaborative annotation of texts, community-authored amplified editions, open-source learning repositories.",
    tagline: "Intelligence shared is intelligence multiplied."
  }
];

