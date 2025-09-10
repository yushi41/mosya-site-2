
export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  soldOut?: boolean;
}

export interface Category {
  id: number;
  name: string;
  subName?: string;
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  imageUrl: string;
}

export interface InformationItem {
  id: number;
  date: string;
  tag: string;
  title: string;
}
