
'use client';
import { CarCard } from '@/components/CarCard';
import { cars } from '@/lib/data';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

export default function CarsPage() {
  const t = useTranslations('carsPage');

  return (
    <AnimateOnScroll>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <Image 
              src="/icons/royal.png" 
              alt="Royal Cabs company logo" 
              width={100} 
              height={100} 
              className="mx-auto mb-6 rounded-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{t('title')}</h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
}
