import styled, { css } from 'styled-components';



export const NavBarAnchor = styled.div`
  position: fixed;
  width: 100%;
  z-index: 75;
`;


export const ArrowContainer = styled.div<{
  isOpen: boolean;
  disabled?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transform-origin: center;
  transition: transform 0.35s;

  & > * {
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  }
`;


export const NavBarContainer = styled.div<{
  status: string;
  isMobile: boolean;
}>`
  align-items: center;
  ${({ theme, status, isMobile }) => css`
    background: #4e6560;
    height: ${isMobile ? '60px' : '52px'};
    padding: 0 20px;
  `}
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 75;
`;

export const NavBarSpacer = styled.div<{
  isMobile: boolean;
}>`
  ${({ isMobile }) => css`
    height: ${isMobile ? '60px' : '48px'};
  `}
`;

export const MenuIconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  gap: 8px;
  line-height: 18px;
`;

export const MiddleIconContainer = styled.div<{ onClick?: () => void }>`
  align-items: center;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  display: flex;
`;
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NotificationContainer = styled.div`
  align-items: center;
  display: flex;
  & > div {
    cursor: pointer;
    margin-left: 8px;
  }
`;

export const UserContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  & > div {
    margin-left: 8px;
  }
`;

export const BlurContainer = styled.div<{
  isStateOpen: boolean;
}>`
  height: 100vh;
  position: fixed;
  top: 0;
  transition: all 0.2s;
  width: 100vw;
  z-index: -1;
  ${({ isStateOpen }) =>
    isStateOpen &&
    css`
      backdrop-filter: blur(4px);
      background: rgba(45, 45, 45, 0.3);
      z-index: 75;
    `}
`;
