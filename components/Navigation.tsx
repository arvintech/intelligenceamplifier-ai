'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-[#d2d2d7] dark:border-[#424245]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10">
              <Image
                src="/IA-logo.png"
                alt="IA Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold text-[#1d1d1f] dark:text-white hidden sm:inline">
              Intelligence Amplifier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-[#1d1d1f] dark:text-white hover:text-[#007AFF] dark:hover:text-[#0A84FF] font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/intelligence-amplifier-series" 
              className="text-[#1d1d1f] dark:text-white hover:text-[#007AFF] dark:hover:text-[#0A84FF] font-medium transition-colors"
            >
              Book Series
            </Link>
            <Link 
              href="/amplified-classics" 
              className="text-[#1d1d1f] dark:text-white hover:text-[#AF52DE] dark:hover:text-[#BF5AF2] font-medium transition-colors"
            >
              Amplified Classics
            </Link>
            <Link 
              href="/#projects" 
              className="text-[#1d1d1f] dark:text-white hover:text-[#34C759] dark:hover:text-[#30D158] font-medium transition-colors"
            >
              Projects
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#1d1d1f]/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#1d1d1f] dark:text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#d2d2d7] dark:border-[#424245]">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#1d1d1f] dark:text-white hover:text-[#007AFF] dark:hover:text-[#0A84FF] font-medium transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                href="/intelligence-amplifier-series" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#1d1d1f] dark:text-white hover:text-[#007AFF] dark:hover:text-[#0A84FF] font-medium transition-colors py-2"
              >
                Book Series
              </Link>
              <Link 
                href="/amplified-classics" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#1d1d1f] dark:text-white hover:text-[#AF52DE] dark:hover:text-[#BF5AF2] font-medium transition-colors py-2"
              >
                Amplified Classics
              </Link>
              <Link 
                href="/#projects" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#1d1d1f] dark:text-white hover:text-[#34C759] dark:hover:text-[#30D158] font-medium transition-colors py-2"
              >
                Projects
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}








