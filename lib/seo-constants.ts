/**
 * SEO Constants and Configuration
 * Centralized place for all SEO-related constants
 */

export const SITE_NAME = 'Intelligence Amplifier™';
export const SITE_URL = 'https://intelligenceamplifier.ai';
export const SITE_DESCRIPTION = 'Amplify your intelligence with cutting-edge AI technology. Intelligence Amplifier™ helps you think faster, learn better, and achieve more.';
export const SITE_CREATOR = 'Arvin Lioanag';
export const SITE_LOCALE = 'en_US';
export const SITE_LOGO = '/IA-logo.png';
export const TWITTER_HANDLE = '@intelligenceamp'; // Update with actual handle

/**
 * Default Open Graph image dimensions
 */
export const OG_IMAGE = {
  WIDTH: 1200,
  HEIGHT: 630,
};

/**
 * Book series data for SEO
 */
export const BOOK_SERIES_INFO = {
  'san-francisco-ai-capital': {
    isbn: 'B0FHGCHVL1', // ASIN from Amazon
    datePublished: '2024',
    numberOfPages: 250,
  },
  'alarming-rise-stupidity-amplified': {
    isbn: 'B0FHGGT5HD',
    datePublished: '2024',
    numberOfPages: undefined,
  },
  'amplified-human-spirit': {
    isbn: 'B0FHGC4YT1',
    datePublished: '2024',
    numberOfPages: 207,
  },
  'amplified-nietzsche': {
    isbn: undefined,
    datePublished: undefined,
    numberOfPages: undefined,
  },
};

/**
 * Keyword sets for different content types
 */
export const KEYWORD_SETS = {
  homepage: [
    'Intelligence Amplifier',
    'IA',
    'AI intelligence enhancement',
    'artificial intelligence',
    'cognitive enhancement',
    'human-AI collaboration',
    'intelligence amplification',
    'augmented intelligence',
    'AI tools',
    'machine learning',
  ],
  books: [
    'AI books',
    'artificial intelligence books',
    'intelligence amplification',
    'technology books',
    'philosophy of AI',
    'AI ethics',
    'future of AI',
  ],
  classics: [
    'classic literature',
    'amplified classics',
    'annotated literature',
    'literary analysis',
    'AI-enhanced reading',
    'classic novels',
    'Jane Austen',
    'Brontë sisters',
    'Victorian literature',
  ],
  sanFrancisco: [
    'San Francisco',
    'Silicon Valley',
    'AI capital',
    'tech innovation',
    'startup culture',
    'technology hub',
    'Bay Area tech',
    'AI development',
  ],
  philosophy: [
    'AI philosophy',
    'technology ethics',
    'human potential',
    'consciousness',
    'critical thinking',
    'Nietzsche',
    'existentialism',
    'philosophical inquiry',
  ],
};

/**
 * Priority levels for sitemap
 */
export const SITEMAP_PRIORITIES = {
  homepage: 1.0,
  mainSection: 0.9,
  subSection: 0.8,
  content: 0.7,
  supporting: 0.5,
} as const;

/**
 * Change frequency for sitemap
 */
export const CHANGE_FREQUENCIES = {
  homepage: 'weekly',
  activeSeries: 'monthly',
  staticContent: 'yearly',
  comingSoon: 'monthly',
} as const;

