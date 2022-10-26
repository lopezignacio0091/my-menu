import { FieldRenderProps } from 'react-final-form';

export interface NumericInputProps extends FieldRenderProps<any, HTMLElement> {
  label: string;
  placeholder?: string;
  value?: string | number;
  readOnly?: boolean;
  disabled?: boolean;
  showClearIcon?: boolean;
  testId?: string;
  helperText?: string;
  size?: string;
  variant?: string;
  negative?: boolean;
  allowDecimal?: boolean;
  leftAddOn?: string;
  rightAddOn?: string;
  maxLength?: number;
  maxDecimal?: number;
  onChange?: (value: string | number) => void;
  onFocus?: () => void;
  onMouseDown?: () => void;
  onBlur?: () => void;
}
