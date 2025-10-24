import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo';

export default function Home() {
  // Generate structured data for SEO
  const organizationSchema = generateOrganizationSchema();
  const webPageSchema = generateWebPageSchema({
    title: 'Intelligence Amplifier™ - AI-Powered Intelligence Enhancement',
    description: 'Amplify your intelligence with cutting-edge AI technology.',
    url: '/',
    image: '/IA-logo.png',
  });

  return (
    <>
      <StructuredData data={[organizationSchema, webPageSchema]} />
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
              const CardContent = (
                <div className="glass-card rounded-[24px] p-8 h-full transition-all duration-500 hover:scale-[1.02] shadow-lg">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-[16px] ${project.iconBg} flex items-center justify-center mb-6 shadow-md`}>
                      <span className="text-3xl">{project.icon}</span>
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
    icon: "📚",
    iconBg: "bg-[#007AFF] dark:bg-[#0A84FF]",
    title: "Intelligence Amplifier Series",
    subtitle: "Attitudes towards AI",
    description: "A series of books exploring our relationship with artificial intelligence: San Francisco - AI Capital of The World, Alarming Rise of Stupidity Amplified, The Amplified Human Spirit, and Amplified Nietzsche (coming soon).",
    status: "Published",
    statusBg: "bg-[#007AFF]/10 dark:bg-[#0A84FF]/20",
    statusText: "text-[#007AFF] dark:text-[#0A84FF]",
    link: "/intelligence-amplifier-series"
  },
  {
    icon: "📖",
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
    icon: "🚀",
    iconBg: "bg-[#34C759] dark:bg-[#30D158]",
    title: "Arvintech",
    subtitle: "An Innovative Attitude to AI—Collaboration",
    description: "Unlearn to relearn. Measure intelligence by possibility. Prepare for new, exciting ways to live our human lives amplified.",
    status: "Active",
    statusBg: "bg-[#34C759]/10 dark:bg-[#30D158]/20",
    statusText: "text-[#34C759] dark:text-[#30D158]"
  },
  {
    icon: "🎲",
    iconBg: "bg-[#FF9500] dark:bg-[#FF9F0A]",
    title: "Lottery Predictor",
    subtitle: "Statistical Analysis & Pattern Recognition",
    description: "An AI-powered analysis tool that examines historical lottery data patterns, statistical probabilities, and number frequency to provide insights. A fascinating exploration of randomness, probability, and the limits of prediction.",
    status: "Research",
    statusBg: "bg-[#FF9500]/10 dark:bg-[#FF9F0A]/20",
    statusText: "text-[#FF9500] dark:text-[#FF9F0A]"
  },
  {
    icon: "🍚",
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

