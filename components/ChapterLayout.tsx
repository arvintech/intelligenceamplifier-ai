'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ChapterLayoutProps {
  chapterNum: number;
  chapterTitle: string;
  chapterContent: string;
  prevChapter?: { title: string; slug: string };
  nextChapter?: { title: string; slug: string };
  bookTitle: string;
  bookSlug: string;
}

export default function ChapterLayout({
  chapterNum,
  chapterTitle,
  chapterContent,
  prevChapter,
  nextChapter,
  bookTitle,
  bookSlug,
}: ChapterLayoutProps) {
  const [audioPlaying, setAudioPlaying] = useState(false);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] pt-16">
        {/* Chapter Header */}
        <section className="relative overflow-hidden py-12 border-b border-[#1d1d1f]/10 dark:border-white/10">
          <div className="absolute inset-0 opacity-[0.27] dark:opacity-[0.18]">
            <Image
              src="/abstractMind.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link 
              href={`/books/${bookSlug}`}
              className="inline-block mb-6 text-[#007AFF] dark:text-[#0A84FF] hover:underline font-medium"
            >
              ← Back to {bookTitle}
            </Link>

            <div className="glass-card rounded-[20px] p-6 sm:p-8">
              {chapterNum > 0 && chapterNum < 14 && (
                <div className="text-sm font-semibold text-[#FF9500] dark:text-[#FF9F0A] mb-2 uppercase tracking-wide">
                  Chapter {chapterNum}
                </div>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
                {chapterTitle}
              </h1>

              {/* Audio Narration Placeholder */}
              <div className="mt-6 p-4 bg-gradient-to-r from-[#AF52DE]/10 to-[#007AFF]/10 dark:from-[#BF5AF2]/10 dark:to-[#0A84FF]/10 rounded-xl border border-[#AF52DE]/20 dark:border-[#BF5AF2]/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#AF52DE]/20 dark:bg-[#BF5AF2]/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#AF52DE] dark:text-[#BF5AF2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v18m0-18a9 9 0 019 9 9 9 0 01-9 9m0-18a9 9 0 00-9 9 9 9 0 009 9m0 0v-2m0 2h-2m2 0h2" />
                        <path d="M8 10v4m4-4v4m4-4v4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[#1d1d1f] dark:text-white">
                        Audio Narration
                      </div>
                      <div className="text-sm text-[#1d1d1f]/70 dark:text-white/70">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                  <button
                    disabled
                    className="px-6 py-2 bg-[#1d1d1f]/10 dark:bg-white/10 text-[#1d1d1f]/50 dark:text-white/50 rounded-full font-semibold cursor-not-allowed"
                  >
                    🎧 Listen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <article className="glass-card rounded-[24px] p-8 sm:p-12">
              <div 
                className="prose dark:prose-invert max-w-none prose-lg
                  prose-headings:text-[#1d1d1f] dark:prose-headings:text-white
                  prose-headings:font-bold prose-headings:tracking-tight
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
                  [&_h2]:!text-4xl [&_h2]:!mt-20 [&_h2]:!mb-10
                  [&_h2]:!pb-4 [&_h2]:!border-b-2 [&_h2]:!border-[#007AFF]/20
                  dark:[&_h2]:!border-[#0A84FF]/20
                  [&_h2]:!text-[#007AFF] dark:[&_h2]:!text-[#0A84FF]
                  [&_h2]:!font-bold
                  [&_.focus-quote]:text-center [&_.focus-quote]:my-16 [&_.focus-quote]:text-3xl
                  [&_.focus-quote]:font-bold [&_.focus-quote]:text-[#007AFF] dark:[&_.focus-quote]:text-[#0A84FF]
                  [&_.focus-quote]:leading-tight [&_.focus-quote]:px-8 [&_.focus-quote]:py-12
                  [&_.focus-quote]:bg-gradient-to-r [&_.focus-quote]:from-[#007AFF]/5 [&_.focus-quote]:to-[#AF52DE]/5
                  dark:[&_.focus-quote]:from-[#0A84FF]/5 dark:[&_.focus-quote]:to-[#BF5AF2]/5
                  [&_.focus-quote]:rounded-2xl [&_.focus-quote]:border-2 [&_.focus-quote]:border-[#007AFF]/20
                  dark:[&_.focus-quote]:border-[#0A84FF]/20
                "
                dangerouslySetInnerHTML={{ __html: chapterContent }}
              />
            </article>
          </div>
        </section>

        {/* Chapter Navigation */}
        <section className="py-12 border-t border-[#1d1d1f]/10 dark:border-white/10">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevChapter ? (
                <Link href={`/books/${bookSlug}/${prevChapter.slug}`}>
                  <div className="glass-card rounded-[20px] p-6 h-full hover:scale-[1.02] transition-all duration-300 group">
                    <div className="text-sm text-[#1d1d1f]/70 dark:text-white/70 mb-2">
                      ← Previous
                    </div>
                    <div className="font-semibold text-[#1d1d1f] dark:text-white group-hover:text-[#007AFF] dark:group-hover:text-[#0A84FF] transition-colors">
                      {prevChapter.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              {nextChapter && (
                <Link href={`/books/${bookSlug}/${nextChapter.slug}`}>
                  <div className="glass-card rounded-[20px] p-6 h-full hover:scale-[1.02] transition-all duration-300 group text-right">
                    <div className="text-sm text-[#1d1d1f]/70 dark:text-white/70 mb-2">
                      Next →
                    </div>
                    <div className="font-semibold text-[#1d1d1f] dark:text-white group-hover:text-[#007AFF] dark:group-hover:text-[#0A84FF] transition-colors">
                      {nextChapter.title}
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Back to Contents */}
            <div className="mt-8 text-center">
              <Link 
                href={`/books/${bookSlug}`}
                className="inline-block px-8 py-4 bg-[#007AFF] dark:bg-[#0A84FF] text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                📚 Back to Table of Contents
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}








