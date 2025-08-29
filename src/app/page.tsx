import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Car, Clock, MapPin, ShieldCheck, Star, ThumbsUp, Wallet, Award } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { featuredCars, faqs, testimonials } from '@/lib/data';
import { CarCard } from '@/components/CarCard';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Royal Cabs taxi driving on a scenic road"
          data-ai-hint="luxury car front"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg font-headline">
            Where Luxury Meets Budget
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200 drop-shadow-md">
            Experience premium taxi services across Madhya Pradesh. Unmatched comfort, reliability, and style for over 23 years.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105 flex-1">
              <Link href="/cars">
                Book Your Ride <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-lg transition-transform hover:scale-105 flex-1">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Ride with Royal Cabs?</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing a superior travel experience with every ride.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-muted-foreground">Verified drivers and well-maintained cars to ensure your peace of mind.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <Wallet className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">No hidden charges. See the rates for your trip upfront.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">23+ Years of Service</h3>
              <p className="text-muted-foreground">Proudly serving Madhya Pradesh with reliable transport for over two decades.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Top-Notch Comfort</h3>
              <p className="text-muted-foreground">Clean, comfortable, and air-conditioned vehicles for a pleasant journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Explore Our Fleet</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse range of vehicles to suit every need and occasion, from solo trips to large group travel.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/cars">
                View All Cars <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Customers Say</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              We take pride in our service, and our clients' feedback speaks for itself.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-4 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                        <div className="flex mt-4 text-accent">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Have questions? We have answers.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
