import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'book' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  canonical?: string;
}

const SITE_CONFIG = {
  name: 'Intelligence Amplifier™',
  title: 'Intelligence Amplifier™ - AI-Powered Intelligence Enhancement',
  description: 'Amplify your intelligence with cutting-edge AI technology. Intelligence Amplifier™ helps you think faster, learn better, and achieve more.',
  url: 'https://intelligenceamplifier.ai',
  creator: 'Arvin Lioanag',
  twitterHandle: '@intelligenceamp', // Update with actual handle
  defaultImage: '/IA-logo.png',
  locale: 'en_US',
};

/**
 * Generate comprehensive metadata for a page
 * @param config SEO configuration object
 * @returns Next.js Metadata object
 */
export function generateSEO(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    author = SITE_CONFIG.creator,
    image = SITE_CONFIG.defaultImage,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    section,
    tags = [],
    noIndex = false,
    canonical,
  } = config;

  const fullTitle = title.includes('Intelligence Amplifier') 
    ? title 
    : `${title} | ${SITE_CONFIG.name}`;
  
  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: author }],
    creator: author,
    publisher: SITE_CONFIG.creator,
    alternates: {
      canonical: canonical || fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: SITE_CONFIG.twitterHandle,
      images: [imageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return metadata;
}

/**
 * Generate structured data (JSON-LD) for a webpage
 */
export function generateWebPageSchema(config: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const { title, description, url, image, datePublished, dateModified } = config;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${SITE_CONFIG.url}${url}`,
    ...(image && { image: `${SITE_CONFIG.url}${image}` }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
      },
    },
  };
}

/**
 * Generate structured data for a book
 */
export function generateBookSchema(config: {
  name: string;
  description: string;
  author: string;
  isbn?: string;
  image?: string;
  url?: string;
  datePublished?: string;
  publisher?: string;
  numberOfPages?: number;
}) {
  const {
    name,
    description,
    author,
    isbn,
    image,
    url,
    datePublished,
    publisher = SITE_CONFIG.creator,
    numberOfPages,
  } = config;

  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    ...(isbn && { isbn }),
    ...(image && { image: `${SITE_CONFIG.url}${image}` }),
    ...(url && { url: `${SITE_CONFIG.url}${url}` }),
    ...(datePublished && { datePublished }),
    publisher: {
      '@type': 'Organization',
      name: publisher,
    },
    ...(numberOfPages && { numberOfPages }),
  };
}

/**
 * Generate structured data for an article
 */
export function generateArticleSchema(config: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  const {
    headline,
    description,
    author,
    datePublished,
    dateModified,
    image,
    url,
  } = config;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    ...(dateModified && { dateModified }),
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${image}`,
      },
    }),
    url: `${SITE_CONFIG.url}${url}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
      },
    },
  };
}

/**
 * Generate structured data for the organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
    description: SITE_CONFIG.description,
    founder: {
      '@type': 'Person',
      name: SITE_CONFIG.creator,
    },
    sameAs: [
      // Add social media links here
      // 'https://twitter.com/intelligenceamp',
      // 'https://linkedin.com/company/intelligence-amplifier',
    ],
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Common keywords for different page types
 */
export const COMMON_KEYWORDS = {
  ai: ['AI', 'artificial intelligence', 'machine learning', 'deep learning', 'neural networks'],
  amplification: [
    'intelligence amplification',
    'IA',
    'cognitive enhancement',
    'human-AI collaboration',
    'augmented intelligence',
  ],
  books: ['books', 'literature', 'reading', 'publishing', 'author'],
  tech: ['technology', 'innovation', 'Silicon Valley', 'startups', 'tech culture'],
  philosophy: ['philosophy', 'ethics', 'critical thinking', 'human nature', 'consciousness'],
};

/**
 * Merge keyword arrays and remove duplicates
 */
export function mergeKeywords(...keywordArrays: string[][]): string[] {
  const merged = keywordArrays.flat();
  return Array.from(new Set(merged));
}

