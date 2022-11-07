export interface SnackBarProps {
  status: StatusSnack ;
  message: string;
  onClose?: () => void;
  open:boolean;
}

export type StatusSnack = "SUCCES" | "ERROR" | "WARNING";
