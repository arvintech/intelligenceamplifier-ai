'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Home, BookStack, Library, Sparkles, Menu, Close } from './icons';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-[var(--separator)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-75 transition-all duration-300">
            <div className="relative w-10 h-10">
              <Image
                src="/IA-logo.png"
                alt="IA Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-[#1d1d1f] dark:text-white hidden sm:inline tracking-tight">
              Intelligence Amplifier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#1d1d1f] dark:text-white hover:bg-[#1d1d1f]/5 dark:hover:bg-white/5 font-medium transition-all duration-200"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              href="/intelligence-amplifier-series" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#1d1d1f] dark:text-white hover:bg-[#007AFF]/10 dark:hover:bg-[#0A84FF]/10 hover:text-[#007AFF] dark:hover:text-[#0A84FF] font-medium transition-all duration-200"
            >
              <BookStack className="w-4 h-4" />
              <span>Book Series</span>
            </Link>
            <Link 
              href="/amplified-classics" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#1d1d1f] dark:text-white hover:bg-[#AF52DE]/10 dark:hover:bg-[#BF5AF2]/10 hover:text-[#AF52DE] dark:hover:text-[#BF5AF2] font-medium transition-all duration-200"
            >
              <Library className="w-4 h-4" />
              <span>Amplified Classics</span>
            </Link>
            <Link 
              href="/#projects" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#1d1d1f] dark:text-white hover:bg-[#34C759]/10 dark:hover:bg-[#30D158]/10 hover:text-[#34C759] dark:hover:text-[#30D158] font-medium transition-all duration-200"
            >
              <Sparkles className="w-4 h-4" />
              <span>Projects</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#1d1d1f]/5 dark:hover:bg-white/5 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <Close className="w-6 h-6 text-[#1d1d1f] dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-[#1d1d1f] dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--separator)]">
            <div className="flex flex-col gap-2">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d1d1f] dark:text-white hover:bg-[#1d1d1f]/5 dark:hover:bg-white/5 font-medium transition-all duration-200"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link 
                href="/intelligence-amplifier-series" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d1d1f] dark:text-white hover:bg-[#007AFF]/10 dark:hover:bg-[#0A84FF]/10 hover:text-[#007AFF] dark:hover:text-[#0A84FF] font-medium transition-all duration-200"
              >
                <BookStack className="w-5 h-5" />
                <span>Book Series</span>
              </Link>
              <Link 
                href="/amplified-classics" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d1d1f] dark:text-white hover:bg-[#AF52DE]/10 dark:hover:bg-[#BF5AF2]/10 hover:text-[#AF52DE] dark:hover:text-[#BF5AF2] font-medium transition-all duration-200"
              >
                <Library className="w-5 h-5" />
                <span>Amplified Classics</span>
              </Link>
              <Link 
                href="/#projects" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d1d1f] dark:text-white hover:bg-[#34C759]/10 dark:hover:bg-[#30D158]/10 hover:text-[#34C759] dark:hover:text-[#30D158] font-medium transition-all duration-200"
              >
                <Sparkles className="w-5 h-5" />
                <span>Projects</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}








