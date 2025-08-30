
import type { Metadata } from 'next';
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


export const metadata: Metadata = {
  title: 'Royal Cabs - Premium Taxi Service in Madhya Pradesh',
  description: 'Reliable and affordable cab service for local, outstation, and airport transfers in Jabalpur, Indore, Bhopal, Ujjain, and across Madhya Pradesh.',
  keywords: 'taxi service, cab service, madhya pradesh, jabalpur, indore, bhopal, ujjain, airport transfer, outstation cabs',
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const { locale } = use(params);
  const messages = use(getMessages());
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Royal Cabs',
    description: 'Premium Taxi and Cab Service in Madhya Pradesh',
    telephone: '+91-79991-14272',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Ganga Nagar',
      addressLocality: 'Jabalpur',
      addressRegion: 'MP',
      postalCode: '482002',
      addressCountry: 'IN'
    },
    url: 'https://royalcabs.example.com',
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground">
              Skip to main content
            </a>
            <BubbleBackground />
            <div className="relative flex min-h-dvh flex-col bg-transparent">
              <SiteHeader />
              <main id="main-content" className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <FloatingWhatsApp />
            <Toaster />
            <GlobalAudio />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

