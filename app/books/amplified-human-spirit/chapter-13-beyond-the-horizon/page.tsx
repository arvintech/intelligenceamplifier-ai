import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Beyond the Horizon - The Amplified Human Spirit',
  description: 'Read Chapter 13: Beyond the Horizon from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'future', 'chapter 13', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-13-beyond-the-horizon',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 13: Beyond the Horizon', url: '/books/amplified-human-spirit/chapter-13-beyond-the-horizon' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Beyond the Horizon" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={13}
        chapterTitle="Beyond the Horizon"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Necessity of Silence', slug: 'chapter-12-necessity-of-silence' }}
        nextChapter={{ title: 'The Evolving Measure', slug: 'chapter-14-evolving-measure' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

