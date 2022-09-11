import { MouseEvent as ReactMouseEvent } from "react";
import { Icons } from "../BasicIcon/types";

export type ButtonIconPosition = "left" | "right";
export type ButtonHierarchy = "primary" | "secondary" | "tertiary" | "minimal";

export interface ButtonProps {
  label?: string;
  onClick?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: "button" | "submit";
  status?: string;
  hierarchy?: ButtonHierarchy;
  size?: string;
  isSubmitting?: boolean;
  disabled?: boolean;
  dataTestIdButton?: string;
  iconName?: Icons;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  circle?:boolean;
}
