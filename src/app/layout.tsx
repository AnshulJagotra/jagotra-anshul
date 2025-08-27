import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Anshul Jagotra | Software Engineer & AI/ML Enthusiast',
  description:
    'Portfolio of Anshul Jagotra, a software engineer and AI/ML enthusiast building scalable web apps, machine-learning solutions, and blockchain prototypes.',
  openGraph: {
    title: 'Anshul Jagotra | Software Engineer & AI/ML Enthusiast',
    description: 'Welcome to my professional portfolio.',
    url: 'https://anshuljagotra.com', // Replace with actual domain
    siteName: 'Anshul Jagotra Portfolio',
    images: [
      {
        url: '/og-image.png', // Create and add an OG image to the /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anshul Jagotra | Software Engineer & AI/ML Enthusiast',
    description: 'Portfolio of Anshul Jagotra, a software engineer and AI/ML enthusiast.',
    // creator: "@yourtwitterhandle", // Add twitter handle
    images: ['/og-image.png'], // Create and add an OG image to the /public folder
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
