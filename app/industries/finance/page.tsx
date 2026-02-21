import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ArvinTechLink from '@/components/ArvinTechLink';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance AI Case Study — IntelligenceAmplifier.AI',
  description:
    'How Crestline Capital Partners deployed IntelligenceAmplifier.AI to reduce financial report analysis by 71%, automate compliance documentation, and save $2.1M annually across their advisory practice.',
};

export default function FinanceCaseStudy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">

        {/* ── HERO BANNER ── */}
        <section className="relative overflow-hidden bg-[#1a1a1a] dark:bg-black py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#34C759]/20 via-transparent to-[#007AFF]/15" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#34C759] rounded-full filter blur-[180px] opacity-10" />
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
              <span className="text-sm text-[#34C759] font-semibold">Finance</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34C759]/20 border border-[#34C759]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#34C759] animate-pulse" />
              <span className="text-sm font-semibold text-[#34C759] uppercase tracking-wide">Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              From Manual Analysis<br className="hidden sm:block" /> to AI-Powered Intelligence
            </h1>

            <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-10">
              How Crestline Capital Partners deployed IntelligenceAmplifier.AI to transform
              financial report analysis, automate compliance workflows, and give every advisor
              instant access to the firm&apos;s full institutional knowledge — while maintaining
              SEC-grade data security.
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
            <SectionLabel number="01" label="Executive Summary" color="text-[#34C759]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              The Situation at a Glance
            </h2>
            <Prose>
              Crestline Capital Partners is a mid-market financial advisory firm with 240
              employees across four offices, managing $4.2 billion in assets under advisory
              for 380 institutional and high-net-worth clients. The firm&apos;s practice spans
              investment advisory, wealth management, retirement plan consulting, and
              corporate finance — each with distinct regulatory requirements, documentation
              standards, and client reporting obligations.
            </Prose>
            <Prose>
              Despite a sophisticated technology stack — Bloomberg terminals, FactSet, a
              custom-built portfolio management system, and Salesforce CRM — the firm&apos;s
              analysts and advisors were spending an extraordinary amount of time on tasks
              that required reading, synthesizing, and cross-referencing documents rather
              than making decisions. Senior analysts spent 4.1 hours per day on report
              analysis and memo drafting. Compliance officers needed an average of 3.4 weeks
              to prepare materials for a single SEC examination. Investment committee
              preparation consumed 60+ person-hours per quarterly meeting.
            </Prose>
            <Prose>
              In Q2 2024, Crestline engaged <ArvinTechLink /> to deploy IntelligenceAmplifier.AI
              as the firm&apos;s private knowledge intelligence layer — an AI system trained
              exclusively on Crestline&apos;s internal research, client documentation, compliance
              manuals, investment policies, and operational procedures. The deployment took
              12 weeks from kickoff to full production. Within 90 days, report analysis time
              dropped by 71%, compliance preparation collapsed from weeks to days, and the
              firm projected $2.1 million in annual operational savings.
            </Prose>
            <Prose>
              This case study documents the full technical architecture, data preparation
              methodology, deployment workflow, and measured outcomes.
            </Prose>
          </section>

          <Divider />

          {/* 2. THE CHALLENGE */}
          <section>
            <SectionLabel number="02" label="The Challenge" color="text-[#FF9500]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              Four Compounding Operational Burdens
            </h2>
            <Prose>
              Crestline&apos;s challenges were not about missing data — the firm had more
              information than any individual could process. The problem was that institutional
              knowledge was trapped in thousands of documents that required human synthesis:
              research notes, investment memos, compliance filings, client correspondence,
              audit trails, and regulatory updates that changed quarterly.
            </Prose>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
              {challenges.map((c, i) => (
                <div key={i} className="glass-card rounded-[20px] p-7">
                  <div className="text-2xl font-black text-[#34C759] mb-3">{c.stat}</div>
                  <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-[#1d1d1f]/70 dark:text-white/60 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>

            <Prose>
              The root cause was consistent: the firm&apos;s knowledge was distributed across
              systems that did not communicate. Bloomberg provided market data. FactSet
              provided analytics. The portfolio management system tracked positions. Salesforce
              tracked client interactions. But the investment thesis behind each position, the
              compliance rationale for each recommendation, the historical context of each
              client relationship, and the regulatory framework governing each decision —
              all of that lived in documents that required a human to find, read, and
              synthesize.
            </Prose>
            <Prose>
              Junior analysts spent their first year learning where information lived rather
              than learning how to analyze it. Senior advisors carried critical context in
              their heads that was never systematically captured. And when a compliance
              examiner asked &ldquo;show me the basis for this recommendation,&rdquo; the answer
              required assembling evidence from four different systems. Crestline needed
              an AI that could read all of it simultaneously.
            </Prose>
          </section>

          <Divider />

          {/* 3. SOLUTION OVERVIEW */}
          <section>
            <SectionLabel number="03" label="Solution Overview" color="text-[#007AFF]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              A Private AI Brain for the Entire Firm
            </h2>
            <Prose>
              <ArvinTechLink /> proposed IntelligenceAmplifier.AI as a closed-loop, firm-owned
              AI deployment. The non-negotiable design principle: the system would be trained
              exclusively on Crestline&apos;s own documents and would run within infrastructure
              controlled by the firm. No client data, no proprietary research, no trade
              information, and no compliance records would ever leave Crestline&apos;s network
              or be processed by third-party AI providers.
            </Prose>
            <Prose>
              The architecture used Retrieval-Augmented Generation (RAG) — pairing a large
              language model with a private vector database containing embeddings of the
              firm&apos;s complete document corpus. Every AI response is grounded in Crestline&apos;s
              actual research, policies, and client documentation — not generic financial
              knowledge from the internet.
            </Prose>
            <Prose>
              Five primary use cases were scoped for the initial deployment:
            </Prose>
            <ol className="list-decimal list-inside space-y-3 my-6 text-[#1d1d1f]/80 dark:text-white/70 text-base leading-relaxed">
              <li><strong className="text-[#1d1d1f] dark:text-white">Financial Report Analysis</strong> — AI-assisted analysis of earnings reports, 10-K/10-Q filings, and fund performance documents with automated summary generation</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Investment Memo Drafting</strong> — AI-generated first drafts of investment memos incorporating the firm&apos;s research, thesis frameworks, and historical position rationale</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Compliance &amp; Regulatory Q&amp;A</strong> — Instant answers to regulatory questions with citations to specific SEC rules, firm policies, and compliance procedures</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Audit Trail Documentation</strong> — Automated compilation of decision audit trails — linking recommendations to research, approvals, and client suitability analyses</li>
              <li><strong className="text-[#1d1d1f] dark:text-white">Client Report Generation</strong> — AI-drafted quarterly client reports incorporating portfolio performance, market commentary, and forward-looking positioning</li>
            </ol>
            <Prose>
              A sixth use case — risk and compliance document Q&amp;A for the firm&apos;s
              Chief Compliance Officer — was added during the pilot phase after the
              compliance team identified it as critical for upcoming SEC examination
              preparation.
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
              The IntelligenceAmplifier.AI deployment for Crestline is a multi-layer system
              designed for financial-services-grade security, sub-second response times during
              market hours, and seamless integration with the firm&apos;s existing Bloomberg,
              FactSet, and portfolio management infrastructure.
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
              The critical architectural decision was full on-premise deployment with zero
              external data transmission. Financial advisory firms operate under SEC Rule
              206(4)-7, which requires written policies and procedures to prevent misuse of
              material non-public information (MNPI). Any AI system that transmits client
              data, trade information, or proprietary research to external servers creates
              a potential MNPI violation. Crestline&apos;s deployment eliminates this risk
              architecturally — the AI runs entirely within the firm&apos;s infrastructure.
            </Prose>
            <Prose>
              All inter-service communication is encrypted with TLS 1.3. The system operates
              within Crestline&apos;s existing network security perimeter, authenticated via
              SAML 2.0 SSO integrated with the firm&apos;s Active Directory. Role-based access
              control ensures that portfolio managers, analysts, compliance officers, and
              client service teams each see only the document domains relevant to their
              function and authorized client relationships.
            </Prose>
          </section>

          <Divider />

          {/* 5. AI PREPARATION */}
          <section>
            <SectionLabel number="05" label="AI Preparation" color="text-[#34C759]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              Six Weeks of Groundwork Before a Single Query
            </h2>
            <Prose>
              Financial documents are among the most challenging for AI preparation. They
              contain dense numerical data, domain-specific terminology, regulatory references,
              and temporal dependencies (a recommendation valid in Q1 may be invalid in Q3).
              <ArvinTechLink /> ran a structured six-week preparation phase before any AI model
              was trained or tested on Crestline&apos;s data.
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
              <strong>The financial document challenge:</strong> Unlike healthcare or government
              documents that are relatively static, financial documents have critical temporal
              dimensions. An investment thesis written six months ago may have been superseded
              by new research. A compliance policy updated last quarter changes the framework
              for every prior recommendation. Our temporal tagging pipeline ensures the AI
              always knows which version of a document is current — and can trace the evolution
              of any position, policy, or recommendation over time.
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
              The IntelligenceAmplifier.AI workflow for financial services includes additional
              safeguards not present in other industry deployments: client-level access
              controls, temporal awareness for superseded research, and compliance flagging
              for queries that may involve material non-public information.
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
              Investment Memo Workflow: End-to-End
            </h3>
            <Prose>
              The highest-value workflow is the investment memo assistant — an analyst
              preparing a recommendation for the investment committee. Here is a detailed
              trace of how a typical memo drafting session flows through the system:
            </Prose>

            <div className="my-8 glass-card rounded-[24px] overflow-hidden">
              <div className="bg-[#1d1d1f] dark:bg-black px-7 py-4">
                <span className="text-xs font-mono text-white/60 uppercase tracking-widest">Investment Memo Drafting — Workflow Trace</span>
              </div>
              {memoWorkflow.map((step, i) => (
                <div
                  key={i}
                  className={`px-7 py-6 flex gap-5 ${i < memoWorkflow.length - 1 ? 'border-b border-[#1d1d1f]/8 dark:border-white/8' : ''}`}
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
              Compliance Examination Preparation Workflow
            </h3>
            <Prose>
              SEC examinations require the firm to demonstrate that every investment
              recommendation was suitable, properly documented, and approved through
              the firm&apos;s compliance framework. Prior to deployment, assembling the
              documentation trail for a single client relationship required 8–12 hours
              of manual work across three systems.
            </Prose>
            <Prose>
              The AI workflow automates this assembly: given a client name and date range,
              the system retrieves all related investment memos, suitability analyses,
              compliance approvals, client communications, and trade confirmations — and
              compiles them into a structured audit package with a table of contents and
              cross-references. Mean time from request to compiled package:
              <strong> 4.7 minutes</strong>. The compliance team now prepares for examinations
              in days rather than weeks.
            </Prose>

            <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-5 mt-12">
              Client Report Generation Workflow
            </h3>
            <Prose>
              Quarterly client reports previously consumed 340 person-hours per cycle across
              the advisory team — each report requiring portfolio performance narrative,
              market commentary, position-level rationale, and forward-looking positioning.
              The AI drafts each report by retrieving the client&apos;s portfolio data, the
              firm&apos;s current market outlook, position-specific research notes, and prior
              quarter&apos;s commentary for continuity. Advisors review and personalize rather
              than write from scratch. Report generation cycle time dropped from 3.5 weeks
              to 4 days.
            </Prose>
          </section>

          <Divider />

          {/* 7. IMPLEMENTATION TIMELINE */}
          <section>
            <SectionLabel number="07" label="Implementation Timeline" color="text-[#FF9500]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              12 Weeks from Kickoff to Production
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

          {/* 8. SECURITY & COMPLIANCE */}
          <section>
            <SectionLabel number="08" label="Security & Compliance" color="text-[#5856D6]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
              SEC-Grade Security by Architecture
            </h2>
            <Prose>
              Financial advisory firms face regulatory scrutiny that makes data security
              non-negotiable. SEC Rule 206(4)-7 requires written compliance policies. The
              Safeguards Rule under Regulation S-P mandates protection of client non-public
              personal information. And any system touching investment recommendations must
              maintain an auditable decision trail. Commercial AI APIs that transmit data
              externally are fundamentally incompatible with these requirements. Crestline&apos;s
              deployment was designed to satisfy every regulatory obligation by default.
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
              A formal information security assessment was conducted by Crestline&apos;s Chief
              Compliance Officer in partnership with <ArvinTechLink /> and the firm&apos;s external
              cybersecurity auditor prior to go-live. The assessment covered SEC regulatory
              requirements, SOC 2 Type II controls, client data protection, and MNPI
              safeguards. The deployment passed without findings requiring remediation.
            </Prose>
            <Prose>
              All AI interactions are logged with user identity, timestamp, query category,
              client identifiers accessed, and document sources retrieved. Logs are retained
              per SEC books and records requirements (Rule 204-2) and stored in an immutable,
              append-only audit trail accessible to the compliance team.
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
              Crestline established a measurement framework at project kickoff to capture
              baseline metrics across all five use cases. The following outcomes were measured
              at the 90-day post-deployment mark using the same methodology as the baseline.
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
              Beyond quantitative metrics, Crestline conducted structured interviews with
              54 staff members across all user groups at the 60-day mark. The feedback
              revealed consistent themes around time recovery and decision quality.
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
              engagements. The Crestline deployment was our most complex financial services
              implementation to date, operating under the strictest data security requirements
              of any industry we serve.
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
              The Crestline deployment validated a principle specific to financial services:
              the AI&apos;s value is measured not just in time saved, but in decision quality
              improved. When an analyst can instantly access the firm&apos;s full research
              history on a company, every sector note, every prior thesis, every risk
              assessment — the quality of the next investment memo is categorically better.
              When a compliance officer can assemble a complete audit trail in minutes
              instead of days, the firm&apos;s regulatory posture strengthens. AI in financial
              services is not about automation — it is about amplifying the judgment of
              experienced professionals with the full institutional memory of the firm.
            </Prose>
          </section>

          <Divider />

          {/* CTA */}
          <section className="text-center py-10">
            <div className="glass-card rounded-[40px] p-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-4 tracking-tight">
                Deploy AI in Your Financial Practice
              </h2>
              <p className="text-lg text-[#1d1d1f]/70 dark:text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Every advisory firm, fund manager, and financial institution has proprietary
                knowledge that should be working harder. We&apos;ll deploy AI trained on yours —
                securely, privately, and fully compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:info@arvintech.com?subject=Finance AI Deployment Inquiry">
                  <button className="px-10 py-4 bg-[#34C759] text-white rounded-full text-base font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#34C759]/30">
                    Schedule a Finance Demo
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
  { value: '71%', label: 'Reduction in report analysis time' },
  { value: '4.7 min', label: 'Audit trail compilation (was 8–12 hrs)' },
  { value: '$2.1M', label: 'Projected annual savings' },
  { value: '12 wks', label: 'Kickoff to full production' },
];

const challenges = [
  {
    stat: '4.1 hrs/day',
    title: 'Senior Analyst Documentation Burden',
    description:
      'Senior analysts spent an average of 4.1 hours per day reading financial reports, cross-referencing research, and drafting investment memos — time directly subtracted from analysis and client advisory.',
  },
  {
    stat: '3.4 weeks',
    title: 'SEC Examination Preparation',
    description:
      'Preparing documentation for a single SEC examination required 3.4 weeks of work across the compliance team, manually assembling audit trails from four different systems for each client relationship.',
  },
  {
    stat: '60+ hrs',
    title: 'Investment Committee Preparation',
    description:
      'Each quarterly investment committee meeting consumed 60+ person-hours of preparation — analysts summarizing market conditions, portfolio positions, research updates, and risk assessments into presentation materials.',
  },
  {
    stat: '14 months',
    title: 'Junior Analyst Ramp Time',
    description:
      'New analysts averaged 14 months before they could independently navigate the firm\'s research library, compliance framework, and client documentation with the proficiency expected of a productive team member.',
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
        reason: 'Open-weight model enables full on-premise deployment. No client data, trade information, or proprietary research leaves Crestline\'s infrastructure. Quantized to 4-bit for GPU efficiency.',
      },
      {
        component: 'Embedding Model',
        technology: 'BGE-M3 (BAAI) — financial domain fine-tuned',
        reason: 'Fine-tuned on financial terminology, SEC regulatory language, and investment notation. Handles ticker symbols, financial ratios, and regulatory citation formats accurately.',
      },
      {
        component: 'RAG Framework',
        technology: 'LangChain + custom financial retrieval pipeline',
        reason: 'Custom pipeline includes temporal awareness (current vs. superseded research), client-level access filtering, and multi-document synthesis for investment memo generation.',
      },
      {
        component: 'Inference Server',
        technology: 'vLLM with PagedAttention',
        reason: 'Handles 25+ simultaneous queries during market hours. Sub-2-second response time for real-time research queries during trading sessions.',
      },
    ],
  },
  {
    title: 'Vector Database & Retrieval',
    color: 'bg-[#AF52DE]',
    items: [
      {
        component: 'Vector Store',
        technology: 'Weaviate (self-hosted, Crestline data center)',
        reason: 'Stores embeddings with rich metadata: document type, date, author, client association, security classification, and temporal status (current/superseded). Enables precise filtered retrieval.',
      },
      {
        component: 'Chunking Strategy',
        technology: 'Financial-document-aware chunking — 512 tokens, table-preserving',
        reason: 'Custom chunking preserves financial tables, ratio calculations, and footnotes as atomic units. Prevents splitting a P&L statement across chunk boundaries.',
      },
      {
        component: 'Reranking',
        technology: 'Cohere Rerank (self-hosted) — cross-encoder',
        reason: 'Reranks top-20 retrieved chunks to top-5 before LLM context injection. Critical for distinguishing between similar research notes on different companies or time periods.',
      },
    ],
  },
  {
    title: 'Document Ingestion Pipeline',
    color: 'bg-[#34C759]',
    items: [
      {
        component: 'PDF / Excel Extraction',
        technology: 'Apache Tika + custom financial table parser',
        reason: 'Financial documents include complex multi-sheet Excel models, PDF reports with embedded tables, and scanned signed documents. Custom table parser preserves numerical relationships.',
      },
      {
        component: 'Document Classification',
        technology: 'Fine-tuned DistilBERT classifier (16 categories)',
        reason: 'Automatically tags documents as research note, investment memo, compliance filing, client report, trade confirmation, meeting minutes, policy document, etc.',
      },
      {
        component: 'Temporal Tagging',
        technology: 'Custom NLP pipeline — date extraction + supersession detection',
        reason: 'Identifies document effective dates, detects when newer documents supersede older ones, and maintains version chains. Ensures the AI always retrieves the most current research.',
      },
      {
        component: 'Update Pipeline',
        technology: 'Apache Airflow — continuous ingest with priority queue',
        reason: 'New research notes and compliance updates are ingested within 2 hours of creation. Priority queue ensures market-moving research is available to the AI before the next trading session.',
      },
    ],
  },
  {
    title: 'Integration & Infrastructure',
    color: 'bg-[#FF9500]',
    items: [
      {
        component: 'Portfolio System',
        technology: 'Custom PMS API bridge (read-only)',
        reason: 'Allows the AI to reference current portfolio positions, allocation data, and performance metrics when generating client reports and investment memos — without write access to the PMS.',
      },
      {
        component: 'CRM Integration',
        technology: 'Salesforce API (read-only)',
        reason: 'Enables the AI to reference client profiles, meeting notes, and relationship history when drafting client communications and reports. Read-only access ensures no data modification.',
      },
      {
        component: 'Authentication',
        technology: 'SAML 2.0 via Azure AD (Crestline SSO)',
        reason: 'Staff access via existing credentials. Client-level access controls enforced at the retrieval layer — an advisor can only query documents for their assigned client relationships.',
      },
      {
        component: 'Compute',
        technology: '2× NVIDIA A100 80GB SXM4 (on-premise)',
        reason: 'Dedicated GPU cluster provisioned by ArvinTech in Crestline\'s existing secure data center. Under Crestline\'s physical and logical control.',
      },
      {
        component: 'UI Layer',
        technology: 'Next.js 14 — embedded in firm intranet',
        reason: 'Deployed as a panel within Crestline\'s existing intranet dashboard. Analysts access it alongside Bloomberg and FactSet. No new login screens or workflow disruption.',
      },
    ],
  },
];

const aiPreparationPhases = [
  {
    week: 'Week 1',
    title: 'Document Audit & Inventory',
    description:
      'ArvinTech conducted a full audit of Crestline\'s document repositories: the research library (Confluence), compliance document management system (Smarsh), client reporting archive, investment committee materials, and departmental shared drives.',
    details: [
      '18,420 total documents inventoried across 5 source systems',
      '16 distinct document categories identified and mapped to user roles',
      '2,840 documents flagged as superseded and tagged with replacement references',
      '1,230 documents identified as compliance-critical and prioritized for first ingestion',
    ],
  },
  {
    week: 'Week 2',
    title: 'Data Quality & Compliance Review',
    description:
      'Each document was evaluated on four quality dimensions: extractability (can text and tables be reliably extracted?), completeness (are documents missing sections?), temporal status (is content current or superseded?), and sensitivity classification (does the document contain MNPI or client PII?).',
    details: [
      '18% of documents required remediation before ingestion',
      '11% contained complex financial tables requiring custom extraction',
      '6% were scanned signed documents requiring OCR processing',
      'Chief Compliance Officer sign-off obtained on training corpus scope and access controls',
    ],
  },
  {
    week: 'Week 3',
    title: 'Temporal Tagging & Supersession Mapping',
    description:
      'Financial documents have critical temporal dimensions. An investment thesis from Q1 may have been reversed in Q3. A compliance policy updated last month changes the framework for all prior recommendations. ArvinTech built a temporal tagging pipeline that tracks document lineage and ensures the AI always knows which version is current.',
    details: [
      '2,840 superseded documents linked to their replacements with effective dates',
      '4,120 research notes tagged with temporal metadata (publish date, review date, status)',
      'Version chains established for 340 recurring reports (quarterly client reports, market outlooks)',
      'Temporal queries enabled: "What was our thesis on Company X in Q2 2023?"',
    ],
  },
  {
    week: 'Week 4',
    title: 'Document Processing & Embedding',
    description:
      'Approved documents were processed through the ingestion pipeline: text and table extraction, financial-document-aware chunking (preserving tables and footnotes as atomic units), embedding generation, and vector database indexing.',
    details: [
      '15,580 documents approved for ingestion after audit and compliance review',
      '198,740 vector embeddings generated across all document chunks',
      'Average document processing time: 5.1 seconds per document (higher due to table parsing)',
      'Total ingestion pipeline runtime: 22.1 hours (weekend batch)',
    ],
  },
  {
    week: 'Week 5',
    title: 'Retrieval Quality Testing',
    description:
      'A test suite of 280 queries was developed by Crestline\'s senior analysts, portfolio managers, compliance officers, and the CIO — representing real questions staff ask daily. Each query was evaluated for retrieval precision, answer accuracy, temporal correctness, and citation quality.',
    details: [
      '280 test queries across 5 use case domains',
      'Initial retrieval precision: 71% (target: 90%+)',
      'Identified 2 document categories with poor table chunking — re-chunked with table-preserving logic',
      'Identified financial abbreviation gaps — added Crestline-specific glossary (AUM, NAV, IRR, MOIC, etc.)',
    ],
  },
  {
    week: 'Week 6',
    title: 'Tuning, Prompt Engineering & Re-testing',
    description:
      'Based on test results, ArvinTech refined the retrieval pipeline (temporal filtering, client-level access controls, table context preservation), optimized system prompts for each use case, and re-tested the full query set. Final retrieval precision reached 94.2% before production go-live.',
    details: [
      'Retrieval precision improved from 71% to 94.2% through pipeline tuning',
      'Use-case-specific system prompts written for 6 workflow types',
      'Response latency optimized: P95 latency reduced from 6.4s to 1.9s',
      'CIO and CCO sign-off obtained on answer quality and compliance safeguards',
    ],
  },
];

const workflowStages = [
  {
    title: 'Query Intake & Role/Client Verification',
    description:
      'Staff member submits a query through the IntelligenceAmplifier.AI interface. The system verifies the user\'s role and authorized client relationships via the SAML token. An analyst querying about Client X must be on the authorized team for that client — otherwise, client-specific documents are excluded from retrieval.',
    technical: 'JWT decoded → role + client_access_list extracted → document domain + client filters applied → query passed to pipeline',
  },
  {
    title: 'Query Decomposition & Temporal Context',
    description:
      'Complex queries are decomposed into sub-questions. Temporal context is extracted — a question about "our current position in Company X" retrieves the most recent research, while "our thesis history on Company X" retrieves the full temporal chain. The system defaults to current documents unless historical context is explicitly requested.',
    technical: 'LLM sub-query generation → temporal intent detected → current/historical filter applied → 1–4 parallel retrieval paths',
  },
  {
    title: 'Semantic Retrieval with Financial Metadata',
    description:
      'Each sub-query searches the Weaviate database with hybrid search. Retrieval is filtered by temporal status (current vs. superseded), client authorization, document type, and security classification. Financial table chunks are boosted when queries contain numerical or ratio-related terms.',
    technical: 'BGE-M3 embedding → Weaviate hybrid query (alpha=0.7 semantic / 0.3 keyword) → metadata filters → top-20 chunks with table boost',
  },
  {
    title: 'Reranking & Compliance Screening',
    description:
      'Top-20 chunks are reranked by the cross-encoder. Additionally, a compliance screening layer checks whether the query or retrieved documents may involve MNPI or restricted-list securities. If flagged, the response includes a compliance advisory and the interaction is logged for CCO review.',
    technical: 'Cohere cross-encoder → compliance keyword scanner → restricted-list check → top-5 selected → compliance flag if triggered',
  },
  {
    title: 'Response Generation with Citations',
    description:
      'Top-5 chunks are injected into the LLM context with a role-specific system prompt. The financial analysis prompt emphasizes numerical precision and source attribution. The compliance prompt emphasizes regulatory citations and conservative interpretation. Every claim is grounded in retrieved documents.',
    technical: 'System prompt + retrieved context + user query → LLaMA 70B inference → streamed response → inline citations to specific documents and sections',
  },
  {
    title: 'Output, Audit Trail & Logging',
    description:
      'The response is delivered with inline citations. Every interaction is logged to an immutable audit trail capturing user identity, client documents accessed, compliance flags triggered, and document sources used. Logs are retained per SEC Rule 204-2 requirements.',
    technical: 'Response + citations → UI rendering → audit log (user_id, timestamp, client_ids_accessed, doc_sources, compliance_flags) → immutable storage',
  },
];

const memoWorkflow = [
  {
    actor: 'Analyst',
    action: 'Opens IntelligenceAmplifier.AI from the intranet dashboard. Types: "Draft an investment memo for increasing our position in Meridian Healthcare Corp. Cite our prior research and the latest 10-Q."',
    latency: null,
  },
  {
    actor: 'AI System',
    action: 'Identifies Meridian Healthcare Corp (ticker: MHC) from the query. Retrieves: (1) all prior research notes on MHC (7 documents, 2022–2024), (2) the most recent 10-Q filing analysis, (3) the firm\'s current healthcare sector outlook, and (4) the existing position sizing and performance data from the PMS API.',
    latency: '1.4 seconds — multi-source retrieval',
  },
  {
    actor: 'AI System',
    action: 'Generates a structured investment memo following Crestline\'s standard template: Executive Summary, Investment Thesis, Financial Analysis (citing specific 10-Q metrics), Risk Factors, Valuation Framework, and Recommended Action. The memo references three prior research notes by date and author, incorporates the sector outlook, and notes the current position size and unrealized P&L.',
    latency: '3.8 seconds — memo generation with citations',
  },
  {
    actor: 'Analyst',
    action: 'Reviews the draft. Adjusts the valuation multiple from 14x to 12.5x based on a recent peer transaction. Adds a paragraph on management changes from a conversation not yet documented. Saves the memo to the research library.',
    latency: '~8 minutes review and personalization (previously 3.5 hours drafting)',
  },
  {
    actor: 'AI System',
    action: 'Detects the saved memo and automatically ingests it into the knowledge base. The new memo is now available to the AI for future queries — including the analyst\'s updated valuation rationale that was not in any prior document.',
    latency: '< 2 hours — priority ingest pipeline',
  },
  {
    actor: 'System',
    action: 'Memo is tagged with metadata (company: MHC, type: investment_memo, author, date, status: current), linked to the prior thesis chain, and indexed. The firm\'s institutional knowledge on MHC is now updated with the latest analysis. Total elapsed time: 12 minutes. Previous baseline: 4.2 hours.',
    latency: 'Previous baseline: 4.2 hours average',
  },
];

const timeline = [
  { week: 'Week 1', milestone: 'Project Kickoff & Stakeholder Alignment', detail: 'Engaged CIO, CCO, Head of Research, portfolio managers, and IT Director. Established use case priorities, SEC compliance requirements, and data access protocols.' },
  { week: 'Week 2', milestone: 'Document Audit & Classification', detail: 'ArvinTech team embedded with Crestline IT and compliance to inventory all document repositories. 18,420 documents identified across 5 systems.' },
  { week: 'Week 3', milestone: 'Data Quality, Compliance Review & Temporal Tagging', detail: 'Document remediation, table extraction, CCO review, and temporal supersession mapping. 15,580 documents approved for ingestion.' },
  { week: 'Week 4', milestone: 'Infrastructure Deployment', detail: 'GPU cluster provisioned in Crestline data center. Weaviate, vLLM, and supporting services deployed. Penetration testing and SOC 2 control verification completed.' },
  { week: 'Week 5', milestone: 'Document Ingestion & Embedding', detail: '198,740 embeddings generated. Vector database indexed. Continuous ingest pipeline activated with 2-hour priority queue for new research.' },
  { week: 'Week 6', milestone: 'Alpha Testing with Senior Staff', detail: '14 senior staff (analysts, PMs, compliance) ran structured testing. 280 test queries evaluated. Retrieval precision: 71%. Table chunking and financial terminology gaps identified.' },
  { week: 'Week 7', milestone: 'Pipeline Tuning & Prompt Engineering', detail: 'Table-preserving re-chunking, temporal filtering, client access controls, and system prompts refined. Retrieval precision improved to 94.2%.' },
  { week: 'Week 8–9', milestone: 'Pilot — Research & Compliance Teams', detail: 'Full deployment to the Research team (18 analysts) and Compliance (6 officers). Real-world feedback gathered. Compliance examination prep use case validated.' },
  { week: 'Week 10–11', milestone: 'Expanded Rollout — All Advisory Staff', detail: 'System opened to all 240 Crestline employees. Role-specific training sessions delivered. Client report generation workflow launched for Q3 reporting cycle.' },
  { week: 'Week 12', milestone: 'Stabilization & Handover', detail: 'System monitoring handed to Crestline IT. ArvinTech ongoing support SLA activated. Baseline metrics collection completed. Executive committee presentation delivered.' },
];

const securityFeatures = [
  { title: 'Zero External Data Transmission', detail: 'All LLM inference runs on Crestline\'s on-premise GPU cluster. No client data, trade information, research, or proprietary analysis is ever sent to an external AI provider.' },
  { title: 'MNPI Safeguards', detail: 'Compliance screening layer monitors queries and retrieved documents for potential material non-public information. Flagged interactions are logged for CCO review and include a compliance advisory in the response.' },
  { title: 'Client-Level Access Control', detail: 'Document retrieval is filtered by the user\'s authorized client relationships. An advisor can only access documents for clients they are assigned to — enforced at the retrieval layer, not the UI layer.' },
  { title: 'AES-256 Encryption at Rest', detail: 'All vector embeddings, document metadata, and system logs encrypted at rest using AES-256. Keys managed by Crestline\'s existing key management infrastructure.' },
  { title: 'TLS 1.3 in Transit', detail: 'All inter-service communication encrypted with TLS 1.3. No unencrypted data moves between any system components.' },
  { title: 'SEC Books & Records Compliance', detail: 'All AI interactions logged to an immutable audit trail per SEC Rule 204-2. Logs capture user identity, documents accessed, client relationships queried, and compliance flags triggered.' },
  { title: 'SOC 2 Type II Alignment', detail: 'The deployment architecture was reviewed against SOC 2 Type II controls for security, availability, and confidentiality. All applicable controls satisfied without remediation.' },
  { title: 'Third-Party Penetration Testing', detail: 'The deployed system underwent independent penetration testing by Crestline\'s external cybersecurity auditor. Zero critical or high-severity findings identified.' },
];

const results = [
  { metric: '71%', title: 'Reduction in Report Analysis Time', detail: 'Senior analyst report analysis and memo drafting time dropped from 4.1 hours to 1.2 hours per day. Measured across 32 analysts over 90 days post-deployment.' },
  { metric: '4.7 min', title: 'Audit Trail Compilation', detail: 'Complete client audit trail — investment memos, suitability analyses, approvals, and trade confirmations — compiled in 4.7 minutes. Previously required 8–12 hours of manual assembly.' },
  { metric: '82%', title: 'Faster SEC Exam Preparation', detail: 'Compliance examination preparation time dropped from 3.4 weeks to 3.5 days. The most recent SEC examination was the firm\'s smoothest on record, per the CCO.' },
  { metric: '4 days', title: 'Client Report Cycle Time', detail: 'Quarterly client report generation collapsed from 3.5 weeks and 340 person-hours to 4 days and 80 person-hours. Report quality rated higher by clients in post-cycle survey.' },
  { metric: '96%', title: 'Staff Satisfaction Score', detail: '96% of active users rated IntelligenceAmplifier.AI as "very useful" or "indispensable" in the 90-day survey. Highest adoption in the Research team (100%) and Compliance (100%).' },
  { metric: '$2.1M', title: 'Projected Annual Savings', detail: 'Blended calculation of analyst time recovered, compliance preparation efficiency, client report automation, and accelerated junior analyst onboarding across all 240 staff.' },
];

const quotes = [
  {
    text: 'I used to spend my entire morning reading through quarterly filings and cross-referencing our prior research before I could start writing. Now I ask the AI for a synthesis and get a draft memo with citations to our own research in under five minutes. The quality of my analysis improved because I spend my time thinking, not searching.',
    attribution: 'Senior Equity Analyst, Crestline Capital Partners',
  },
  {
    text: 'Our last SEC exam was the best we\'ve ever had. When the examiner asked for documentation on a specific client recommendation, I pulled the complete audit trail — memo, suitability analysis, approval chain, and trade confirmation — in under five minutes. The examiner actually commented on how organized our records were.',
    attribution: 'Chief Compliance Officer, Crestline Capital Partners',
  },
  {
    text: 'I joined Crestline four months ago. My colleagues who started a year before me say it took them a year to feel productive. I was contributing to investment committee materials in my third week because the AI gave me instant access to the firm\'s entire research history. It\'s like having a senior analyst mentor available 24/7.',
    attribution: 'Junior Analyst (new hire), 4 months tenure',
  },
  {
    text: 'The client reports we sent this quarter were the best we\'ve ever produced. The AI drafted each one incorporating our actual research and the client\'s specific portfolio context. I spent my time personalizing and adding my perspective rather than writing boilerplate. Three clients called to say the report was the most insightful they\'d received.',
    attribution: 'Managing Director, Wealth Advisory',
  },
];

const learnings = [
  {
    type: 'do-again' as const,
    title: 'Temporal tagging is non-negotiable for financial services',
    description: 'The supersession mapping and temporal metadata pipeline was the most important preparation step. Without it, the AI would have retrieved outdated research alongside current analysis, creating a dangerous mix of current and historical recommendations. Every financial services deployment must include temporal awareness as a core capability.',
  },
  {
    type: 'do-again' as const,
    title: 'Client-level access controls built into the retrieval layer',
    description: 'Enforcing client access at the retrieval layer — not the UI — means that even if a prompt injection or interface bug occurred, unauthorized client documents would never be returned. This architectural decision gave the CCO confidence to approve the deployment and should be standard for any multi-client advisory firm.',
  },
  {
    type: 'do-again' as const,
    title: 'Continuous ingest with a priority queue for new research',
    description: 'The 2-hour priority ingest pipeline for new research notes ensures the AI\'s knowledge base is never more than a few hours behind the firm\'s current thinking. This was critical for adoption — analysts trusted the AI because they knew it had their latest work.',
  },
  {
    type: 'improve' as const,
    title: 'Table extraction requires more specialized tooling',
    description: 'Financial documents contain complex multi-column tables, footnoted data, and nested calculations. Our initial extraction pipeline handled 83% of tables correctly. The remaining 17% required a custom table parser that we built during Week 3. Future financial deployments will include the enhanced table parser from day one.',
  },
  {
    type: 'improve' as const,
    title: 'Role-specific training from the start, not generic onboarding',
    description: 'The initial training session covered the system broadly. Analysts engaged immediately. Operations and client service staff found less relevance in the generic demo. Subsequent role-specific training — showing each team their highest-value queries — improved adoption in underperforming groups by 40%.',
  },
];
