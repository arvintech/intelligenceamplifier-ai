import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Distinguishing Ignorance from Stupidity - The Alarming Rise of Stupidity Amplified',
  description: 'Read Distinguishing Ignorance from Stupidity from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 3', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-3-ignorance-vs-stupidity',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'Distinguishing Ignorance from Stupidity', url: '/books/alarming-rise-stupidity-amplified/chapter-3-ignorance-vs-stupidity' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Distinguishing Ignorance from Stupidity" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={3}
        chapterTitle="Distinguishing Ignorance from Stupidity"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Understanding Intelligence in the Age of AI', slug: 'chapter-2-understanding-intelligence' }}
        nextChapter={{ title: 'How AI Amplifies Human Potential', slug: 'chapter-4-ai-amplifies-potential' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
