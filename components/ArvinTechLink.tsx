import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

interface Props {
  className?: string;
  showLogo?: boolean;
}

export default function ArvinTechLink({ className = '', showLogo = false }: Props) {
  return (
    <Link
      href="https://arvintech.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`${poppins.className} inline-flex items-center gap-1.5 lowercase font-semibold text-[#228B22] dark:text-[#3AA83A] hover:text-[#1a6b1a] dark:hover:text-[#228B22] transition-colors duration-200 ${className}`}
    >
      {showLogo && (
        <Image
          src="/arvintechlogo.png"
          alt="ArvinTech logo"
          width={20}
          height={20}
          className="inline-block"
        />
      )}
      arvintech
    </Link>
  );
}
