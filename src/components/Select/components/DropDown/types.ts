import React from 'react';
import { HighlightType } from '../../types';

export interface DropdownProps {
  target: string;
  isOpen: boolean;
  targetHeight: number;
  options: any[];
  keyProperty?: string;
  showProperty?: string;
  inputValue?: InputValueType | null | any;
  highlightedIndex: HighlightType;
  highlightedSubString?: string;
  scrollRef?: React.RefObject<HTMLInputElement>;
  overlayPosition?: string;
  isValueObject?: boolean;
  chevronRef: React.MutableRefObject<HTMLDivElement>;
  setHighlightedIndex: (value: HighlightType) => void;
  onSelection: (data: InputValueType) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const OVERLAY_MAX_HEIGHT = 144;

export type InputPositionType = {
  width: number;
  top: number;
  bottom: number;
};

type InputValueType = { from: string; until: string } | string;
