export interface SelectOverlayProps {
  target: string;
  isOpen: boolean;
  targetHeight: number;
  options: any[];
  keyProperty?: string;
  showProperty?: string;
  inputValue?: InputValueType | null | any;
  onSelection: (data: InputValueType) => void;
  setIsOpen: (isOpen: boolean) => void;
  isMobile:boolean;
}

export const OVERLAY_MAX_HEIGHT = 144;

export enum ClickType {
  FirstClick = 0,
  SecondClick,
  OtherClick,
}

export type InputPositionType = {
  width: number;
  top: number;
  bottom: number;
};

type InputValueType = { from: string; until: string } | string;
