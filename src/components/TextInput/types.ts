import React from "react";
import { FieldRenderProps } from "react-final-form";

export interface TextInputProps extends FieldRenderProps<any, HTMLElement> {
  label: string;
  placeholder?: string;
  value?: string;
  textType?: "text" | "password";
  iconComponent?: React.ReactNode | React.ReactNode[];
  readOnly?: boolean;
  disabled?: boolean;
  showClearIcon?: boolean;
  testId?: string;
  helperText?: string;
  pattern?: string;
  size?: string;
  variant?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onMouseDown?: () => void;
  onBlur?: () => void;
  isMobile?: boolean;
  iconPosition?: IconPosition;
}

export type IconPosition = "right" | "left";
