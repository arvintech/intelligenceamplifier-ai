import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Appendix: The AI Exploration Guide - The Alarming Rise of Stupidity Amplified',
  description: 'Read Appendix: The AI Exploration Guide from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 15', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/appendix',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'Appendix: The AI Exploration Guide', url: '/books/alarming-rise-stupidity-amplified/appendix' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Appendix: The AI Exploration Guide" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={15}
        chapterTitle="Appendix: The AI Exploration Guide"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Epilogue', slug: 'epilogue' }}
        nextChapter={undefined}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
