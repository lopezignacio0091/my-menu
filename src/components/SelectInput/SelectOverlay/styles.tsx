import styled, { css } from 'styled-components';
import { OVERLAY_MAX_HEIGHT } from './types';

export const Dropdown = styled.div<{
  isVisible: boolean;
  top: number;
  width: number;
}>`
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  min-width: ${({ width }) => (Number.isNaN(width) ? 0 : width)}px;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  display: grid;
  box-shadow: 0px 1px 12px rgba(45, 45, 45, 0.25);
  grid-template-columns: 1fr;
  margin-top: 3px;
  padding: 8px;
  user-select: none;
  z-index: 4;
  position: absolute;
  top: ${({ top }) => (Number.isNaN(top) ? 0 : top)}px;
  right: 0;
  max-height: ${OVERLAY_MAX_HEIGHT}px;
  overflow-y: auto;
  ${({ isVisible }) =>
    isVisible
      ? css`
          opacity: 1;
          display: grid;
        `
      : css`
          opacity: 0;
          display: none;
        `}
`;

export const DropdownWrapper = styled.div`
  max-height: ${OVERLAY_MAX_HEIGHT - 16}px;
  overflow-y: auto;
  padding-right: 8px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.grayB8};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.grayB8};
  }
`;

export const DropdownRow = styled.div<{
  isActive: boolean;
  width: number;
}>`
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  cursor: pointer;
  text-transform: capitalize;
  font-family: 'Mulish', sans-serif;
  &:hover {
    background: ${({ theme }) => theme.grayF0};
    border-radius: 10px;
  }
  font-size: 16px;
  white-space: nowrap;
  display: inline-flex;
  width: ${({ width }) => (Number.isNaN(width) ? '100%' : width - 60)}px;
  text-overflow: ellipsis !important;
  overflow: hidden;

  ${({ isActive }) =>
    isActive
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `}
  color: ${({ theme }) => theme.gray2D};
`;
