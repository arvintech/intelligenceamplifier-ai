import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Dark Mirror: Amplifying Ignorance - The Alarming Rise of Stupidity Amplified',
  description: 'Read The Dark Mirror: Amplifying Ignorance from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 5', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-5-amplifying-ignorance',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'The Dark Mirror: Amplifying Ignorance', url: '/books/alarming-rise-stupidity-amplified/chapter-5-amplifying-ignorance' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Dark Mirror: Amplifying Ignorance" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={5}
        chapterTitle="The Dark Mirror: Amplifying Ignorance"
        chapterContent={chapterContent}
        prevChapter={{ title: 'How AI Amplifies Human Potential', slug: 'chapter-4-ai-amplifies-potential' }}
        nextChapter={{ title: 'The Greater Threat: Amplified Stupidity', slug: 'chapter-6-amplified-stupidity' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
