/**
 * SEO-Optimized Page Template
 * 
 * Copy this file to create new pages with proper SEO implementation
 * 
 * Steps:
 * 1. Copy this file to your new page location
 * 2. Update the metadata configuration
 * 3. Update the structured data
 * 4. Add your content
 * 5. Remove this comment block
 */

import { generateSEO, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

// ============================================
// METADATA CONFIGURATION
// ============================================

export const metadata: Metadata = generateSEO({
  // Page title (50-60 characters recommended)
  title: 'Your Page Title - Intelligence Amplifier',
  
  // Meta description (150-160 characters recommended)
  description: 'A compelling description of your page that includes relevant keywords and encourages clicks from search results.',
  
  // Keywords (5-10 relevant terms)
  keywords: [
    'keyword1',
    'keyword2', 
    'keyword3',
    'AI',
    'intelligence amplification',
  ],
  
  // Page URL path (start with /)
  url: '/your-page-url',
  
  // Page type: 'website', 'article', 'book', or 'profile'
  type: 'website',
  
  // Open Graph image for social sharing (optional)
  image: '/images/your-og-image.jpg',
  
  // For articles/books only (optional)
  // publishedTime: '2024-01-01T00:00:00.000Z',
  // modifiedTime: '2024-01-15T00:00:00.000Z',
  // tags: ['Tag1', 'Tag2'],
  // section: 'Section Name',
  
  // Prevent indexing (optional)
  // noIndex: false,
  
  // Custom canonical URL (optional)
  // canonical: 'https://intelligenceamplifier.ai/your-page-url',
});

// ============================================
// PAGE COMPONENT
// ============================================

export default function YourPage() {
  // ============================================
  // STRUCTURED DATA (JSON-LD)
  // ============================================
  
  // WebPage Schema
  const webPageSchema = generateWebPageSchema({
    title: 'Your Page Title',
    description: 'Your page description',
    url: '/your-page-url',
    image: '/images/your-image.jpg', // optional
    // datePublished: '2024-01-01T00:00:00.000Z', // optional
    // dateModified: '2024-01-15T00:00:00.000Z', // optional
  });

  // Breadcrumb Schema (highly recommended for all non-homepage pages)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Section', url: '/section' }, // Add intermediate levels if needed
    { name: 'Your Page', url: '/your-page-url' },
  ]);

  // Combine schemas (add more as needed)
  const schemas = [webPageSchema, breadcrumbSchema];

  // ============================================
  // RENDER
  // ============================================
  
  return (
    <>
      {/* Structured Data - Place at top of component */}
      <StructuredData data={schemas} />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d1d1f] dark:text-white mb-6">
              Your Page Title
            </h1>
            
            <p className="text-xl text-[#1d1d1f] dark:text-white leading-relaxed">
              Your page introduction or description goes here.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Add your content here */}
            <div className="prose dark:prose-invert max-w-none">
              <h2>Section Heading</h2>
              <p>Your content goes here...</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

// ============================================
// ADDITIONAL SCHEMA EXAMPLES
// ============================================

/*

// For Book Pages:
import { generateBookSchema } from '@/lib/seo';

const bookSchema = generateBookSchema({
  name: 'Book Title',
  description: 'Book description',
  author: 'Author Name',
  isbn: 'ISBN or ASIN',
  image: '/book-covers/book.jpg',
  url: '/books/book-slug',
  datePublished: '2024',
  publisher: 'Publisher Name',
  numberOfPages: 300, // optional
});


// For Article/Blog Pages:
import { generateArticleSchema } from '@/lib/seo';

const articleSchema = generateArticleSchema({
  headline: 'Article Title',
  description: 'Article description',
  author: 'Author Name',
  datePublished: '2024-01-01T00:00:00.000Z',
  dateModified: '2024-01-15T00:00:00.000Z',
  image: '/images/article.jpg',
  url: '/blog/article-slug',
});


// For FAQ Pages:
import { generateFAQSchema } from '@/lib/seo';

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


// For Organization (Homepage only):
import { generateOrganizationSchema } from '@/lib/seo';

const orgSchema = generateOrganizationSchema();

*/

// ============================================
// KEYWORD HELPERS
// ============================================

/*

// Use predefined keyword sets:
import { KEYWORD_SETS } from '@/lib/seo-constants';

keywords: KEYWORD_SETS.homepage,
keywords: KEYWORD_SETS.books,
keywords: KEYWORD_SETS.classics,
keywords: KEYWORD_SETS.sanFrancisco,
keywords: KEYWORD_SETS.philosophy,


// Merge keyword arrays:
import { mergeKeywords, COMMON_KEYWORDS } from '@/lib/seo';

keywords: mergeKeywords(
  COMMON_KEYWORDS.ai,
  COMMON_KEYWORDS.books,
  ['custom1', 'custom2']
),

*/

// ============================================
// UTILITY FUNCTIONS
// ============================================

/*

import {
  truncateForMeta,      // Truncate text for meta descriptions
  generateSlug,         // Generate URL slug from title
  calculateReadingTime, // Calculate reading time for content
  getCanonicalUrl,      // Generate canonical URL
  getSocialShareUrls,   // Get social sharing URLs
  stripHtml,            // Remove HTML tags
  titleCase,            // Convert to title case
} from '@/lib/seo-utils';

// Example usage:
const description = truncateForMeta(longText, 160);
const slug = generateSlug('Article Title');
const readTime = calculateReadingTime(articleContent);
const shareUrls = getSocialShareUrls(pageUrl, pageTitle);

*/



