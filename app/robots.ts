import { MetadataRoute } from 'next';

/**
 * Generate robots.txt dynamically
 * This provides programmatic control over robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'GPTBot', // OpenAI's crawler
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT user agent
        allow: '/',
      },
    ],
    sitemap: 'https://intelligenceamplifier.ai/sitemap.xml',
  };
}








