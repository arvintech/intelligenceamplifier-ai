import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Measuring the Impact - The Alarming Rise of Stupidity Amplified',
  description: 'Read Measuring the Impact from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 7', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-7-measuring-impact',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'Measuring the Impact', url: '/books/alarming-rise-stupidity-amplified/chapter-7-measuring-impact' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Measuring the Impact" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={7}
        chapterTitle="Measuring the Impact"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Greater Threat: Amplified Stupidity', slug: 'chapter-6-amplified-stupidity' }}
        nextChapter={{ title: 'The Human Responsibility', slug: 'chapter-8-human-responsibility' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
