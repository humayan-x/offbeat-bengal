export interface Place {
  slug: string;
  title: string;
  district: string;
  category: string;
  altitudeFeet: number;
  bestSeason: string;
  nearestHub: {
    name: string;
    distanceKm: number;
  };
  usp: string;
  about: string;
  foodAndShopping: {
    eat: string[];
    buy: string[];
    note: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  idealDays: string;
  network: {
    jio: string;
    airtel: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
}
