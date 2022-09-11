import styled from 'styled-components';

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
