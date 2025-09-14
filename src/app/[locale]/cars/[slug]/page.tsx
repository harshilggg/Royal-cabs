
import { notFound } from 'next/navigation';
import { cars } from '@/lib/data';
import { CarDetailClient } from '@/components/CarDetailClient';

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = cars.find((c) => c.slug === params.slug);

  if (!car) {
    notFound();
  }

  return <CarDetailClient car={car} />;
}

// generateStaticParams is used for statically generating the routes
export async function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}
