import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Evolving Measure - The Amplified Human Spirit',
  description: 'Read Chapter 14: The Evolving Measure from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'measure', 'chapter 14', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-14-evolving-measure',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 14: The Evolving Measure', url: '/books/amplified-human-spirit/chapter-14-evolving-measure' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Evolving Measure" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={14}
        chapterTitle="The Evolving Measure"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Beyond the Horizon', slug: 'chapter-13-beyond-the-horizon' }}
        nextChapter={{ title: 'Epilogue: The Intelligence of Being', slug: 'epilogue' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

