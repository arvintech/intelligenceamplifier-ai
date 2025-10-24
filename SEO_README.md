# SEO Implementation for Intelligence Amplifier

## Overview

This project now includes comprehensive SEO utilities and functions to improve search engine visibility and ranking. The implementation follows Next.js 14+ App Router best practices and includes metadata generation, structured data (JSON-LD), sitemap, and robots.txt configuration.

## 📁 File Structure

```
/lib
  ├── seo.ts                  # Core SEO functions and metadata generators
  ├── seo-constants.ts        # SEO constants and configuration
  ├── seo-utils.ts            # Utility functions for SEO tasks
  └── SEO_USAGE_GUIDE.md      # Detailed usage guide

/components
  └── StructuredData.tsx      # Component for rendering JSON-LD

/app
  ├── sitemap.ts              # Automatic sitemap generation
  └── robots.ts               # Dynamic robots.txt generation

/public
  └── robots.txt              # Static robots.txt (can be removed if using app/robots.ts)
```

## 🚀 Quick Start

### 1. Basic Page Metadata

```typescript
// app/your-page/page.tsx
import { generateSEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Your Page Title',
  description: 'Your page description (150-160 characters)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  url: '/your-page',
  type: 'website',
});

export default function YourPage() {
  return <div>Your content</div>;
}
```

### 2. Adding Structured Data

```typescript
import StructuredData from '@/components/StructuredData';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo';

export default function YourPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Your Page',
    description: 'Description',
    url: '/your-page',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Your Page', url: '/your-page' },
  ]);

  return (
    <>
      <StructuredData data={[webPageSchema, breadcrumbSchema]} />
      <main>{/* Your content */}</main>
    </>
  );
}
```

## 📚 Available Functions

### Metadata Generation

#### `generateSEO(config: SEOConfig): Metadata`
Generates comprehensive Next.js metadata for a page.

**Parameters:**
- `title` (string): Page title
- `description` (string): Meta description
- `keywords` (string[]): SEO keywords
- `url` (string): Page URL path
- `type` ('website' | 'article' | 'book' | 'profile'): Open Graph type
- `image` (string): Social sharing image
- `author` (string): Content author
- `publishedTime` (string): Publication date (ISO 8601)
- `modifiedTime` (string): Last modification date (ISO 8601)
- `noIndex` (boolean): Prevent indexing
- `canonical` (string): Canonical URL

### Structured Data Schemas

#### 1. `generateWebPageSchema(config)`
Creates schema.org WebPage structured data.

#### 2. `generateBookSchema(config)`
Creates schema.org Book structured data for book pages.

#### 3. `generateArticleSchema(config)`
Creates schema.org Article structured data for blog posts.

#### 4. `generateOrganizationSchema()`
Creates schema.org Organization structured data.

#### 5. `generateBreadcrumbSchema(items)`
Creates breadcrumb navigation structured data.

#### 6. `generateFAQSchema(faqs)`
Creates FAQ structured data for FAQ pages.

### Utility Functions

#### Text Processing
- `truncateForMeta(text, maxLength)` - Truncate text for meta descriptions
- `stripHtml(html)` - Remove HTML tags from text
- `titleCase(str)` - Convert string to title case

#### URL Utilities
- `generateSlug(title)` - Generate URL-friendly slug
- `getCanonicalUrl(path, baseUrl)` - Get full canonical URL
- `cleanUrl(url)` - Validate and clean URL
- `isExternalUrl(url)` - Check if URL is external

#### Content Analysis
- `calculateReadingTime(content, wpm)` - Calculate reading time
- `extractKeywords(text, maxKeywords)` - Extract keywords from text

#### Social Sharing
- `getSocialShareUrls(url, title)` - Generate social sharing links

#### Keywords
- `mergeKeywords(...arrays)` - Merge and deduplicate keyword arrays
- `COMMON_KEYWORDS` - Predefined keyword sets

## 🌐 Sitemap

The sitemap is automatically generated at `/sitemap.xml` using `app/sitemap.ts`.

### Adding Pages to Sitemap

Edit `app/sitemap.ts` and add your page:

```typescript
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

**Priority Guidelines:**
- 1.0 - Homepage
- 0.9 - Main sections
- 0.8 - Sub-sections
- 0.7 - Regular content
- 0.5 - Supporting pages

**Change Frequency:**
- `daily` - News/frequently updated
- `weekly` - Active sections
- `monthly` - Regular content
- `yearly` - Static content

## 🤖 Robots.txt

The robots.txt is dynamically generated via `app/robots.ts`. It:
- Allows all crawlers by default
- Allows AI crawlers (GPTBot, ChatGPT-User)
- Blocks `/api/`, `/admin/`, `/_next/`, `/private/`
- References the sitemap

## 📊 Keyword Sets

Pre-configured keyword sets are available in `seo-constants.ts`:

```typescript
import { KEYWORD_SETS } from '@/lib/seo-constants';

// Available sets:
KEYWORD_SETS.homepage
KEYWORD_SETS.books
KEYWORD_SETS.classics
KEYWORD_SETS.sanFrancisco
KEYWORD_SETS.philosophy
```

Merge keywords:
```typescript
import { mergeKeywords, COMMON_KEYWORDS } from '@/lib/seo';

const keywords = mergeKeywords(
  COMMON_KEYWORDS.ai,
  COMMON_KEYWORDS.amplification,
  ['custom', 'keywords']
);
```

## 🎯 Best Practices

### Title Tags
- 50-60 characters
- Include primary keyword
- Include brand name
- Make it unique and compelling

### Meta Descriptions
- 150-160 characters
- Include keywords naturally
- Include call-to-action
- Make it compelling

### Keywords
- 5-10 relevant keywords
- Use variations
- Don't keyword stuff
- Use semantic keywords

### Images
- Always include alt text
- Use descriptive filenames
- Optimize file sizes
- Use WebP when possible
- Specify dimensions

### Structured Data
- Add appropriate schema to each page
- Include breadcrumbs
- Validate with Google Rich Results Test
- Use multiple schemas when appropriate

## 🔍 Testing Your SEO

### Tools
1. **Google Search Console** - Monitor performance
2. **Google Rich Results Test** - Validate structured data
3. **Lighthouse** - Technical SEO audit
4. **Schema.org Validator** - Validate JSON-LD

### Quick Tests

```bash
# View sitemap
curl https://intelligenceamplifier.ai/sitemap.xml

# View robots.txt
curl https://intelligenceamplifier.ai/robots.txt

# Check structured data
# View page source and search for "application/ld+json"
```

### Validation

1. **Metadata**: Check page source for proper meta tags
2. **Open Graph**: Use Facebook Debugger or OpenGraph.xyz
3. **Twitter Cards**: Use Twitter Card Validator
4. **Structured Data**: Use Google Rich Results Test
5. **Mobile-Friendly**: Use Google Mobile-Friendly Test

## 📝 Example Implementations

### Example 1: Homepage (Already Implemented)
- Uses `generateSEO()` for metadata
- Includes Organization and WebPage schemas
- Proper keyword sets

### Example 2: Book Series Page (Already Implemented)
- Uses custom metadata
- Includes breadcrumb schema
- Optimized for book-related searches

### Example 3: Individual Book Page

```typescript
import { generateSEO, generateBookSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { BOOK_SERIES_INFO } from '@/lib/seo-constants';
import StructuredData from '@/components/StructuredData';

export const metadata = generateSEO({
  title: 'San Francisco - AI Capital of The World',
  description: 'Explore the epicenter of AI innovation.',
  keywords: ['San Francisco', 'AI', 'Silicon Valley', 'technology'],
  url: '/intelligence-amplifier-series/san-francisco-ai-capital',
  type: 'book',
  image: '/book-covers/san-francisco-ai-capital.jpg.webp',
});

export default function BookPage() {
  const bookSchema = generateBookSchema({
    name: 'San Francisco - AI Capital of The World',
    description: 'Explore the epicenter of AI innovation',
    author: 'Arvin Lioanag',
    isbn: BOOK_SERIES_INFO['san-francisco-ai-capital'].isbn,
    image: '/book-covers/san-francisco-ai-capital.jpg.webp',
    url: '/intelligence-amplifier-series/san-francisco-ai-capital',
    datePublished: '2024',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Book Series', url: '/intelligence-amplifier-series' },
    { name: 'San Francisco', url: '/intelligence-amplifier-series/san-francisco-ai-capital' },
  ]);

  return (
    <>
      <StructuredData data={[bookSchema, breadcrumbSchema]} />
      <main>{/* Your content */}</main>
    </>
  );
}
```

## 🔧 Configuration

### Update Site Information

Edit `lib/seo.ts` (SITE_CONFIG object):

```typescript
const SITE_CONFIG = {
  name: 'Your Site Name',
  url: 'https://yoursite.com',
  creator: 'Your Name',
  twitterHandle: '@yourhandle',
  defaultImage: '/your-logo.png',
  // ...
};
```

### Update Keywords

Edit `lib/seo-constants.ts` to add or modify keyword sets.

## 📦 What's Included

✅ Metadata generation for all page types  
✅ Open Graph tags for social sharing  
✅ Twitter Card meta tags  
✅ Structured data (JSON-LD) schemas  
✅ Automatic sitemap generation  
✅ Dynamic robots.txt  
✅ SEO utility functions  
✅ Keyword management  
✅ Breadcrumb support  
✅ Organization schema  
✅ Book, Article, WebPage schemas  
✅ FAQ schema support  
✅ Canonical URL generation  
✅ Social sharing URL generators  
✅ Reading time calculator  
✅ Slug generator  
✅ Meta description truncation  

## 🚨 Next Steps

1. **Update Twitter Handle**: Edit `SITE_CONFIG.twitterHandle` in `lib/seo.ts`
2. **Add Social Links**: Update `generateOrganizationSchema()` with social profiles
3. **Update Book Data**: Add publication dates and ISBNs to `lib/seo-constants.ts`
4. **Implement on All Pages**: Apply SEO functions to remaining pages
5. **Generate OG Images**: Consider implementing dynamic Open Graph image generation
6. **Submit Sitemap**: Submit sitemap to Google Search Console and Bing Webmaster Tools
7. **Monitor Performance**: Set up Google Analytics and Search Console

## 📖 Additional Resources

- [Detailed Usage Guide](./lib/SEO_USAGE_GUIDE.md) - Comprehensive usage instructions
- [Next.js Metadata Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org](https://schema.org) - Structured data reference
- [Google Search Central](https://developers.google.com/search) - SEO best practices

## 💡 Tips

1. **Always include breadcrumbs** on non-homepage pages
2. **Use descriptive, keyword-rich URLs** (already implemented via slugs)
3. **Keep metadata unique** for each page
4. **Update lastModified dates** in sitemap when content changes
5. **Validate structured data** before deploying
6. **Monitor search performance** regularly
7. **Update keywords** based on search analytics

## 🎓 Learning Resources

- Google's SEO Starter Guide
- Moz Beginner's Guide to SEO
- Next.js SEO Documentation
- Schema.org Documentation

---

**Created**: October 2025  
**For**: Intelligence Amplifier™ Website  
**Maintained By**: Development Team

