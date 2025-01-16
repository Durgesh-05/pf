import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Appbar from '@/components/Appbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Durgesh-Dubey',
  description: 'Portfolio of Durgesh Dubey (Fullstack dev)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='h-full max-w-full px-8 py-4'>
          <Appbar />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
