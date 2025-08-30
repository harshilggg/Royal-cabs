'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Users, BaggageClaim, ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Car } from '@/lib/types';
import { useTranslations } from 'next-intl';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const t = useTranslations('carCard');
  const bookingMessage = `Hi! I'd like to book a cab (${car.name})`;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-2">
      <CardHeader className="p-0">
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={car.images[0]}
            alt={car.name}
            data-ai-hint="car exterior"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl md:text-2xl mb-2">{car.name}</CardTitle>
              <Badge variant="outline">{car.type}</Badge>
            </div>
            <CardDescription>{car.description.substring(0, 80)}...</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-2 flex-grow">
        <div className="flex items-center justify-start space-x-6 text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary" />
            <span>{car.capacity} {t('seats')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BaggageClaim className="h-5 w-5 text-primary" />
            <span>{car.baggage} {t('bags')}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 bg-secondary/30">
        <Button asChild className="w-full transition-transform hover:scale-105" variant="default">
          <a href={`https://wa.me/917999114272?text=${encodeURIComponent(bookingMessage)}`} target="_blank" rel="noopener noreferrer">
            {t('bookNow')} <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
