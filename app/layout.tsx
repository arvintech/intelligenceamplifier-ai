import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intelligence Amplifier™ - AI-Powered Intelligence Enhancement",
  description: "Amplify your intelligence with cutting-edge AI technology. Intelligence Amplifier™ helps you think faster, learn better, and achieve more.",
  keywords: ["AI", "artificial intelligence", "intelligence amplification", "cognitive enhancement", "machine learning"],
  authors: [{ name: "Arvin Lioanag" }],
  creator: "Arvin Lioanag",
  publisher: "Arvin Lioanag",
  openGraph: {
    title: "Intelligence Amplifier™",
    description: "Amplify your intelligence with cutting-edge AI technology",
    url: "https://intelligenceamplifier.ai",
    siteName: "Intelligence Amplifier",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelligence Amplifier™",
    description: "Amplify your intelligence with cutting-edge AI technology",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}



