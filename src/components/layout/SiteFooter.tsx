
'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { TermsDialog } from '../TermsDialog';

export function SiteFooter() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/icons/royal.png" alt="Royal Cabs Logo" width={40} height={40} className="rounded-full" />
              <span className="font-bold text-xl font-headline">{tNav('brand')}</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('tagline')}
            </p>
          </div>
          
          <nav>
            <h3 className="font-semibold font-headline text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">{tNav('home')}</Link></li>
              <li><Link href="/cars" className="text-sm text-muted-foreground hover:text-primary">{tNav('cars')}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">{tNav('contact')}</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold font-headline text-lg mb-4">{t('ourServices')}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">{t('services.local')}</li>
              <li className="text-sm text-muted-foreground">{t('services.outstation')}</li>
              <li className="text-sm text-muted-foreground">{t('services.airport')}</li>
              <li className="text-sm text-muted-foreground">{t('services.corporate')}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline text-lg mb-4">{t('getInTouch')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-3 text-muted-foreground flex-shrink-0" />
                <a href="https://maps.app.goo.gl/vWEv6qXg9w1AFWLPA?g_st=aw" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">{t('address')}</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-muted-foreground flex-shrink-0" />
                <a href="tel:+917999114272" className="text-sm text-muted-foreground hover:text-primary">+91 79991 14272</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-muted-foreground flex-shrink-0" />
                <a href="mailto:royalcabs31@gmail.com" className="text-sm text-muted-foreground hover:text-primary">royalcabs31@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
           <TermsDialog>
             <p className="cursor-pointer hover:text-primary transition-colors">
                © 2025 {tNav('brand')}. Terms & Conditions
             </p>
           </TermsDialog>
        </div>
      </div>
    </footer>
  );
}
