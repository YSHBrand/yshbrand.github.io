export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  tagline: string;
  image: string;
  isNew?: boolean;
  isLimited?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
}
