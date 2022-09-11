import React from "react";
import { FieldRenderProps } from "react-final-form";

export interface InputProps extends FieldRenderProps<any, HTMLInputElement> {
  id?: string;
  value?: any;
  label: string;
  placeholder?: string;
  size?: string;
  variant?: string;
  leftAddOn?: React.ReactNode | React.ReactNode[];
  rightAddOn?: React.ReactNode | React.ReactNode[];
  type?: "text" | "password";
  readOnly?: boolean;
  typingAllowed?: boolean; // Datepicker o Select
  disabled?: boolean;
  testId?: string;
  isOpen?: boolean; // Datepicker o Select
  showClearIcon?: boolean;
  helperText?: string;
  pointer?: boolean;
  maxLength?: number;
  onChange?: (value: string | number) => void;
  onClear?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onMouseDown?: () => void;
  isMobile: boolean;
}
