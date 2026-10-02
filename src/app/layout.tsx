import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#090a0d',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Anmol | Backend-focused Software Developer',
  description:
    'Portfolio of Anmol — Backend-focused Software Developer specializing in REST APIs, Node.js, TypeScript, Redis caching, microservices, and scalable system architecture.',
  keywords: [
    'Anmol',
    'Backend Developer',
    'Software Engineer',
    'Node.js',
    'Express.js',
    'TypeScript',
    'Redis',
    'MongoDB',
    'REST API',
    'Microservices',
    'System Design',
    'BullMQ',
    'Docker',
  ],
  authors: [{ name: 'Anmol', url: 'https://github.com/anmol520' }],
  creator: 'Anmol',
  openGraph: {
    title: 'Anmol | Backend-focused Software Developer',
    description:
      'Designing robust RESTful APIs, distributed caching layers, and asynchronous microservices with clean modular architecture.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Anmol Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anmol | Backend-focused Software Developer',
    description:
      'Designing robust RESTful APIs, distributed caching layers, and asynchronous microservices.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#090a0d] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
