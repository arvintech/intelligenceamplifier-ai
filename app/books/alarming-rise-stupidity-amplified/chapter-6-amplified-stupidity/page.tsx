import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Greater Threat: Amplified Stupidity - The Alarming Rise of Stupidity Amplified',
  description: 'Read The Greater Threat: Amplified Stupidity from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 6', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-6-amplified-stupidity',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'The Greater Threat: Amplified Stupidity', url: '/books/alarming-rise-stupidity-amplified/chapter-6-amplified-stupidity' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Greater Threat: Amplified Stupidity" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={6}
        chapterTitle="The Greater Threat: Amplified Stupidity"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Dark Mirror: Amplifying Ignorance', slug: 'chapter-5-amplifying-ignorance' }}
        nextChapter={{ title: 'Measuring the Impact', slug: 'chapter-7-measuring-impact' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
