import styled, { css } from 'styled-components';


const sidebar = {
  background: "#FFFFFF",
  color: "#2D2D2D",
  node: {
    color: "#2D2D2D",
    active: "#FF6C0E",
  },
  item: {
    active: "#FF6C0E",
    color: "#2D2D2D",
  },
};


export const NotificationAnchor = styled.div<{ isMobile: boolean; isOpen: boolean }>`
  border-radius: 0px 0px 0px 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  height: calc(100vh - ${({ isMobile }) => (isMobile ? '60px' : '48px')});
  max-height: calc(100vh - ${({ isMobile }) => (isMobile ? '60px' : '48px')});
  overflow: hidden;
  position: absolute;
  right: 0;
  top: ${({ isMobile }) => (isMobile ? '60px' : '48px')};
  transition: all 0.5s;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      max-height: 0;
      transition: all 0.3s;
    `}
`;

export const NotificationContainer = styled.div<{ isMobile: boolean }>`
  background-color: ${sidebar.background};
  height: inherit;
  min-width: ${({ isMobile }) => (isMobile ? '269px' : '371px')};
  overflow-y: hidden;
  position: relative;
  width: auto;
  z-index: 75;
`;

export const NotificationMenuContainer = styled.div`
  height: inherit;
  padding: 24px 26px 0 0;
`;

export const NotificationMenuBoxContainerItem = styled.div<{ isMobile: boolean }>`
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  padding-left: 19px;
  scrollbar-width: none; /* for Firefox */
  ${({ isMobile }) => {
    if (!isMobile) {
      return css`
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background:#bbbbb;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background:#bbbb;
        }
      `;
    }
    return css`
      &::-webkit-scrollbar {
        display: none;
      }
    `;
  }}
`;

export const NotificationMenuBox = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isMobile }) =>
    css`
      height: calc(100vh - ${isMobile ? '60px' : '48px'} - ${isMobile ? '36px' : '84px'});
      padding-top: ${isMobile ? '0' : '24px'};
    `}
`;

export const NotificationMenuBoxItem = styled.div<{ isMobile: boolean }>`
  height: 100%;
  max-width: ${({ isMobile }) => (isMobile ? '255px' : '294px')};
`;

export const FadeNotification = styled.div<{ isMobile: boolean }>`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 1) 100%
  );
  bottom: 0px;
  display: block;
  height: 78px;
  margin: 0 -8px;
  position: absolute;
  width: ${({ isMobile }) => (isMobile ? '100%' : 'calc(100% - 32px)')};
`;

export const NotificationHeader = styled.div<{ isMobile: boolean }>`
  display: flex;
  margin-bottom: 16px;
  ${({ isMobile }) =>
    css`
      flex-direction: ${isMobile ? 'column' : 'row'};
      justify-content: ${isMobile ? 'none' : 'space-between'};
    `}
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const NotificationTitle = styled.div<{ isMobile: boolean }>`
  align-items: center;
  color: ${({ theme }) => theme.gray2D};
  display: flex;
  font-style: normal;
  font-weight: 700;
  padding-left: 27px;
  ${({ isMobile }) =>
    css`
      font-size: ${isMobile ? '14px' : '16px'};
      letter-spacing: ${isMobile ? '0.0025em' : '0.005em'};
      line-height: ${isMobile ? '18px' : '20px'};
    `}
`;

export const NotificationRead = styled.div<{ isMobile: boolean }>`
  align-items: center;
  color: ${({ theme }) => theme.gray80};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.004em;
  line-height: 16px;
  margin-top: ${({ isMobile }) => (isMobile ? '8px' : '0')};
  padding-left: ${({ isMobile }) => (isMobile ? '27px' : '0')};
`;

export const InfoNotificationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const InfoNotificationTitle = styled.div`
  color: #808080;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.0125em;
  line-height: 18px;
  text-align: center;
`;

export const InfoNotificationMessage = styled.div`
  color: #808080;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.0025em;
  line-height: 18px;
  text-align: center;
`;

export const NotificationItemBox = styled.div`
  border-bottom: 1px solid #C4C4C4C0;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-bottom: 8px;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    border-bottom: none;
    margin-bottom: 5px;
  }
`;

export const NotificationItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NotificationItemTitle = styled.div<{ isRead: boolean }>`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.0125em;
  line-height: 18px;
  ${({ isRead }) =>
    css`
      color:  ${isRead ? '#2d2d2d' : '#808080'};
      margin-left: ${isRead ? '3px' : '9px'};
    `}
`;
export const IndicatorItem = styled.div`
  background: ${({ theme }) => theme.blue};
  border-radius: 50%;
  height: 6px;
  margin-top: 6px;
  min-height: 6px;
  min-width: 6px;
  width: 6px;
`;

export const NotificationItemMessage = styled.div<{ isCollapsible: boolean }>`
  color: #2d2d2d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.0025em;
  line-height: 18px;
  margin-left: 9px;
  margin-top: 2px;
  overflow: hidden;
  ${({ isCollapsible }) =>
    css`
      -webkit-box-orient: vertical;
      display: ${isCollapsible ? 'normal' : '-webkit-box'};
      -webkit-line-clamp: 3;
      max-height: ${isCollapsible ? '100%' : '54px'};
      text-overflow: ${isCollapsible ? 'initial' : 'ellipsis'};
      white-space: normal;
    `}
`;

export const NotificationInfoLabel = styled.div`
  align-items: center;
  color: #808080;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.004em;
  line-height: 16px;
  margin-left: 9px;
  margin-top: 4px;
`;

export const NotificationDate = styled.div`
  align-items: center;
  color: #808080;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.004em;
  line-height: 16px;
  margin-left: 9px;
  margin-top: 4px;
`;
