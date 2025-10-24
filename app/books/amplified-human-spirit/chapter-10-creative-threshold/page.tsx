import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Creative Threshold - The Amplified Human Spirit',
  description: 'Read Chapter 10: The Creative Threshold from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'creativity', 'chapter 10', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-10-creative-threshold',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 10: The Creative Threshold', url: '/books/amplified-human-spirit/chapter-10-creative-threshold' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Creative Threshold" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={10}
        chapterTitle="The Creative Threshold"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Intelligence Amplified Human', slug: 'chapter-9-intelligence-amplified-human' }}
        nextChapter={{ title: 'Amplified Relationships', slug: 'chapter-11-amplified-relationships' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

