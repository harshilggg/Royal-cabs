import { notFound } from 'next/navigation';
import Image from 'next/image';
import { cars } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BaggageClaim, CheckCircle, IndianRupee, Phone, Users } from 'lucide-react';
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
    description: `Details and pricing for ${car.name}. Capacity: ${car.capacity} passengers. ${car.description}`,
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
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{car.name}</h1>
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

        {/* Pricing and Booking */}
        <div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Pricing & Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="local" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="local">Local</TabsTrigger>
                  <TabsTrigger value="outstation">Outstation</TabsTrigger>
                  <TabsTrigger value="airport">Airport</TabsTrigger>
                </TabsList>
                <TabsContent value="local" className="mt-6">
                    <h4 className="font-semibold text-lg mb-4">Local Packages</h4>
                    <div className="space-y-3">
                        {car.pricing.local.map(pkg => (
                            <div key={pkg.name} className="flex justify-between items-center p-3 bg-background rounded-md">
                                <span className="text-muted-foreground">{pkg.name}</span>
                                <span className="font-bold flex items-center"><IndianRupee className="h-4 w-4 mr-1"/>{pkg.price.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="outstation" className="mt-6">
                    <h4 className="font-semibold text-lg mb-4">Outstation Rates</h4>
                    <div className="space-y-3">
                         <div className="flex justify-between items-center p-3 bg-background rounded-md">
                            <span className="text-muted-foreground">Rate per KM</span>
                            <span className="font-bold flex items-center"><IndianRupee className="h-4 w-4 mr-1"/>{car.pricing.outstation.perKm}/km</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-background rounded-md">
                            <span className="text-muted-foreground">Driver Allowance (per day)</span>
                            <span className="font-bold flex items-center"><IndianRupee className="h-4 w-4 mr-1"/>{car.pricing.outstation.driverAllowance}</span>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">*Toll, parking, and state taxes extra as applicable.</p>
                </TabsContent>
                <TabsContent value="airport" className="mt-6">
                    <h4 className="font-semibold text-lg mb-4">Airport Transfer</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-background rounded-md">
                            <span className="text-muted-foreground">{car.pricing.airport.name}</span>
                            <span className="font-bold flex items-center"><IndianRupee className="h-4 w-4 mr-1"/>{car.pricing.airport.price.toLocaleString()}</span>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">*Includes pickup/drop-off. Parking extra.</p>
                </TabsContent>
              </Tabs>
              <Button asChild size="lg" className="w-full mt-8 transition-transform hover:scale-105">
                <a href={`https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20book%20a%20${encodeURIComponent(car.name)}.`} target="_blank" rel="noopener noreferrer">
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
