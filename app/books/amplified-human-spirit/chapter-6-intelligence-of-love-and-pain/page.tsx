import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Intelligence of Love and Pain - The Amplified Human Spirit',
  description: 'Read Chapter 6: The Intelligence of Love and Pain from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'love', 'pain', 'chapter 6', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-6-intelligence-of-love-and-pain',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 6: The Intelligence of Love and Pain', url: '/books/amplified-human-spirit/chapter-6-intelligence-of-love-and-pain' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Intelligence of Love and Pain" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={6}
        chapterTitle="The Intelligence of Love and Pain"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Sacred Interaction', slug: 'chapter-5-sacred-interaction' }}
        nextChapter={{ title: 'Drawing the Human Line', slug: 'chapter-7-drawing-the-human-line' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

