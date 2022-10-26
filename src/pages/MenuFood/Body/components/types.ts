export interface CardMenuProps {
  card: Card;
}

export interface Card {
  name: string;
  price: number;
  id: number;
  description?: string;
  type: string;
  link: string;
}
