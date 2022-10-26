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


export const SidebarContainer = styled.div<{
  isOpen: boolean;
  isMobile: boolean;
}>`
  border-radius: 0px 0px 20px 0px;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.13);
  ${({ isMobile, isOpen }) => css`
    background-color: ${sidebar.background};
    ${isOpen
      ? css`
          height: ${isMobile ? 'calc(100vh - 84px)' : 'calc(100vh - 72px)'};
          padding: 24px 24px 0px 24px;
        `
      : css`
          height: 0;
        `}
    color: ${sidebar.color};
  `}
  transition: all 0.3s;
  position: absolute;
  top: 100%;
  left: 0;
  overflow: hidden;
  min-width: 233px;
`;
