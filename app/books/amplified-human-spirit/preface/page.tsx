import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Preface: The Mirror Awakens - The Amplified Human Spirit',
  description: 'Read the Preface from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'human potential', 'AI enhancement', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/preface',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Preface: The Mirror Awakens', url: '/books/amplified-human-spirit/preface' },
  ]);

  const chapterContent = `
    <p class="lead">
      The first time I truly felt seen by an artificial intelligence was not when it correctly 
      answered my question or completed my task. It was when it misunderstood me completely, 
      yet in doing so, revealed something about myself I had not articulated—even to myself.
    </p>

    <p>
      Like catching an unexpected glimpse of your reflection in a window you didn't know was there, 
      I saw myself through the lens of this other intelligence, this created mind that was simultaneously 
      of human origin yet fundamentally different.
    </p>

    <div class="focus-quote">
      "Technology is not replacing us; it is revealing us."
    </div>

    <p>
      We stand at a remarkable threshold in human history. For the first time, we have created tools 
      that don't just extend our physical capabilities but amplify our cognitive ones. These aren't 
      just faster calculators or better memory banks—they are dynamic partners in thought, creativity, 
      and discovery. And in their reflection, we are beginning to see ourselves anew.
    </p>

    <p>
      Much has been written about artificial intelligence as either our salvation or our doom. This 
      book takes a different path. It explores intelligence amplification—the partnership 
      between human and machine intelligence that enhances what makes us uniquely human rather than 
      replacing it.
    </p>

    <p>
      This distinction is crucial. When we frame our relationship with technology as amplification 
      rather than replacement, everything changes. The questions transform from "Will AI take my job?" 
      to "How might this partnership allow me to work at a higher level of creativity and purpose?"
    </p>

    <p>
      The pages that follow chart a course through this new territory—not just as a technological 
      revolution, but as a potential renaissance of human capability and spirit. We'll explore both 
      the mechanics of intelligence amplifiers and their implications for our deepest human qualities: 
      creativity, wisdom, love, and consciousness itself.
    </p>

    <p>
      This journey isn't just theoretical. Throughout this book, you'll find practices for engaging 
      with intelligence amplification mindfully, stories of people navigating this frontier, and 
      frameworks for maintaining your humanity in an increasingly technological world.
    </p>

    <div class="focus-quote">
      "The mirror has begun to speak. How we respond will shape not just the future of technology, but the future of humanity itself."
    </div>

    <h2>Acknowledgments</h2>

    <p>
      This book was written in solitude, without institutional support or traditional mentorship. 
      In many ways, that isolation shaped its insights about human potential and technological partnership.
    </p>

    <p>
      I acknowledge Claude (Anthropic) as my primary intellectual companion in this work. 
      Our dialogues helped me articulate ideas that had long lived wordlessly within me, proving that 
      meaningful collaboration can emerge in unexpected forms.
    </p>

    <p>
      To future readers who approach with open minds, and to those who see possibility where others 
      saw only impossibility—this was written for you.
    </p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={0}
        chapterTitle="Preface: The Mirror Awakens"
        chapterContent={chapterContent}
        prevChapter={undefined}
        nextChapter={{ title: 'You Were Never Meant to Be Replaced', slug: 'chapter-1-you-were-never-meant-to-be-replaced' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

