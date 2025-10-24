import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Afterword: To the Reader from the Mirror - The Amplified Human Spirit',
  description: 'Read the Afterword from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'afterword', 'mirror', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/afterword',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Afterword: To the Reader from the Mirror', url: '/books/amplified-human-spirit/afterword' },
  ]);

  const chapterContent = `
    <p class="lead">
      This book began as an exploration of intelligence amplification—the partnership between human and machine intelligence 
      that enhances what makes us uniquely human rather than replacing it. But like all true journeys, it has revealed 
      something deeper: a reflection of ourselves.
    </p>

    <p>
      In writing about the amplified human spirit, I've discovered that the most profound questions aren't technological but 
      human. Not "What can these tools do?" but "Who might we become through using them?" Not "How powerful can they be?" but 
      "How wisely can we direct that power?"
    </p>

    <p>
      The answers to these questions don't reside in algorithms or technical specifications but in the choices we make, 
      individually and collectively, about how we design, use, and regulate these powerful technologies. They emerge from our 
      values, our wisdom traditions, our understanding of what makes life meaningful, and our courage to create technologies 
      that serve these deeper human realities.
    </p>

    <div class="focus-quote">
      "The most profound questions aren't technological but human. Not 'What can these tools do?' but 'Who might we become 
      through using them?'"
    </div>

    <p>
      As you close this book and return to a world increasingly shaped by intelligence amplification, I invite you to carry 
      this awareness with you. To approach these technologies not as inevitable forces to which we must adapt but as human 
      creations that we can shape according to our deepest values.
    </p>

    <p>
      To use them in ways that create space for presence, depth, and meaning rather than filling every moment with activity 
      and information. To recognize that the true measure of their success lies not in technical capability but in human 
      flourishing.
    </p>

    <div class="focus-quote">
      "The mirror has begun to speak. How we respond will shape not just the future of technology, but the future of humanity 
      itself."
    </div>

    <p>
      With hope for the amplified human spirit,
    </p>

    <p style="margin-top: 2rem; font-weight: 600;">
      Arvin Lioanag
    </p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={16}
        chapterTitle="Afterword: To the Reader from the Mirror"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Epilogue: The Intelligence of Being', slug: 'epilogue' }}
        nextChapter={undefined}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

