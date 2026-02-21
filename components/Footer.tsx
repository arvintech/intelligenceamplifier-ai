import Image from 'next/image';
import Link from 'next/link';
import { Shield } from './icons';
import ArvinTechLink from './ArvinTechLink';

export default function Footer() {
  return (
    <footer className="relative bg-[#f5f5f7] dark:bg-[#000000] border-t border-[var(--separator)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center space-y-10">

          {/* Logos */}
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            <div className="relative p-6 glass-effect rounded-[28px] hover:scale-[1.03] transition-all duration-300">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                <Image
                  src="/IA-logo.png"
                  alt="Intelligence Amplifier Logo"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

            <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#1d1d1f]/15 to-transparent dark:via-white/10" />

            <Link
              href="https://arvintech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 glass-effect rounded-[28px] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                <Image
                  src="/arvintechlogo.png"
                  alt="ArvinTech Logo"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </Link>
          </div>

          {/* ArvinTech tagline */}
          <div className="space-y-1.5">
            <p className="text-[15px] text-[#1d1d1f]/70 dark:text-white/60 font-medium">
              Deployment and support provided by <ArvinTechLink showLogo />
            </p>
            <p className="text-xs text-[#1d1d1f]/45 dark:text-white/35 tracking-wide">
              Managed IT and AI Services Since 2000
            </p>
          </div>

          {/* Separator */}
          <div className="max-w-xs mx-auto">
            <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#1d1d1f]/12 to-transparent dark:via-white/10" />
          </div>

          {/* Copyright & trademark */}
          <div className="space-y-3">
            <p className="text-[#1d1d1f]/60 dark:text-white/55 text-sm">
              © 2026 Arvin Lioanag. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2 text-[13px] text-[#1d1d1f]/50 dark:text-white/40">
              <Shield className="w-3.5 h-3.5 flex-shrink-0" />
              <p>
                <span className="font-medium text-[#1d1d1f]/60 dark:text-white/50">Intelligence Amplifier™</span> is a trademark of Arvin Lioanag, pending registration with the USPTO.
              </p>
            </div>
          </div>
          
          {/* Legal disclaimer */}
          <div className="max-w-2xl mx-auto pt-8 border-t border-[var(--separator)] space-y-3">
            <p className="text-[11px] text-[#1d1d1f]/40 dark:text-white/30 leading-relaxed">
              The information provided on this website is for general informational and educational purposes only and does not constitute professional, legal, financial, or technical advice. While we strive to ensure the accuracy and relevance of the content, we make no warranties or representations regarding completeness, reliability, or suitability. Any reliance you place on such information is strictly at your own risk.
            </p>
            <p className="text-[11px] text-[#1d1d1f]/40 dark:text-white/30">
              We are not liable for any losses or damages arising from the use of this site or its content.
            </p>
            <p className="text-[11px] text-[#1d1d1f]/50 dark:text-white/40 font-medium pt-1">
              By using this site, you agree to these terms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}



