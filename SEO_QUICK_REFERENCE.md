# SEO Quick Reference Cheat Sheet

## 🚀 Most Common Use Cases

### 1. Basic Page with Metadata

```typescript
import { generateSEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Page Title',
  description: 'Page description (150-160 chars)',
  keywords: ['keyword1', 'keyword2'],
  url: '/page-url',
  type: 'website',
});
```

### 2. Page with Breadcrumbs

```typescript
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/seo';

export default function Page() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Section', url: '/section' },
    { name: 'Page', url: '/section/page' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbs} />
      {/* content */}
    </>
  );
}
```

### 3. Book Page

```typescript
import { generateSEO, generateBookSchema, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';

export const metadata = generateSEO({
  title: 'Book Title - Series Name',
  description: 'Book description',
  keywords: ['book', 'AI', 'technology'],
  url: '/books/book-slug',
  type: 'book',
  image: '/book-covers/book.jpg',
});

export default function BookPage() {
  const schemas = [
    generateBookSchema({
      name: 'Book Title',
      description: 'Book description',
      author: 'Author Name',
      isbn: 'ISBN',
      image: '/book-covers/book.jpg',
      url: '/books/book-slug',
      datePublished: '2024',
    }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Books', url: '/books' },
      { name: 'Book Title', url: '/books/book-slug' },
    ]),
  ];

  return (
    <>
      <StructuredData data={schemas} />
      {/* content */}
    </>
  );
}
```

### 4. Article/Blog Page

```typescript
import { generateSEO, generateArticleSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';

export const metadata = generateSEO({
  title: 'Article Title',
  description: 'Article description',
  keywords: ['topic1', 'topic2'],
  url: '/blog/article-slug',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00.000Z',
  modifiedTime: '2024-01-15T00:00:00.000Z',
  tags: ['Tag1', 'Tag2'],
});

export default function ArticlePage() {
  const articleSchema = generateArticleSchema({
    headline: 'Article Title',
    description: 'Article description',
    author: 'Author Name',
    datePublished: '2024-01-01T00:00:00.000Z',
    dateModified: '2024-01-15T00:00:00.000Z',
    image: '/images/article.jpg',
    url: '/blog/article-slug',
  });

  return (
    <>
      <StructuredData data={articleSchema} />
      {/* content */}
    </>
  );
}
```

### 5. Homepage with Organization Schema

```typescript
import { generateSEO, generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';

export const metadata = generateSEO({
  title: 'Site Name - Tagline',
  description: 'Site description',
  keywords: ['main', 'keywords'],
  url: '/',
  type: 'website',
});

export default function HomePage() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      title: 'Site Name',
      description: 'Site description',
      url: '/',
      image: '/logo.png',
    }),
  ];

  return (
    <>
      <StructuredData data={schemas} />
      {/* content */}
    </>
  );
}
```

### 6. FAQ Page

```typescript
import { generateFAQSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';

export default function FAQPage() {
  const faqSchema = generateFAQSchema([
    {
      question: 'Question 1?',
      answer: 'Answer to question 1',
    },
    {
      question: 'Question 2?',
      answer: 'Answer to question 2',
    },
  ]);

  return (
    <>
      <StructuredData data={faqSchema} />
      {/* content */}
    </>
  );
}
```

## 🔑 Keyword Helpers

### Use Predefined Keywords

```typescript
import { KEYWORD_SETS } from '@/lib/seo-constants';

// Available sets:
KEYWORD_SETS.homepage
KEYWORD_SETS.books
KEYWORD_SETS.classics
KEYWORD_SETS.sanFrancisco
KEYWORD_SETS.philosophy
```

### Merge Keywords

```typescript
import { mergeKeywords, COMMON_KEYWORDS } from '@/lib/seo';

const keywords = mergeKeywords(
  COMMON_KEYWORDS.ai,
  COMMON_KEYWORDS.books,
  ['custom1', 'custom2']
);
```

## 🛠️ Utility Functions

### Truncate for Meta Description

```typescript
import { truncateForMeta } from '@/lib/seo-utils';

const shortDesc = truncateForMeta(longText, 160);
```

### Generate Slug

```typescript
import { generateSlug } from '@/lib/seo-utils';

const slug = generateSlug('Article Title Here');
// Result: 'article-title-here'
```

### Calculate Reading Time

```typescript
import { calculateReadingTime } from '@/lib/seo-utils';

const minutes = calculateReadingTime(content);
```

### Get Social Share URLs

```typescript
import { getSocialShareUrls } from '@/lib/seo-utils';

const urls = getSocialShareUrls(pageUrl, pageTitle);
// urls.twitter, urls.facebook, urls.linkedin, etc.
```

## 📍 Sitemap

### Add Page to Sitemap

Edit `app/sitemap.ts`:

```typescript
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

### Priority Guide
- 1.0 = Homepage
- 0.9 = Main sections
- 0.8 = Sub-sections
- 0.7 = Content pages
- 0.5 = Supporting pages

## 🤖 Robots.txt

Automatically generated via `app/robots.ts`.

To block a path, edit `app/robots.ts`:

```typescript
disallow: [
  '/api/',
  '/admin/',
  '/new-blocked-path/',
]
```

## ✅ SEO Checklist

### Every Page Should Have:
- [ ] Unique title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] 5-10 relevant keywords
- [ ] Open Graph image
- [ ] Breadcrumb schema (non-homepage)
- [ ] Appropriate page schema
- [ ] Canonical URL

### Homepage Should Have:
- [ ] Organization schema
- [ ] WebPage schema
- [ ] Comprehensive keywords
- [ ] Social links in schema

### Book Pages Should Have:
- [ ] Book schema with ISBN
- [ ] Author information
- [ ] Publication date
- [ ] Book cover image
- [ ] Breadcrumbs

### Article Pages Should Have:
- [ ] Article schema
- [ ] Published date
- [ ] Modified date
- [ ] Author information
- [ ] Featured image

## 📊 Testing Commands

```bash
# Test sitemap
curl https://intelligenceamplifier.ai/sitemap.xml

# Test robots.txt
curl https://intelligenceamplifier.ai/robots.txt

# Build and check for errors
npm run build
```

## 🔍 Validation Tools

- **Structured Data**: [Google Rich Results Test](https://search.google.com/test/rich-results)
- **Open Graph**: [OpenGraph.xyz](https://www.opengraph.xyz/)
- **Twitter Cards**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **Schema Markup**: [Schema.org Validator](https://validator.schema.org/)
- **SEO Audit**: Run Lighthouse in Chrome DevTools

## 💡 Pro Tips

1. **Always use breadcrumbs** on non-homepage pages
2. **Update lastModified** in sitemap when content changes
3. **Keep titles unique** across all pages
4. **Use descriptive alt text** on all images
5. **Include structured data** on every page
6. **Test on mobile** - most searches are mobile
7. **Monitor Google Search Console** regularly
8. **Update keywords** based on analytics

## 🎯 Quick Wins

### Immediate Improvements
1. Add breadcrumbs to all pages
2. Ensure all images have alt text
3. Add reading time to articles
4. Include FAQ schema where appropriate
5. Optimize meta descriptions
6. Add social sharing buttons

### Performance
1. Optimize images (WebP format)
2. Use Next.js Image component
3. Enable caching
4. Minimize JavaScript
5. Lazy load images

## 📞 Need Help?

- Read: `SEO_README.md` - Complete overview
- Read: `lib/SEO_USAGE_GUIDE.md` - Detailed usage guide
- Check examples in: `app/page.tsx` and `app/intelligence-amplifier-series/page.tsx`

---

**Last Updated**: October 2025  
**Version**: 1.0



