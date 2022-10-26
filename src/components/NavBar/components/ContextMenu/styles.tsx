import styled, { css } from 'styled-components';

const contextMenu =  {
  color: '#4D4D4D',
  active: '#0098ff',
}

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

export const ContextMenuContainer = styled.div<{ isOpen: boolean }>`
  width: auto;
  border-radius: 0px 0px 0px 20px;
  position: absolute;
  top: 100%;
  right: 0;
  transition: all 0.5s;
  overflow: hidden;
  z-index: 75;
  min-width: 269px;
  max-height: 100vh;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  background-color: ${sidebar.background};

  ${({ isOpen }) =>
    !isOpen &&
    css`
      transition: all 0.3s;
      max-height: 0;
    `}
`;

export const ContextMenuBox = styled.div`
  padding: 10px;
  height: 100%;
`;

export const ContextInfoBox = styled.div`
  border-bottom: 1px solid;
  display: flex;
  padding: 10px 20px 18px 6px;
  border-color: #cccc;
  color: ${contextMenu.color};
`;

export const ContextInfoContainer = styled.div`
  margin-left: 8px;
`;
export const ContextInfoLabel = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20.08px;
`;
export const ContextInfoSubLabel = styled.div<{ highlighted: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 17.57px;
  ${({ highlighted, theme }) =>
    highlighted &&
    css`
      color: ${contextMenu.active};
    `}
`;

export const ContextItemBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px 8px 10px;
  cursor: pointer;
  margin-top: 6px;
  &:hover {
    * {
      color: ${contextMenu.active};
    }
    & > div svg > path {
      stroke: ${contextMenu.active}};
    }

    path {
      color: ${contextMenu.active};
    }
`;
export const ContextItemLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-left: 8px;
  user-select: none;
  color: ${contextMenu.color};
`;
