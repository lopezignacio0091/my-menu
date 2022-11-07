export interface CardMenuProps {
  card: Card;
  addCard: (menu: any) => void;
}

export interface Card {
  name: string;
  price: number;
  id: number;
  description?: string;
  type: string;
  link: string;
}
