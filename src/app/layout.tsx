import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Toaster } from '@/components/ui/toaster';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-headline',
});

const fontPTSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});


export const metadata: Metadata = {
  title: 'Royal Cabs - Premium Taxi Service in Madhya Pradesh',
  description: 'Reliable and affordable cab service for local, outstation, and airport transfers in Indore, Bhopal, Ujjain, and across Madhya Pradesh.',
  keywords: 'taxi service, cab service, madhya pradesh, indore, bhopal, ujjain, airport transfer, outstation cabs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Royal Cabs',
    description: 'Premium Taxi and Cab Service in Madhya Pradesh',
    telephone: '+91-9876543210',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 MG Road',
      addressLocality: 'Indore',
      addressRegion: 'MP',
      postalCode: '452001',
      addressCountry: 'IN'
    },
    url: 'https://royalcabs.example.com',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontPoppins.variable,
          fontPTSans.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
