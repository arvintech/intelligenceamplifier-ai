import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ArvinTechLink from '@/components/ArvinTechLink';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare AI Case Study — IntelligenceAmplifier.AI',
  description:
    'How Pacific Valley Health Network deployed IntelligenceAmplifier.AI to reduce clinical documentation time by 68%, achieve HIPAA-compliant AI workflows, and save $1.8M annually.',
};

export default function HealthcareCaseStudy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">

        {/* ── HERO BANNER ── */}
        <section className="relative overflow-hidden bg-[#1a1a1a] dark:bg-black py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D55]/20 via-transparent to-[#FF9500]/10" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF2D55] rounded-full filter blur-[180px] opacity-10" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF9500] rounded-full filter blur-[180px] opacity-10" />

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/#industries"
                className="text-sm text-white/50 hover:text-white/80 transition-colors duration-200"
              >
                ← Industries
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-sm text-[#FF2D55] font-semibold">Healthcare</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF2D55]/20 border border-[#FF2D55]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FF2D55] animate-pulse" />
              <span className="text-sm font-semibold text-[#FF2D55] uppercase tracking-wide">Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              From 3 Hours of Paperwork<br className="hidden sm:block" /> to 20 Minutes of AI
            </h1>

            <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-10">
              How Pacific Valley Health Network deployed IntelligenceAmplifier.AI to transform
              clinical documentation, accelerate compliance, and reclaim physician time —
              entirely within a HIPAA-compliant, on-premise infrastructure.
            </p>

            {/* Stats bar */}
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
            <SectionLabel number="01" label="Executive Summary" color="text-[#FF2D55]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              The Situation at a Glance
            </h2>
            <Prose>
              Pacific Valley Health Network (PVHN) is a regional healthcare organization comprising
              four acute-care hospitals, eleven outpatient clinics, and a 1,400-member workforce
              spanning physicians, nurses, administrative staff, and compliance officers. Despite
              investing heavily in electronic health record (EHR) systems and operational
              technology over the prior decade, the organization faced a deepening crisis of
              administrative burden.
            </Prose>
            <Prose>
              Clinical staff were spending an estimated 3.2 hours per day on documentation,
              prior authorization, and policy retrieval — time that came directly at the expense
              of patient care. Compliance officers required an average of 2.8 weeks to prepare
              materials for a single regulatory audit. New staff onboarding averaged 11 weeks
              before employees felt confident navigating internal policies and clinical protocols.
            </Prose>
            <Prose>
              In early 2024, PVHN engaged <ArvinTechLink /> to deploy IntelligenceAmplifier.AI —
              a private, on-premise AI assistant trained exclusively on PVHN&apos;s internal documents,
              protocols, and operational knowledge. The deployment took 14 weeks from kickoff
              to full production rollout. Within 90 days of launch, PVHN had reduced clinical
              documentation time by 68%, cut compliance preparation from weeks to hours, and
              projected $1.8 million in annual operational savings.
            </Prose>
            <Prose>
              This case study documents the full technical architecture, AI preparation methodology,
              deployment workflow, and measured outcomes of that engagement.
            </Prose>
          </section>

          <Divider />

          {/* 2. THE CHALLENGE */}
          <section>
            <SectionLabel number="02" label="The Challenge" color="text-[#FF9500]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              Four Interconnected Problems
            </h2>
            <Prose>
              PVHN&apos;s leadership had identified four distinct but interconnected operational
              problems, all rooted in the same underlying issue: the organization&apos;s institutional
              knowledge was trapped inside documents that humans had to read, search, and
              manually synthesize.
            </Prose>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
              {challenges.map((c, i) => (
                <div key={i} className="glass-card rounded-[20px] p-7">
                  <div className="text-2xl font-black text-[#FF2D55] mb-3">{c.stat}</div>
                  <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-[#1d1d1f]/70 dark:text-white/60 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>

            <Prose>
              The root cause was not a lack of documentation — PVHN had meticulously maintained
              clinical protocols, compliance manuals, administrative policies, credentialing
              documents, and patient communication templates. The problem was access and synthesis.
              Staff could not quickly retrieve the right information, cross-reference it with
              context, or draft actionable outputs without spending significant manual effort.
            </Prose>
            <Prose>
              Traditional search tools returned document links, not answers. The EHR system
              contained patient data but no organizational intelligence. An internal wiki had been
              attempted but abandoned due to poor adoption. What PVHN needed was not more
              documents — it needed an AI system that could read, understand, and reason across
              all of them simultaneously.
            </Prose>
          </section>

          <Divider />

          {/* 3. SOLUTION OVERVIEW */}
          <section>
            <SectionLabel number="03" label="Solution Overview" color="text-[#007AFF]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              A Private AI Brain for the Entire Organization
            </h2>
            <Prose>
              <ArvinTechLink /> proposed and deployed IntelligenceAmplifier.AI as a closed-loop,
              private AI deployment. The critical design principle: the system would be trained
              exclusively on PVHN&apos;s own documents and would run entirely within PVHN&apos;s
              infrastructure. No patient data, clinical records, or proprietary documents would
              ever leave PVHN&apos;s network or be transmitted to external AI providers.
            </Prose>
            <Prose>
              The architecture centered on a Retrieval-Augmented Generation (RAG) model — a
              design pattern where a large language model is paired with a private vector
              database containing embeddings of the organization&apos;s documents. Rather than
              relying on the AI&apos;s general training, every response is grounded in PVHN&apos;s
              actual policies, protocols, and knowledge base. The AI doesn&apos;t guess — it retrieves
              and synthesizes.
            </Prose>
            <Prose>
              Four primary use cases were scoped for the initial deployment:
            </Prose>
            <ol className="list-decimal list-inside space-y-3 my-6 text-[#1d1d1f]/80 dark:text-white/70 text-base leading-relaxed">
              <li><strong className="text-[#1d1d1f] dark:text-white">Clinical Documentation Assistant</strong> — AI-drafted clinical notes, discharge summaries, and care plans based on physician prompts</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Compliance & Policy Q&A</strong> — Instant answers to regulatory and policy questions, with source citations</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Prior Authorization Drafting</strong> — Automated drafting of insurance pre-authorization letters using clinical context</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Staff Onboarding Knowledge Base</strong> — An AI guide through PVHN procedures, protocols, and orientation materials</li>
            </ol>
            <Prose>
              A fifth use case — AI-assisted patient communication drafting — was added during
              the second sprint after nursing staff identified it as a high-value opportunity.
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
              The IntelligenceAmplifier.AI deployment for PVHN is a multi-layer system. Each
              layer was selected for healthcare-grade security, performance at scale, and
              seamless integration with existing PVHN infrastructure.
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
              A key architectural decision was the choice of a hybrid deployment model.
              The vector database and embedding pipeline run on PVHN&apos;s private servers,
              ensuring that no document content is ever externalized. The LLM inference layer
              runs on a dedicated on-premise GPU cluster provisioned by <ArvinTechLink />, with
              a private cloud failover for high-availability during peak load periods such as
              morning rounds and end-of-shift documentation.
            </Prose>
            <Prose>
              All inter-service communication is encrypted with TLS 1.3. The system operates
              within PVHN&apos;s existing network security perimeter, authenticated via SAML 2.0
              single sign-on integrated with PVHN&apos;s Active Directory. Role-based access control
              (RBAC) ensures that physicians, nurses, compliance officers, and administrators
              each see only the document domains relevant to their role.
            </Prose>
          </section>

          <Divider />

          {/* 5. AI PREPARATION */}
          <section>
            <SectionLabel number="05" label="AI Preparation" color="text-[#34C759]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              Eight Weeks of Groundwork Before a Single Query
            </h2>
            <Prose>
              The most common mistake organizations make when deploying AI is underinvesting in
              data preparation. AI does not magically extract value from messy, poorly organized
              documents. The quality of the AI&apos;s responses is directly proportional to the quality
              of its knowledge base. For PVHN, <ArvinTechLink /> ran a structured eight-week
              preparation phase before any AI model was trained or tested.
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
              <strong>The 80/20 of AI preparation:</strong> In our experience across deployments,
              80% of poor AI performance traces back to document quality issues, not model limitations.
              For PVHN, 23% of ingested documents required remediation before they could be used as
              training data. Identifying and fixing these issues before deployment — not after —
              is what separates an AI that frustrates users from one they trust.
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
              Understanding the AI workflow is critical to understanding why IntelligenceAmplifier.AI
              produces reliable, citation-backed answers rather than hallucinated responses.
              The system uses a Retrieval-Augmented Generation (RAG) pipeline with a six-stage
              processing flow for every user query.
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
              Clinical Documentation Workflow: End-to-End
            </h3>
            <Prose>
              The most impactful workflow deployed at PVHN was the Clinical Documentation
              Assistant. Here is a detailed trace of how a physician&apos;s documentation session
              flows through the system:
            </Prose>

            <div className="my-8 glass-card rounded-[24px] overflow-hidden">
              <div className="bg-[#1d1d1f] dark:bg-black px-7 py-4">
                <span className="text-xs font-mono text-white/60 uppercase tracking-widest">Clinical Documentation — Workflow Trace</span>
              </div>
              {clinicalWorkflow.map((step, i) => (
                <div
                  key={i}
                  className={`px-7 py-6 flex gap-5 ${i < clinicalWorkflow.length - 1 ? 'border-b border-[#1d1d1f]/8 dark:border-white/8' : ''}`}
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
              Compliance Automation Workflow
            </h3>
            <Prose>
              The compliance use case operates on a slightly different workflow model. Rather
              than real-time conversational queries, compliance officers work through structured
              audit preparation sessions. The AI processes a regulatory checklist against PVHN&apos;s
              internal policy documents, identifies gaps, and generates a gap analysis report
              with specific policy citations and recommended remediation actions.
            </Prose>
            <Prose>
              Prior to deployment, preparing for a Joint Commission survey required a compliance
              team of three officers working for 2.8 weeks. After deployment, the same preparation
              takes 3.5 hours for one officer, with the AI generating the initial gap analysis
              in 18 minutes across 847 compliance requirements.
            </Prose>

            <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-5 mt-12">
              Prior Authorization Workflow
            </h3>
            <Prose>
              Prior authorization letters require the physician to articulate clinical necessity
              using specific language that satisfies insurer criteria — criteria that change
              frequently across dozens of payers. The AI workflow for this use case:
            </Prose>
            <ol className="list-decimal list-inside space-y-3 my-6 text-[#1d1d1f]/80 dark:text-white/70 text-base leading-relaxed">
              <li>Physician selects procedure and target payer from a dropdown integrated with the AI interface</li>
              <li>System retrieves payer-specific criteria documents from the knowledge base</li>
              <li>Physician provides a brief clinical summary (2–3 sentences)</li>
              <li>AI drafts a complete prior authorization letter meeting payer language requirements</li>
              <li>Physician reviews, edits if needed, and submits directly from the interface</li>
            </ol>
            <Prose>
              Mean time from clinical summary to completed draft: <strong>43 seconds</strong>.
              Prior authorization approval rates increased 22% in the first quarter post-deployment,
              attributed to more consistent use of medically necessary language.
            </Prose>
          </section>

          <Divider />

          {/* 7. IMPLEMENTATION TIMELINE */}
          <section>
            <SectionLabel number="07" label="Implementation Timeline" color="text-[#FF9500]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              14 Weeks from Kickoff to Production
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

          {/* 8. HIPAA & SECURITY */}
          <section>
            <SectionLabel number="08" label="Security & Compliance" color="text-[#5856D6]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              HIPAA Compliance by Architecture, Not Policy
            </h2>
            <Prose>
              Healthcare AI deployments must navigate a compliance landscape that general-purpose
              AI tools are architecturally unfit for. Commercial AI APIs — which send data to
              external servers for processing — create fundamental HIPAA violations when handling
              Protected Health Information (PHI). PVHN&apos;s deployment was designed from the ground
              up to eliminate this risk entirely.
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
              A formal HIPAA Technical Safeguard review was conducted by PVHN&apos;s Privacy Officer
              in partnership with <ArvinTechLink /> prior to go-live. The review covered access
              controls, audit controls, integrity, person or entity authentication, and transmission
              security — all six required technical safeguards under 45 CFR §164.312.
              The deployment passed without findings requiring remediation.
            </Prose>
            <Prose>
              All AI interactions are logged with user identity, timestamp, query hash (not
              query content), and document sources retrieved. Logs are retained for seven years
              per HIPAA requirements and stored in an immutable, append-only audit trail.
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
              PVHN established a measurement framework at project kickoff to capture baseline
              metrics across all four use cases. The following outcomes were measured at the
              90-day post-deployment mark, using the same methodology as the baseline assessment.
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
              Beyond quantitative metrics, PVHN conducted structured interviews with 86 staff
              members across all user groups at the 60-day mark. Themes that emerged consistently:
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
              Every deployment of IntelligenceAmplifier.AI generates insights that we carry
              into future engagements. The PVHN deployment was our most complex healthcare
              implementation to date, and it produced several lessons worth sharing.
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
              The PVHN deployment validated a core principle of IntelligenceAmplifier.AI: the
              value of an AI system in healthcare is not determined by the sophistication of the
              model, but by the quality of the organizational knowledge it is trained on, and
              the discipline with which it is integrated into real clinical workflows. AI that
              exists in isolation from how people actually work does not get used. AI that meets
              people where they are becomes indispensable within weeks.
            </Prose>
          </section>

          <Divider />

          {/* CTA */}
          <section className="text-center py-10">
            <div className="glass-card rounded-[40px] p-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-4 tracking-tight">
                Deploy AI in Your Healthcare Organization
              </h2>
              <p className="text-lg text-[#1d1d1f]/70 dark:text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Every hospital, clinic, and health network has a unique knowledge base.
                We&apos;ll deploy AI trained on yours — securely, privately, and fully
                HIPAA-compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:info@arvintech.com?subject=Healthcare AI Deployment Inquiry">
                  <button className="px-10 py-4 bg-[#FF2D55] text-white rounded-full text-base font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FF2D55]/30">
                    Schedule a Healthcare Demo
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
    <div className="flex items-center gap-3 mb-4">
      <span className={`text-xs font-black ${color} uppercase tracking-widest`}>{number}</span>
      <div className="flex-1 h-px bg-[#1d1d1f]/10 dark:bg-white/10" />
      <span className="text-xs font-semibold text-[#1d1d1f]/40 dark:text-white/30 uppercase tracking-widest">{label}</span>
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base sm:text-lg text-[#1d1d1f]/80 dark:text-white/70 leading-relaxed mb-5">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-[#1d1d1f]/10 dark:border-white/10" />;
}

function CalloutBox({ children, color }: { children: React.ReactNode; color: 'green' | 'blue' }) {
  const styles = {
    green: 'bg-[#34C759]/8 border-[#34C759]/30 dark:bg-[#30D158]/8 dark:border-[#30D158]/30',
    blue: 'bg-[#007AFF]/8 border-[#007AFF]/30 dark:bg-[#0A84FF]/8 dark:border-[#0A84FF]/30',
  };
  return (
    <div className={`rounded-[20px] border p-7 my-6 ${styles[color]}`}>
      <p className="text-base text-[#1d1d1f]/80 dark:text-white/70 leading-relaxed">{children}</p>
    </div>
  );
}

/* ─── Data ─── */

const heroStats = [
  { value: '68%', label: 'Reduction in documentation time' },
  { value: '18 min', label: 'Full compliance audit prep via AI' },
  { value: '$1.8M', label: 'Projected annual savings' },
  { value: '14 wks', label: 'Kickoff to full production' },
];

const challenges = [
  {
    stat: '3.2 hrs/day',
    title: 'Physician Documentation Burden',
    description:
      'Each physician spent an average of 3.2 hours per day on documentation, prior authorization, and policy lookup — time directly subtracted from patient care hours.',
  },
  {
    stat: '2.8 weeks',
    title: 'Compliance Preparation Time',
    description:
      'Preparing materials for a single regulatory audit required 2.8 weeks of work across three compliance officers, with high risk of missed documentation gaps.',
  },
  {
    stat: '11 weeks',
    title: 'New Staff Onboarding Duration',
    description:
      'New clinical and administrative staff averaged 11 weeks before independently navigating PVHN\'s extensive policy and protocol library with confidence.',
  },
  {
    stat: '$2.4M/yr',
    title: 'Administrative Overhead Cost',
    description:
      'The cumulative cost of manual document retrieval, redundant administrative tasks, and rework from prior authorization denials reached $2.4 million annually.',
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
        reason: 'Open-weight model enables full on-premise deployment; no data leaves PVHN infrastructure. Quantized to 4-bit for GPU efficiency without meaningful quality loss.',
      },
      {
        component: 'Embedding Model',
        technology: 'BGE-M3 (BAAI) — multilingual dense retrieval',
        reason: 'State-of-the-art embedding quality for medical terminology. Handles mixed-language clinical documents and abbreviation-dense protocol texts.',
      },
      {
        component: 'RAG Framework',
        technology: 'LangChain + custom retrieval pipeline',
        reason: 'Provides structured query decomposition, multi-hop retrieval for complex compliance questions, and citation tracking back to source documents.',
      },
      {
        component: 'Inference Server',
        technology: 'vLLM with PagedAttention',
        reason: 'Enables concurrent handling of 40+ simultaneous queries with sub-3-second response times — critical for morning rounds peak load.',
      },
    ],
  },
  {
    title: 'Vector Database & Retrieval',
    color: 'bg-[#AF52DE]',
    items: [
      {
        component: 'Vector Store',
        technology: 'Weaviate (self-hosted, PVHN datacenter)',
        reason: 'Horizontally scalable, supports hybrid keyword + semantic search, and stores metadata (document type, department, last-updated) alongside embeddings for filtered retrieval.',
      },
      {
        component: 'Chunking Strategy',
        technology: 'Semantic chunking — 512 tokens, 64-token overlap',
        reason: 'Medical documents require context-preserving chunks. Overlap prevents clinical instructions from being split at section boundaries.',
      },
      {
        component: 'Reranking',
        technology: 'Cohere Rerank (self-hosted) — cross-encoder',
        reason: 'Reranks top-20 retrieved chunks to top-5 before LLM context injection, significantly improving answer precision on policy documents.',
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
        reason: 'PVHN\'s document library includes scanned forms, signed PDFs, and structured EHR exports. Multi-engine extraction handles all formats.',
      },
      {
        component: 'Document Classification',
        technology: 'Fine-tuned DistilBERT classifier (12 categories)',
        reason: 'Automatically tags documents as policy, protocol, compliance, administrative, clinical, onboarding, etc. — enabling role-based retrieval filtering.',
      },
      {
        component: 'Update Pipeline',
        technology: 'Apache Airflow — nightly differential sync',
        reason: 'Monitors source document repositories for changes, re-ingests updated documents, and invalidates stale vector embeddings within 24 hours of source update.',
      },
      {
        component: 'PII / PHI Scrubbing',
        technology: 'Microsoft Presidio (on-premise)',
        reason: 'Scans all documents before ingestion to identify and mask PHI fields. Training data contains zero patient-identifiable information.',
      },
    ],
  },
  {
    title: 'Integration & Infrastructure',
    color: 'bg-[#FF9500]',
    items: [
      {
        component: 'EHR Integration',
        technology: 'HL7 FHIR R4 API bridge (Epic)',
        reason: 'Allows the AI interface to pre-populate clinical context (patient age, diagnosis codes, current medications) into documentation prompts — without storing PHI in the AI layer.',
      },
      {
        component: 'Authentication',
        technology: 'SAML 2.0 via Azure AD (PVHN SSO)',
        reason: 'Staff access IntelligenceAmplifier.AI using their existing PVHN credentials. No separate login. RBAC enforced at the SSO layer.',
      },
      {
        component: 'Compute (Primary)',
        technology: '2× NVIDIA A100 80GB SXM4 (on-premise)',
        reason: 'Dedicated GPU cluster provisioned by ArvinTech for LLM inference. Located in PVHN\'s existing secure datacenter under PVHN physical control.',
      },
      {
        component: 'Compute (Failover)',
        technology: 'Azure Government Cloud (HIPAA BAA)',
        reason: 'Private cloud failover for high-availability SLA. Azure Government provides HIPAA-eligible infrastructure with a signed Business Associate Agreement.',
      },
      {
        component: 'UI Layer',
        technology: 'Next.js 14 — embedded in PVHN intranet',
        reason: 'Deployed as a widget accessible within PVHN\'s existing intranet portal. Zero new login screens for staff. Mobile-responsive for nursing station tablets.',
      },
    ],
  },
];

const aiPreparationPhases = [
  {
    week: 'Week 1–2',
    title: 'Document Audit & Inventory',
    description:
      'ArvinTech conducted a full audit of PVHN\'s document repositories: SharePoint, shared drives, the EHR document library, and department-specific folders. The audit identified 14,847 documents across 23 document types.',
    details: [
      '14,847 total documents inventoried across 6 source systems',
      '23 distinct document categories identified and mapped to user roles',
      '3,412 documents flagged as outdated (last modified >3 years ago) and excluded',
      '847 documents identified as compliance-critical and prioritized for first ingestion',
    ],
  },
  {
    week: 'Week 3',
    title: 'Data Quality Assessment',
    description:
      'Each document was evaluated on four quality dimensions: extractability (can text be reliably extracted?), completeness (are documents missing sections?), accuracy (is content current and approved?), and clarity (is language precise enough for AI retrieval?).',
    details: [
      '23% of documents required remediation before ingestion',
      '8% were scanned images requiring OCR processing',
      '11% had inconsistent section formatting requiring normalization',
      '4% contained embedded tables that required extraction restructuring',
    ],
  },
  {
    week: 'Week 4',
    title: 'PHI Scrubbing & HIPAA Review',
    description:
      'Before any document entered the AI pipeline, every file was processed through Microsoft Presidio for automated PHI detection, followed by manual review of flagged items by PVHN\'s Privacy Officer. Documents containing clinical case examples with patient details were either de-identified or replaced with synthetic examples.',
    details: [
      '2,341 documents processed through automated PHI detection',
      '184 documents contained PHI — all de-identified or synthetic replacements created',
      'Privacy Officer sign-off obtained on full training corpus',
      'HIPAA Technical Safeguard review completed for AI infrastructure',
    ],
  },
  {
    week: 'Week 5–6',
    title: 'Document Processing & Embedding',
    description:
      'Approved documents were processed through the ingestion pipeline: text extraction, semantic chunking, embedding generation, and vector database indexing. The embedding process generated 187,430 vector embeddings from the final document corpus.',
    details: [
      '11,436 documents approved for ingestion after audit and scrubbing',
      '187,430 vector embeddings generated across all document chunks',
      'Average document processing time: 4.2 seconds per document',
      'Total ingestion pipeline runtime: 13.4 hours (overnight batch)',
    ],
  },
  {
    week: 'Week 7',
    title: 'Retrieval Quality Testing',
    description:
      'A set of 240 test queries was developed by PVHN\'s clinical leads, compliance team, and department managers — representing real questions staff would ask the system. Each query was evaluated for retrieval precision (did the right documents surface?) and answer quality (was the AI response accurate and actionable?).',
    details: [
      '240 test queries across 4 use case domains',
      'Initial retrieval precision: 73% (target: 90%+)',
      'Identified 3 document categories with poor chunk boundaries — re-chunked',
      'Identified 2 terminology gaps — added PVHN-specific medical abbreviation glossary',
    ],
  },
  {
    week: 'Week 8',
    title: 'Tuning, Prompt Engineering & Re-testing',
    description:
      'Based on test results, ArvinTech refined the retrieval pipeline (adjusting chunk overlap, adding metadata filtering), optimized system prompts for each use case domain, and re-tested the full query set. Final retrieval precision reached 93.4% before production go-live.',
    details: [
      'Retrieval precision improved from 73% to 93.4% through pipeline tuning',
      'Use-case-specific system prompts written and tested for 5 workflow types',
      'Response latency optimized: P95 latency reduced from 8.2s to 2.7s',
      'Clinical lead sign-off obtained on answer quality across all test domains',
    ],
  },
];

const workflowStages = [
  {
    title: 'Query Intake & Role Verification',
    description:
      'Staff member submits a query through the IntelligenceAmplifier.AI interface embedded in the PVHN intranet. The system immediately verifies the user\'s role via the SAML token — a physician sees clinical domains, a compliance officer sees regulatory domains, an administrator sees operational domains.',
    technical: 'JWT decoded → role extracted → document domain filter applied → query passed to retrieval pipeline',
  },
  {
    title: 'Query Decomposition',
    description:
      'Complex queries are automatically decomposed into sub-questions. A question like "What are the steps for discharging a patient with congestive heart failure and what forms need to be completed?" is decomposed into two parallel retrieval paths: discharge procedure and documentation requirements.',
    technical: 'LLM sub-query generation → 1–4 parallel retrieval paths → async retrieval execution',
  },
  {
    title: 'Semantic Retrieval',
    description:
      'Each sub-query is converted to a vector embedding and used to search the Weaviate vector database. The system performs hybrid search — combining dense semantic retrieval with sparse keyword matching — to surface the top-20 most relevant document chunks.',
    technical: 'BGE-M3 embedding → Weaviate hybrid query (alpha=0.7 semantic / 0.3 keyword) → top-20 chunks returned with metadata',
  },
  {
    title: 'Reranking',
    description:
      'The top-20 chunks from retrieval are passed through a cross-encoder reranking model that evaluates each chunk\'s relevance to the original query more precisely than the retrieval model could. The top-5 chunks advance to the generation stage.',
    technical: 'Cohere cross-encoder reranker → chunks scored 0–1 → top-5 selected → source metadata preserved',
  },
  {
    title: 'Response Generation',
    description:
      'The top-5 chunks are injected into the LLM context window alongside a role-specific system prompt. The LLM generates a response grounded exclusively in the provided context — it is instructed never to use general knowledge when contradicted by PVHN\'s documents.',
    technical: 'System prompt + retrieved context + user query → LLaMA 70B inference → streamed response generation → citation markers injected',
  },
  {
    title: 'Citation & Output',
    description:
      'The final response is returned to the user with inline citations linking to the specific document sections used. Staff can click any citation to open the source document. Every response is logged for audit purposes.',
    technical: 'Response + citations → UI rendering → audit log written (user_id, timestamp, query_hash, doc_sources) → no query content stored',
  },
];

const clinicalWorkflow = [
  {
    actor: 'Physician',
    action: 'Completes patient encounter and opens IntelligenceAmplifier.AI documentation assistant from within the Epic EHR sidebar. Patient context (age, gender, diagnosis codes, active medications) is pre-populated via FHIR API — physician does not need to re-enter.',
    latency: '0 seconds — context pre-populated at interface open',
  },
  {
    actor: 'Physician',
    action: 'Types a brief dictation note: "62-year-old female, T2DM, presenting with HbA1c of 9.2, increasing metformin to 2000mg/day, ordering quarterly labs, counseled on diet. Generate discharge summary."',
    latency: '~30 seconds physician input time',
  },
  {
    actor: 'AI System',
    action: 'Retrieves PVHN\'s T2DM management protocol, discharge summary template, and metformin dosing guidelines from the knowledge base. Generates a complete SOAP-format discharge summary using PVHN\'s standard template, incorporating the physician\'s dictated information.',
    latency: '2.1 seconds (P50 latency)',
  },
  {
    actor: 'Physician',
    action: 'Reviews the generated discharge summary. Makes one edit — adjusts the follow-up interval from 4 weeks to 6 weeks based on patient preference. Signs and locks the note.',
    latency: '~45 seconds review and approval',
  },
  {
    actor: 'AI System',
    action: 'Detects metformin dose increase and automatically surfaces PVHN\'s renal function monitoring protocol, noting that eGFR should be checked before dose increase. Physician acknowledges — lab order already placed.',
    latency: '0.8 seconds proactive safety flag',
  },
  {
    actor: 'System',
    action: 'Completed note is written back to Epic via FHIR API. Interaction logged to audit trail. Total elapsed time from encounter completion to signed note: 3 minutes 48 seconds.',
    latency: 'Previous baseline: 22 minutes average',
  },
];

const timeline = [
  { week: 'Week 1', milestone: 'Project Kickoff & Stakeholder Alignment', detail: 'Engaged clinical leads, compliance, IT, and department managers. Established use case priority, success metrics, and data access protocols.' },
  { week: 'Week 2', milestone: 'Document Audit Begins', detail: 'ArvinTech team embedded with PVHN IT to inventory all document repositories. Source system access provisioned.' },
  { week: 'Week 3–4', milestone: 'Data Quality & HIPAA Review', detail: 'PHI scrubbing, document quality remediation, and Privacy Officer review completed. 11,436 documents approved for ingestion.' },
  { week: 'Week 5', milestone: 'Infrastructure Deployment', detail: 'GPU cluster provisioned in PVHN datacenter. Weaviate, vLLM, and supporting services deployed. Network security review completed.' },
  { week: 'Week 6', milestone: 'Document Ingestion & Embedding', detail: '187,430 embeddings generated. Vector database indexed. Nightly sync pipeline activated.' },
  { week: 'Week 7', milestone: 'Alpha Testing with Clinical Champions', detail: '12 clinical champions (3 per use case domain) ran structured testing. 240 test queries evaluated. Retrieval precision: 73%.' },
  { week: 'Week 8', milestone: 'Pipeline Tuning & Prompt Engineering', detail: 'Chunking, metadata filtering, and system prompts refined. Retrieval precision improved to 93.4%. P95 latency reduced to 2.7s.' },
  { week: 'Week 9–10', milestone: 'Pilot Rollout — Two Departments', detail: 'Full deployment to Internal Medicine and Compliance teams (87 users). Real-world feedback gathered. Three minor prompt refinements made.' },
  { week: 'Week 11–12', milestone: 'Expanded Rollout — All Clinical Staff', detail: 'System opened to all 1,400 PVHN staff. Training sessions delivered. Help desk support provided by ArvinTech for 2 weeks post-expansion.' },
  { week: 'Week 13–14', milestone: 'Stabilization & Handover', detail: 'System monitoring handed over to PVHN IT. ArvinTech ongoing support SLA activated. Baseline metrics collection completed. Project formally closed.' },
];

const securityFeatures = [
  { title: 'Zero External Data Transmission', detail: 'All LLM inference occurs on PVHN\'s on-premise GPU cluster. No query content, document text, or patient context is ever sent to an external API.' },
  { title: 'PHI-Free Training Corpus', detail: 'All training documents were processed through automated PHI detection and manual Privacy Officer review. Zero patient-identifiable information exists in the vector database.' },
  { title: 'AES-256 Encryption at Rest', detail: 'All vector embeddings, document metadata, and system logs are encrypted at rest using AES-256. Encryption keys managed by PVHN\'s existing key management infrastructure.' },
  { title: 'TLS 1.3 in Transit', detail: 'All inter-service communication within the AI platform — between the UI, API gateway, retrieval pipeline, and LLM inference — is encrypted with TLS 1.3.' },
  { title: 'Role-Based Access Control', detail: 'Document access is segmented by staff role at the retrieval layer. A nurse cannot retrieve documents outside their domain regardless of query content. Enforced via SAML attributes.' },
  { title: 'Immutable Audit Logging', detail: 'Every AI interaction is logged to an append-only audit trail retained for 7 years. Logs contain user identity, timestamp, and document sources — never query content or AI responses.' },
  { title: 'Business Associate Agreement', detail: 'ArvinTech operates as a HIPAA Business Associate under a signed BAA with PVHN, covering all deployment, maintenance, and support activities.' },
  { title: 'Penetration Testing', detail: 'The deployed system underwent third-party penetration testing prior to production go-live. Zero critical or high-severity findings were identified.' },
];

const results = [
  { metric: '68%', title: 'Reduction in Documentation Time', detail: 'Average physician documentation time dropped from 3.2 hours to 1.02 hours per day. Measured across 47 physicians over 90 days post-deployment.' },
  { metric: '18 min', title: 'Compliance Audit Preparation', detail: 'The AI processes 847 Joint Commission requirements against PVHN policies in 18 minutes. Previously took 2.8 weeks with a 3-person team.' },
  { metric: '22%', title: 'Prior Auth Approval Rate Increase', detail: 'More consistent use of medically necessary language in AI-drafted letters improved first-submission approval rates from 71% to 87%.' },
  { metric: '43 sec', title: 'Prior Auth Draft Generation', detail: 'From clinical summary to completed draft letter. Previously averaged 34 minutes of physician and administrative staff time.' },
  { metric: '94%', title: 'Staff Satisfaction Score', detail: '94% of active users rated IntelligenceAmplifier.AI as "very useful" or "indispensable" in the 90-day survey. Adoption rate reached 89% of eligible staff.' },
  { metric: '$1.8M', title: 'Projected Annual Savings', detail: 'Blended calculation of physician time recaptured, reduced denial rework, faster compliance preparation, and accelerated onboarding across all 1,400 staff.' },
];

const quotes = [
  {
    text: 'I used to dread the end of my shift because I had two hours of documentation waiting for me. Now I finish my notes before I leave the floor. The AI draft is accurate enough that I\'m usually just reviewing, not rewriting.',
    attribution: 'Internal Medicine Physician, PVHN Hospital 2',
  },
  {
    text: 'The compliance team used to be overwhelmed before every audit. Now I actually feel prepared. I ran our last Joint Commission prep in half a day and found two policy gaps I would have missed manually.',
    attribution: 'Director of Compliance, Pacific Valley Health Network',
  },
  {
    text: 'New nurses used to come to me with basic policy questions every day for months. Now they ask the AI first. I can tell the difference — they\'re more confident faster, and the questions I get are the harder ones that actually need a senior nurse.',
    attribution: 'Charge Nurse, ICU — PVHN Hospital 1',
  },
];

const learnings = [
  {
    type: 'do-again',
    title: 'Embed clinical champions early and deeply',
    description: 'The 12 clinical champions who tested the system in Week 7 became the most effective advocates for adoption. Their real-world feedback drove the most important prompt refinements. Future deployments should increase the champion cohort and extend their involvement through go-live.',
  },
  {
    type: 'do-again',
    title: 'Invest heavily in the document audit before touching AI',
    description: 'Eight weeks of preparation before a single embedding was generated felt conservative. In retrospect, it was the single most valuable phase of the project. The 23% document remediation rate validated the investment.',
  },
  {
    type: 'improve',
    title: 'Plan for EHR integration earlier',
    description: 'The Epic FHIR integration was scoped as a stretch goal and ultimately delivered in Week 12 — two weeks later than planned. EHR API access requires multi-stakeholder approvals that take time. Future healthcare deployments will initiate the integration approval process in Week 1.',
  },
  {
    type: 'improve',
    title: 'Create role-specific onboarding materials, not one universal guide',
    description: 'The initial staff training used a single onboarding guide for all roles. Physicians engaged well; administrative staff reported confusion. Subsequent rollout used role-specific 10-minute video guides and adoption improved measurably in the departments trained with role-specific materials.',
  },
  {
    type: 'do-again',
    title: 'On-premise architecture eliminated the largest barrier to adoption',
    description: 'PVHN\'s security team had previously blocked two AI pilot programs that relied on external APIs. The on-premise architecture bypassed every objection — the Privacy Officer and CISO both approved the deployment at the architecture review stage, before any testing began. Private deployment is not just a technical choice; it is a trust strategy.',
  },
];
