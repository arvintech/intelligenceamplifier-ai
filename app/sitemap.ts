import { MetadataRoute } from 'next';

/**
 * Generate sitemap for the website
 * This file is automatically used by Next.js to generate /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://intelligenceamplifier.ai';
  
  // Define static routes with priorities and update frequencies
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/intelligence-amplifier-series`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/intelligence-amplifier-series/san-francisco-ai-capital`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/intelligence-amplifier-series/alarming-rise-stupidity-amplified`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/intelligence-amplifier-series/amplified-human-spirit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/intelligence-amplifier-series/amplified-nietzsche`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/amplified-classics`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Book: The Alarming Rise of Stupidity Amplified
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/prologue`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-1-paradox-of-modern-intelligence`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-2-understanding-intelligence`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-3-ignorance-vs-stupidity`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-4-ai-amplifies-potential`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-5-amplifying-ignorance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-6-amplified-stupidity`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-7-measuring-impact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-8-human-responsibility`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-9-bias-and-fairness`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-10-transparency-trust`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-11-privacy-autonomy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-12-education-defense`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/chapter-13-amplified-human-spirit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/epilogue`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/alarming-rise-stupidity-amplified/appendix`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Book: The Amplified Human Spirit
    {
      url: `${baseUrl}/books/amplified-human-spirit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/preface`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-1-you-were-never-meant-to-be-replaced`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-2-spectrum-of-intelligence`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-3-mechanics-of-amplification`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-4-ineffable-human-spirit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-5-sacred-interaction`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-6-intelligence-of-love-and-pain`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-7-drawing-the-human-line`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-8-humility-paradox`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-9-intelligence-amplified-human`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-10-creative-threshold`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-11-amplified-relationships`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-12-necessity-of-silence`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-13-beyond-the-horizon`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/chapter-14-evolving-measure`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/epilogue`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/books/amplified-human-spirit/afterword`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return routes;
}

