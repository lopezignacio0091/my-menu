import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ReactComponent as PickitLogoMobile } from "../../assets/icons/pickit-logo-mobile.svg";
import { ReactComponent as PickitLogo } from "../../assets/icons/pickit_logo_white.svg";
import BasicIcon from "../BasicIcon/BasicIcon";
import StaticIcon from "../StaticIcon/StaticIcon";
import { disableScrollBody, enableScrollBody } from "../utils/scroll";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import Notifications from "./components/Notifications/Notifications";
import {
  BlurContainer,
  MenuIconContainer,
  MiddleIconContainer,
  NavBarAnchor,
  NavBarContainer,
  NavBarSpacer,
  NotificationContainer,
  SectionContainer,
  UserContainer,
  ArrowContainer
} from "./styles";
import { NavbarProps } from "./types";
import SideBar from './components/SideBar/SideBar';

const NavBar: React.FC<NavbarProps> = ({
  contextMenu,
  isMobile,
  logoOnClick,
  status = "default",
  testId,
  children,
  notifications,
  labelReadAll = "Marcar como leídas",
  labelReadMore = "Leer menos",
  labelReadLess = "Leer más",
  titleEmptyNotification = "No hay notificaciones nuevas.",
  subtitleEmptyNotification = "Cuando sean enviadas podrás visualizarlas aquí.",
  readAll,
  closeOnBlurNotification = true,
}) => {
  const [contextMenuOpen, setContextMenuOpen] = useState<boolean>(false);
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
  const CONTEXT_MENU = "context";
  const SIDEBAR = "sidebar";
  const NOTIFICATION = "notification";

  const handleIsState = useMemo(
    (): boolean => contextMenuOpen || sideBarOpen || notificationOpen,
    [contextMenuOpen, notificationOpen, sideBarOpen]
  );

  useEffect(() => {
    if (handleIsState) {
      disableScrollBody();
    } else {
      enableScrollBody();
    }
  }, [handleIsState]);

  const handleToggle = useCallback(
    (name?: string) => (): void => {
      setContextMenuOpen((value) => (name === CONTEXT_MENU ? !value : false));
      setNotificationOpen((value) => (name === NOTIFICATION ? !value : false));
      setSideBarOpen((value) => (name === SIDEBAR ? !value : false));
    },
    []
  );

  const handleClick = useCallback(() => {
    handleToggle()();
    if (logoOnClick) logoOnClick();
  }, [handleToggle, logoOnClick]);

  const handleIconNotification = useMemo(() => {
    const isRead = notifications?.some((e) => !e?.read);
    return <StaticIcon name={isRead ? "bell_notif" : "bell"} />;
  }, [notifications]);

  return (
    <>
      <BlurContainer onClick={handleToggle()} isStateOpen={handleIsState} />
      <NavBarAnchor>
        <NavBarContainer
          status={status}
          data-testid={testId}
          isMobile={isMobile}
        >
          <MenuIconContainer onClick={handleToggle(SIDEBAR)}>
            <BasicIcon name="menu" color="white" size="large" />
            {!isMobile && <span>MENU</span>}
          </MenuIconContainer>
          <MiddleIconContainer onClick={handleClick}>
            {isMobile ? <PickitLogoMobile /> : <PickitLogo />}
          </MiddleIconContainer>
          <SectionContainer>
            <NotificationContainer onClick={handleToggle(NOTIFICATION)}>
              {notifications && handleIconNotification}
            </NotificationContainer>
            <UserContainer onClick={handleToggle(CONTEXT_MENU)}>
              <StaticIcon name="flag-ar" />
              {!isMobile && (
                <ArrowContainer
                  about="chevron"
                  isOpen={contextMenuOpen}
                  data-testid="chevron-icon-test"
                >
                  <BasicIcon size="small" name="chevron-down" color="white" />
                </ArrowContainer>
              )}
            </UserContainer>
          </SectionContainer>
          <ContextMenu
            isOpen={contextMenuOpen}
            contextMenu={contextMenu}
            onClose={handleToggle(CONTEXT_MENU)}
          />
          <Notifications
            isOpen={notificationOpen}
            onClose={handleToggle(NOTIFICATION)}
            notifications={notifications}
            isMobile={isMobile}
            titleNotifications="Notificaciones"
            labelReadAll={labelReadAll}
            labelReadMore={labelReadMore}
            labelReadLess={labelReadLess}
            titleEmptyNotification={titleEmptyNotification}
            subtitleEmptyNotification={subtitleEmptyNotification}
            readAll={readAll}
            closeOnBlur={closeOnBlurNotification}
          />
        <SideBar  isOpen={sideBarOpen}/>
       
        </NavBarContainer>
      </NavBarAnchor>
      <NavBarSpacer isMobile={isMobile} />
    </>
  );
};

export default NavBar;
