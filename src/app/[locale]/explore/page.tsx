
'use client';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { jabalpurPlaces, otherPlaces } from '@/lib/data';
import type { Place } from '@/lib/types';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const PlaceCard = ({ place, t }: { place: Place; t: any }) => {
  const bookingMessage = `Hi! I'd like to book a cab to ${place.name}.`;
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-2">
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={place.image}
            alt={place.name}
            data-ai-hint="tourist destination"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {place.tag && (
            <Badge className="absolute top-2 right-2" variant="destructive">{place.tag}</Badge>
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="text-xl mb-2">{place.name}</CardTitle>
        <p className="text-muted-foreground text-sm flex-grow">{place.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 grid grid-cols-2 gap-2 bg-secondary/30">
        <Button asChild className="w-full transition-transform hover:scale-105" variant="outline">
          <a href={place.mapLink} target="_blank" rel="noopener noreferrer">
            <MapPin className="mr-2 h-4 w-4" /> {t('viewOnMap')}
          </a>
        </Button>
        <Button asChild className="w-full transition-transform hover:scale-105" variant="default">
          <a href={`https://wa.me/917999114272?text=${encodeURIComponent(bookingMessage)}`} target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-4 w-4" /> {t('bookThisTrip')}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};


export default function ExplorePage() {
  const t = useTranslations('explorePage');
  const generalBookingMessage = "Hi! I'd like to book a trip to one of the destinations shown on your website.";

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

        {/* Jabalpur Section */}
        <section className="mb-16">
          <div className="relative rounded-lg overflow-hidden mb-8 shadow-2xl">
            <Image src="/8.jpg" alt="Jabalpur Landmark" width={1200} height={400} data-ai-hint="historic gate" className="w-full h-auto object-cover"/>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">{t('jabalpurTitle')}</h2>
            </div>
          </div>
          
          <Carousel 
            className="w-full"
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            opts={{ loop: true, align: 'start' }}
          >
            <CarouselContent className="-ml-4">
              {jabalpurPlaces.map((place, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <PlaceCard place={place} t={t} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </section>

        {/* Other Destinations */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t('otherDestinationsTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {otherPlaces.map((place, index) => (
              <PlaceCard key={index} place={place} t={t} />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">{t('finalCta.title')}</h3>
          <Button asChild size="lg" className="transition-transform hover:scale-105">
            <a href={`https://wa.me/917999114272?text=${encodeURIComponent(generalBookingMessage)}`} target="_blank" rel="noopener noreferrer">
              {t('finalCta.button')} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

      </div>
    </AnimateOnScroll>
  );
}
