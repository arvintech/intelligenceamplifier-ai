import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Drawing the Human Line - The Amplified Human Spirit',
  description: 'Read Chapter 7: Drawing the Human Line from The Amplified Human Spirit by Arvin Lioanag.',
  keywords: ['intelligence amplification', 'human line', 'chapter 7', 'artificial intelligence'],
  url: '/books/amplified-human-spirit/chapter-7-drawing-the-human-line',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/amplified-human-spirit' },
    { name: 'Chapter 7: Drawing the Human Line', url: '/books/amplified-human-spirit/chapter-7-drawing-the-human-line' },
  ]);

  const chapterContent = `
    <p class="lead">
      As intelligence amplification technologies become more sophisticated and integrated into our lives, we face 
      profound questions about boundaries. Where does human intelligence end and machine intelligence begin? What 
      aspects of thinking, decision-making, and creation should remain exclusively human?
    </p>

    <p>
      These aren't just abstract philosophical questions. They have practical implications for how we design, regulate, 
      and use these powerful tools. The boundaries we establish—individually and collectively—will shape not just the 
      future of technology but the future of humanity itself.
    </p>

    <div class="focus-quote">
      "The boundaries we draw today will shape not just the future of technology but the future of humanity itself."
    </div>

    <h2>The Need for Boundaries</h2>

    <p>
      Throughout human history, every significant technological advancement has required us to establish boundaries—
      ethical, legal, and practical limits on how the technology should be used. We've developed rules about medical 
      experimentation, nuclear energy, genetic engineering, and countless other powerful capabilities.
    </p>

    <p>
      Intelligence amplification is no different. In fact, the need for thoughtful boundaries may be even more urgent 
      here because these technologies interface directly with human cognition, creativity, and decision-making—the very 
      capacities that define us as thinking beings.
    </p>

    <p>
      Without clear boundaries, we risk delegating crucial aspects of our humanity to systems that, however sophisticated, 
      lack the consciousness, values, and lived experience that give human judgment its depth and meaning.
    </p>

    <h2>Domains of Human Primacy</h2>

    <p>
      Some domains of human experience and decision-making seem to demand human primacy—where the final word must rest 
      with human judgment, even when assisted by technological analysis. These include profound ethical decisions, 
      creative expression that carries personal meaning, and relationships that depend on genuine human presence and care.
    </p>

    <div class="focus-quote">
      "Some decisions are too important to delegate, not because machines can't process the information, but because the act of deciding shapes who we are."
    </div>

    <p>
      In medical contexts, for example, while AI can provide diagnostic insights and treatment recommendations with 
      remarkable accuracy, the decision about a patient's care—particularly in complex or end-of-life situations—should 
      ultimately rest with human physicians working with patients and their families. The technology can inform, but 
      humans must decide.
    </p>

    <p>
      Similarly, in creative fields, while AI can generate impressive outputs and assist human creators, the intentionality 
      behind meaningful creative work—the why behind the what—must remain human. An AI might compose music that sounds 
      beautiful, but it can't capture the lived experience and emotional truth that gives great art its resonance.
    </p>

    <h2>The Agency Principle</h2>

    <p>
      At the heart of these boundary questions lies a fundamental principle: humans must maintain meaningful agency in 
      decisions that significantly affect their lives and the lives of others. Intelligence amplifiers should enhance 
      our capacity to make informed, thoughtful choices—not make those choices for us.
    </p>

    <p>
      This principle has several implications. First, intelligence amplification systems should be designed to make their 
      reasoning transparent and understandable to humans, not to operate as inscrutable black boxes. We should be able to 
      understand why a system recommends what it does, what assumptions it's making, and what alternatives it might have 
      considered.
    </p>

    <p>
      Second, these systems should be designed to support rather than replace human judgment. They should present options, 
      highlight considerations, and illuminate consequences—but the final decision should rest with humans who bear 
      responsibility for the outcomes.
    </p>

    <h2>The Irreplaceable Human Spark</h2>

    <p>
      Beyond specific domains and principles, there's something more fundamental at stake: what we might call the 
      irreplaceable human spark—the qualities that emerge from our conscious, embodied, social existence and that give 
      human life its distinctive character and value.
    </p>

    <p>
      This includes our capacity for genuine empathy born from shared vulnerability, our ability to find meaning in 
      struggle and suffering, our creative expressions that emerge from lived experience, our ethical reasoning grounded 
      in moral intuition and communal values, and our sense of purpose and connection to something larger than ourselves.
    </p>

    <div class="focus-quote">
      "The line we draw protects not just what we can do, but what we can become."
    </div>

    <p>
      These qualities can't be outsourced to machines, not because the technology isn't advanced enough, but because 
      they're intrinsically tied to the human condition—to being conscious, mortal, embodied beings who must navigate 
      uncertainty and create meaning in a complex world.
    </p>

    <h2>Drawing the Line in Practice</h2>

    <p>
      Establishing these boundaries isn't a one-time decision but an ongoing process of reflection, dialogue, and 
      adjustment. As technologies evolve and our understanding deepens, we'll need to continually reassess where the 
      lines should be drawn.
    </p>

    <p>
      This process requires multiple perspectives: technologists who understand the capabilities and limitations of these 
      systems, ethicists who can articulate the values at stake, domain experts who understand specific applications, and 
      the broader public who will live with the consequences of these choices.
    </p>

    <p>
      Most importantly, it requires wisdom—the integration of knowledge, experience, and moral judgment that helps us 
      navigate complex territory without simple formulas. We need to think carefully about not just what technology can 
      do, but what it should do, and what should remain essentially human.
    </p>

    <h2>The Collaborative Future</h2>

    <p>
      Drawing appropriate boundaries doesn't mean rejecting intelligence amplification. Rather, it means channeling these 
      powerful technologies in directions that enhance rather than diminish our humanity. It means designing systems that 
      respect human agency, support meaningful human connections, and preserve the aspects of human experience that give 
      life its depth and value.
    </p>

    <p>
      When we get this right, the result isn't humans versus machines but humans and machines working together in ways 
      that honor the unique contributions of each. Technology handles the processing, pattern recognition, and information 
      management it excels at, while humans provide the consciousness, values, creativity, and wisdom that only lived 
      experience can generate.
    </p>

    <p>
      The line we draw today—between what should be amplified and what must remain quintessentially human—will shape not 
      just how we use technology but who we become. Let us draw it wisely, with full appreciation for both the promise of 
      these tools and the irreplaceable value of human consciousness, agency, and spirit.
    </p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={7}
        chapterTitle="Drawing the Human Line"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Intelligence of Love and Pain', slug: 'chapter-6-intelligence-of-love-and-pain' }}
        nextChapter={{ title: 'The Humility Paradox', slug: 'chapter-8-humility-paradox' }}
        bookTitle="The Amplified Human Spirit"
        bookSlug="amplified-human-spirit"
      />
    </>
  );
}

