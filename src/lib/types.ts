export interface Car {
  id: string;
  name: string;
  slug: string;
  images: string[];
  capacity: string;
  baggage: number;
  type: 'Sedan' | 'SUV' | 'Van' | 'Hatchback' | 'Bus';
  description: string;
  features: string[];
  tag?: string;
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

export interface Place {
  name: string;
  image: string;
  mapLink: string;
  description: string;
}
