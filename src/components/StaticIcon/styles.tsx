import styled from 'styled-components';

export const SvgContainer = styled.div<{
  size: string;
  clickable: boolean;
}>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;
