export interface Car {
  id: string;
  name: string;
  slug: string;
  image: string;
  capacity: number;
  baggage: number;
  pricing: {
    local: {
      name: string;
      price: number;
    }[];
    outstation: {
      perKm: number;
      driverAllowance: number;
    };
    airport: {
      name: string;
      price: number;
    };
  };
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
