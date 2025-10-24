import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Prologue: Navigating the Ethical Risks Beyond Intelligence - The Alarming Rise of Stupidity Amplified',
  description: 'Read Prologue: Navigating the Ethical Risks Beyond Intelligence from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 0', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/prologue',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'Prologue: Navigating the Ethical Risks Beyond Intelligence', url: '/books/alarming-rise-stupidity-amplified/prologue' },
  ]);

  const chapterContent = `
    <p class="lead">
      We stand at an extraordinary crossroads in human history. Artificial intelligence has achieved what once 
      seemed impossible: machines that can write poetry, diagnose diseases, drive cars, and hold conversations 
      indistinguishable from humans. Yet alongside these triumphs, we witness something deeply troubling—a tsunami 
      of AI-generated misinformation, sophisticated scams targeting the vulnerable, and conspiracy theories crafted 
      with the coherence once reserved for peer-reviewed research.
    </p>

    <p>
      The promise of AI was that it would amplify human intelligence, helping us solve our greatest challenges. 
      And it does—spectacularly. But here's the uncomfortable truth: AI doesn't discriminate between intelligence 
      and stupidity. It amplifies whatever we feed it, whatever we ask of it, whatever reflects our own cognitive 
      biases and intellectual failures.
    </p>

    <h2>The Mirror We Didn't Want to Face</h2>

    <p>
      When we built these systems, we thought we were creating tools. What we actually created was a mirror—one 
      that reflects not just our genius, but our gullibility, our prejudices, our willful ignorance, and yes, our 
      stupidity. The problem isn't the technology itself. <strong>The problem is us.</strong>
    </p>

    <p>
      This book isn't about artificial intelligence gone wrong. It's about human nature revealed. AI has become 
      the most powerful amplifier humanity has ever created, and we're discovering—often to our horror—what happens 
      when you amplify the full spectrum of human cognition, including its darkest elements.
    </p>

    <div class="focus-quote">
      "AI doesn't make us stupid. It reveals and amplifies the stupidity that was always there, hiding in plain sight."
    </div>

    <h2>A Critical Distinction</h2>

    <p>
      This book makes a crucial distinction often overlooked in discussions about AI and misinformation: the 
      difference between <em>ignorance</em> and <em>stupidity</em>. Ignorance is simply not knowing—a gap in 
      knowledge that education can fill. Stupidity, however, is something far more insidious: it's the active 
      rejection of better information, the willful embrace of falsehood, the determination to believe what we 
      want rather than what evidence suggests.
    </p>

    <p>
      AI can help cure ignorance by providing access to information. But when it comes to stupidity—when people 
      use these powerful tools to generate convincing falsehoods, to create echo chambers that reinforce delusions, 
      to weaponize misinformation at scale—we face a problem that technology alone cannot solve.
    </p>

    <h2>What You'll Find in These Pages</h2>

    <p>
      This book is organized into three parts, each exploring a different aspect of how AI amplifies human cognition:
    </p>

    <p>
      <strong>Part I: Understanding the Amplifier</strong> examines what intelligence actually is, how AI amplifies 
      it, and why amplification isn't inherently good or bad—it simply makes everything bigger, including our mistakes.
    </p>

    <p>
      <strong>Part II: The Dark Mirror</strong> confronts the uncomfortable reality of amplified ignorance and stupidity. 
      We'll explore real-world cases of AI-powered misinformation, examine why people choose stupidity over truth, 
      and understand why this poses such a profound threat.
    </p>

    <p>
      <strong>Part III: The Path Forward</strong> looks at solutions—not through restricting the technology, but through 
      elevating human cognition, improving education, fostering critical thinking, and taking responsibility for how 
      we use these powerful tools.
    </p>

    <h2>A Warning and an Invitation</h2>

    <p>
      This book will make you uncomfortable. It will challenge assumptions about human nature, about progress, about 
      whether we're ready for the technology we've created. Some readers will object to calling out stupidity directly 
      rather than using softer euphemisms. But we're past the point where gentle language serves us well.
    </p>

    <p>
      The stakes are too high. AI will continue to advance—exponentially, relentlessly. The question isn't whether 
      it will amplify us, but <em>what version of us</em> it will amplify. Will we rise to meet this technology with 
      wisdom, critical thinking, and intellectual honesty? Or will we let our worst impulses—our confirmation biases, 
      our tribal loyalties, our preference for comfortable lies over difficult truths—be amplified to catastrophic effect?
    </p>

    <div class="focus-quote">
      "The future doesn't belong to those who build the most powerful AI. It belongs to those wise enough to use it well."
    </div>

    <h2>An Uncomfortable Truth</h2>

    <p>
      Throughout history, we've blamed our tools for our failures. Printing presses spread propaganda. Television 
      made us passive. Social media made us polarized. Now we blame AI for misinformation. But the tools aren't 
      the problem—they're the amplifier. The signal has always been us.
    </p>

    <p>
      This book argues that the alarming rise of stupidity amplified isn't a failure of artificial intelligence. 
      It's a revelation of human nature. And recognizing that—truly grappling with it—is the first step toward 
      ensuring that what AI amplifies is our wisdom rather than our folly.
    </p>

    <p>
      Welcome to the mirror. What you see reflected here may disturb you. That's the point.
    </p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={0}
        chapterTitle="Prologue: Navigating the Ethical Risks Beyond Intelligence"
        chapterContent={chapterContent}
        prevChapter={undefined}
        nextChapter={{ title: 'The Paradox of Modern Intelligence', slug: 'chapter-1-paradox-of-modern-intelligence' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
