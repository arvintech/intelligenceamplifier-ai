import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Privacy and Autonomy - The Alarming Rise of Stupidity Amplified',
  description: 'Read Privacy and Autonomy from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 11', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-11-privacy-autonomy',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'Privacy and Autonomy', url: '/books/alarming-rise-stupidity-amplified/chapter-11-privacy-autonomy' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Privacy and Autonomy" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={11}
        chapterTitle="Privacy and Autonomy"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Transparency and Trust', slug: 'chapter-10-transparency-trust' }}
        nextChapter={{ title: 'Education as the Primary Defense', slug: 'chapter-12-education-defense' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
