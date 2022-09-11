import { FieldRenderProps } from 'react-final-form';

export interface TextAreaInputProps extends FieldRenderProps<any, HTMLElement> {
  id?: string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  theme?: string;
  testId?: string;
  helperText?: string;
  pattern?: string;
  rows?: number;
  maxLength?: number;
  maxLengthMessage?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onMouseDown?: () => void;
  onBlur?: () => void;
  isMobile?:boolean;
}
