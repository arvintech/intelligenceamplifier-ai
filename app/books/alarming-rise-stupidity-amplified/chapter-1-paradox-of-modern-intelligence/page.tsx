import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'The Paradox of Modern Intelligence - The Alarming Rise of Stupidity Amplified',
  description: 'Read The Paradox of Modern Intelligence from The Alarming Rise of Stupidity Amplified by Arvin Lioanag.',
  keywords: ['AI ethics', 'stupidity amplified', 'chapter 1', 'artificial intelligence'],
  url: '/books/alarming-rise-stupidity-amplified/chapter-1-paradox-of-modern-intelligence',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/alarming-rise-stupidity-amplified' },
    { name: 'The Paradox of Modern Intelligence', url: '/books/alarming-rise-stupidity-amplified/chapter-1-paradox-of-modern-intelligence' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "The Paradox of Modern Intelligence" will be added here.</p>
    <p>The PDF contains 308 pages of content exploring how AI amplifies both human potential and human stupidity.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={1}
        chapterTitle="The Paradox of Modern Intelligence"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Prologue: Navigating the Ethical Risks Beyond Intelligence', slug: 'prologue' }}
        nextChapter={{ title: 'Understanding Intelligence in the Age of AI', slug: 'chapter-2-understanding-intelligence' }}
        bookTitle="The Alarming Rise of Stupidity Amplified"
        bookSlug="alarming-rise-stupidity-amplified"
      />
    </>
  );
}
