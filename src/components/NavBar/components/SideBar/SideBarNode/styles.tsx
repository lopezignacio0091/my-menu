import styled, { css } from "styled-components";

const sidebar = {
  background: "#FFFFFF",
  color: "#334242",
  node: {
    color: "#334242",
    active: "#e29a5b",
  },
  item: {
    active: "#e29a5b",
    color: "#334242",
  },
};

export const SidebarNodeContainer = styled.div`
  margin-bottom: 6px;
`;

export const SidebarNodeBox = styled.div`
  padding: 12px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SibebarNodeLabel = styled.div<{
  active: boolean;
  opened: boolean;
}>`
  font-style: normal;
  font-size: 16px;
  flex: 1;
  line-height: 20px;
  margin-left: 8px;

  ${({  active, opened }) => css`
    color: ${active ? sidebar.node.active : sidebar.node.color};
    font-weight: ${active || opened ? "bold" : "normal"};
  `}
`;

export const SibebarNodeContent = styled.div<{
  opened: boolean;
  maxHeight: number;
}>`
  padding-left: 29px;
  height: ${({ maxHeight }) => maxHeight}px;
  transition: all 0.3s;
  overflow: hidden;

  ${({ opened }) =>
    !opened &&
    css`
      transition: all 0.3s;
      height: 0;
    `}
`;

export const IconContainer = styled.div<{ isOpen: boolean }>`
  transform-origin: center;
  transition: transform 0.35s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
