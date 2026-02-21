import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ArvinTechLink from '@/components/ArvinTechLink';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Government AI Case Study — IntelligenceAmplifier.AI',
  description:
    'How the City of Meridian Falls deployed IntelligenceAmplifier.AI to cut citizen inquiry response time by 74%, automate permit processing, and save $1.2M annually in administrative overhead.',
};

export default function LocalGovernmentCaseStudy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">

        {/* ── HERO BANNER ── */}
        <section className="relative overflow-hidden bg-[#1a1a1a] dark:bg-black py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5856D6]/20 via-transparent to-[#007AFF]/15" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5856D6] rounded-full filter blur-[180px] opacity-10" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#007AFF] rounded-full filter blur-[180px] opacity-10" />

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/#industries"
                className="text-sm text-white/50 hover:text-white/80 transition-colors duration-200"
              >
                ← Industries
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-sm text-[#5856D6] font-semibold">Local Government</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5856D6]/20 border border-[#5856D6]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#5856D6] animate-pulse" />
              <span className="text-sm font-semibold text-[#5856D6] uppercase tracking-wide">Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              From 14-Day Wait Times<br className="hidden sm:block" /> to Instant Citizen Answers
            </h1>

            <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-10">
              How the City of Meridian Falls deployed IntelligenceAmplifier.AI to transform
              citizen services, automate permit processing, and give every city employee
              instant access to the full breadth of municipal knowledge — while maintaining
              complete data sovereignty.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroStats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[16px] p-5 backdrop-blur-sm">
                  <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-xs text-white/50 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 space-y-20">

          {/* 1. EXECUTIVE SUMMARY */}
          <section>
            <SectionLabel number="01" label="Executive Summary" color="text-[#5856D6]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              The Situation at a Glance
            </h2>
            <Prose>
              The City of Meridian Falls is a mid-size municipality serving 148,000 residents
              across 12 departments including Public Works, Planning &amp; Zoning, Code Enforcement,
              Parks &amp; Recreation, the City Clerk&apos;s Office, Finance, and the City Manager&apos;s
              Office. The city employs 620 full-time staff and processes approximately 34,000
              citizen service requests, 8,200 permit applications, and 1,100 public records
              requests annually.
            </Prose>
            <Prose>
              Despite a decade of investment in digital government platforms — online permit
              portals, a 311 citizen request system, and a redesigned city website — Meridian
              Falls was drowning in its own institutional knowledge. Ordinances spanning forty
              years, zoning codes across 23 districts, council resolutions numbering in the
              thousands, departmental procedures never consolidated, and a permit process that
              required applicants to navigate requirements scattered across six different
              document sources. Citizens waited an average of 14 business days for substantive
              responses to inquiries. Staff spent 40% of their workday searching for information
              they knew existed but could not locate quickly.
            </Prose>
            <Prose>
              In mid-2024, Meridian Falls engaged <ArvinTechLink /> to deploy IntelligenceAmplifier.AI
              as the city&apos;s unified knowledge intelligence layer — a private AI system trained
              exclusively on the city&apos;s own ordinances, policies, procedures, meeting minutes,
              and operational documents. The deployment took 16 weeks from contract execution
              to full production. Within 90 days of launch, average citizen response time dropped
              from 14 days to 3.2 days, permit processing accelerated by 58%, and the city
              projected $1.2 million in annual operational savings.
            </Prose>
            <Prose>
              This case study documents the technical architecture, data preparation, deployment
              workflow, and measured outcomes of that engagement.
            </Prose>
          </section>

          <Divider />

          {/* 2. THE CHALLENGE */}
          <section>
            <SectionLabel number="02" label="The Challenge" color="text-[#FF9500]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              Five Systemic Failures Hiding in Plain Sight
            </h2>
            <Prose>
              Meridian Falls&apos; operational challenges were not caused by incompetent staff or
              inadequate technology. They were caused by the exponential growth of institutional
              knowledge that no human — and no traditional software system — could navigate
              efficiently. Every department had its own document repositories, its own
              interpretation of shared ordinances, and its own tribal knowledge that existed
              only in the heads of senior employees.
            </Prose>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
              {challenges.map((c, i) => (
                <div key={i} className="glass-card rounded-[20px] p-7">
                  <div className="text-2xl font-black text-[#5856D6] mb-3">{c.stat}</div>
                  <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-[#1d1d1f]/70 dark:text-white/60 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>

            <Prose>
              The root cause across all five failures was identical: the city&apos;s knowledge was
              fragmented across systems that didn&apos;t communicate with each other. The zoning
              code lived in one system. The related ordinances lived in another. The council
              resolutions that amended those ordinances lived in meeting minutes stored
              somewhere else. The departmental procedures that implemented those ordinances
              were in yet another location — if they were documented at all.
            </Prose>
            <Prose>
              Staff who had been with the city for twenty years could navigate this complexity
              through institutional memory. New hires could not. And citizens had no chance.
              When a resident called to ask whether they could build a detached garage on their
              property, the answer required cross-referencing the zoning district map, the
              zoning code setback requirements, recent variance approvals on the same block,
              and the building permit application checklist. No single system contained the
              complete answer. The city needed an AI that could.
            </Prose>
          </section>

          <Divider />

          {/* 3. SOLUTION OVERVIEW */}
          <section>
            <SectionLabel number="03" label="Solution Overview" color="text-[#007AFF]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              A Private AI Brain for the Entire Municipality
            </h2>
            <Prose>
              <ArvinTechLink /> proposed IntelligenceAmplifier.AI as a closed-loop, municipally
              owned AI deployment. The foundational principle: the system would be trained
              exclusively on Meridian Falls&apos; own documents and would run within infrastructure
              controlled by the city. No citizen data, no internal communications, and no
              proprietary municipal documents would ever leave the city&apos;s network or be processed
              by third-party AI providers.
            </Prose>
            <Prose>
              The architecture used Retrieval-Augmented Generation (RAG) — a design pattern where
              a large language model is paired with a private vector database containing the
              city&apos;s full document corpus. Rather than relying on generic AI knowledge, every
              response is grounded in the city&apos;s actual ordinances, resolutions, policies, and
              procedures. The AI retrieves and synthesizes — it does not guess.
            </Prose>
            <Prose>
              Five primary use cases were scoped for the initial deployment:
            </Prose>
            <ol className="list-decimal list-inside space-y-3 my-6 text-[#1d1d1f]/80 dark:text-white/70 text-base leading-relaxed">
              <li><strong className="text-[#1d1d1f] dark:text-white">Citizen Inquiry Assistant</strong> — AI-powered responses to resident questions about permits, zoning, ordinances, and city services</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Permit Application Navigator</strong> — Guided permit workflows that identify requirements, check zoning compliance, and pre-validate applications</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Policy &amp; Ordinance Q&amp;A</strong> — Instant answers for city staff across all departments, with source citations to specific code sections</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Council Meeting Intelligence</strong> — Searchable, AI-summarized meeting minutes with resolution tracking and decision history</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Staff Onboarding Knowledge Base</strong> — An AI-guided orientation through city procedures, organizational structure, and departmental protocols</li>
            </ol>
            <Prose>
              A sixth use case — automated public records request triage — was added during
              the pilot phase after the City Clerk&apos;s Office identified it as a high-impact
              opportunity to reduce their 22-day average response time.
            </Prose>
          </section>

          <Divider />

          {/* 4. TECH STACK */}
          <section>
            <SectionLabel number="04" label="Tech Stack" color="text-[#AF52DE]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              The Complete Technical Architecture
            </h2>
            <Prose>
              The IntelligenceAmplifier.AI deployment for Meridian Falls is a multi-layer system
              designed for municipal-grade security, public-facing reliability, and seamless
              integration with the city&apos;s existing GIS, permitting, and records management
              platforms.
            </Prose>

            {techStack.map((layer, i) => (
              <div key={i} className="mb-10">
                <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white mb-4 flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full ${layer.color} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}>
                    {i + 1}
                  </span>
                  {layer.title}
                </h3>
                <div className="glass-card rounded-[20px] overflow-hidden">
                  {layer.items.map((item, j) => (
                    <div
                      key={j}
                      className={`flex flex-col sm:flex-row gap-2 sm:gap-6 px-7 py-5 ${
                        j < layer.items.length - 1 ? 'border-b border-[#1d1d1f]/8 dark:border-white/8' : ''
                      }`}
                    >
                      <div className="sm:w-44 flex-shrink-0">
                        <span className="text-xs font-bold text-[#1d1d1f]/50 dark:text-white/40 uppercase tracking-widest">
                          {item.component}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white mb-1">{item.technology}</div>
                        <div className="text-sm text-[#1d1d1f]/60 dark:text-white/50 leading-relaxed">{item.reason}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Prose>
              A critical architectural decision was the hybrid deployment model. The vector
              database and all document processing run on city-controlled infrastructure hosted
              in the municipal data center managed by Meridian Falls&apos; IT department. The LLM
              inference layer runs on a dedicated GPU server provisioned by <ArvinTechLink />,
              physically located in the same data center. A private cloud failover on Azure
              Government provides high-availability during peak citizen usage — typically
              Monday mornings and the days following council meetings.
            </Prose>
            <Prose>
              All communication between system components is encrypted with TLS 1.3. Staff
              access is authenticated via SAML 2.0 single sign-on integrated with the city&apos;s
              Active Directory. The public-facing citizen assistant operates through the city&apos;s
              existing website with rate limiting and abuse detection. No citizen personally
              identifiable information is stored in the AI layer.
            </Prose>
          </section>

          <Divider />

          {/* 5. AI PREPARATION */}
          <section>
            <SectionLabel number="05" label="AI Preparation" color="text-[#34C759]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              Ten Weeks of Groundwork Before a Single Query
            </h2>
            <Prose>
              Municipal document environments are among the most challenging for AI preparation.
              Unlike a corporation with a single document management system, a city government
              accumulates documents across decades, across administrations, across departments
              that often operate with minimal coordination. Ordinances reference other ordinances
              that reference resolutions from twenty years ago. Meridian Falls was no exception.
              <ArvinTechLink /> ran a structured ten-week preparation phase before any AI model
              was trained or tested.
            </Prose>

            <div className="space-y-8 my-10">
              {aiPreparationPhases.map((phase, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#34C759] dark:bg-[#30D158] flex items-center justify-center text-white font-black text-sm shadow-lg">
                      {i + 1}
                    </div>
                    {i < aiPreparationPhases.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[#34C759]/20 mt-3" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-xs font-bold text-[#34C759] uppercase tracking-widest mb-1">{phase.week}</div>
                    <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3">{phase.title}</h3>
                    <p className="text-base text-[#1d1d1f]/70 dark:text-white/60 leading-relaxed mb-4">{phase.description}</p>
                    {phase.details && (
                      <ul className="space-y-2">
                        {phase.details.map((d, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#1d1d1f]/60 dark:text-white/50">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#34C759] flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <CalloutBox color="green">
              <strong>The municipal document challenge:</strong> Government documents are uniquely
              difficult for AI preparation because they are written to be legally precise, not
              semantically clear. An ordinance that says &ldquo;structures as defined in Section
              12.4.2(b)(iii)&rdquo; means nothing to an AI without the referenced section. Our
              cross-reference resolution pipeline resolved 4,847 internal citations before
              embedding — ensuring the AI understands the full context of every provision,
              not just the text of a single section in isolation.
            </CalloutBox>
          </section>

          <Divider />

          {/* 6. AI WORKFLOW */}
          <section>
            <SectionLabel number="06" label="AI Workflow" color="text-[#007AFF]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              How Every Query Flows Through the System
            </h2>
            <Prose>
              Understanding the workflow architecture is critical to understanding why
              IntelligenceAmplifier.AI produces reliable, citation-backed answers rather
              than generic responses. The system uses a Retrieval-Augmented Generation (RAG)
              pipeline with a six-stage processing flow for every query — whether from a
              citizen on the website or a city employee on the internal portal.
            </Prose>

            <div className="my-10 space-y-4">
              {workflowStages.map((stage, i) => (
                <div key={i} className="glass-card rounded-[20px] p-7 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#007AFF] dark:bg-[#0A84FF] flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2">{stage.title}</h3>
                    <p className="text-sm text-[#1d1d1f]/70 dark:text-white/60 leading-relaxed mb-3">{stage.description}</p>
                    {stage.technical && (
                      <div className="bg-[#1d1d1f]/5 dark:bg-white/5 rounded-[10px] px-4 py-3">
                        <p className="text-xs font-mono text-[#1d1d1f]/60 dark:text-white/50 leading-relaxed">{stage.technical}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-5 mt-12">
              Citizen Permit Inquiry Workflow: End-to-End
            </h3>
            <Prose>
              The highest-volume workflow is the citizen permit inquiry — a resident asking
              whether they can do something, what permits they need, and how to apply. Here
              is a detailed trace of how a typical citizen interaction flows through the system:
            </Prose>

            <div className="my-8 glass-card rounded-[24px] overflow-hidden">
              <div className="bg-[#1d1d1f] dark:bg-black px-7 py-4">
                <span className="text-xs font-mono text-white/60 uppercase tracking-widest">Citizen Permit Inquiry — Workflow Trace</span>
              </div>
              {citizenWorkflow.map((step, i) => (
                <div
                  key={i}
                  className={`px-7 py-6 flex gap-5 ${i < citizenWorkflow.length - 1 ? 'border-b border-[#1d1d1f]/8 dark:border-white/8' : ''}`}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#34C759]/20 dark:bg-[#30D158]/20 flex items-center justify-center mt-0.5">
                    <span className="text-[#34C759] dark:text-[#30D158] text-xs font-black">{i + 1}</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1d1d1f]/40 dark:text-white/30 uppercase tracking-widest mb-1">{step.actor}</div>
                    <div className="text-sm text-[#1d1d1f] dark:text-white/80 leading-relaxed">{step.action}</div>
                    {step.latency && (
                      <div className="text-xs text-[#007AFF] dark:text-[#0A84FF] font-mono mt-1">{step.latency}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-5 mt-12">
              Council Meeting Intelligence Workflow
            </h3>
            <Prose>
              The council meeting intelligence use case operates on a batch-plus-interactive
              model. After each council meeting, the AI processes the full meeting minutes,
              identifies motions and votes, links resolutions to affected ordinances, and
              generates structured summaries. City staff and council members can then query
              the system conversationally — &ldquo;What did council decide about the downtown
              parking ordinance in the last six months?&rdquo; — and receive a chronological
              summary with citations to specific meeting dates and resolution numbers.
            </Prose>
            <Prose>
              This workflow replaced a manual process where the City Clerk&apos;s Office would
              receive staff requests for &ldquo;what did council say about X&rdquo; and spend hours
              searching through meeting minutes PDFs. Average response time dropped from
              2.4 days to 12 seconds.
            </Prose>

            <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-5 mt-12">
              Public Records Request Triage Workflow
            </h3>
            <Prose>
              Public records requests are a significant operational burden for municipalities.
              Meridian Falls received approximately 1,100 requests annually, each requiring
              staff to identify responsive documents, review for exemptions, redact sensitive
              information, and compile the response package. The AI workflow for this use case:
            </Prose>
            <ol className="list-decimal list-inside space-y-3 my-6 text-[#1d1d1f]/80 dark:text-white/70 text-base leading-relaxed">
              <li>Request is submitted through the city&apos;s records portal and automatically parsed by the AI to identify the scope and document categories</li>
              <li>AI searches the knowledge base and identifies potentially responsive documents, ranked by relevance</li>
              <li>System flags documents likely to contain exemptions (personnel records, litigation materials, draft documents) for staff review</li>
              <li>Staff reviews the AI-compiled document package, confirms or modifies the selection, and approves release</li>
              <li>Response is generated with a cover letter citing applicable public records statutes</li>
            </ol>
            <Prose>
              Average time from request to compiled document package: <strong>4.2 hours</strong> (AI
              processing) plus staff review. Previously averaged 18 business days of cumulative
              staff time. Public records response compliance rate improved from 71% on-time to
              94% on-time within the first quarter.
            </Prose>
          </section>

          <Divider />

          {/* 7. IMPLEMENTATION TIMELINE */}
          <section>
            <SectionLabel number="07" label="Implementation Timeline" color="text-[#FF9500]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              16 Weeks from Kickoff to Production
            </h2>

            <div className="space-y-3 my-8">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-xs font-bold text-[#FF9500] uppercase tracking-wide">{t.week}</span>
                  </div>
                  <div className="w-px self-stretch bg-[#FF9500]/20 flex-shrink-0 relative">
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#FF9500]" />
                  </div>
                  <div className="pb-6 flex-1">
                    <div className="text-sm font-bold text-[#1d1d1f] dark:text-white mb-1">{t.milestone}</div>
                    <div className="text-sm text-[#1d1d1f]/60 dark:text-white/50 leading-relaxed">{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* 8. DATA GOVERNANCE & SECURITY */}
          <section>
            <SectionLabel number="08" label="Data Governance & Security" color="text-[#5856D6]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              Data Sovereignty by Architecture, Not Policy
            </h2>
            <Prose>
              Municipal AI deployments operate under a unique trust requirement: citizens must
              be able to trust that their government is not sending municipal data to third-party
              AI companies, that their personal information is not being used to train commercial
              models, and that the AI&apos;s responses reflect the city&apos;s actual laws and policies —
              not general internet knowledge. Meridian Falls&apos; deployment was architecturally
              designed to satisfy all three requirements by default.
            </Prose>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
              {securityFeatures.map((f, i) => (
                <div key={i} className="glass-card rounded-[20px] p-6 flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#5856D6] mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-[#1d1d1f] dark:text-white mb-1">{f.title}</div>
                    <div className="text-sm text-[#1d1d1f]/60 dark:text-white/50 leading-relaxed">{f.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <Prose>
              A formal data governance review was conducted by the City Attorney&apos;s Office in
              partnership with <ArvinTechLink /> prior to go-live. The review covered public
              records law compliance, data retention requirements, citizen privacy protections,
              and accessibility standards under Section 508 and WCAG 2.1 AA. The citizen-facing
              assistant includes a visible disclaimer that responses are AI-generated summaries
              and that official determinations require staff confirmation.
            </Prose>
            <Prose>
              All AI interactions — both citizen-facing and internal — are logged with
              timestamp, user type (citizen or staff), query category, and document sources
              retrieved. Citizen queries are anonymized. Staff queries include user identity
              for audit purposes. Logs are retained per the city&apos;s records retention schedule
              and stored in an immutable, append-only audit trail.
            </Prose>
          </section>

          <Divider />

          {/* 9. RESULTS */}
          <section>
            <SectionLabel number="09" label="Results & Outcomes" color="text-[#34C759]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              Measured Outcomes at 90 Days
            </h2>
            <Prose>
              Meridian Falls established a measurement framework at project kickoff to capture
              baseline metrics across all five use cases. The following outcomes were measured
              at the 90-day post-deployment mark using the same methodology as the baseline
              assessment.
            </Prose>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              {results.map((r, i) => (
                <div key={i} className="glass-card rounded-[24px] p-8">
                  <div className="text-4xl font-black text-[#34C759] dark:text-[#30D158] mb-2">{r.metric}</div>
                  <div className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2">{r.title}</div>
                  <div className="text-sm text-[#1d1d1f]/60 dark:text-white/50 leading-relaxed">{r.detail}</div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-5 mt-10">
              Qualitative Feedback
            </h3>
            <Prose>
              Beyond quantitative metrics, the City Manager&apos;s Office conducted structured
              interviews with 42 staff members and reviewed 1,200 citizen feedback submissions
              collected through the AI assistant&apos;s built-in feedback mechanism at the 60-day mark.
            </Prose>
            <ul className="space-y-4 my-6">
              {quotes.map((q, i) => (
                <li key={i} className="glass-card rounded-[20px] p-7">
                  <blockquote className="text-base italic text-[#1d1d1f] dark:text-white/80 leading-relaxed mb-3">
                    &quot;{q.text}&quot;
                  </blockquote>
                  <div className="text-sm font-semibold text-[#1d1d1f]/50 dark:text-white/40">{q.attribution}</div>
                </li>
              ))}
            </ul>
          </section>

          <Divider />

          {/* 10. KEY LEARNINGS */}
          <section>
            <SectionLabel number="10" label="Key Learnings" color="text-[#FF2D55]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              What We Would Do Differently — and What We Would Do Again
            </h2>
            <Prose>
              Every IntelligenceAmplifier.AI deployment generates insights that inform future
              engagements. The Meridian Falls deployment was our first full-scale municipal
              government implementation, and the lessons learned are directly applicable to
              any city, county, or regional government considering AI deployment.
            </Prose>

            <div className="space-y-6 my-8">
              {learnings.map((l, i) => (
                <div key={i} className="glass-card rounded-[20px] p-7">
                  <div className="flex items-start gap-4">
                    <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      l.type === 'do-again'
                        ? 'bg-[#34C759]/15 text-[#34C759]'
                        : 'bg-[#FF9500]/15 text-[#FF9500]'
                    }`}>
                      {l.type === 'do-again' ? '✓ Do Again' : '↺ Improve'}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2">{l.title}</h3>
                      <p className="text-sm text-[#1d1d1f]/70 dark:text-white/60 leading-relaxed">{l.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Prose>
              The Meridian Falls deployment validated a principle that applies uniquely to
              government: the AI&apos;s value is not measured only in efficiency and cost savings —
              it is measured in public trust. When citizens get accurate, cited, instant answers
              to their questions about their government, trust in that government increases.
              When staff can confidently navigate decades of institutional knowledge in seconds,
              service quality increases. AI in local government is not about replacing public
              servants — it is about giving them the tools to serve the public better.
            </Prose>
          </section>

          <Divider />

          {/* CTA */}
          <section className="text-center py-10">
            <div className="glass-card rounded-[40px] p-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-4 tracking-tight">
                Deploy AI in Your Municipality
              </h2>
              <p className="text-lg text-[#1d1d1f]/70 dark:text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Every city, county, and regional government has decades of institutional knowledge.
                We&apos;ll deploy AI trained on yours — securely, privately, and under your
                complete control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:info@arvintech.com?subject=Local Government AI Deployment Inquiry">
                  <button className="px-10 py-4 bg-[#5856D6] text-white rounded-full text-base font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#5856D6]/30">
                    Schedule a Government Demo
                  </button>
                </Link>
                <Link href="/#industries">
                  <button className="px-10 py-4 glass-effect text-[#1d1d1f] dark:text-white rounded-full text-base font-semibold hover:scale-105 transition-all duration-300 border border-[#1d1d1f]/20 dark:border-white/20">
                    Explore Other Industries
                  </button>
                </Link>
              </div>
              <p className="text-sm text-[#1d1d1f]/40 dark:text-white/30 mt-8">
                Deployment and ongoing support by <ArvinTechLink className="text-sm" /> — Managed IT &amp; AI Services Since 2000
              </p>
            </div>
          </section>

        </div>
        <Footer />
      </main>
    </>
  );
}

/* ─── Reusable layout sub-components ─── */

function SectionLabel({ number, label, color }: { number: string; label: string; color: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className={`text-[11px] font-black ${color} uppercase tracking-[0.2em] tabular-nums`}>{number}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-[#1d1d1f]/15 via-[#1d1d1f]/8 to-transparent dark:from-white/15 dark:via-white/8 dark:to-transparent" />
      <span className="text-[11px] font-semibold text-[#1d1d1f]/35 dark:text-white/25 uppercase tracking-[0.15em]">{label}</span>
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[17px] sm:text-lg text-[#1d1d1f]/75 dark:text-white/65 leading-[1.8] mb-6">
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div className="py-2">
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#1d1d1f]/12 to-transparent dark:via-white/10" />
    </div>
  );
}

function CalloutBox({ children, color }: { children: React.ReactNode; color: 'green' | 'blue' }) {
  const styles = {
    green: 'bg-[#34C759]/[0.06] border-[#34C759]/25 dark:bg-[#30D158]/[0.08] dark:border-[#30D158]/25',
    blue: 'bg-[#007AFF]/[0.06] border-[#007AFF]/25 dark:bg-[#0A84FF]/[0.08] dark:border-[#0A84FF]/25',
  };
  return (
    <div className={`rounded-[20px] border p-8 my-8 ${styles[color]}`}>
      <p className="text-base text-[#1d1d1f]/80 dark:text-white/70 leading-relaxed">{children}</p>
    </div>
  );
}

/* ─── Data ─── */

const heroStats = [
  { value: '74%', label: 'Faster citizen inquiry response' },
  { value: '58%', label: 'Permit processing acceleration' },
  { value: '$1.2M', label: 'Projected annual savings' },
  { value: '16 wks', label: 'Kickoff to full production' },
];

const challenges = [
  {
    stat: '14 days',
    title: 'Average Citizen Response Time',
    description:
      'Substantive citizen inquiries about permits, zoning, and city services required an average of 14 business days from submission to a complete, accurate response — driven by the need to research answers across fragmented document systems.',
  },
  {
    stat: '40%',
    title: 'Staff Time Lost to Information Search',
    description:
      'City employees across all departments spent an estimated 40% of their workday searching for policies, ordinances, procedures, and precedents — information that existed but was scattered across dozens of repositories.',
  },
  {
    stat: '6 sources',
    title: 'Permit Application Confusion',
    description:
      'A single permit application required citizens to navigate requirements from up to six different document sources — the municipal code, zoning maps, application checklists, fee schedules, inspection requirements, and applicable variances.',
  },
  {
    stat: '22 days',
    title: 'Public Records Response Time',
    description:
      'The City Clerk\'s Office averaged 22 business days to fulfill public records requests, well above the 10-day statutory target, due to the manual effort of identifying and compiling responsive documents across departments.',
  },
  {
    stat: '9 months',
    title: 'New Employee Effectiveness',
    description:
      'New city employees averaged nine months before they could independently answer citizen questions or navigate the city\'s full institutional knowledge — creating a sustained dependence on senior staff for routine inquiries.',
  },
];

const techStack = [
  {
    title: 'AI & Language Model Layer',
    color: 'bg-[#007AFF]',
    items: [
      {
        component: 'LLM Engine',
        technology: 'Private LLaMA 3.1 70B (quantized, on-premise)',
        reason: 'Open-weight model enables full on-premise deployment within the municipal data center. No city data leaves city-controlled infrastructure. Quantized to 4-bit for GPU efficiency.',
      },
      {
        component: 'Embedding Model',
        technology: 'BGE-M3 (BAAI) — multilingual dense retrieval',
        reason: 'High-quality embeddings for legal and regulatory language. Handles the formal, cross-referencing style of municipal ordinances and resolutions.',
      },
      {
        component: 'RAG Framework',
        technology: 'LangChain + custom municipal retrieval pipeline',
        reason: 'Custom pipeline includes cross-reference resolution for ordinance citations, temporal awareness for superseded policies, and multi-hop retrieval for complex zoning queries.',
      },
      {
        component: 'Inference Server',
        technology: 'vLLM with PagedAttention',
        reason: 'Handles 30+ simultaneous queries during peak citizen usage. Sub-3-second response time for the public-facing citizen assistant.',
      },
    ],
  },
  {
    title: 'Vector Database & Retrieval',
    color: 'bg-[#AF52DE]',
    items: [
      {
        component: 'Vector Store',
        technology: 'Weaviate (self-hosted, municipal data center)',
        reason: 'Stores document embeddings with rich metadata: document type, department, effective date, superseded status, and zoning district applicability. Enables precise filtered retrieval.',
      },
      {
        component: 'Chunking Strategy',
        technology: 'Hierarchical semantic chunking — section-aware',
        reason: 'Municipal codes have deep section hierarchies (Chapter → Article → Section → Subsection). Custom chunking preserves these boundaries and maintains parent-child context.',
      },
      {
        component: 'Reranking',
        technology: 'Cohere Rerank (self-hosted) — cross-encoder',
        reason: 'Reranks top-20 retrieved chunks to top-5 before LLM context injection. Critical for distinguishing between similar ordinance sections that apply to different zoning districts.',
      },
    ],
  },
  {
    title: 'Document Ingestion Pipeline',
    color: 'bg-[#34C759]',
    items: [
      {
        component: 'PDF Extraction',
        technology: 'Apache Tika + custom OCR (Tesseract 5)',
        reason: 'Municipal documents include scanned council resolutions from the 1980s, signed permits, and legacy PDF exports. Multi-engine extraction handles all formats reliably.',
      },
      {
        component: 'Document Classification',
        technology: 'Fine-tuned DistilBERT classifier (18 categories)',
        reason: 'Automatically tags documents as ordinance, resolution, policy, procedure, permit form, meeting minutes, budget document, etc. Enables role-based and category-based retrieval.',
      },
      {
        component: 'Cross-Reference Resolution',
        technology: 'Custom NLP pipeline — regex + dependency parsing',
        reason: 'Identifies and resolves internal citations ("per Section 12.4.2(b)") by linking referenced sections into the embedding context. Resolved 4,847 cross-references across the municipal code.',
      },
      {
        component: 'Update Pipeline',
        technology: 'Apache Airflow — post-council-meeting sync',
        reason: 'After every council meeting, newly adopted ordinances and resolutions are ingested, superseded documents are flagged, and the vector database is updated within 48 hours.',
      },
    ],
  },
  {
    title: 'Integration & Infrastructure',
    color: 'bg-[#FF9500]',
    items: [
      {
        component: 'GIS Integration',
        technology: 'Esri ArcGIS REST API',
        reason: 'Allows the AI to resolve address-based queries by identifying the zoning district, overlay zones, and applicable regulations for a specific parcel — enabling "Can I build X at 123 Main St?" queries.',
      },
      {
        component: 'Permit System',
        technology: 'Tyler Technologies EnerGov API bridge',
        reason: 'Connects the AI to the city\'s existing permit management system. The AI can check permit status, identify required inspections, and pre-validate application completeness.',
      },
      {
        component: 'Authentication',
        technology: 'SAML 2.0 via Azure AD (city SSO) + anonymous citizen tier',
        reason: 'Staff access via existing city credentials with RBAC. Citizens use the public assistant without authentication. Rate limiting and abuse detection protect the public endpoint.',
      },
      {
        component: 'Compute',
        technology: '2× NVIDIA A100 80GB (municipal data center)',
        reason: 'Dedicated GPU cluster provisioned by ArvinTech, physically located in the city\'s secure data center. Under city physical and logical control.',
      },
      {
        component: 'UI Layer',
        technology: 'Next.js 14 — embedded in city website + intranet',
        reason: 'Public citizen assistant embedded on the city website. Internal staff portal deployed on the city intranet. Both share the same AI backend with role-appropriate access controls.',
      },
    ],
  },
];

const aiPreparationPhases = [
  {
    week: 'Week 1–2',
    title: 'Municipal Document Audit & Inventory',
    description:
      'ArvinTech conducted a comprehensive audit of all city document repositories: the Laserfiche records management system, SharePoint departmental sites, the Municode online code library, the City Clerk\'s resolution archive, and legacy shared drives. The audit identified 21,340 documents across 18 document types spanning four decades.',
    details: [
      '21,340 total documents inventoried across 8 source systems',
      '18 distinct document categories mapped to departments and user roles',
      '4,120 documents flagged as superseded or expired and excluded from the active corpus',
      '2,847 council resolutions spanning 1984–2024 requiring temporal indexing',
    ],
  },
  {
    week: 'Week 3',
    title: 'Data Quality Assessment & Legal Review',
    description:
      'Each document category was evaluated for extractability, completeness, currency, and legal status. The City Attorney\'s Office reviewed the approach to ensure the AI would not misrepresent superseded ordinances as current law — a critical requirement for any government AI deployment.',
    details: [
      '19% of documents required remediation before ingestion',
      '12% were scanned legacy documents requiring OCR processing',
      '7% had inconsistent section numbering requiring normalization',
      'City Attorney sign-off obtained on training corpus scope and AI disclaimer language',
    ],
  },
  {
    week: 'Week 4–5',
    title: 'Cross-Reference Resolution & Temporal Indexing',
    description:
      'Municipal codes reference themselves extensively. "Subject to Section 12.4.2(b)(iii)" appears in one section but requires the AI to understand the referenced section to give a useful answer. ArvinTech built a custom pipeline to resolve these cross-references and create temporal metadata — marking which documents supersede which, and when provisions took effect.',
    details: [
      '4,847 internal cross-references identified and resolved across the municipal code',
      '1,203 ordinance amendments linked to their parent ordinances with effective dates',
      '342 superseded provisions flagged with replacement references',
      'Temporal metadata enables the AI to answer "What was the setback requirement before 2019?" accurately',
    ],
  },
  {
    week: 'Week 6–7',
    title: 'Document Processing & Embedding',
    description:
      'Approved documents were processed through the ingestion pipeline: text extraction, hierarchical semantic chunking (preserving the Chapter → Article → Section structure of municipal codes), embedding generation, and vector database indexing.',
    details: [
      '17,220 documents approved for ingestion after audit and legal review',
      '243,680 vector embeddings generated across all document chunks',
      'Average document processing time: 3.8 seconds per document',
      'Total ingestion pipeline runtime: 18.2 hours (weekend batch)',
    ],
  },
  {
    week: 'Week 8–9',
    title: 'Retrieval Quality Testing',
    description:
      'A test suite of 320 queries was developed collaboratively with department heads, the City Clerk, planning staff, and the City Manager\'s Office — representing real questions that citizens and staff ask. Each query was evaluated for retrieval precision, answer accuracy, citation correctness, and response to superseded provisions.',
    details: [
      '320 test queries across 6 use case domains',
      'Initial retrieval precision: 68% (target: 90%+)',
      'Identified 4 document categories with poor chunk boundaries — re-chunked with section-aware splitting',
      'Identified 3 terminology gaps — added municipal abbreviation glossary (PUD, CUP, ROW, BMP, etc.)',
    ],
  },
  {
    week: 'Week 10',
    title: 'Tuning, Prompt Engineering & Re-testing',
    description:
      'Based on test results, ArvinTech refined the retrieval pipeline (adding zoning-district-aware metadata filtering, improving cross-reference context injection), optimized system prompts for each use case, and re-tested the full query set. Final retrieval precision reached 92.1% before production go-live.',
    details: [
      'Retrieval precision improved from 68% to 92.1% through pipeline tuning',
      'Use-case-specific system prompts written for 6 workflow types',
      'Response latency optimized: P95 latency reduced from 7.8s to 2.9s',
      'Department head sign-off obtained on answer quality across all test domains',
    ],
  },
];

const workflowStages = [
  {
    title: 'Query Intake & Access Tier Detection',
    description:
      'A query arrives through either the public citizen portal or the internal staff interface. The system determines the access tier — citizen queries are limited to public documents (ordinances, resolutions, permit information, meeting minutes), while staff queries include internal procedures, draft policies, and departmental documents.',
    technical: 'Source endpoint detected → access tier assigned → document domain filter applied → query passed to retrieval pipeline',
  },
  {
    title: 'Query Decomposition & GIS Resolution',
    description:
      'Complex queries are decomposed into sub-questions. Address-based queries ("Can I build a fence at 456 Oak Ave?") trigger a GIS lookup to identify the parcel\'s zoning district, then decompose into: (1) fence regulations for that zoning district, (2) applicable setback requirements, and (3) permit application checklist.',
    technical: 'LLM sub-query generation → address detected? → Esri ArcGIS parcel lookup → zoning district resolved → 1–4 parallel retrieval paths',
  },
  {
    title: 'Semantic Retrieval with Metadata Filtering',
    description:
      'Each sub-query is converted to a vector embedding and searches the Weaviate database. Retrieval is filtered by: document status (active, not superseded), access tier (citizen vs. staff), and where applicable, zoning district. Hybrid search combines semantic meaning with keyword matching for legal terminology.',
    technical: 'BGE-M3 embedding → Weaviate hybrid query (alpha=0.65 semantic / 0.35 keyword) → metadata filters applied → top-20 chunks returned',
  },
  {
    title: 'Reranking with Cross-Reference Context',
    description:
      'Top-20 chunks are reranked by a cross-encoder model. Chunks containing cross-references have their referenced sections automatically injected into the reranking context — so a chunk saying "per Section 12.4.2(b)" is evaluated with the full text of that referenced section.',
    technical: 'Cohere cross-encoder → cross-reference expansion → chunks scored 0–1 → top-5 selected → full citation chain preserved',
  },
  {
    title: 'Response Generation with Citation',
    description:
      'Top-5 chunks are injected into the LLM context with a role-specific system prompt. The citizen prompt emphasizes plain-language explanations with code citations. The staff prompt provides full legal references and procedural detail. The AI is instructed to explicitly state when a question cannot be answered from available documents.',
    technical: 'System prompt + retrieved context + user query → LLaMA 70B inference → streamed response → inline citations to specific code sections',
  },
  {
    title: 'Output, Disclaimer & Audit Logging',
    description:
      'The response is delivered with inline citations linking to source documents. Citizen responses include a standard disclaimer that AI-generated answers are informational and official determinations require staff review. Every interaction is logged for audit and quality monitoring purposes.',
    technical: 'Response + citations + disclaimer → UI rendering → audit log (timestamp, user_type, query_category, doc_sources) → citizen queries anonymized',
  },
];

const citizenWorkflow = [
  {
    actor: 'Citizen',
    action: 'Visits the City of Meridian Falls website and opens the "Ask the City" assistant. Types: "I want to build a detached garage at 789 Elm Street. What do I need?"',
    latency: null,
  },
  {
    actor: 'AI System',
    action: 'Detects address in query. Calls the Esri ArcGIS API to resolve 789 Elm Street to Parcel ID MF-2847-003, Zoning District R-2 (Single Family Residential), no overlay districts, no historic designation.',
    latency: '0.4 seconds — GIS parcel resolution',
  },
  {
    actor: 'AI System',
    action: 'Decomposes the query into three retrieval paths: (1) accessory structure regulations for R-2 zoning, (2) building permit requirements for detached garages, and (3) setback and lot coverage limits for the R-2 district. Retrieves and reranks relevant ordinance sections and permit checklists.',
    latency: '1.8 seconds — retrieval and reranking',
  },
  {
    actor: 'AI System',
    action: 'Generates a comprehensive response: detached garages are permitted in R-2 as an accessory structure (Ordinance §14.6.3), maximum size is 720 sq ft or 40% of the primary structure footprint (whichever is smaller), rear setback minimum is 5 feet (§14.4.2), a building permit is required (Application Form BP-103), estimated fee is $485 based on the current fee schedule, and two inspections are required (foundation and final). Includes direct links to the applicable ordinance sections and the permit application form.',
    latency: '2.3 seconds — response generation with citations',
  },
  {
    actor: 'Citizen',
    action: 'Reads the response, clicks through to the permit application form, and follows up: "Do I need a site plan?"',
    latency: null,
  },
  {
    actor: 'AI System',
    action: 'Retrieves the site plan requirements from §14.8.1 and the BP-103 application checklist. Responds: Yes, a site plan drawn to scale is required showing the proposed garage location, dimensions, setback distances from all property lines, and the location of existing structures. The site plan does not need to be professionally prepared for residential accessory structures under 1,000 sq ft.',
    latency: '1.6 seconds — follow-up response with context retention',
  },
];

const timeline = [
  { week: 'Week 1', milestone: 'Project Kickoff & Stakeholder Alignment', detail: 'Engaged City Manager, department heads, City Attorney, IT Director, and City Clerk. Established use case priority, success metrics, data access protocols, and public-facing AI disclaimer language.' },
  { week: 'Week 2–3', milestone: 'Municipal Document Audit', detail: 'ArvinTech team embedded with city IT and City Clerk to inventory all document repositories. 21,340 documents identified across 8 systems spanning four decades.' },
  { week: 'Week 4–5', milestone: 'Data Quality, Legal Review & Cross-Reference Resolution', detail: 'Document remediation, OCR processing of legacy scans, City Attorney review, and cross-reference pipeline construction. 4,847 internal citations resolved.' },
  { week: 'Week 6', milestone: 'Infrastructure Deployment', detail: 'GPU cluster provisioned in municipal data center. Weaviate, vLLM, and supporting services deployed. Network security and penetration testing completed.' },
  { week: 'Week 7–8', milestone: 'Document Ingestion & Embedding', detail: '243,680 embeddings generated from 17,220 approved documents. Vector database indexed. Post-council-meeting sync pipeline activated.' },
  { week: 'Week 9', milestone: 'Alpha Testing with Department Champions', detail: '15 department champions (3 per primary use case) ran structured testing. 320 test queries evaluated. Retrieval precision: 68%. Zoning terminology gaps identified.' },
  { week: 'Week 10', milestone: 'Pipeline Tuning & Prompt Engineering', detail: 'Section-aware re-chunking, metadata filtering, cross-reference context injection, and system prompts refined. Retrieval precision improved to 92.1%.' },
  { week: 'Week 11–12', milestone: 'Pilot — Internal Staff Only', detail: 'Full deployment to Planning & Zoning, City Clerk, and Public Works (94 staff). Real-world feedback gathered. Public records triage use case added based on Clerk feedback.' },
  { week: 'Week 13–14', milestone: 'Expanded Rollout — All Staff + Public Citizen Assistant', detail: 'System opened to all 620 city employees. Citizen-facing assistant launched on city website with disclaimer and feedback mechanism. Local press briefing held.' },
  { week: 'Week 15–16', milestone: 'Stabilization & Handover', detail: 'System monitoring handed to city IT. ArvinTech ongoing support SLA activated. Baseline metrics collection completed. City Council presentation delivered. Project formally closed.' },
];

const securityFeatures = [
  { title: 'Zero External Data Transmission', detail: 'All LLM inference runs on the municipal data center GPU cluster. No document content, citizen queries, or city data is ever sent to external AI providers.' },
  { title: 'Municipal Data Sovereignty', detail: 'The entire AI system — models, databases, logs — runs on city-owned or city-controlled infrastructure. The city retains full ownership and control of all data and all AI outputs.' },
  { title: 'AES-256 Encryption at Rest', detail: 'All vector embeddings, document metadata, and system logs encrypted at rest. Encryption keys managed by the city\'s existing IT key management infrastructure.' },
  { title: 'TLS 1.3 in Transit', detail: 'All inter-service communication encrypted with TLS 1.3. Public-facing citizen endpoint served over HTTPS with certificate pinning.' },
  { title: 'Citizen Anonymity by Design', detail: 'No personally identifiable information is collected from citizens using the public assistant. No cookies, no tracking, no login required. Queries are logged anonymously for quality monitoring only.' },
  { title: 'Role-Based Access Control', detail: 'Staff access segmented by department and role at the retrieval layer. Code Enforcement sees enforcement-related documents. Finance sees budget documents. RBAC enforced via SAML attributes from Active Directory.' },
  { title: 'Public Records Law Compliance', detail: 'AI interaction logs are structured to comply with the state\'s public records retention schedule. System designed in consultation with the City Attorney to ensure all AI-related records are properly classified and retained.' },
  { title: 'Section 508 / WCAG 2.1 AA Accessibility', detail: 'The citizen-facing interface meets Section 508 and WCAG 2.1 AA accessibility standards, including screen reader compatibility, keyboard navigation, and color contrast compliance.' },
];

const results = [
  { metric: '74%', title: 'Faster Citizen Response Time', detail: 'Average substantive response time dropped from 14 business days to 3.2 business days. For inquiries answered entirely by the citizen AI assistant, response time is under 5 seconds.' },
  { metric: '58%', title: 'Permit Processing Acceleration', detail: 'Average permit application review time reduced from 23 days to 9.7 days, driven by AI pre-validation that catches incomplete applications before they enter the review queue.' },
  { metric: '94%', title: 'Public Records On-Time Compliance', detail: 'Public records response compliance with the 10-day statutory target improved from 71% to 94%. AI-assisted document identification reduced the manual search phase by 82%.' },
  { metric: '12 sec', title: 'Council Decision Retrieval', detail: 'Staff can now retrieve any council decision, motion, or vote from four decades of meeting minutes in an average of 12 seconds. Previously required 2.4 days of Clerk research.' },
  { metric: '91%', title: 'Staff Satisfaction Score', detail: '91% of city employees rated IntelligenceAmplifier.AI as "very useful" or "indispensable" in the 90-day survey. Adoption rate reached 84% of all city staff.' },
  { metric: '$1.2M', title: 'Projected Annual Savings', detail: 'Blended calculation of reduced citizen inquiry handling time, faster permit processing, accelerated public records fulfillment, and decreased new-employee ramp time across all 620 staff.' },
];

const quotes = [
  {
    text: 'I used to spend half my morning looking up zoning requirements for residents who called in. Now I pull up the AI, type their address, and have the complete answer — with the exact ordinance section — in seconds. I can actually help more people in a day.',
    attribution: 'Senior Planner, Planning & Zoning Department',
  },
  {
    text: 'The council meeting search alone justified the entire project for my office. Council members used to call and ask "what did we decide about X" and it would take me a day to find the answer. Now it takes seconds. My office went from reactive to proactive.',
    attribution: 'City Clerk, City of Meridian Falls',
  },
  {
    text: 'I was hired three months ago and I feel like I know as much about this city\'s policies as people who have been here twenty years. The AI doesn\'t just give me answers — it teaches me where things are and how the code connects. My onboarding was completely different from what I was told to expect.',
    attribution: 'Code Enforcement Officer (new hire), 3 months tenure',
  },
  {
    text: 'As a resident, I was shocked. I asked the city website if I could put a shed in my backyard and it told me the exact rules for my address, the permit I needed, the fee, and linked me to the application. I\'ve never gotten that kind of answer from any government website.',
    attribution: 'Citizen feedback submission, Week 6 post-launch',
  },
];

const learnings = [
  {
    type: 'do-again' as const,
    title: 'Invest in cross-reference resolution before embedding',
    description: 'Municipal codes are uniquely self-referential. The 4,847 cross-references we resolved before embedding were the single most important data preparation step. Without this, the AI would have returned partial answers that cited sections without explaining what those sections actually say. This step should be non-negotiable for any government deployment.',
  },
  {
    type: 'do-again' as const,
    title: 'Launch internal staff portal before the public citizen assistant',
    description: 'Deploying to staff first (Weeks 11–12) gave us four weeks of real-world usage data and prompt refinements before citizens ever saw the system. Staff caught edge cases — superseded ordinances that weren\'t properly flagged, abbreviations the AI didn\'t recognize — that would have been embarrassing in a public-facing tool. Internal-first is the right sequence for government.',
  },
  {
    type: 'do-again' as const,
    title: 'Include the City Attorney from Day 1',
    description: 'The City Attorney\'s involvement from project kickoff prevented two potential issues: (1) the AI could have presented superseded ordinances as current law without proper temporal filtering, and (2) the citizen-facing disclaimer language was legally reviewed before launch, not after. Government AI requires legal review as a core workstream, not an afterthought.',
  },
  {
    type: 'improve' as const,
    title: 'Plan for GIS integration complexity earlier',
    description: 'The Esri ArcGIS integration — which enables address-based zoning lookups — required coordination between the IT department, the GIS team, and the Planning department. The API access approval took three weeks longer than planned. Future government deployments will initiate GIS integration approvals in Week 1.',
  },
  {
    type: 'improve' as const,
    title: 'Create department-specific onboarding, not one universal training',
    description: 'The initial staff training used a single guide for all departments. Planning staff engaged immediately. Parks & Recreation staff found less immediate relevance. Subsequent rollout used department-specific training showing each team\'s highest-value queries and workflows, which improved adoption measurably in underperforming departments.',
  },
];
