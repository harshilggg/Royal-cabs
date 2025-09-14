
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Wallet, ShieldCheck, Star, Award, UserCheck } from 'lucide-react';
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
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { useTranslations } from 'next-intl';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = useTranslations('home');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          aria-label="Promotional video of a car driving through scenic landscapes"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg font-headline animate-fadeInUp" style={{animationDelay: '0.2s', animationFillMode: 'backwards'}}>
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200 drop-shadow-md animate-fadeInUp" style={{animationDelay: '0.4s', animationFillMode: 'backwards'}}>
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md animate-fadeInUp" style={{animationDelay: '0.6s', animationFillMode: 'backwards'}}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
              <Link href="/cars">
                {t('hero.bookRide')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-lg transition-transform hover:scale-105">
              <Link href="/contact">{t('hero.contactNow')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Image 
                src="/icons/royal.png" 
                alt="Royal Cabs Logo" 
                width={80} 
                height={80} 
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t('whyChooseUs.title')}</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('whyChooseUs.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-background/70 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('whyChooseUs.safety.title')}</h3>
                <p className="text-muted-foreground">{t('whyChooseUs.safety.description')}</p>
              </div>
              <div className="text-center p-6 bg-background/70 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                  <Wallet className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('whyChooseUs.pricing.title')}</h3>
                <p className="text-muted-foreground">{t('whyChooseUs.pricing.description')}</p>
              </div>
              <div className="text-center p-6 bg-background/70 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('whyChooseUs.experience.title')}</h3>
                <p className="text-muted-foreground">{t('whyChooseUs.experience.description')}</p>
              </div>
              <div className="text-center p-6 bg-background/70 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                  <UserCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('whyChooseUs.comfort.title')}</h3>
                <p className="text-muted-foreground">{t('whyChooseUs.comfort.description')}</p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Our Fleet Section */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Image 
                src="/icons/royal.png" 
                alt="Royal Cabs Logo" 
                width={80} 
                height={80} 
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t('ourFleet.title')}</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('ourFleet.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                <Link href="/cars">
                  {t('ourFleet.viewAll')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Testimonials Section */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Image 
                src="/icons/royal.png" 
                alt="Royal Cabs Logo" 
                width={80} 
                height={80} 
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t('testimonials.title')}</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('testimonials.subtitle')}
              </p>
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto"
              aria-label="Customer Testimonials"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                    <div className="p-4 h-full">
                      <Card className="h-full flex flex-col justify-between shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-background/70">
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
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" aria-label="Star rating" />)}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      </AnimateOnScroll>

      {/* FAQ Section */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <Image 
                src="/icons/royal.png" 
                alt="Royal Cabs Logo" 
                width={80} 
                height={80} 
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t('faq.title')}</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                {t('faq.subtitle')}
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-lg text-left">{`${index + 1}. ${faq.question}`}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
