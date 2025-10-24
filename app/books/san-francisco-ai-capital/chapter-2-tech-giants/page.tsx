import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import ChapterLayout from '@/components/ChapterLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Chapter 2: The Tech Giants: Building the Foundation - San Francisco: AI Capital of the World',
  description: 'Read Chapter 2: The Tech Giants from San Francisco: AI Capital of the World by Arvin Lioanag.',
  keywords: ['tech giants', 'Google', 'Apple', 'Facebook', 'Intel', 'Oracle', 'Silicon Valley companies'],
  url: '/books/san-francisco-ai-capital/chapter-2-tech-giants',
  type: 'article',
});

export default function Chapter() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/san-francisco-ai-capital' },
    { name: 'Chapter 2: The Tech Giants', url: '/books/san-francisco-ai-capital/chapter-2-tech-giants' },
  ]);

  const chapterContent = `
    <p class="lead">
      The artificial intelligence revolution didn't emerge in a vacuum. It was built on decades of technological 
      infrastructure created by the giants of Silicon Valley—companies that transformed computing, the internet, 
      and mobile technology, creating the foundation upon which AI would be built.
    </p>

    <h2>Intel: The Foundation of Computing</h2>

    <p>
      Founded in 1968 by Robert Noyce and Gordon Moore—two of the "Traitorous Eight" from Fairchild Semiconductor—Intel 
      would become the most important semiconductor company in history. Moore's famous prediction—that the number of 
      transistors on a chip would double every two years—became a self-fulfilling prophecy that drove the exponential 
      growth of computing power for five decades.
    </p>

    <p>
      Without Intel's relentless advancement of chip technology, modern AI would be impossible. Training large language 
      models requires computational power that would have been unimaginable even twenty years ago. Every breakthrough 
      in AI stands on the foundation Intel and its competitors built.
    </p>

    <h2>Apple: Making Technology Personal</h2>

    <p>
      When Steve Jobs and Steve Wozniak founded Apple in 1976, they weren't thinking about artificial intelligence. 
      They were thinking about making computers accessible to ordinary people. But in doing so, they transformed 
      technology from an industrial tool to a personal one.
    </p>

    <p>
      The iPhone, launched in 2007, proved even more revolutionary. By putting powerful computers in billions of 
      pockets worldwide, Apple created an unprecedented platform for AI deployment. Siri, introduced in 2011, brought 
      AI assistants to the mainstream, even if the technology was still primitive by today's standards.
    </p>

    <p>
      Today, Apple's investment in AI—from custom silicon designed for machine learning to on-device intelligence 
      that protects privacy—represents billions of dollars and thousands of researchers. The company that started 
      in a garage has become one of the world's leading AI companies.
    </p>

    <h2>Google: Organizing the World's Information</h2>

    <p>
      If any single company embodies the transformation of Silicon Valley into an AI powerhouse, it's Google. 
      Founded in 1998 by Stanford PhD students Larry Page and Sergey Brin, Google's original mission—"to organize 
      the world's information and make it universally accessible"—seemed ambitious enough.
    </p>

    <p>
      But search was just the beginning. Google's infrastructure required solving problems of unprecedented scale: 
      indexing billions of web pages, serving millions of queries per second, and constantly improving relevance. 
      These challenges drove innovations in distributed computing, machine learning, and infrastructure that would 
      prove crucial for AI.
    </p>

    <p>
      In 2011, Google started the Google Brain project, bringing together some of the world's leading AI researchers. 
      In 2014, the company acquired DeepMind for $500 million—at the time, an extraordinary sum for an AI research lab. 
      These investments signaled Google's bet that AI would be central to computing's future.
    </p>

    <p>
      Google's development of TensorFlow—an open-source machine learning framework released in 2015—accelerated AI 
      research worldwide. The Transformer architecture, developed by Google researchers and published in 2017, 
      became the foundation for modern large language models. These contributions cemented Google's position as 
      an AI leader.
    </p>

    <div class="focus-quote">
      "Google didn't just search the internet—it built the computational infrastructure and AI breakthroughs that would power the entire industry."
    </div>

    <h2>Facebook (Meta): Connecting the World, Mining the Data</h2>

    <p>
      Mark Zuckerberg founded Facebook in his Harvard dorm room in 2004. Within a decade, it had over a billion 
      users. The company's move to Menlo Park in 2011 marked its full integration into Silicon Valley's ecosystem.
    </p>

    <p>
      Facebook's AI story is complex. On one hand, the company has made significant contributions to AI research, 
      creating PyTorch—another major machine learning framework—and publishing influential research in computer 
      vision and natural language processing. Facebook AI Research (FAIR), established in 2013, has produced some 
      of the field's leading work.
    </p>

    <p>
      On the other hand, Facebook's use of AI for content recommendation and engagement optimization has raised 
      profound questions about the technology's societal impact. The company's algorithms, designed to maximize 
      user engagement, have been accused of amplifying misinformation, polarization, and harmful content.
    </p>

    <p>
      Zuckerberg's 2021 pivot to the "metaverse" and the company's renaming to Meta represented a multi-billion 
      dollar bet on the next computing platform. But by 2023, with the explosion of generative AI, even Meta 
      had to redirect resources back to AI development, releasing the LLaMA family of language models.
    </p>

    <h2>Oracle, Salesforce, and Enterprise Software</h2>

    <p>
      Not all of Silicon Valley's giants are consumer-facing. Oracle, founded in 1977 by Larry Ellison, became 
      a database software powerhouse. Salesforce, founded in San Francisco in 1999 by Marc Benioff, pioneered 
      cloud-based enterprise software.
    </p>

    <p>
      These companies might seem less relevant to AI, but they control the enterprise infrastructure that businesses 
      rely on. As AI moves from consumer applications to business-critical systems, these companies' integration of 
      AI into their platforms will shape how millions of companies deploy the technology.
    </p>

    <h2>The Infrastructure Layer</h2>

    <p>
      Beyond the household names, a constellation of less famous but equally important companies built the 
      infrastructure that makes modern AI possible:
    </p>

    <ul>
      <li><strong>NVIDIA</strong> (founded in Santa Clara in 1993) transformed from a gaming graphics company 
      to the most valuable supplier of AI chips in the world.</li>
      <li><strong>Amazon Web Services</strong> (though headquartered in Seattle, with major operations in the Bay Area) 
      provides the cloud computing power that most AI startups depend on.</li>
      <li><strong>Microsoft</strong> (again, Seattle-based but deeply integrated into Bay Area's AI ecosystem through 
      investments like OpenAI) provides both cloud infrastructure and AI services.</li>
    </ul>

    <h2>The Talent Factory</h2>

    <p>
      Perhaps the most important contribution of these giants isn't their products but their people. Thousands 
      of engineers, researchers, and product managers have trained at Google, Facebook, Apple, and other major 
      companies before leaving to start their own ventures.
    </p>

    <p>
      This pattern—sometimes called the "PayPal Mafia" effect after the group of PayPal alumni who went on to 
      found or fund dozens of major companies—has repeated with each generation of tech giants. Former Google 
      employees founded or co-founded companies like YouTube, Instagram, Slack, Uber, and countless others. 
      Former Facebook employees similarly seeded the next wave of startups.
    </p>

    <blockquote>
      <p>
        "The best thing a successful company can do for the ecosystem is train great people and let them leave 
        to start new things."
      </p>
    </blockquote>

    <h2>From Foundation to Revolution</h2>

    <p>
      By 2020, Silicon Valley's tech giants had created an extraordinary foundation:
    </p>

    <ul>
      <li>Computational infrastructure capable of training models with billions of parameters</li>
      <li>Massive datasets from billions of users interacting with digital services</li>
      <li>Research teams with deep expertise in machine learning and AI</li>
      <li>Business models that could support years of expensive research with uncertain returns</li>
      <li>A talent pool of engineers and researchers comfortable pushing the boundaries of what's possible</li>
    </ul>

    <div class="focus-quote">
      "The tech giants didn't just build products—they built the entire infrastructure stack that made the AI revolution possible."
    </div>

    <p>
      Everything was in place. All that was needed was a catalyst—a demonstration that AI was ready to move from 
      research labs to mainstream products. That catalyst would come in the form of a new generation of companies, 
      led by one that would shock the world: OpenAI.
    </p>
  `;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <ChapterLayout
        chapterNum={2}
        chapterTitle="The Tech Giants: Building the Foundation"
        chapterContent={chapterContent}
        prevChapter={{ title: 'The Birth of Silicon Valley', slug: 'chapter-1-birth-of-silicon-valley' }}
        nextChapter={{ title: 'Venture Capital: Fueling the Fire', slug: 'chapter-3-venture-capital' }}
        bookTitle="San Francisco - AI Capital of The World"
        bookSlug="san-francisco-ai-capital"
      />
    </>
  );
}

