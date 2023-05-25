export interface Root {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  details: Details;
}

export interface Details {
  brand: string;
  model: string;
  color: string;
  weight: string;
}
