export interface Root {
  products: Product[];
}

export interface Product {
  value: any;
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
