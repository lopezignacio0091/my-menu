import { ContextMenuItem } from './components/ContextMenu/types';
import { NotificationItem } from './components/Notifications/types';

export type NavbarStatusType = 'default' | 'dark';

/**
 * NavbarProps
 * @param isMobile use Mobile o not
 * @param notifications Represent the notifications
 * @param labelReadAll Represent label the button read all
 * @param labelReadMore Represent label read more
 * @param labelReadLess Represent label read less
 * @param titleEmptyNotification Title when empty notifications
 * @param subtitleEmptyNotification Subtitle when empty notifications
 */
export interface NavbarProps {
  contextMenu: ContextMenuItem[];
  logoOnClick?: () => void;
  status?: string;
  testId?: string;
  isMobile?: boolean;
  notifications?: NotificationItem[];
  labelReadAll?: string;
  labelReadMore?: string;
  labelReadLess?: string;
  titleEmptyNotification?: string;
  subtitleEmptyNotification?: string;
  readAll?: (notifications: string[]) => void;
  closeOnBlurNotification?: boolean;
  children?:any;
}
