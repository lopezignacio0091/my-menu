export interface CardPromotionProps {
  product: ProductPromotion;
  key: number;
}

export interface ProductPromotion {
  id: number;
  link: string;
  title: string;
  price: number;
  discount: boolean;
  rating: number;
}
