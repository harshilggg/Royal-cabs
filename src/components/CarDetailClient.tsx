
'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaggageClaim, CheckCircle, Phone, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import type { Car } from '@/lib/types';

export function CarDetailClient({ car }: { car: Car }) {
  const t = useTranslations('carDetailPage');

  const bookingMessage = `Hi! I'd like to book a cab (${car.name})`;
  const whatsappUrl = `https://web.whatsapp.com/send?phone=917999114272&text=${encodeURIComponent(bookingMessage)}`;

  return (
    <AnimateOnScroll>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Car Image and Basic Info */}
          <div>
            <div className="relative">
              <Carousel 
                className="w-full rounded-lg overflow-hidden shadow-lg mb-6"
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                opts={{ loop: true }}
                aria-label={`Images of ${car.name}`}
              >
                <CarouselContent>
                  {car.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-80 md:h-96">
                        <Image src={img} alt={`${car.name} image ${index + 1}`} data-ai-hint="car side view" fill className="object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {car.images.length > 1 && (
                  <>
                    <CarouselPrevious />
                    <CarouselNext />
                  </>
                )}
              </Carousel>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">{car.name}</h1>
              <Badge variant="secondary" className="text-lg">{car.type}</Badge>
            </div>
            <p className="text-lg text-muted-foreground mb-4">{car.description}</p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-foreground">
                <Users className="h-6 w-6 text-primary" />
                <span className="font-medium">{car.capacity} {t('passengers')}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <BaggageClaim className="h-6 w-6 text-primary" />
                <span className="font-medium">{car.baggage} {t('bags')}</span>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">{t('features')}</h3>
              <ul className="space-y-2">
                  {car.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-muted-foreground">{feature}</span>
                      </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Booking */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('bookTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {t('bookDescription')}
                </p>
                <Button asChild size="lg" className="w-full transition-transform hover:scale-105">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-5 w-5" /> {t('bookOnWhatsApp')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
