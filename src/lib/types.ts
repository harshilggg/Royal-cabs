export interface Car {
  id: string;
  name: string;
  slug: string;
  image: string;
  capacity: number;
  baggage: number;
  type: 'Sedan' | 'SUV' | 'Van' | 'Hatchback';
  description: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  comment: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
