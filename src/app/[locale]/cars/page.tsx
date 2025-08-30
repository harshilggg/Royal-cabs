
import { CarCard } from '@/components/CarCard';
import { cars } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fleet - Royal Cabs',
  description: 'Explore our wide range of cars available for booking in Madhya Pradesh. From sedans to SUVs, we have a vehicle for every need.',
};

export default function CarsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Esteemed Fleet</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Find the perfect ride for your journey. We offer a diverse selection of clean, well-maintained, and comfortable vehicles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
