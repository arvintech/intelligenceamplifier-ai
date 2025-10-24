# Chapter Styling Guide

This guide documents the approved styling and structure for book chapters, based on the San Francisco: AI Capital of the World book implementation.

## Table of Contents
1. [Book Landing Page](#book-landing-page)
2. [Chapter Layout](#chapter-layout)
3. [Focus Quotes](#focus-quotes)
4. [Typography Settings](#typography-settings)

---

## Book Landing Page

### Book Cover Display
- **Container**: Square aspect ratio (`aspect-square`)
- **Max Width**: `max-w-2xl` (672px)
- **Image Style**: `object-contain` (shows full image without cropping)
- **Background**: White/light gray background (`bg-white dark:bg-gray-100`)
- **Border Radius**: `rounded-[20px]`
- **Shadow**: `shadow-2xl`
- **Padding**: `px-4 sm:px-6 lg:px-8`
- **Alignment**: Centered with `mx-auto`

### Button Styling
- Same max-width as book cover for visual consistency
- Centered with `mx-auto`

**Example:**
```tsx
<div className="sticky top-24 px-4 sm:px-6 lg:px-8">
  <div className="aspect-square rounded-[20px] overflow-hidden shadow-2xl relative mx-auto max-w-2xl bg-white dark:bg-gray-100">
    <Image
      src="/book-covers/book-name.jpg.webp"
      alt="Book Cover"
      fill
      className="object-contain"
      priority
    />
  </div>
  
  <a
    href="amazon-link"
    className="mt-6 block w-full px-6 py-4 bg-[#007AFF] dark:bg-[#0A84FF] text-white text-center rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg max-w-2xl mx-auto"
  >
    📚 Buy on Amazon
  </a>
</div>
```

---

## Chapter Layout

### Paragraph Spacing
- **Bottom Margin**: Exactly **22px** between paragraphs
- Applied via: `[&_p]:mb-[22px]`

### Base Typography
- **Prose Size**: `prose-lg`
- **Max Width**: `max-w-none`
- **Line Height**: `leading-relaxed` for paragraphs
- **Text Color**: `text-[#1d1d1f]` (light mode), `text-white/90` (dark mode)

### Content Styles Applied
```tsx
className="prose dark:prose-invert max-w-none prose-lg
  prose-headings:text-[#1d1d1f] dark:prose-headings:text-white
  prose-headings:font-bold prose-headings:tracking-tight
  prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-10
  prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-[#007AFF]/20
  dark:prose-h2:border-[#0A84FF]/20
  prose-h2:text-[#007AFF] dark:prose-h2:text-[#0A84FF]
  prose-p:text-[#1d1d1f] dark:prose-p:text-white
  prose-p:leading-relaxed
  [&_p]:mb-[22px]
  prose-strong:text-[#1d1d1f] dark:prose-strong:text-white
  prose-a:text-[#007AFF] dark:prose-a:text-[#0A84FF]
  prose-blockquote:border-l-[#007AFF] dark:prose-blockquote:border-l-[#0A84FF]
  prose-blockquote:text-[#1d1d1f] dark:prose-blockquote:text-white
  prose-ul:my-8 prose-ol:my-8
  prose-li:text-[#1d1d1f] dark:prose-li:text-white
  prose-li:leading-relaxed
  [&_li]:mb-4 [&_li]:pl-2
  [&_ol]:space-y-4 [&_ul]:space-y-4
  [&_.focus-quote]:text-center [&_.focus-quote]:my-16 [&_.focus-quote]:text-3xl
  [&_.focus-quote]:font-bold [&_.focus-quote]:text-[#007AFF] dark:[&_.focus-quote]:text-[#0A84FF]
  [&_.focus-quote]:leading-tight [&_.focus-quote]:px-8 [&_.focus-quote]:py-12
  [&_.focus-quote]:bg-gradient-to-r [&_.focus-quote]:from-[#007AFF]/5 [&_.focus-quote]:to-[#AF52DE]/5
  dark:[&_.focus-quote]:from-[#0A84FF]/5 dark:[&_.focus-quote]:to-[#BF5AF2]/5
  [&_.focus-quote]:rounded-2xl [&_.focus-quote]:border-2 [&_.focus-quote]:border-[#007AFF]/20
  dark:[&_.focus-quote]:border-[#0A84FF]/20"
```

---

## Focus Quotes

### What is a Focus Quote?
A focus quote is a pull quote that highlights key insights from the chapter. It stands out visually with special styling.

### Visual Characteristics
- **Size**: `text-3xl` (large, prominent)
- **Weight**: Bold (`font-bold`)
- **Color**: Blue brand color (`text-[#007AFF]` / `text-[#0A84FF]` in dark mode)
- **Alignment**: Centered
- **Spacing**: `my-16` (large vertical margins)
- **Padding**: `px-8 py-12` (generous internal spacing)
- **Background**: Gradient from blue to purple with low opacity
- **Border**: 2px rounded border in brand color
- **Border Radius**: `rounded-2xl`

### How to Add a Focus Quote

In your chapter content string, wrap the quote text in a div with the `focus-quote` class:

```typescript
const chapterContent = `
  <p>
    Regular paragraph text here...
  </p>

  <div class="focus-quote">
    "This is your key insight or important quote that you want to highlight."
  </div>

  <p>
    More regular paragraph text continues here...
  </p>
`;
```

### Focus Quote Best Practices
1. Use **sparingly** - 1-2 per chapter maximum
2. Choose **impactful statements** that capture key insights
3. Keep quotes **concise** - ideally 1-2 sentences
4. Place strategically to **break up long sections**
5. Include quotation marks in the text

### Example Focus Quote
```html
<div class="focus-quote">
  "San Francisco isn't just the AI capital of the world—it's the laboratory where humanity is actively experimenting with its own future."
</div>
```

---

## Typography Settings

### Headings
- **General Headings**:
  - Color: `text-[#1d1d1f]` / `text-white` (dark mode)
  - Font Weight: Bold (`font-bold`)
  - Tracking: Tight (`tracking-tight`)

- **H2 Section Headers** (Major subsections):
  - Size: `text-4xl` (36px) - Large and prominent
  - Color: Brand blue `text-[#007AFF]` / `text-[#0A84FF]` (dark mode)
  - Top margin: `mt-20` (80px) - Extra space before sections
  - Bottom margin: `mb-10` (40px) - Good spacing after
  - Padding bottom: `pb-4` (16px) - Space above border
  - Border: Bottom border 2px in brand blue with 20% opacity
  - Effect: Creates clear visual separation between major sections

### Paragraphs
- **Color**: `text-[#1d1d1f]` / `text-white` (dark mode)
- **Line Height**: `leading-relaxed`
- **Bottom Margin**: `22px` (custom spacing)

### Lists (Ordered & Unordered)
- **List Container**: 
  - Vertical margin: `my-8` (32px top and bottom)
  - Vertical spacing between items: `space-y-4` (16px)
- **List Items**:
  - Color: `text-[#1d1d1f]` / `text-white` (dark mode)
  - Line Height: `leading-relaxed`
  - Bottom margin: `mb-4` (16px)
  - Left padding: `pl-2` (8px)
- Improved readability with proper spacing between questions/items

### Links
- **Color**: `text-[#007AFF]` / `text-[#0A84FF]` (dark mode)
- Brand blue color for consistency

### Blockquotes
- **Border**: Left border in brand blue color
- **Color**: Same as body text
- Use for traditional quotes (not focus quotes)

### Strong Text
- **Color**: Same as body text
- **Weight**: Bold (inherited)

---

## Implementation Checklist

When creating a new chapter:

- [ ] Use ChapterLayout component
- [ ] Set proper chapter metadata (title, description, keywords, URL)
- [ ] Add breadcrumb schema
- [ ] Create chapter content with proper HTML structure
- [ ] Add 22px spacing between paragraphs (automatic via ChapterLayout)
- [ ] Consider adding 1-2 focus quotes in strategic locations
- [ ] Use `<p>` tags for regular paragraphs
- [ ] Use `<h2>` for main section headings
- [ ] Use `<blockquote>` for traditional quotes
- [ ] Use `<div class="focus-quote">` for highlight quotes
- [ ] Link to previous and next chapters
- [ ] Test in both light and dark modes

---

## File Locations

- **ChapterLayout Component**: `/components/ChapterLayout.tsx`
- **Book Landing Page Example**: `/app/books/san-francisco-ai-capital/page.tsx`
- **Chapter Page Example**: `/app/books/san-francisco-ai-capital/prologue/page.tsx`

---

## Notes

- All styling is applied through the ChapterLayout component
- No need to add custom styles to individual chapter files
- The component handles responsive design automatically
- Dark mode is fully supported
- Focus quotes work automatically once the class is added

---

*Last Updated: October 24, 2025 - Enhanced H2 subsection styling for improved readability*

