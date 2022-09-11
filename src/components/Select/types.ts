import { InputProps } from "../Input/types";

export interface SelectProps extends InputProps {
  id?: string;
  options: any[];
  keyProperty?: string;
  showProperty?: string;
  inputValue?: InputValueType | null | any;
  highlightedIndex: HighlightType;
  highlightedSubString?: string;
  isLoading?: boolean;
  isOpen: boolean;
  overlayPosition?: string;
  isValueObject?: boolean;
  setHighlightedIndex: (value: HighlightType) => void;
  onSelection: (data: InputValueType) => void;
  setIsOpen: (isOpen: boolean) => void;
  expand: () => void;
}

export type HighlightType = {
  id: string;
  index: number;
};

type InputValueType = { from: string; until: string } | string;

export enum KEY_CODE {
  Enter = 13,
  ArrowUp = 38,
  ArrowDown = 40,
}
