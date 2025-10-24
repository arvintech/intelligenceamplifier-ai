import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'How AI Amplifies Human Potential - The Alarming Rise of Stupidity Amplified',
  description: 'Read How AI Amplifies Human Potential from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 4', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-4-ai-amplifies-potential',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'How AI Amplifies Human Potential', url: '/books/alarming-rise-stupidity-amplified/chapter-4-ai-amplifies-potential' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "How AI Amplifies Human Potential" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={4}
        chapterTitle="How AI Amplifies Human Potential"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Distinguishing Ignorance from Stupidity', slug: 'chapter-3-ignorance-vs-stupidity' }}
        nextChapter={{ title: 'The Dark Mirror: Amplifying Ignorance', slug: 'chapter-5-amplifying-ignorance' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
