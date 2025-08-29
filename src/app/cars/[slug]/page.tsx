import { notFound } from 'next/navigation';
import Image from 'next/image';
import { cars } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaggageClaim, CheckCircle, Phone, Users } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = cars.find((c) => c.slug === params.slug);

  if (!car) {
    return {
      title: 'Car Not Found',
    };
  }

  return {
    title: `${car.name} - Royal Cabs`,
    description: `Details for ${car.name}. Capacity: ${car.capacity} passengers. ${car.description}`,
  };
}


export async function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = cars.find((c) => c.slug === params.slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Car Image and Basic Info */}
        <div>
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
            <Image src={car.image} alt={car.name} data-ai-hint="car side view" fill className="object-cover" />
          </div>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">{car.name}</h1>
            <Badge variant="secondary" className="text-lg">{car.type}</Badge>
          </div>
          <p className="text-lg text-muted-foreground mb-4">{car.description}</p>
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-foreground">
              <Users className="h-6 w-6 text-primary" />
              <span className="font-medium">{car.capacity} Passengers</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <BaggageClaim className="h-6 w-6 text-primary" />
              <span className="font-medium">{car.baggage} Bags</span>
            </div>
          </div>
           <div className="mb-6">
             <h3 className="font-semibold text-lg mb-2">Features</h3>
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
              <CardTitle className="text-2xl">Book This Car</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                To book this car or inquire about pricing, please contact us directly on WhatsApp. We'll get back to you with a quote as soon as possible.
              </p>
              <Button asChild size="lg" className="w-full transition-transform hover:scale-105">
                <a href={`https://wa.me/917999114272?text=Hi!%20I'd%20like%20to%20book%20a%20cab.`} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" /> Book on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
