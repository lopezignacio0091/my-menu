import { FieldRenderProps } from 'react-final-form';

export interface RadioButtonFieldProps extends FieldRenderProps<any, HTMLInputElement> {}

export interface RadioButtonOwnProps {
  value: any;
  onChange: (value: any) => void;
  label: string;
  checked: boolean;
  disabled?: boolean;
  size?: string;
  input?: any;
  meta?: any;
  testId?: string;
  isMobile?: boolean;
  status?: string;
}

export type RadioButtonProps = RadioButtonFieldProps | RadioButtonOwnProps;
