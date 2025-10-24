import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Amplified Relationships - The Amplified Human Spirit',
  description: 'Read Chapter 11: Amplified Relationships from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'relationships', 'chapter 11', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-11-amplified-relationships',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 11: Amplified Relationships', url: '/books/amplified-human-spirit/chapter-11-amplified-relationships' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Amplified Relationships" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={11}
        chapterTitle="Amplified Relationships"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Creative Threshold', slug: 'chapter-10-creative-threshold' }}
        nextChapter={{ title: 'The Necessity of Silence', slug: 'chapter-12-necessity-of-silence' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

