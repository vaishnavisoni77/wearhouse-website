export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  category?: string;
  stock?: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
