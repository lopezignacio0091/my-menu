import styled, { css } from "styled-components";

export const RadioContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  height: fit-content;
  font-family: "Mulish", sans-serif;
  font-weight: 400;

  ${({ isMobile }) => {
    if (!isMobile) {
      return css`
        & > label {
          padding-left: 8px;
        }
      `;
    }

    return css`
      flex-direction: row-reverse;

      & > label {
        width: 100%;
      }
    `;
  }}
`;

export const Span = styled.span<{ size: string; status: string }>`
  align-items: center;
  background-color: transparent;
  border-color: #3c6c8d;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  display: flex;
  height: 24px;
  justify-content: center;
  position: absolute;
  width: 24px;
`;

export const Label = styled.label<{ size: string }>`
  align-items: center;
  color: #19191a;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Input = styled.input<{ inputSize: string; status: string }>`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  height: 24px;
  margin: 0;
  opacity: 0;
  position: relative;
  width: 24px;
  z-index: 999;
  &:not(:checked) ~ ${Span} {
    border-color: ${({ theme }) => theme.gray80};
  }

  &:checked {
    cursor: default;
    & ~ ${Span}:after {
      background-color: #3c6c8d;
      border-radius: 50%;
      content: "";
      display: block;
      height: 12px;
      width: 12px;
    }
    & ~ ${Label} {
      pointer-events: none;
    }
  }

  &:checked:disabled ~ ${Span}:after {
    background-color: #cccc;
  }

  &:disabled {
    cursor: default;
    & ~ ${Span} {
      border-color: #cccc;
    }
    & ~ ${Label} {
      color: #cccc;
      cursor: default;
    }
  }
`;
