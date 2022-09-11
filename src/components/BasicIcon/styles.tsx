import styled from 'styled-components';

export const SvgContainer = styled.div<{
  size: string;
  color: string;
  clickable: boolean;
}>`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};

  & > svg path,
  & > svg circle:not([class$='not-color']),
  & > svg rect {
    stroke: ${({ color }) => color};
    stroke-width: 2px;
  }
`;
