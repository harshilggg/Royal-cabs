
import type { Metadata, Viewport } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Toaster } from '@/components/ui/toaster';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { ThemeProvider } from '@/components/ThemeProvider';
import { BubbleBackground } from '@/components/BubbleBackground';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { use } from 'react';
import { GlobalAudio } from '@/components/GlobalAudio';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.royalcabsjabalpur.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Royal Cabs: #1 Taxi Service in Jabalpur & Madhya Pradesh',
    template: '%s | Royal Cabs',
  },
  description: 'Book reliable and affordable cabs in Jabalpur for local, outstation, and airport transfers. Serving all of Madhya Pradesh (Indore, Bhopal) & nearby states. 24/7 service.',
  keywords: [
    'taxi service Jabalpur', 
    'cab service Madhya Pradesh', 
    'Jabalpur cabs', 
    'outstation cabs Jabalpur', 
    'airport transfer Jabalpur', 
    'Indore taxi service', 
    'Bhopal cab service',
    'car rental Jabalpur',
    'taxi in Jabalpur',
    'book cab Jabalpur',
    'one-way taxi Madhya Pradesh',
    'Kanha taxi',
    'Bandhavgarh taxi',
    'Pachmarhi cabs'
  ],
  openGraph: {
    title: 'Royal Cabs: Premium Taxi Service in Jabalpur & Madhya Pradesh',
    description: 'Reliable and affordable cab service for local, outstation, and airport transfers across MP.',
    url: siteUrl,
    siteName: 'Royal Cabs',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Royal Cabs vehicle on a road trip',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Cabs - Jabalpur\'s Top Taxi Service',
    description: 'Your trusted partner for comfortable and safe journeys in and around Madhya Pradesh.',
    images: [`${siteUrl}/twitter-image.jpg`],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'hi': '/hi',
      'mr': '/mr',
      'gu': '/gu',
      'rj': '/rj',
    },
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#911d1a' },
    { media: '(prefers-color-scheme: dark)', color: '#e53e3e' },
  ],
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Royal Cabs',
    description: 'Royal Cabs offers premium and reliable taxi and cab services based in Jabalpur, Madhya Pradesh. We specialize in local travel, outstation trips, and airport transfers across MP and nearby states. Available 24/7.',
    image: `${siteUrl}/icons/royal.png`,
    '@id': siteUrl,
    telephone: '+91-79991-14272',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No.9, Arjun complex, Napier Town',
      addressLocality: 'Jabalpur',
      addressRegion: 'MP',
      postalCode: '482002',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.1687,
      longitude: 79.9333,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    areaServed: {
      '@type': 'State',
      name: 'Madhya Pradesh'
    },
    url: siteUrl,
  };

  return (
    <html lang={locale} suppressHydrationWarning>
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
        {children}
      </body>
    </html>
  );
}
