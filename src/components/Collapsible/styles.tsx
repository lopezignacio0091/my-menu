import styled, { css } from 'styled-components';

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

export const CollapsibleTrigger = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  & > div:first-child {
    width: 100%;
  }
`;

export const CollapsibleContent = styled.div<{
  isClosed: boolean;
  transitioning: boolean;
}>`
  display: flex;
  flex-direction: column;
  clear: both;
  transition: height 350ms ease;

  ${({ isClosed }) =>
    isClosed &&
    css`
      display: none;
    `};

  ${({ transitioning }) =>
    transitioning &&
    css`
      overflow: hidden;
    `};
`;
