import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Prologue: The Golden Gate to the Future - San Francisco - AI Capital of The World',
  description: 'Read the Prologue: The Golden Gate to the Future from San Francisco - AI Capital of The World by Arvin Lioanag.',
  keywords: ['San Francisco', 'AI capital', 'Silicon Valley', 'tech innovation', 'artificial intelligence'],
  url: '/books/san-francisco-ai-capital/prologue',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/san-francisco-ai-capital' },
    { name: 'Prologue: The Golden Gate to the Future', url: '/books/san-francisco-ai-capital/prologue' },
  ]);

  const chapterContent = `
    <p class="lead">
      Stand at the center of the Golden Gate Bridge on a foggy morning, and you can feel it—the electric 
      hum of innovation that permeates every corner of this extraordinary city. The mist that rolls in from 
      the Pacific carries more than moisture; it carries the dreams and ambitions of millions who have come 
      to this place seeking to change the world.
    </p>

    <p>
      San Francisco and its surrounding region—what we now call Silicon Valley—has become something unprecedented 
      in human history: a concentrated nexus of technological innovation so powerful that it shapes the daily 
      lives of billions of people across the globe. And at the heart of this transformation lies artificial 
      intelligence.
    </p>

    <h2>Why Here? Why Now?</h2>

    <p>
      This book seeks to answer a deceptively simple question: How did this particular patch of land, 
      roughly 50 miles long and 30 miles wide, become the undisputed capital of artificial intelligence?
    </p>

    <p>
      It wasn't inevitable. Boston had MIT. Seattle had Microsoft. New York had capital. London had history. 
      China had ambition and resources. Yet none of these places could replicate what emerged in the Bay Area—a 
      unique ecosystem where brilliant minds, risk-taking capital, and a culture of relentless innovation 
      converged to create something extraordinary.
    </p>

    <h2>The Journey Ahead</h2>

    <p>
      In the chapters that follow, we'll explore the forces that made San Francisco the AI capital of the world. 
      We'll trace the historical roots of Silicon Valley, examine the titans of tech who built the infrastructure 
      for today's AI revolution, and meet the pioneers pushing the boundaries of what's possible.
    </p>

    <p>
      We'll venture into the offices of OpenAI, where researchers are racing toward artificial general intelligence. 
      We'll walk through the streets of the Mission District, where entrepreneurs in cramped apartments are building 
      the next generation of AI startups. We'll examine the venture capital firms that fuel this ecosystem, and the 
      universities that feed it with talent.
    </p>

    <p>
      But this isn't just a celebration. We'll also confront the darker realities: the housing crisis that threatens 
      to push out the very people who make this city vibrant, the inequality that has reached staggering proportions, 
      and the ethical questions that arise when a handful of companies and individuals wield such extraordinary power 
      over the future of human civilization.
    </p>

    <blockquote>
      <p>
        "The future is already here—it's just not evenly distributed." 
        <br/>
        — William Gibson
      </p>
    </blockquote>

    <p>
      And nowhere is that future more concentrated than in San Francisco.
    </p>

    <h2>A Personal Note</h2>

    <p>
      I've walked these streets for years, watching the transformation unfold. I've seen billion-dollar companies 
      born in coffee shops, witnessed the rise of technologies that seemed like science fiction, and observed the 
      profound impact—both positive and negative—that this concentration of innovation has on the people who call 
      this place home.
    </p>

    <p>
      This book is my attempt to capture a moment in time, to document how we got here and to contemplate where 
      we're going. Because San Francisco isn't just the AI capital of the world—it's the laboratory where humanity 
      is actively experimenting with its own future.
    </p>

    <p>
      Welcome to that laboratory. Welcome to San Francisco.
    </p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={0}
        chapterTitle="Prologue: The Golden Gate to the Future"
        chapterContent={chapterContent}
        prevChapter={undefined}
        nextChapter={{ title: 'The Birth of Silicon Valley', slug: 'chapter-1-birth-of-silicon-valley' }}
        bookTitle="San Francisco - AI Capital of The World"
        bookSlug="san-francisco-ai-capital"
      />
    </>
  );
}

