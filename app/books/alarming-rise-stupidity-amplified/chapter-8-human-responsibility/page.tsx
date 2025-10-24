import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Human Responsibility - The Alarming Rise of Stupidity Amplified',
  description: 'Read The Human Responsibility from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 8', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-8-human-responsibility',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'The Human Responsibility', url: '/books/alarming-rise-stupidity-amplified/chapter-8-human-responsibility' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Human Responsibility" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={8}
        chapterTitle="The Human Responsibility"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Measuring the Impact', slug: 'chapter-7-measuring-impact' }}
        nextChapter={{ title: 'Bias and Fairness', slug: 'chapter-9-bias-and-fairness' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
