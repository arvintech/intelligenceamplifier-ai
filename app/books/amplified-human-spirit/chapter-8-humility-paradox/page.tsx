import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Humility Paradox - The Amplified Human Spirit',
  description: 'Read Chapter 8: The Humility Paradox from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'humility', 'chapter 8', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-8-humility-paradox',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 8: The Humility Paradox', url: '/books/amplified-human-spirit/chapter-8-humility-paradox' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Humility Paradox" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={8}
        chapterTitle="The Humility Paradox"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Drawing the Human Line', slug: 'chapter-7-drawing-the-human-line' }}
        nextChapter={{ title: 'The Intelligence Amplified Human', slug: 'chapter-9-intelligence-amplified-human' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

