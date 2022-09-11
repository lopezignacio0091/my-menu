import { FieldRenderProps } from "react-final-form";

export interface GenericResponse {
  result: any;
}

export interface SelectInputProps
  extends FieldRenderProps<any, HTMLInputElement> {
  keyProperty?: string;
  showProperty?: string;
  label: string;
  placeholder?: string;
  options: any[];
  readOnly?: boolean;
  disabled?: boolean;
  testId?: string;
  size?: string;
  variant?: string;
  helperText?: string;
  isLoading?: boolean;
  showClearIcon?: boolean;
  isValueObject?: boolean;
  overlayPosition?: string;
  onChange?: (value: any) => void;
  onFocus?: () => void;
  onMouseDown?: () => void;
  onBlur?: () => void;
}
