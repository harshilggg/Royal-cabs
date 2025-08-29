import type { Car, Testimonial, FAQ } from '@/lib/types';

export const cars: Car[] = [
  {
    id: '1',
    name: 'Maruti Suzuki Dzire',
    slug: 'maruti-suzuki-dzire',
    image: 'https://picsum.photos/600/400',
    capacity: 4,
    baggage: 2,
    description: 'A comfortable and economical choice for city travel and small families. Known for its fuel efficiency and reliability.',
    features: ['Air Conditioning', 'Music System', 'Spacious Legroom'],
    pricing: {
      local: [
        { name: '4-hr/40-km', price: 1200 },
        { name: '8-hr/80-km', price: 2200 },
      ],
      outstation: { perKm: 11, driverAllowance: 300 },
      airport: { name: 'Indore Airport Transfer', price: 800 },
    },
  },
  {
    id: '2',
    name: 'Toyota Innova Crysta',
    slug: 'toyota-innova-crysta',
    image: 'https://picsum.photos/600/400',
    capacity: 6,
    baggage: 5,
    description: 'The perfect MUV for family trips and outstation travel. Offers premium comfort, space, and a powerful engine for a smooth ride.',
    features: ['Air Conditioning', 'Captain Seats', 'Premium Audio', 'Extra Baggage Space'],
    pricing: {
      local: [
        { name: '4-hr/40-km', price: 2000 },
        { name: '8-hr/80-km', price: 3500 },
      ],
      outstation: { perKm: 16, driverAllowance: 400 },
      airport: { name: 'Indore Airport Transfer', price: 1500 },
    },
  },
  {
    id: '3',
    name: 'Honda City',
    slug: 'honda-city',
    image: 'https://picsum.photos/600/400',
    capacity: 4,
    baggage: 3,
    description: 'A stylish and premium sedan for business travel and a comfortable city experience. Features a sunroof and plush interiors.',
    features: ['Air Conditioning', 'Sunroof', 'Leather Seats', 'Bluetooth Connectivity'],
    pricing: {
      local: [
        { name: '4-hr/40-km', price: 1500 },
        { name: '8-hr/80-km', price: 2800 },
      ],
      outstation: { perKm: 14, driverAllowance: 300 },
      airport: { name: 'Indore Airport Transfer', price: 1100 },
    },
  },
    {
    id: '4',
    name: 'Tempo Traveller',
    slug: 'tempo-traveller',
    image: 'https://picsum.photos/600/400',
    capacity: 12,
    baggage: 10,
    description: 'Ideal for large groups, family functions, and corporate outings. Spacious seating and ample luggage space ensure a comfortable journey for everyone.',
    features: ['Air Conditioning', 'Ample Legroom', 'Pushback Seats', 'Music System'],
    pricing: {
      local: [
        { name: '4-hr/40-km', price: 3500 },
        { name: '8-hr/80-km', price: 5500 },
      ],
      outstation: { perKm: 24, driverAllowance: 500 },
      airport: { name: 'Indore Airport Transfer', price: 2800 },
    },
  },
];

export const featuredCars = cars.slice(0, 3);

export const testimonials: Testimonial[] = [
  {
    name: 'Anjali Sharma',
    location: 'Bhopal',
    comment: 'Royal Cabs made our family trip to Ujjain so comfortable. The Innova was spacious and clean, and the driver was very professional. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Indore',
    comment: 'I use Royal Cabs for all my business trips. They are always on time, the cars are impeccable, and the booking process is seamless. Excellent service!',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Priya Verma',
    location: 'Gwalior',
    comment: 'We booked a Tempo Traveller for a weekend getaway. The vehicle was in great condition and our driver, Suresh, was fantastic. Great experience overall.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Vikram Singh',
    location: 'Jabalpur',
    comment: 'Used their airport transfer service. The cab arrived before time and the ride was smooth. Much better than regular airport taxis. Will use again.',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
];

export const faqs: FAQ[] = [
    {
        question: 'What cities do you operate in?',
        answer: 'We are primarily based in major cities of Madhya Pradesh like Indore, Bhopal, Gwalior, and Ujjain. We also provide outstation services to connected states.'
    },
    {
        question: 'How is the outstation fare calculated?',
        answer: 'Outstation fare is calculated based on a per-kilometer rate, plus a daily driver allowance. Minimum charges for a specific number of kilometers per day may apply.'
    },
    {
        question: 'Can I book a cab for a full day?',
        answer: 'Yes, you can book a cab for a full day with our local packages, which typically include 8 hours and 80 kilometers of usage. We also offer custom packages.'
    },
    {
        question: 'Are there any hidden charges?',
        answer: 'No, our pricing is transparent. Toll taxes, parking fees, and state taxes are charged as per actuals and are not included in the fare unless specified.'
    },
    {
        question: 'How do I book a cab?',
        answer: 'You can book a cab by calling us directly, sending a message on WhatsApp, or filling out the quote request form on our website. We will get back to you promptly.'
    }
];

export const CITIES = ['Indore', 'Bhopal', 'Ujjain', 'Gwalior', 'Jabalpur', 'Nagpur', 'Kota'];
