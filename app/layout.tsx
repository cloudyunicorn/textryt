import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Textryt - Free Fancy Text Generator | 60+ Stylish Fonts & Decorative Text",
  description: "Transform your text with Textryt's free fancy text generator. Create stylish fonts, decorative text, and cool symbols for Instagram, Twitter, Facebook, and more. 60+ unique text styles including cursive, bold, italic, bubbles, and emoji decorations.",
  keywords: [
    "fancy text generator",
    "textryt",
    "cool text",
    "stylish fonts",
    "instagram fonts",
    "text decorator",
    "unicode text",
    "fancy letters",
    "text symbols",
    "decorative text",
    "cursive text generator",
    "bold text",
    "italic text",
    "bubble text",
    "aesthetic text",
    "font generator",
    "text art",
    "cool fonts",
    "social media fonts",
    "copy paste fonts"
  ],
  authors: [{ name: "Textryt" }],
  creator: "Textryt",
  publisher: "Textryt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://textryt.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Textryt - Free Fancy Text Generator",
    description: "Transform your text with 60+ stylish fonts and decorative styles. Perfect for Instagram, Twitter, and all social media.",
    url: 'https://textryt.vercel.app',
    siteName: 'Textryt',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Textryt - Fancy Text Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Textryt - Free Fancy Text Generator',
    description: 'Transform your text with 60+ stylish fonts and decorative styles.',
    images: ['/og-image.png'],
    creator: '@textryt',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
