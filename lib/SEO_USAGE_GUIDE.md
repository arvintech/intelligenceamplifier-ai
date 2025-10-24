# SEO Functions Usage Guide

This guide explains how to use the SEO utilities in your Next.js application.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Generating Page Metadata](#generating-page-metadata)
3. [Structured Data (JSON-LD)](#structured-data-json-ld)
4. [Sitemap](#sitemap)
5. [Robots.txt](#robotstxt)
6. [Best Practices](#best-practices)

## Quick Start

### Basic Page Metadata

```typescript
// app/your-page/page.tsx
import { generateSEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Your Page Title',
  description: 'Your page description (150-160 characters recommended)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  url: '/your-page',
  type: 'website',
});

export default function YourPage() {
  return <div>Your content</div>;
}
```

## Generating Page Metadata

### Homepage Example

```typescript
import { generateSEO, mergeKeywords, COMMON_KEYWORDS } from '@/lib/seo';
import { KEYWORD_SETS } from '@/lib/seo-constants';

export const metadata = generateSEO({
  title: 'Intelligence Amplifier™ - AI-Powered Intelligence Enhancement',
  description: 'Amplify your intelligence with cutting-edge AI technology.',
  keywords: KEYWORD_SETS.homepage,
  url: '/',
  type: 'website',
  image: '/IA-logo.png',
});
```

### Article/Blog Page Example

```typescript
export const metadata = generateSEO({
  title: 'Article Title',
  description: 'Article description',
  keywords: ['AI', 'technology', 'innovation'],
  url: '/blog/article-slug',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00.000Z',
  modifiedTime: '2024-01-15T00:00:00.000Z',
  tags: ['AI', 'Technology'],
  author: 'Author Name',
});
```

### Book Page Example

```typescript
export const metadata = generateSEO({
  title: 'Book Title - Intelligence Amplifier Series',
  description: 'Book description',
  keywords: mergeKeywords(COMMON_KEYWORDS.books, COMMON_KEYWORDS.ai),
  url: '/books/book-slug',
  type: 'book',
  image: '/book-covers/book-cover.jpg',
});
```

## Structured Data (JSON-LD)

Structured data helps search engines understand your content better and can enable rich snippets in search results.

### Using the StructuredData Component

```typescript
import StructuredData from '@/components/StructuredData';
import { generateBookSchema, generateBreadcrumbSchema } from '@/lib/seo';

export default function BookPage() {
  const bookSchema = generateBookSchema({
    name: 'San Francisco - AI Capital of The World',
    description: 'Explore the epicenter of AI innovation',
    author: 'Arvin Lioanag',
    isbn: 'B0FHGCHVL1',
    image: '/book-covers/san-francisco-ai-capital.jpg.webp',
    url: '/intelligence-amplifier-series/san-francisco-ai-capital',
    datePublished: '2024',
    publisher: 'Arvin Lioanag',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Intelligence Amplifier Series', url: '/intelligence-amplifier-series' },
    { name: 'San Francisco - AI Capital', url: '/intelligence-amplifier-series/san-francisco-ai-capital' },
  ]);

  return (
    <>
      <StructuredData data={[bookSchema, breadcrumbSchema]} />
      {/* Your page content */}
    </>
  );
}
```

### Available Schema Generators

#### 1. Web Page Schema

```typescript
import { generateWebPageSchema } from '@/lib/seo';

const schema = generateWebPageSchema({
  title: 'Page Title',
  description: 'Page description',
  url: '/page-url',
  image: '/image.jpg',
  datePublished: '2024-01-01T00:00:00.000Z',
  dateModified: '2024-01-15T00:00:00.000Z',
});
```

#### 2. Book Schema

```typescript
import { generateBookSchema } from '@/lib/seo';

const schema = generateBookSchema({
  name: 'Book Title',
  description: 'Book description',
  author: 'Author Name',
  isbn: '1234567890',
  image: '/book-cover.jpg',
  url: '/books/book-slug',
  datePublished: '2024',
  publisher: 'Publisher Name',
  numberOfPages: 300,
});
```

#### 3. Article Schema

```typescript
import { generateArticleSchema } from '@/lib/seo';

const schema = generateArticleSchema({
  headline: 'Article Headline',
  description: 'Article description',
  author: 'Author Name',
  datePublished: '2024-01-01T00:00:00.000Z',
  dateModified: '2024-01-15T00:00:00.000Z',
  image: '/article-image.jpg',
  url: '/articles/article-slug',
});
```

#### 4. Organization Schema

```typescript
import { generateOrganizationSchema } from '@/lib/seo';

const schema = generateOrganizationSchema();
```

#### 5. Breadcrumb Schema

```typescript
import { generateBreadcrumbSchema } from '@/lib/seo';

const schema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Category', url: '/category' },
  { name: 'Page', url: '/category/page' },
]);
```

#### 6. FAQ Schema

```typescript
import { generateFAQSchema } from '@/lib/seo';

const schema = generateFAQSchema([
  {
    question: 'What is Intelligence Amplification?',
    answer: 'Intelligence Amplification (IA) is...',
  },
  {
    question: 'How does it differ from AI?',
    answer: 'While AI aims to replace human effort...',
  },
]);
```

## Sitemap

The sitemap is automatically generated at `/sitemap.xml` using the `app/sitemap.ts` file.

### Adding New Pages to Sitemap

Edit `app/sitemap.ts`:

```typescript
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

### Priority Guidelines
- **1.0**: Homepage
- **0.9**: Main sections
- **0.8**: Sub-sections and important content
- **0.7**: Regular content pages
- **0.5**: Supporting pages

### Change Frequency Guidelines
- **daily**: News or frequently updated content
- **weekly**: Blog or active sections
- **monthly**: Regular content
- **yearly**: Static content

## Robots.txt

The robots.txt is dynamically generated via `app/robots.ts`. It's configured to:

- Allow all crawlers by default
- Allow OpenAI's GPTBot and ChatGPT-User
- Block access to API routes, admin areas, and Next.js internals
- Reference the sitemap

### Customizing Robots.txt

Edit `app/robots.ts` to add or modify rules.

## Best Practices

### 1. Title Tags
- Keep between 50-60 characters
- Include primary keyword near the beginning
- Make it compelling and unique
- Include brand name at the end

### 2. Meta Descriptions
- Keep between 150-160 characters
- Include primary and secondary keywords naturally
- Write compelling copy that encourages clicks
- Include a call-to-action when appropriate

### 3. Keywords
- Use 5-10 relevant keywords
- Include variations and related terms
- Don't keyword stuff
- Use the keyword helpers:
  ```typescript
  import { mergeKeywords, COMMON_KEYWORDS } from '@/lib/seo';
  
  const keywords = mergeKeywords(
    COMMON_KEYWORDS.ai,
    COMMON_KEYWORDS.amplification,
    ['custom', 'keywords']
  );
  ```

### 4. Images
- Always include alt text
- Use descriptive filenames
- Optimize file sizes
- Use WebP format when possible
- Specify width and height

### 5. Structured Data
- Add appropriate schema for each page type
- Validate with Google's Rich Results Test
- Include breadcrumbs on all pages
- Use FAQ schema where applicable

### 6. Internal Linking
- Link to related content
- Use descriptive anchor text
- Maintain a logical site structure
- Implement breadcrumb navigation

### 7. Performance
- Optimize Core Web Vitals
- Use Next.js Image component
- Implement lazy loading
- Minimize JavaScript

## Utility Functions

### Truncate Text for Meta Descriptions

```typescript
import { truncateForMeta } from '@/lib/seo-utils';

const description = truncateForMeta(longText, 160);
```

### Generate Slug

```typescript
import { generateSlug } from '@/lib/seo-utils';

const slug = generateSlug('Article Title Here');
// Returns: 'article-title-here'
```

### Calculate Reading Time

```typescript
import { calculateReadingTime } from '@/lib/seo-utils';

const minutes = calculateReadingTime(articleContent);
```

### Get Canonical URL

```typescript
import { getCanonicalUrl } from '@/lib/seo-utils';

const canonical = getCanonicalUrl('/page-path');
```

### Social Sharing URLs

```typescript
import { getSocialShareUrls } from '@/lib/seo-utils';

const shareUrls = getSocialShareUrls(
  'https://intelligenceamplifier.ai/article',
  'Article Title'
);

// Returns:
// {
//   twitter: '...',
//   facebook: '...',
//   linkedin: '...',
//   reddit: '...',
//   email: '...'
// }
```

## Testing Your SEO

### Tools to Use

1. **Google Search Console** - Monitor search performance
2. **Google Rich Results Test** - Validate structured data
3. **Lighthouse** - Check technical SEO
4. **Screaming Frog** - Crawl your site
5. **Schema.org Validator** - Validate JSON-LD

### Quick Checks

```bash
# View generated sitemap
curl https://intelligenceamplifier.ai/sitemap.xml

# View robots.txt
curl https://intelligenceamplifier.ai/robots.txt

# Test structured data
View page source and search for "application/ld+json"
```

## Example: Complete Page Implementation

```typescript
// app/example/page.tsx
import { generateSEO, mergeKeywords, COMMON_KEYWORDS } from '@/lib/seo';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Example Page - Intelligence Amplifier',
  description: 'This is an example page demonstrating SEO best practices.',
  keywords: mergeKeywords(COMMON_KEYWORDS.ai, ['example', 'tutorial']),
  url: '/example',
  type: 'website',
  image: '/example-image.jpg',
});

export default function ExamplePage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Example Page',
    description: 'This is an example page',
    url: '/example',
    image: '/example-image.jpg',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Example', url: '/example' },
  ]);

  return (
    <>
      <StructuredData data={[webPageSchema, breadcrumbSchema]} />
      <main>
        <h1>Example Page</h1>
        {/* Your content */}
      </main>
    </>
  );
}
```

## Additional Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)



