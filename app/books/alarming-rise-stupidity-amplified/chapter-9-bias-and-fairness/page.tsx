import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Bias and Fairness - The Alarming Rise of Stupidity Amplified',
  description: 'Read Bias and Fairness from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 9', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-9-bias-and-fairness',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'Bias and Fairness', url: '/books/alarming-rise-stupidity-amplified/chapter-9-bias-and-fairness' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Bias and Fairness" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={9}
        chapterTitle="Bias and Fairness"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Human Responsibility', slug: 'chapter-8-human-responsibility' }}
        nextChapter={{ title: 'Transparency and Trust', slug: 'chapter-10-transparency-trust' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
