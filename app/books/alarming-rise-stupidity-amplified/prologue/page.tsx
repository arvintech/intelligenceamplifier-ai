import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Prologue: Navigating the Ethical Risks Beyond Intelligence - The Alarming Rise of Stupidity Amplified',
  description: 'Read Prologue: Navigating the Ethical Risks Beyond Intelligence from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 0', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/prologue',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'Prologue: Navigating the Ethical Risks Beyond Intelligence', url: '/books/alarming-rise-stupidity-amplified/prologue' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Prologue: Navigating the Ethical Risks Beyond Intelligence" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={0}
        chapterTitle="Prologue: Navigating the Ethical Risks Beyond Intelligence"
        chapterContent={chapterContent}
        prevChapter={undefined}
        nextChapter={{ title: 'The Paradox of Modern Intelligence', slug: 'chapter-1-paradox-of-modern-intelligence' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
