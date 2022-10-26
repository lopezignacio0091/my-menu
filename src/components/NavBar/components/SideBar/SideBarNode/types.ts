import { Icons } from "../../../../BasicIcon/types";

export interface SideBarNodeProps {
  opened?: boolean;
  isSelected?: boolean;
  content: SideBarContent | any;
  toggleNode?: () => void;
  action?: () => void;
  path?: string;
  iconName: Icons | any;
  testId?: string;
  onClose?: () => void;
  selectNode?: () => void;
  children?: any;
  history?: History;
  name?:string,
}

export interface SideBarContent {
  label: string;
  path: string;
  iconame: Icons | any;
}
