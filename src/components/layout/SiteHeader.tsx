'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Car, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import * as React from 'react';
import Image from 'next/image';

const mainNav = [
  { title: 'Home', href: '/' },
  { title: 'Our Cars', href: '/cars' },
  { title: 'Contact Us', href: '/contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-7xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/icons/royal.png" alt="Royal Cabs Logo" width={50} height={50} className="rounded-full" />
          <span className="font-bold inline-block font-headline text-lg">Royal Cabs</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex gap-6 items-center">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.title}
              </Link>
            ))}
            <Button asChild className="transition-transform hover:scale-105">
                <a href="https://wa.me/917999114272?text=Hi!%20I'd%20like%20to%20book%20a%20cab." target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" /> Book Now
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
                    <Image src="/icons/royal.png" alt="Royal Cabs Logo" width={40} height={40} className="rounded-full" />
                    <span className="font-bold font-headline text-lg">Royal Cabs</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-4 py-4">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === item.href ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto border-t pt-4">
                    <Button asChild size="lg" className="w-full">
                        <a href="https://wa.me/917999114272?text=Hi!%20I'd%20like%20to%20book%20a%20cab." target="_blank" rel="noopener noreferrer">
                            <Phone className="mr-2 h-4 w-4" /> Book on WhatsApp
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
