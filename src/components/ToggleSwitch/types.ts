
export interface ToggleSwitchProps {
  label?: string;
  value?: boolean;
  input?: any;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  name?: string;
  id?: string;
  labelOn?: string;
  labelOff?: string;
  width?: string;
  dataTestId?: string;
  status?: string;
}
