export interface Product {
  id?: number;
  title?: string;
  price?: any;
  description?: string;
  category?: string;
  images?: string[];
  rating?:number;
  thumbnail?:string;
  brand?:string;
  discountPercentage?:number;
}

export interface Rating {
  rate?: number;
  count?: number;
}

export interface Products{
    products:Product[];
}