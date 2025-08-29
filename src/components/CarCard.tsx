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

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full group">
      <CardHeader className="p-0">
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={car.image}
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
            <span>{car.capacity} Seats</span>
          </div>
          <div className="flex items-center space-x-2">
            <BaggageClaim className="h-5 w-5 text-primary" />
            <span>{car.baggage} Bags</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 bg-secondary/30">
        <Button asChild className="w-full" variant="default">
          <Link href={`/cars/${car.slug}`}>
            Book Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
