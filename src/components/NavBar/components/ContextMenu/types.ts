import { MouseEventHandler } from 'react';
import { Icons } from '../../../BasicIcon/types';

export interface ContextMenuProps {
  contextMenu: ContextMenuItem[];
  isOpen: boolean;
  testId?: string;
  userData?: UserInfoItem;
  onClose: () => void;
}

export interface ContextMenuItem {
  iconName: Icons;
  label: string;
  highlighted?: boolean;
  hidden?: boolean;
  subLabel?: string;
  action: MouseEventHandler<HTMLDivElement>;
}

export interface UserInfoItem {
  name: string;
  email: string;
}
