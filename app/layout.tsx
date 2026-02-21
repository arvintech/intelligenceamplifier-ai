import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { generateSEO } from "@/lib/seo";
import { KEYWORD_SETS } from "@/lib/seo-constants";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = generateSEO({
  title: "Intelligence Amplifier™ - AI-Powered Intelligence Enhancement",
  description: "Amplify your intelligence with cutting-edge AI technology. Intelligence Amplifier™ helps you think faster, learn better, and achieve more.",
  keywords: KEYWORD_SETS.homepage,
  url: "/",
  type: "website",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}



