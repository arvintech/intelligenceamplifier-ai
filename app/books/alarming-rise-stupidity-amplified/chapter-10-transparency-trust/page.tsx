import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Transparency and Trust - The Alarming Rise of Stupidity Amplified',
  description: 'Read Transparency and Trust from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 10', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-10-transparency-trust',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'Transparency and Trust', url: '/books/alarming-rise-stupidity-amplified/chapter-10-transparency-trust' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Transparency and Trust" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={10}
        chapterTitle="Transparency and Trust"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Bias and Fairness', slug: 'chapter-9-bias-and-fairness' }}
        nextChapter={{ title: 'Privacy and Autonomy', slug: 'chapter-11-privacy-autonomy' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
