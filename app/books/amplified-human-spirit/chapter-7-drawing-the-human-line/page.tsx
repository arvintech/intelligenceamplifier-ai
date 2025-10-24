import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Drawing the Human Line - The Amplified Human Spirit',
  description: 'Read Chapter 7: Drawing the Human Line from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'human line', 'chapter 7', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-7-drawing-the-human-line',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 7: Drawing the Human Line', url: '/books/amplified-human-spirit/chapter-7-drawing-the-human-line' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Drawing the Human Line" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={7}
        chapterTitle="Drawing the Human Line"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Intelligence of Love and Pain', slug: 'chapter-6-intelligence-of-love-and-pain' }}
        nextChapter={{ title: 'The Humility Paradox', slug: 'chapter-8-humility-paradox' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

