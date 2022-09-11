import styled, { css } from 'styled-components';
import { OVERLAY_MAX_HEIGHT } from './types';

export const DropdownContainer = styled.div<{
  isVisible: boolean;
  top: number;
  width: number;
}>`
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 1px 12px rgba(45, 45, 45, 0.25);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3px;
  max-height: ${OVERLAY_MAX_HEIGHT}px;
  min-width: ${({ width }) => (Number.isNaN(width) ? 0 : width)}px;
  overflow-y: auto;
  padding: 8px;
  position: absolute;
  right: 0;
  top: ${({ top }) => (Number.isNaN(top) ? 0 : top)}px;
  user-select: none;
  z-index: 4;
  ${({ isVisible }) =>
    isVisible
      ? css`
          display: grid;
          opacity: 1;
        `
      : css`
          display: none;
          opacity: 0;
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
  isHighlighted: boolean;
}>`
  align-items: center;
  color: ${({ theme }) => theme.gray2D};
  cursor: pointer;
  display: flex;
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  height: 32px;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0 12px;
  & :first-child {
    text-transform: capitalize;
  }
  &:hover {
    background: ${({ theme }) => theme.grayF0};
    border-radius: 10px;
  }
  white-space: nowrap;

  ${({ isHighlighted }) =>
    isHighlighted
      ? css`
          background: ${({ theme }) => theme.grayF0};
          border-radius: 10px;
        `
      : ''}

  ${({ isActive }) =>
    isActive
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `}
`;
