
import type { Car, Testimonial, FAQ } from '@/lib/types';

export const cars: Car[] = [
  {
    id: '7',
    name: 'Innova',
    slug: 'innova',
    images: ['/inova.jpg'],
    capacity: '7+1',
    baggage: 5,
    type: 'SUV',
    description: 'A highly popular and reliable choice for outstation travel, offering premium comfort and space for 7 passengers plus a driver.',
    features: ['Air Conditioning', 'Premium Audio', 'Extra Baggage Space'],
    tag: 'Most Popular',
  },
  {
    id: '3',
    name: 'Toyota Innova Crysta',
    slug: 'toyota-innova-crysta',
    images: ['/cryta.jpg'],
    capacity: '7+1',
    baggage: 5,
    type: 'SUV',
    description: 'The perfect MUV for family trips and outstation travel, seating 7 passengers plus a driver. Offers premium comfort and space.',
    features: ['Air Conditioning', 'Captain Seats', 'Premium Audio', 'Extra Baggage Space'],
  },
  {
    id: '1',
    name: 'Maruti Suzuki Dzire',
    slug: 'maruti-suzuki-dzire',
    images: ['/dzire.jpg'],
    capacity: '4+1',
    baggage: 2,
    type: 'Sedan',
    description: 'A comfortable and economical choice for city travel and small families. Perfect for 4 passengers plus a driver.',
    features: ['Air Conditioning', 'Music System', 'Spacious Legroom'],
  },
  {
    id: '2',
    name: 'Kia Carens',
    slug: 'kia-carens',
    images: ['/kia.jpg', '/kia1.jpg'],
    capacity: '7+1',
    baggage: 4,
    type: 'SUV',
    description: 'A stylish and modern SUV with flexible seating for 7 passengers plus a driver, perfect for families who need extra space and comfort.',
    features: ['Air Conditioning', 'Premium Audio', 'Sunroof', 'Spacious Interior'],
  },
  {
    id: '4',
    name: 'Tempo / Traveller',
    slug: 'tempo-traveller',
    images: ['/tourist.jpg'],
    capacity: '12+1',
    baggage: 10,
    type: 'Van',
    description: 'Ideal for large groups and family functions, accommodating 12 passengers plus a driver. Ensures a comfortable journey for everyone.',
    features: ['Air Conditioning', 'Ample Legroom', 'Pushback Seats', 'Music System'],
  },
  {
    id: '5',
    name: 'Force Urbania',
    slug: 'force-urbania',
    images: ['/urbania.jpg'],
    capacity: '17+1',
    baggage: 15,
    type: 'Van',
    description: 'A premium and spacious van for larger groups of 17 plus a driver, seeking extra comfort and a touch of luxury on their travels.',
    features: ['Air Conditioning', 'Reclining Seats', 'LED Lights', 'Ample Space'],
  },
  {
    id: '6',
    name: 'Bus',
    slug: 'bus',
    images: ['/bus.jpg', '/bus1.jpg'],
    capacity: '24+1',
    baggage: 20,
    type: 'Bus',
    description: 'For very large groups, corporate events, or wedding parties. This 24+1 seater bus provides maximum capacity without sacrificing comfort.',
    features: ['Air Conditioning', 'Spacious Seating', 'Luggage Carrier', 'Sound System'],
  },
];

export const featuredCars = cars.slice(0, 3);

export const testimonials: Testimonial[] = [
  {
    name: 'Anjali Sharma',
    location: 'Bhopal',
    comment: 'Royal Cabs made our family trip to Ujjain from Jabalpur so comfortable. The Innova was spacious and clean, and the driver was very professional. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Indore',
    comment: 'I use Royal Cabs for all my business trips in and around Jabalpur. They are always on time, the cars are impeccable, and the booking process is seamless.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Priya Verma',
    location: 'Sagar',
    comment: 'We booked a Tempo Traveller for a weekend getaway. The vehicle was in great condition and our driver, Suresh, was fantastic. Great experience overall.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Vikram Singh',
    location: 'Jabalpur',
    comment: 'Used their airport transfer service from my home in Jabalpur. The cab arrived before time and the ride was smooth. Much better than regular airport taxis. Will use again.',
    avatar: 'https://i.prav-atar.cc/150?img=7',
  },
];

export const faqs: FAQ[] = [
    {
        question: 'What cities do you operate in?',
        answer: 'We are primarily based in Jabalpur and serve all major cities in Madhya Pradesh like Indore, Bhopal, Gwalior, and Ujjain. We also provide outstation services to connected states.'
    },
    {
        question: 'How is the outstation fare calculated?',
        answer: 'Outstation fare is calculated based on a per-kilometer rate, plus a daily driver allowance. A minimum of 250-300 km is typically charged per day, depending on the route. Prices may vary based on vehicle type.'
    },
    {
        question: 'Who pays for toll, parking, and state taxes?',
        answer: 'Toll taxes, parking fees, and any state or border taxes are to be paid by the customer. These are charged based on actual receipts provided by the driver at the end of the trip.'
    },
    {
        question: 'Can I book a cab for a full day?',
        answer: 'Yes, you can book a cab for a full day with our local packages, which typically include 8 hours and 80 kilometers of usage. We also offer custom packages to suit your needs.'
    },
    {
        question: 'How do I book a cab?',
        answer: 'You can book a cab by calling or sending a message on WhatsApp to +91 79991 14272. You can also fill out the quote request form on our website, and we will get back to you promptly.'
    }
];

export const CITIES = ['Jabalpur', 'Indore', 'Bhopal', 'Ujjain', 'Gwalior', 'Nagpur', 'Kota'];
