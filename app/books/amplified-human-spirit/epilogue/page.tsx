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

  const chapterContent = `
    <p class="lead">
      The sun sets over the horizon, casting long shadows across the landscape. A woman sits on her porch, tablet in hand, 
      engaged in conversation with an AI assistant about a creative project. The technology helps her explore possibilities, 
      overcome blocks, and organize her thoughts. But the spark of inspiration, the meaning behind the creation, the values 
      it expresses—these come from her, from the uniquely human capacity to find and make meaning in a world that offers no 
      guarantees.
    </p>

    <p>
      As darkness falls, she sets the device aside and sits in silence for a while, watching the stars emerge. This moment of 
      disconnection, of pure presence without technological mediation, feels increasingly precious in a world of constant 
      connectivity. Yet she doesn't reject the technology that has become part of her creative process. She simply recognizes 
      the need for rhythm—for engagement and disengagement, for amplification and silence, for extending her reach and 
      returning to her center.
    </p>

    <p>
      In this rhythm, she finds a way of being that neither refuses technological advancement nor surrenders to it—a middle 
      path that leverages the remarkable capabilities of intelligence amplification while preserving the essentially human 
      qualities that give them meaning and direction. This path requires continuous discernment, regular reflection, and 
      intentional practice. But it offers something precious: the possibility of becoming more fully human through thoughtful 
      partnership with the tools we create.
    </p>

    <div class="focus-quote">
      "This is the invitation that intelligence amplification extends to each of us—not to become more machine-like in our 
      efficiency but to become more fully human in our capacity for understanding, creativity, connection, and meaning."
    </div>

    <p>
      The technologies change, but the essential question remains constant: How might these tools help us express more 
      completely what makes us uniquely human? By approaching intelligence amplification with this question in mind—by 
      maintaining our focus on human flourishing rather than technological capability—we transform these powerful tools from 
      potential threats to our humanity into potential catalysts for its fuller expression.
    </p>

    <p>
      We recognize ourselves anew not despite but through our technological extensions, seeing in their mirror not just what 
      we can do but who we might become. The conversation continues, evolving as both human and machine intelligence develop 
      in ways we cannot fully anticipate. But the heart of this conversation remains constant: the ongoing dialogue between 
      human purpose and technological possibility, between ancient wisdom and emerging capability, between the world as it is 
      and the world we hope to create.
    </p>

    <div class="focus-quote">
      "In this dialogue lies the true potential of the amplified human spirit—not escape from our humanity but its fuller 
      realization through thoughtful partnership with the technologies we create."
    </div>

    <p>
      May we approach this partnership with wisdom, intention, and hope, recognizing that the greatest intelligence lies not 
      in knowledge alone but in how we use it to create lives of meaning, connection, and purpose. The stars shine overhead, 
      bearing witness to this moment in humanity's journey—one chapter in a longer story whose full arc extends beyond what 
      we can see or know.
    </p>

    <p>
      Our technologies, like our lives, find their deepest meaning not in how advanced they become but in how well they serve 
      the flourishing of consciousness in all its forms. In this service lies the true measure of intelligence, evolving as 
      we ourselves evolve through our ongoing dance with the tools we create.
    </p>

    <div class="focus-quote">
      "Our technologies, like our lives, find their deepest meaning not in how advanced they become but in how well they serve 
      the flourishing of consciousness in all its forms."
    </div>
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

