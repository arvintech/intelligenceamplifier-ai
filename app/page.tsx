import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo';
import { Brain, FileText, Users, RefreshCw, Rocket, Lightbulb, Target, Sparkles, Shield, Globe, Clock, Megaphone, TrendingUp, Eye, HeartPulse, Scale, Building, DollarSign, Cog, ShoppingBag, GraduationCap, Map, Landmark } from '@/components/icons';
import ArvinTechLink from '@/components/ArvinTechLink';

const industries = [
  {
    icon: HeartPulse,
    color: 'bg-[#FF2D55] dark:bg-[#FF375F]',
    dotColor: 'bg-[#FF2D55] dark:bg-[#FF375F]',
    name: 'Healthcare',
    link: '/industries/healthcare',
    applications: [
      'Patient record summarization & retrieval',
      'Clinical documentation automation',
      'Compliance policy Q&A assistant',
      'Insurance pre-authorization drafting',
    ],
  },
  {
    icon: Landmark,
    color: 'bg-[#5856D6] dark:bg-[#5E5CE6]',
    dotColor: 'bg-[#5856D6] dark:bg-[#5E5CE6]',
    name: 'Local Government',
    link: '/industries/local-government',
    applications: [
      'Citizen inquiry & permit Q&A assistant',
      'Policy document search & retrieval',
      'Council meeting minutes summarization',
      'Regulatory compliance automation',
    ],
  },
  {
    icon: DollarSign,
    color: 'bg-[#34C759] dark:bg-[#30D158]',
    dotColor: 'bg-[#34C759] dark:bg-[#30D158]',
    name: 'Finance',
    link: '/industries/finance',
    applications: [
      'Financial report analysis & summaries',
      'Risk & compliance document Q&A',
      'Investment memo generation',
      'Audit trail documentation support',
    ],
  },
  {
    icon: Building,
    color: 'bg-[#FF9500] dark:bg-[#FF9F0A]',
    dotColor: 'bg-[#FF9500] dark:bg-[#FF9F0A]',
    name: 'Real Estate',
    applications: [
      'Property listing & document analysis',
      'Client communication drafting',
      'Lease agreement review & summaries',
      'Market report intelligence retrieval',
    ],
  },
  {
    icon: Cog,
    color: 'bg-[#007AFF] dark:bg-[#0A84FF]',
    dotColor: 'bg-[#007AFF] dark:bg-[#0A84FF]',
    name: 'Manufacturing',
    applications: [
      'Operations manual search & retrieval',
      'Quality control report automation',
      'Supply chain document processing',
      'Safety compliance knowledge base',
    ],
  },
  {
    icon: GraduationCap,
    color: 'bg-[#AF52DE] dark:bg-[#BF5AF2]',
    dotColor: 'bg-[#AF52DE] dark:bg-[#BF5AF2]',
    name: 'Education',
    applications: [
      'Curriculum & policy document assistant',
      'Student support knowledge base',
      'Administrative workflow automation',
      'Faculty research summarization',
    ],
  },
  {
    icon: ShoppingBag,
    color: 'bg-[#FF2D55] dark:bg-[#FF375F]',
    dotColor: 'bg-[#FF2D55] dark:bg-[#FF375F]',
    name: 'Retail & E-Commerce',
    applications: [
      'Product description generation at scale',
      'Customer service AI assistant',
      'Inventory & supplier document analysis',
      'Return policy & FAQ automation',
    ],
  },
  {
    icon: Map,
    color: 'bg-[#34C759] dark:bg-[#30D158]',
    dotColor: 'bg-[#34C759] dark:bg-[#30D158]',
    name: 'Professional Services',
    applications: [
      'Proposal & SOW drafting assistant',
      'Project knowledge base & retrieval',
      'Client onboarding document automation',
      'Internal methodology Q&A system',
    ],
  },
];

const features = [
  {
    icon: Brain,
    color: 'bg-[#007AFF] dark:bg-[#0A84FF]',
    title: 'AI Trained on Your Documents',
    description:
      'Deploy an AI assistant exclusively trained on your internal knowledge base, policies, and operational data.',
  },
  {
    icon: FileText,
    color: 'bg-[#AF52DE] dark:bg-[#BF5AF2]',
    title: 'Instant Document Analysis',
    description:
      'Automatically analyze reports, emails, and files to surface insights without manual review.',
  },
  {
    icon: RefreshCw,
    color: 'bg-[#34C759] dark:bg-[#30D158]',
    title: 'Workflow Automation',
    description:
      'Automate repetitive business processes integrated with your existing systems and tools.',
  },
  {
    icon: Lightbulb,
    color: 'bg-[#FF9500] dark:bg-[#FF9F0A]',
    title: 'Intelligent Knowledge Retrieval',
    description:
      'Employees instantly retrieve information, policies, and operational guidance in seconds.',
  },
  {
    icon: Target,
    color: 'bg-[#FF2D55] dark:bg-[#FF375F]',
    title: 'Improved Decision Support',
    description:
      'AI-assisted insights that enhance human decision-making rather than replacing it.',
  },
  {
    icon: Megaphone,
    color: 'bg-[#5856D6] dark:bg-[#5E5CE6]',
    title: 'AI Marketing & Remarketing',
    description:
      'Target the right audiences, personalize outreach, and run AI-powered remarketing campaigns that convert.',
  },
];

const useCases = [
  {
    icon: Brain,
    color: 'bg-[#007AFF] dark:bg-[#0A84FF]',
    title: 'Internal Knowledge Assistant',
    description: "Deploy an AI assistant trained on your company's internal knowledge base.",
    detail: 'Employees can instantly retrieve information, policies, and operational guidance.',
  },
  {
    icon: FileText,
    color: 'bg-[#AF52DE] dark:bg-[#BF5AF2]',
    title: 'Document Analysis and Automation',
    description: 'Automatically analyze contracts, reports, and business documents.',
    detail: 'Reduce manual review and accelerate workflows.',
  },
  {
    icon: Users,
    color: 'bg-[#34C759] dark:bg-[#30D158]',
    title: 'Customer Communication Support',
    description:
      'Deploy AI to assist in drafting responses, analyzing inquiries, and improving customer interactions.',
    detail: 'Faster response times and consistent communication quality.',
  },
  {
    icon: RefreshCw,
    color: 'bg-[#FF9500] dark:bg-[#FF9F0A]',
    title: 'Workflow Automation',
    description:
      'Automate repetitive business processes using AI integrated with your systems.',
    detail: 'Reduce operational overhead and improve efficiency.',
  },
  {
    icon: Megaphone,
    color: 'bg-[#5856D6] dark:bg-[#5E5CE6]',
    title: 'AI Marketing & Remarketing',
    description:
      'Run AI-powered marketing campaigns starting with your AI-featured website as the conversion hub.',
    detail:
      'Target specific audiences, retarget website visitors, and automate marketing activities that drive revenue.',
  },
];

const steps = [
  {
    icon: Rocket,
    color: 'bg-[#007AFF] dark:bg-[#0A84FF]',
    title: 'Deployment',
    description: <><ArvinTechLink /> deploys IntelligenceAmplifier.AI securely within your organization.</>,
  },
  {
    icon: Lightbulb,
    color: 'bg-[#AF52DE] dark:bg-[#BF5AF2]',
    title: 'Training',
    description: 'The system is trained on your internal documents and operational knowledge.',
  },
  {
    icon: Target,
    color: 'bg-[#34C759] dark:bg-[#30D158]',
    title: 'Integration',
    description: 'The platform integrates with your workflows and business systems.',
  },
  {
    icon: Sparkles,
    color: 'bg-[#FF9500] dark:bg-[#FF9F0A]',
    title: 'Amplification',
    description: 'Your organization gains continuous AI-assisted operational intelligence.',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Secure and Private Deployment',
    description:
      "Deployed securely within your organization's infrastructure with full data privacy.",
  },
  {
    icon: Brain,
    title: 'Trained on Your Data',
    description:
      "Exclusively trained on your organization's documents, not generic public data.",
  },
  {
    icon: Target,
    title: 'System Integration',
    description: 'Integrates seamlessly with your existing business workflows and tools.',
  },
  {
    icon: Globe,
    title: 'Scalable',
    description: 'Scales across your entire organization as your needs grow.',
  },
  {
    icon: Rocket,
    title: <><ArvinTechLink className="text-lg" /> Supported</>,
    description: <>Deployed, integrated, and managed by <ArvinTechLink />&apos;s experienced team.</>,
  },
  {
    icon: Clock,
    title: 'Operational Efficiency',
    description: 'Reduces time spent on repetitive tasks and manual information retrieval.',
  },
];

const marketingFeatures = [
  {
    icon: Globe,
    color: 'bg-[#007AFF] dark:bg-[#0A84FF]',
    title: 'AI-Featured Website',
    description:
      'Your website becomes an AI-powered conversion hub — personalizing content for each visitor and capturing intent signals in real time.',
  },
  {
    icon: Target,
    color: 'bg-[#5856D6] dark:bg-[#5E5CE6]',
    title: 'Precision Audience Targeting',
    description:
      'AI analyzes behavioral data, firmographics, and intent signals to identify and target high-value prospects with pinpoint accuracy.',
  },
  {
    icon: TrendingUp,
    color: 'bg-[#34C759] dark:bg-[#30D158]',
    title: 'Remarketing Automation',
    description:
      'Automatically re-engage website visitors, past leads, and customers with personalized AI-driven campaigns across channels.',
  },
];

const marketingSteps = [
  {
    title: 'Identify Targets',
    description:
      'AI profiles your ideal customers using your CRM data, website analytics, and market signals.',
  },
  {
    title: 'Personalize Messaging',
    description:
      'Generate tailored outreach, ad copy, and landing page content for each audience segment.',
  },
  {
    title: 'Launch Campaigns',
    description:
      'Deploy AI-assisted campaigns across email, paid media, and your website simultaneously.',
  },
  {
    title: 'Remarket & Convert',
    description:
      'Automatically follow up with engaged prospects through remarketing sequences that close deals.',
  },
];

const pricingTiers = [
  {
    name: 'Starter Deployment',
    price: '200',
    tagline: 'Ideal for small teams',
    featured: false,
    features: [
      'Internal AI assistant deployment',
      'Trained on up to 500 documents',
      'Basic workflow integration',
      'Email support',
      'Monthly performance review',
    ],
  },
  {
    name: 'Professional Deployment',
    price: '500',
    tagline: 'Full internal AI assistant deployment',
    featured: true,
    features: [
      'Full internal AI assistant deployment',
      'Unlimited document training',
      'Advanced workflow automation',
      'Priority support',
      'Quarterly optimization review',
      'Custom knowledge domains',
    ],
  },
  {
    name: 'Enterprise Deployment',
    price: '1,500',
    tagline: 'Organization-wide deployment with advanced integration',
    featured: false,
    features: [
      'Organization-wide deployment',
      'Advanced system integrations',
      'Custom AI model configuration',
      'Dedicated ArvinTech support',
      'Monthly strategic review',
      'SLA guarantees',
    ],
  },
];

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const webPageSchema = generateWebPageSchema({
    title: 'IntelligenceAmplifier.AI — Deploy AI That Amplifies Your Organization',
    description:
      "IntelligenceAmplifier.AI is a deployable AI platform that integrates with your organization's documents, systems, and workflows to automate analysis, enhance decision-making, and increase operational efficiency.",
    url: '/',
    image: '/IA-logo.png',
  });

  return (
    <>
      <StructuredData data={[organizationSchema, webPageSchema]} />
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Black base */}
          <div className="absolute inset-0 bg-black" />

          {/* Background image — dim overlay on black */}
          <div className="absolute inset-0 opacity-[0.25]">
            <Image src="/abstractMind.png" alt="" fill className="object-cover" priority />
          </div>

          {/* Color accent — vivid on black for drama */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/20 via-transparent to-[#BF5AF2]/15" />

          {/* Ambient orbs */}
          <div className="absolute top-40 left-20 w-[700px] h-[700px] bg-[#0A84FF] rounded-full filter blur-[160px] opacity-25 animate-float-slow" />
          <div
            className="absolute bottom-40 right-20 w-[700px] h-[700px] bg-[#BF5AF2] rounded-full filter blur-[160px] opacity-20 animate-float-slow"
            style={{ animationDelay: '2s' }}
          />

          {/* Bottom fade to next section */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
            <div className="text-center space-y-8">
              {/* Logo */}
              <div className="flex justify-center mb-12 animate-fade-in-scale">
                <div className="relative p-10 glass-effect rounded-[40px]">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                    <Image
                      src="/IA-logo.png"
                      alt="IntelligenceAmplifier.AI Logo"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] animate-fade-in-up drop-shadow-lg">
                Deploy AI That<br />Amplifies Your Organization
              </h1>

              <p
                className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                IntelligenceAmplifier.AI is a deployable AI platform that integrates with your
                organization&apos;s documents, systems, and workflows to automate analysis, enhance
                decision-making, and increase operational efficiency.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                <Link href="mailto:info@arvintech.com?subject=Business Demo Request">
                  <button className="px-10 py-4 bg-[#007AFF] dark:bg-[#0A84FF] text-white rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgb(0,122,255,0.3)]">
                    Schedule Business Demo
                  </button>
                </Link>
                <Link href="mailto:info@arvintech.com?subject=Deployment Consultation Request">
                  <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-semibold hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/25">
                    Request Deployment Consultation
                  </button>
                </Link>
              </div>

              <p
                className="text-base text-white/50 animate-fade-in-up font-medium"
                style={{ animationDelay: '0.3s' }}
              >
                Deployment and support provided by{' '}
                <ArvinTechLink />{' '}
                — Managed IT and AI Services Since 2000
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT IT DOES ── */}
        <section className="py-32 relative overflow-hidden bg-white dark:bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
                What IntelligenceAmplifier.AI Does
              </h2>
              <p className="text-xl text-[#1d1d1f]/80 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
                IntelligenceAmplifier.AI enables organizations to deploy secure, internal AI
                assistants trained on their own data, documents, and operational knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="glass-card rounded-[24px] p-8 flex items-start gap-5 hover:scale-[1.02] transition-all duration-300 shadow-md"
                >
                  <div
                    className={`w-12 h-12 rounded-[12px] ${f.color} flex items-center justify-center flex-shrink-0 shadow-sm`}
                  >
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-block backdrop-blur-md bg-[#007AFF]/10 dark:bg-[#0A84FF]/20 rounded-2xl px-10 py-6 border border-[#007AFF]/20">
                <p className="text-xl sm:text-2xl font-bold text-[#007AFF] dark:text-[#0A84FF]">
                  This is not generic AI.<br />It is AI aligned with your organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUSINESS USE CASES ── */}
        <section id="use-cases" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.40] dark:opacity-[0.25]">
            <Image src="/abstractMind.png" alt="" fill className="object-cover scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 via-transparent to-[#34C759]/5" />

          <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight drop-shadow-sm">
                Business Use Cases
              </h2>
              <p className="text-xl text-[#1d1d1f] dark:text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
                Deploy AI where it matters most in your organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((uc, i) => (
                <div
                  key={i}
                  className="glass-card rounded-[28px] p-10 hover:scale-[1.02] transition-all duration-500 shadow-lg"
                >
                  <div
                    className={`w-14 h-14 rounded-[14px] ${uc.color} flex items-center justify-center mb-6 shadow-md`}
                  >
                    <uc.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-3 tracking-tight">
                    {uc.title}
                  </h3>
                  <p className="text-base text-[#1d1d1f] dark:text-white/80 leading-relaxed">
                    {uc.description}
                  </p>
                  <p className="text-sm text-[#1d1d1f]/60 dark:text-white/50 leading-relaxed mt-2">
                    {uc.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRY APPLICATIONS ── */}
        <section id="industries" className="py-32 relative overflow-hidden bg-white dark:bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-[#007AFF] dark:text-[#0A84FF] uppercase tracking-widest mb-4">
                Built for Every Sector
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
                Industry Applications
              </h2>
              <p className="text-xl text-[#1d1d1f]/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
                IntelligenceAmplifier.AI adapts to the specific documents, workflows, and knowledge
                of your industry — out of the box.
              </p>
            </div>

            {/* Industry grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, i) => {
                const CardInner = (
                  <div className="group glass-card rounded-[24px] p-8 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 h-full">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-[12px] ${ind.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <ind.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Industry name */}
                    <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-4 tracking-tight flex items-center gap-2">
                      {ind.name}
                      {ind.link && (
                        <span className="text-xs font-semibold text-[#007AFF] dark:text-[#0A84FF] bg-[#007AFF]/10 dark:bg-[#0A84FF]/20 px-2 py-0.5 rounded-full">
                          Case Study
                        </span>
                      )}
                    </h3>

                    {/* Applications */}
                    <ul className="space-y-2">
                      {ind.applications.map((app, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#1d1d1f]/70 dark:text-white/60 leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${ind.dotColor}`} />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                );

                return ind.link ? (
                  <Link key={i} href={ind.link}>{CardInner}</Link>
                ) : (
                  <div key={i}>{CardInner}</div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-[#1d1d1f]/60 dark:text-white/50 mb-6 text-lg">
                Don&apos;t see your industry?
              </p>
              <Link href="mailto:info@arvintech.com?subject=Industry Inquiry">
                <button className="px-10 py-4 bg-[#007AFF] dark:bg-[#0A84FF] text-white rounded-full text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgb(0,122,255,0.3)]">
                  Ask About Your Industry
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── AI MARKETING ── */}
        <section id="ai-marketing" className="py-32 relative overflow-hidden bg-white dark:bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/20 border border-[#007AFF]/20 mb-6">
                <Megaphone className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" />
                <span className="text-sm font-semibold text-[#007AFF] dark:text-[#0A84FF] uppercase tracking-wide">New Capability</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
                AI Marketing &amp; Remarketing
              </h2>
              <p className="text-xl text-[#1d1d1f]/80 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
                Starting with an AI-featured website, IntelligenceAmplifier.AI powers intelligent
                marketing campaigns — targeting the right audiences and driving remarketing
                activities that convert.
              </p>
            </div>

            {/* Feature row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {marketingFeatures.map((f, i) => (
                <div
                  key={i}
                  className="glass-card rounded-[28px] p-10 text-center hover:scale-[1.02] transition-all duration-500 shadow-lg"
                >
                  <div
                    className={`w-16 h-16 rounded-full ${f.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <f.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white mb-3">{f.title}</h3>
                  <p className="text-sm text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>

            {/* How AI marketing works — horizontal steps */}
            <div className="glass-card rounded-[32px] p-10 sm:p-14 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-10 text-center tracking-tight">
                How AI Marketing Works
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {marketingSteps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#007AFF] dark:bg-[#0A84FF] text-white flex items-center justify-center font-black text-lg shadow-md flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-[#1d1d1f]/60 dark:text-white/60 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA strip */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/industries/ai-marketing">
                <button className="px-10 py-4 bg-[#5856D6] dark:bg-[#5E5CE6] text-white rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#5856D6]/30">
                  Read the Full Case Study
                </button>
              </Link>
              <Link href="mailto:info@arvintech.com?subject=AI Marketing Inquiry">
                <button className="px-10 py-4 glass-effect text-[#1d1d1f] dark:text-white rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 border border-[#1d1d1f]/20 dark:border-white/20">
                  Explore AI Marketing Services
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="py-32 relative bg-[#f5f5f7] dark:bg-[#000000]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
                How It Works
              </h2>
              <p className="text-xl text-[#1d1d1f]/80 dark:text-white/80 max-w-2xl mx-auto">
                Four steps from consultation to operational AI intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="glass-card rounded-[24px] p-8 h-full text-center hover:scale-[1.02] transition-all duration-300 shadow-md">
                    <div
                      className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xs font-bold text-[#1d1d1f]/40 dark:text-white/40 uppercase tracking-widest mb-2">
                      Step {i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#007AFF]/40 dark:bg-[#0A84FF]/40 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORM BENEFITS ── */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/abstractMind.png" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF] via-[#AF52DE] to-[#34C759] dark:from-[#0A84FF] dark:via-[#BF5AF2] dark:to-[#30D158] mix-blend-multiply dark:mix-blend-screen" />
          </div>
          <div className="absolute inset-0 backdrop-blur-[100px]" />
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float-slow" />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float-slow"
            style={{ animationDelay: '3s' }}
          />

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
                Platform Benefits
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Built for organizations that demand security, control, and performance
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="backdrop-blur-sm bg-white/10 dark:bg-black/20 rounded-[20px] p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-white/20 flex items-center justify-center mb-4">
                    <b.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING — hidden for now ── */}

        {/* ── IA ATOMIC + POWERED BY ARVINTECH ── */}
        <section className="py-24 sm:py-32 relative bg-white dark:bg-[#1a1a1a] overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#007AFF] rounded-full filter blur-[200px] opacity-[0.04] dark:opacity-[0.06]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#34C759] rounded-full filter blur-[200px] opacity-[0.04] dark:opacity-[0.06]" />

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">

            {/* IA Atomic Introduction */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/15 border border-[#007AFF]/20 dark:border-[#0A84FF]/25 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#007AFF] dark:bg-[#0A84FF] animate-pulse" />
                <span className="text-sm font-semibold text-[#007AFF] dark:text-[#0A84FF] uppercase tracking-wide">Introducing</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
                IA Atomic
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]/70 dark:text-white/60 mb-8 tracking-tight">
                The Intelligence Amplifier Appliance
              </p>
              <p className="text-xl text-[#1d1d1f]/70 dark:text-white/60 max-w-3xl mx-auto leading-relaxed">
                A self-contained, pre-configured AI deployment that arrives ready to power your
                organization — plug it in, train it on your documents, and start amplifying
                your team&apos;s intelligence on day one.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <div className="glass-card rounded-[24px] p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#007AFF] dark:bg-[#0A84FF] flex items-center justify-center mb-5 shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3 tracking-tight">
                  Your Data Never Leaves
                </h3>
                <p className="text-sm text-[#1d1d1f]/65 dark:text-white/55 leading-relaxed">
                  IA Atomic runs entirely on-premise. Your documents, your queries, and your
                  AI&apos;s knowledge stay within your physical control — no cloud dependency,
                  no external API calls, no data transmission.
                </p>
              </div>

              <div className="glass-card rounded-[24px] p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#34C759] dark:bg-[#30D158] flex items-center justify-center mb-5 shadow-md">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3 tracking-tight">
                  Deploy in Days, Not Months
                </h3>
                <p className="text-sm text-[#1d1d1f]/65 dark:text-white/55 leading-relaxed">
                  Pre-loaded with IntelligenceAmplifier.AI, the LLM inference engine, vector
                  database, and document ingestion pipeline. Connect to your network, feed it
                  your documents, and the system is operational.
                </p>
              </div>

              <div className="glass-card rounded-[24px] p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#AF52DE] dark:bg-[#BF5AF2] flex items-center justify-center mb-5 shadow-md">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3 tracking-tight">
                  Enterprise AI, Compact Form
                </h3>
                <p className="text-sm text-[#1d1d1f]/65 dark:text-white/55 leading-relaxed">
                  GPU-accelerated hardware running the same architecture deployed in our
                  healthcare, government, and finance case studies — packaged into an
                  appliance that fits in a standard server rack.
                </p>
              </div>

              <div className="glass-card rounded-[24px] p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#FF9500] dark:bg-[#FF9F0A] flex items-center justify-center mb-5 shadow-md">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3 tracking-tight">
                  Trained on Your Knowledge
                </h3>
                <p className="text-sm text-[#1d1d1f]/65 dark:text-white/55 leading-relaxed">
                  Feed it your policies, procedures, research, client documents, and
                  operational manuals. The AI learns exclusively from your organization&apos;s
                  own institutional knowledge — not the internet.
                </p>
              </div>

              <div className="glass-card rounded-[24px] p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#FF2D55] dark:bg-[#FF375F] flex items-center justify-center mb-5 shadow-md">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3 tracking-tight">
                  Every Industry, Every Size
                </h3>
                <p className="text-sm text-[#1d1d1f]/65 dark:text-white/55 leading-relaxed">
                  Healthcare, government, finance, legal, manufacturing, education — IA Atomic
                  adapts to any industry. Configurations available for organizations from 50
                  to 5,000+ employees.
                </p>
              </div>

              <div className="glass-card rounded-[24px] p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#5856D6] dark:bg-[#5E5CE6] flex items-center justify-center mb-5 shadow-md">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3 tracking-tight">
                  Managed by <ArvinTechLink className="text-lg" />
                </h3>
                <p className="text-sm text-[#1d1d1f]/65 dark:text-white/55 leading-relaxed">
                  Every IA Atomic includes deployment, configuration, document preparation,
                  training, and ongoing support from <ArvinTechLink /> — managed IT and AI
                  services since 2000.
                </p>
              </div>
            </div>

            {/* Powered by ArvinTech card */}
            <div className="glass-card rounded-[40px] p-14 shadow-xl text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
                Powered by <ArvinTechLink className="text-3xl sm:text-4xl font-bold" showLogo />
              </h3>
              <p className="text-xl text-[#1d1d1f]/80 dark:text-white/80 leading-relaxed mb-4 max-w-2xl mx-auto">
                IntelligenceAmplifier.AI and the IA Atomic appliance are deployed and supported
                by <ArvinTechLink />, providing managed IT and AI automation services since 2000.
              </p>
              <p className="text-lg text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed max-w-2xl mx-auto">
                From document preparation to deployment to ongoing optimization — <ArvinTechLink /> ensures
                your AI investment delivers measurable results from day one.
              </p>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-32 relative overflow-hidden bg-[#f5f5f7] dark:bg-[#000000]">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#007AFF] rounded-full filter blur-[150px] opacity-15 dark:opacity-10" />
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#AF52DE] rounded-full filter blur-[150px] opacity-15 dark:opacity-10" />

          <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              Deploy IntelligenceAmplifier.AI in Your Organization
            </h2>
            <p className="text-xl text-[#1d1d1f]/70 dark:text-white/70 mb-12 leading-relaxed">
              Join organizations using AI aligned with their own knowledge, documents, and workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:info@arvintech.com?subject=Business Demo Request">
                <button className="px-12 py-5 bg-[#007AFF] dark:bg-[#0A84FF] text-white rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[0_8px_40px_rgb(0,122,255,0.35)]">
                  Schedule Demo
                </button>
              </Link>
              <Link href="mailto:info@arvintech.com?subject=Deployment Consultation">
                <button className="px-12 py-5 glass-effect text-[#1d1d1f] dark:text-white rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 border border-[#1d1d1f]/20 dark:border-white/20">
                  Request Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="py-24 relative overflow-hidden bg-white dark:bg-[#1a1a1a] border-t border-[var(--separator)]">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-3xl font-bold text-[#1d1d1f] dark:text-white mb-8 tracking-tight">
              Intelligence Amplification Philosophy
            </h2>
            <blockquote className="text-xl sm:text-2xl text-[#1d1d1f]/80 dark:text-white/80 leading-relaxed italic font-medium mb-8">
              &quot;Artificial intelligence should amplify human intelligence — not replace it.&quot;
            </blockquote>
            <p className="text-lg text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed max-w-2xl mx-auto">
              IntelligenceAmplifier.AI enables organizations to enhance their capabilities while
              preserving human judgment, creativity, and decision-making. This is intelligence
              amplification.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
