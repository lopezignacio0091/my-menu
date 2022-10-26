import styled from 'styled-components';

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

export const SidebarItemContainer = styled.div<{ active: boolean }>`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  padding: 8px 0;
  color: ${({ active }) => (active ? sidebar.item.active : sidebar.item.color)};
`;
