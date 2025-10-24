/**
 * SEO Utility Functions
 * Helper functions for common SEO tasks
 */

/**
 * Truncate text to a specific length for meta descriptions
 * @param text Text to truncate
 * @param maxLength Maximum length (default: 160 for meta descriptions)
 * @returns Truncated text with ellipsis if needed
 */
export function truncateForMeta(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  
  // Find the last space before maxLength to avoid cutting words
  const lastSpace = text.substring(0, maxLength - 3).lastIndexOf(' ');
  const truncateAt = lastSpace > 0 ? lastSpace : maxLength - 3;
  
  return text.substring(0, truncateAt) + '...';
}

/**
 * Generate a slug from a title
 * @param title Title to convert to slug
 * @returns URL-friendly slug
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Extract reading time from content
 * @param content HTML or plain text content
 * @param wordsPerMinute Average reading speed (default: 200)
 * @returns Estimated reading time in minutes
 */
export function calculateReadingTime(
  content: string,
  wordsPerMinute: number = 200
): number {
  // Remove HTML tags if present
  const plainText = content.replace(/<[^>]*>/g, '');
  
  // Count words
  const wordCount = plainText.trim().split(/\s+/).length;
  
  // Calculate reading time
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return minutes;
}

/**
 * Generate canonical URL
 * @param path Page path
 * @param baseUrl Base URL (optional)
 * @returns Full canonical URL
 */
export function getCanonicalUrl(path: string, baseUrl?: string): string {
  const base = baseUrl || 'https://intelligenceamplifier.ai';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${base}${cleanPath}`;
}

/**
 * Format date for structured data (ISO 8601)
 * @param date Date object or string
 * @returns ISO 8601 formatted date string
 */
export function formatDateForSchema(date: Date | string): string {
  if (typeof date === 'string') {
    return new Date(date).toISOString();
  }
  return date.toISOString();
}

/**
 * Clean and validate URL
 * @param url URL to clean
 * @returns Cleaned URL or null if invalid
 */
export function cleanUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    return urlObj.toString();
  } catch {
    return null;
  }
}

/**
 * Extract keywords from text (simple implementation)
 * @param text Text to extract keywords from
 * @param maxKeywords Maximum number of keywords to return
 * @returns Array of keywords
 */
export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
  // Remove common stop words
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these',
    'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'them', 'their',
  ]);
  
  // Extract words, convert to lowercase, and filter
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => 
      word.length > 3 && 
      !stopWords.has(word) &&
      !/^\d+$/.test(word) // Exclude pure numbers
    );
  
  // Count word frequency
  const frequency = new Map<string, number>();
  words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });
  
  // Sort by frequency and return top keywords
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

/**
 * Validate email for author/publisher fields
 * @param email Email to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate social sharing URLs
 */
export function getSocialShareUrls(url: string, title: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };
}

/**
 * Check if URL is external
 * @param url URL to check
 * @returns Boolean indicating if URL is external
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname !== 'intelligenceamplifier.ai' && 
           !urlObj.hostname.endsWith('.intelligenceamplifier.ai');
  } catch {
    // If URL parsing fails, assume it's internal (relative URL)
    return false;
  }
}

/**
 * Generate preview image URL for Open Graph
 * Can be extended to use a dynamic image generation service
 */
export function generateOGImageUrl(params: {
  title: string;
  subtitle?: string;
  theme?: string;
}): string {
  // For now, return default image
  // In the future, this could point to an API route that generates images
  // Example: /api/og?title=${encodeURIComponent(params.title)}
  return '/IA-logo.png';
}

/**
 * Remove HTML tags from string (for meta descriptions from HTML content)
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Capitalize first letter of each word
 */
export function titleCase(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}








