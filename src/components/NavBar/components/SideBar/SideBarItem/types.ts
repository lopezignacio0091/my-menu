

export interface SideBarItemProps {
  testId?: string;
  label: string;
  path?: string;
  history?: History;
  action?: () => void;
  onClose?: () => void;
  selectNode?: () => void;
  opened?: boolean;
}
