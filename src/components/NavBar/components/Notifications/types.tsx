/**
 * NotificationProps
 * @param isOpen open o not
 * @param titleNotifications title notifications
 * @param isMobile use Mobile o not
 * @param notifications Represent the notifications
 * @param labelReadAll Represent label the button read all
 * @param labelReadMore Represent label read more
 * @param labelReadLess Represent label read less
 * @param titleEmptyNotification Title when empty notifications
 * @param subtitleEmptyNotification Subtitle when empty notifications
 */
export interface NotificationProps {
  onClose: () => void;
  isOpen: boolean;
  titleNotifications: string;
  readAll?: (notifications: string[]) => void;
  testId?: string;
  notifications: NotificationItem[];
  isMobile?: boolean;
  labelReadAll?: string;
  labelReadMore?: string;
  labelReadLess?: string;
  titleEmptyNotification?: string;
  subtitleEmptyNotification?: string;
  closeOnBlur?: boolean;
}

export interface NotificationItem {
  read: boolean;
  title: string;
  content: string;
  uuid: string;
  sendDate: string;
}
