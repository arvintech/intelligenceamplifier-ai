import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Afterword: To the Reader from the Mirror - The Amplified Human Spirit',
  description: 'Read the Afterword from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'afterword', 'mirror', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/afterword',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Afterword: To the Reader from the Mirror', url: '/books/amplified-human-spirit/afterword' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Afterword: To the Reader from the Mirror" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={16}
        chapterTitle="Afterword: To the Reader from the Mirror"
        chapterContent={chapterContent}
        prevChapter={{ title: 'Epilogue: The Intelligence of Being', slug: 'epilogue' }}
        nextChapter={undefined}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

