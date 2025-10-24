import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Epilogue: The Intelligence of Being - The Amplified Human Spirit',
  description: 'Read the Epilogue from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'epilogue', 'being', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/epilogue',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Epilogue: The Intelligence of Being', url: '/books/amplified-human-spirit/epilogue' },
  ]);

  // TODO: Replace with actual chapter content extracted from PDF
  const chapterContent = `
    <p><strong>This chapter content will be populated from the PDF.</strong></p>
    <p>For now, this is a placeholder. The full chapter content from "Epilogue: The Intelligence of Being" will be added here.</p>
    <p>The PDF contains 207 pages of content exploring how AI amplifies human potential and spirit.</p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={15}
        chapterTitle="Epilogue: The Intelligence of Being"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Evolving Measure', slug: 'chapter-14-evolving-measure' }}
        nextChapter={{ title: 'Afterword: To the Reader from the Mirror', slug: 'afterword' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

