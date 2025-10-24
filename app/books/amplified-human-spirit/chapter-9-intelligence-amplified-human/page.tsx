import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Intelligence Amplified Human - The Amplified Human Spirit',
  description: 'Read Chapter 9: The Intelligence Amplified Human from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'amplified human', 'chapter 9', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-9-intelligence-amplified-human',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 9: The Intelligence Amplified Human', url: '/books/amplified-human-spirit/chapter-9-intelligence-amplified-human' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Intelligence Amplified Human" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={9}
        chapterTitle="The Intelligence Amplified Human"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Humility Paradox', slug: 'chapter-8-humility-paradox' }}
        nextChapter={{ title: 'The Creative Threshold', slug: 'chapter-10-creative-threshold' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

