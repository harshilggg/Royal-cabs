
'use client';

import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contactPage');

  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Image 
              src="/icons/royal.png" 
              alt="Royal Cabs Logo" 
              width={100} 
              height={100} 
              className="mx-auto mb-6 rounded-lg"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">{t('title')}</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 bg-background p-8 rounded-xl shadow-lg">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('contactInfo')}</h2>
                <p className="text-muted-foreground mb-6">
                  {t('contactDescription')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <a href="tel:+917999114272" className="text-foreground hover:text-primary">+91 79991 14272</a>
                  </li>
                   <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <a href="tel:+919301267318" className="text-foreground hover:text-primary">+91 93012 67318</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:royalcabs31@gmail.com" className="text-foreground hover:text-primary">royalcabs31@gmail.com</a>
                  </li>
                   <li className="flex items-start">
                    <MapPin className="h-5 w-5 mt-1 mr-3 text-primary flex-shrink-0" />
                    <span className="text-foreground">Near Ganga Nagar, Jabalpur, MP 482002</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                 <h3 className="text-lg font-semibold mb-2">{t('businessHours')}</h3>
                 <p className="text-muted-foreground">{t('availability')}</p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

