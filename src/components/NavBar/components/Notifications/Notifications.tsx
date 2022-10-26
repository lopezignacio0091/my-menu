import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import moment from "moment";
import { NotificationProps, NotificationItem } from "./types";
import {
  FadeNotification,
  Icon,
  IndicatorItem,
  InfoNotificationContainer,
  InfoNotificationMessage,
  InfoNotificationTitle,
  NotificationAnchor,
  NotificationContainer,
  NotificationDate,
  NotificationHeader,
  NotificationInfoLabel,
  NotificationItemBox,
  NotificationItemContainer,
  NotificationItemMessage,
  NotificationItemTitle,
  NotificationMenuBox,
  NotificationMenuBoxContainerItem,
  NotificationMenuBoxItem,
  NotificationMenuContainer,
  NotificationRead,
  NotificationTitle,
} from "./styles";
import BasicIcon from "../../../BasicIcon/BasicIcon";

const Notifications: React.FC<NotificationProps> = ({
  isOpen,
  titleNotifications,
  readAll,
  notifications,
  testId,
  isMobile,
  labelReadAll,
  labelReadMore,
  labelReadLess,
  titleEmptyNotification,
  subtitleEmptyNotification,
  onClose,
  closeOnBlur = true,
}) => {
  const [openNode, setOpenNode] = useState(null);
  const [isLast, setLast] = useState<boolean>(false);
  const refContainer = useRef(null);

  const COUNT_MAX_CHARACTERS = 130;
  const DATE_FORMAT = "YYYY-MM-DDThh:mm:ss.SSS";
  const REGEX_TAG = useMemo(() => /(<([^>]+)>)/gi, []);

  const handleViewMore = useCallback(
    (id: string): string => (openNode === id ? labelReadMore : labelReadLess),
    [labelReadLess, labelReadMore, openNode]
  );

  const handleNumbersCharacters = useCallback(
    (content: string): boolean =>
      content?.replace(REGEX_TAG, "").length > COUNT_MAX_CHARACTERS,
    [REGEX_TAG]
  );

  const handleView = useCallback(
    (id: string) => (): void =>
      setOpenNode((value: any) => (value === id ? null : id)),
    []
  );

  const isValidElement = useCallback(
    (id: string): boolean => id === openNode,
    [openNode]
  );
  const handleMarkAsRead = useMemo(
    (): boolean => notifications?.some((e) => !e?.read),
    [notifications]
  );

  const handleIsNotifications = useMemo(
    (): boolean => !notifications?.length,
    [notifications?.length]
  );

  const handleLastScroll = useCallback(() => {
    setLast(
      refContainer?.current?.scrollHeight - refContainer?.current?.scrollTop ===
        refContainer?.current?.clientHeight
    );
  }, []);

  const handleCalculateDateMin = useCallback((date: string): number => {
    const now = moment();
    const notif = moment(date, DATE_FORMAT);
    const diff = moment.duration(now.diff(notif));
    return Math.floor(diff.asMinutes());
  }, []);

  const stopPropagation = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation(),
    []
  );

  const handleDate = useCallback(
    (date: string): string => {
      const diff = handleCalculateDateMin(date);
      // less than 60 minutes
      if (diff < 60) return `${diff} min`;
      // less than 24 hs
      if (diff < 1440) return `${Math.floor(diff / 60)} h`;
      // less than 48 hs
      if (diff < 2880) return `Ayer`;
      // less than 7 days
      if (diff < 10080) return `${Math.floor(diff / 1440)} d`;
      // less than 14 days
      if (diff < 20160) return `1 sem`;
      // less than 21 days
      if (diff < 30240) return `2 sem`;
      return `3 sem`;
    },
    [handleCalculateDateMin]
  );

  const handleReadAll = useCallback(
    () =>
      readAll(
        notifications
          .filter((notif: NotificationItem) => !notif.read)
          .map((notif: NotificationItem) => notif.uuid)
      ),
    [notifications, readAll]
  );

  const handleMessage = useCallback(
    (content: string) => ({
      __html: content,
    }),
    []
  );

  const renderContent = useCallback(
    ({ title, uuid, read, content, sendDate }: NotificationItem) => (
      <NotificationItemBox key={uuid}>
        <NotificationItemContainer>
          {!read && <IndicatorItem />}
          <NotificationItemTitle isRead={!read}>{title}</NotificationItemTitle>
        </NotificationItemContainer>
        <NotificationItemMessage
          isCollapsible={isValidElement(uuid)}
          dangerouslySetInnerHTML={handleMessage(content)}
        />
        {handleNumbersCharacters(content) && (
          <NotificationInfoLabel onClick={handleView(uuid)}>
            {handleViewMore(uuid)}
          </NotificationInfoLabel>
        )}
        <NotificationDate>{handleDate(sendDate)}</NotificationDate>
      </NotificationItemBox>
    ),
    [
      isValidElement,
      handleMessage,
      handleNumbersCharacters,
      handleView,
      handleViewMore,
      handleDate,
    ]
  );

  return (
    <NotificationAnchor
      isMobile={isMobile}
      isOpen={isOpen}
      data-testid={testId}
      onClick={closeOnBlur ? onClose : null}
    >
      <NotificationContainer isMobile={isMobile} onClick={stopPropagation}>
        <NotificationMenuContainer>
          {!isMobile && (
            <Icon>
              <BasicIcon
                onClick={onClose}
                name="search"
                size={isMobile ? "small" : "medium"}
              />
            </Icon>
          )}

          <NotificationMenuBox isMobile={isMobile}>
            <NotificationHeader isMobile={isMobile}>
              <NotificationTitle isMobile={isMobile}>
                {titleNotifications}
              </NotificationTitle>
              {handleMarkAsRead && (
                <NotificationRead isMobile={isMobile} onClick={handleReadAll}>
                  {labelReadAll}
                </NotificationRead>
              )}
            </NotificationHeader>
            {handleIsNotifications ? (
              <InfoNotificationContainer>
                <InfoNotificationTitle>
                  {titleEmptyNotification}
                </InfoNotificationTitle>
                <InfoNotificationMessage>
                  {subtitleEmptyNotification}
                </InfoNotificationMessage>
              </InfoNotificationContainer>
            ) : (
              <NotificationMenuBoxContainerItem
                isMobile={isMobile}
                ref={refContainer}
                onScroll={handleLastScroll}
              >
                <NotificationMenuBoxItem isMobile={isMobile}>
                  {notifications?.map((notification: NotificationItem) =>
                    renderContent(notification)
                  )}
                </NotificationMenuBoxItem>
              </NotificationMenuBoxContainerItem>
            )}
          </NotificationMenuBox>
        </NotificationMenuContainer>
        {!isLast && isOpen && <FadeNotification isMobile={isMobile} />}
      </NotificationContainer>
    </NotificationAnchor>
  );
};
export default Notifications;
