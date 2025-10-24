import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#f5f5f7] dark:bg-[#000000] border-t border-[#d2d2d7] dark:border-[#424245]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative p-6 glass-effect rounded-[24px] hover:scale-105 transition-transform duration-300">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <Image
                  src="/IA-logo.png"
                  alt="Intelligence Amplifier Logo"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-[#1d1d1f]/70 dark:text-white/70 text-sm font-normal">
              © 2025 Arvin Lioanag. All rights reserved.
            </p>
            <p className="text-[13px] text-[#1d1d1f]/60 dark:text-white/60 font-normal">
              <span className="font-medium">Intelligence Amplifier™</span> is a trademark of Arvin Lioanag, pending registration with the USPTO.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto pt-6 border-t border-[#d2d2d7] dark:border-[#424245] space-y-4">
            <p className="text-[11px] text-[#1d1d1f]/50 dark:text-white/50 leading-relaxed">
              The information provided on this website is for general informational and educational purposes only and does not constitute professional, legal, financial, or technical advice. While we strive to ensure the accuracy and relevance of the content, we make no warranties or representations regarding completeness, reliability, or suitability. Any reliance you place on such information is strictly at your own risk.
            </p>
            <p className="text-[11px] text-[#1d1d1f]/50 dark:text-white/50">
              We are not liable for any losses or damages arising from the use of this site or its content.
            </p>
            <p className="text-[11px] text-[#1d1d1f]/60 dark:text-white/60 font-medium pt-2">
              By using this site, you agree to these terms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}



