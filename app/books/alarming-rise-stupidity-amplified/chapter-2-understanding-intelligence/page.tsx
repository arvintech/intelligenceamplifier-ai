import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Understanding Intelligence in the Age of AI - The Alarming Rise of Stupidity Amplified',
  description: 'Read Understanding Intelligence in the Age of AI from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 2', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-2-understanding-intelligence',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'Understanding Intelligence in the Age of AI', url: '/books/alarming-rise-stupidity-amplified/chapter-2-understanding-intelligence' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Understanding Intelligence in the Age of AI" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={2}
        chapterTitle="Understanding Intelligence in the Age of AI"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Paradox of Modern Intelligence', slug: 'chapter-1-paradox-of-modern-intelligence' }}
        nextChapter={{ title: 'Distinguishing Ignorance from Stupidity', slug: 'chapter-3-ignorance-vs-stupidity' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
