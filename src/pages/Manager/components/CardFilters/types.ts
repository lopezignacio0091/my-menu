export interface CardFilterProps {
  cards: CardProp[];
  handleAction: (name:string)=>void
}

export interface CardProp {
  count: number;
  title: string;
  url: string;
  filter:string;
}
