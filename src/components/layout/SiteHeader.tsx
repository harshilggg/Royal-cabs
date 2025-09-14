
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import * as React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SettingsMenu } from '../SettingsMenu';
import { ScrollArea } from '../ui/scroll-area';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const t = useTranslations('navigation');

  const mainNav = [
    { title: t('home'), href: '/' },
    { title: t('explore'), href: '/explore' },
    { title: t('cars'), href: '/cars' },
    { title: t('contact'), href: '/contact' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors duration-300",
      scrolled ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent border-transparent"
    )}>
      <div className="container flex h-20 max-w-7xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/icons/royal.png" alt="Royal Cabs Company Logo" width={50} height={50} className="rounded-full" />
          <span className="font-bold inline-block font-headline text-lg">{t('brand')}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex gap-6 items-center" aria-label="Main Navigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-base font-bold transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100',
                  pathname.endsWith(item.href) ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.title}
              </Link>
            ))}
            <SettingsMenu />
            <Button asChild className="transition-transform hover:scale-105">
                <a href="https://wa.me/917999114272?text=Hi!%20I'd%20like%20to%20book%20a%20cab." target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" /> {t('bookNow')}
                </a>
            </Button>
          </nav>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center border-b pb-4">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                    <Image src="/icons/royal.png" alt="Royal Cabs Company Logo" width={40} height={40} className="rounded-full" />
                    <span className="font-bold font-headline text-lg">{t('brand')}</span>
                  </Link>
                </div>
                <ScrollArea className="flex-grow">
                    <nav className="flex flex-col gap-4 py-4" aria-label="Mobile Navigation">
                      {mainNav.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            'text-lg font-bold transition-colors hover:text-primary',
                            pathname.endsWith(item.href) ? 'text-primary' : 'text-foreground'
                          )}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </nav>
                </ScrollArea>
                <div className="mt-auto border-t pt-4 space-y-4">
                    <div className="flex justify-end">
                      <SettingsMenu />
                    </div>
                    <Button asChild size="lg" className="w-full">
                        <a href="https://wa.me/917999114272?text=Hi!%20I'd%20like%20to%20book%20a%20cab." target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                            <Phone className="mr-2 h-4 w-4" /> {t('bookOnWhatsApp')}
                        </a>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
