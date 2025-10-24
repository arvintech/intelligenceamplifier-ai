import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Necessity of Silence - The Amplified Human Spirit',
  description: 'Read Chapter 12: The Necessity of Silence from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'silence', 'chapter 12', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-12-necessity-of-silence',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 12: The Necessity of Silence', url: '/books/amplified-human-spirit/chapter-12-necessity-of-silence' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Necessity of Silence" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={12}
        chapterTitle="The Necessity of Silence"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Amplified Relationships', slug: 'chapter-11-amplified-relationships' }}
        nextChapter={{ title: 'Beyond the Horizon', slug: 'chapter-13-beyond-the-horizon' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

