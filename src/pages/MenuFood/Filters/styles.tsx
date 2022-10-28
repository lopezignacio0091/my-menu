import styled, { css } from "styled-components";

export const Container = styled.div`
  transition: box-shadow 300ms cubic-bezier(0.4, 0.4, 0.2, 1) 0ms;
  box-shadow: 0 0 16px 2px;
  background-image: none;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 1020px;
  z-index: 2;
  left: 0px;
  width: 280px;
  background-color: #e5e6e8;
  transition: all 0.5s;
  flex-shrink: 0;
`;

export const Section = styled.div`
  margin-top: 2rem;
  padding: 0 0.5rem 0.5rem 0;
`;

export const Title = styled.h4`
  color: #436560;
  font-family: "Helvetica";
  font-size: 52px;
  font-weight: 900;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const SectionTop = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const Category = styled.h4`
  color: #4e6560;
  font-family: "Helvetica";
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;

export const Prices = styled(Category)`
  margin-top: 1rem;
`;

export const Divider = styled.div`
  margin: 24px 8px;
  flex-shrink: 0;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: #4e6560;
`;
export const SectionContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const SectionFilter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  justify-content: space-between;
`;

export const Label = styled.div`
  color: #2d2d2d;
  font-family: "Helvetica";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  text-transform: uppercase;
`;

export const Input = styled.input<{ checked: boolean }>`
  height: 20px;
  width: 20px;
  border: 1px solid;

  &:disabled {
    cursor: default;
    color: #cccc;
  }
  ${({ checked }) =>
    checked
      ? css`
          &:disabled {
            border-color: #cccc;
            background-color: #cccc;
            cursor: default;
          }
          & {
            display: block;
          }
          &:checked {
            color: red;
            background-color: green;
          }
        `
      : css`
          & svg {
            opacity: 0;
          }
          &:disabled {
            background-color: #ffff;
            border-color: #cccc;
            cursor: default;
          }
        `}
`;
