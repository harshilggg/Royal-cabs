
'use client';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { places } from '@/lib/data';
import { MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function ExplorePage() {
  const t = useTranslations('explorePage');

  return (
    <AnimateOnScroll>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <Image 
              src="/icons/royal.png" 
              alt="Royal Cabs Logo" 
              width={100} 
              height={100} 
              className="mx-auto mb-6 rounded-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{t('title')}</h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {places.map((place, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    data-ai-hint="tourist destination"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="text-xl md:text-2xl mb-2">{place.name}</CardTitle>
                <p className="text-muted-foreground text-sm flex-grow">{place.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-secondary/30">
                <Button asChild className="w-full transition-transform hover:scale-105" variant="outline">
                  <a href={place.mapLink} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" /> {t('viewOnMap')}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
}
