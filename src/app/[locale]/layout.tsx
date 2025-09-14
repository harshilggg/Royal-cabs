
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { BubbleBackground } from '@/components/BubbleBackground';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { GlobalAudio } from '@/components/GlobalAudio';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const messages = useMessages();
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
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
  );
}
