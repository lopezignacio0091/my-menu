/* eslint-disable no-nested-ternary */
import styled, { css, keyframes } from "styled-components";

const errorBounce = keyframes`
 0% {
    transform: translateX(5px);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(5px);
  }
`;

const Font = css`
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const TextAreaContainer = styled.div<{
  hasError: boolean;
  maxLength: boolean;
  rows: number;
  disabled: boolean;
}>`
  height: ${({ rows }) => rows * 22 + 10}px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${({ theme, hasError, maxLength, disabled }) => {
    if (hasError) {
      return "#FF1515";
    }
    if (disabled) {
      return "#ccccc";
    }
    if (maxLength) {
      return "#e59444sd";
    }

    return "#54B5BA";
  }};
`;

export const TextAreaWrapper = styled.div`
  padding-right: 8px;
`;

export const TextArea = styled.textarea<{
  isMobile: boolean;
  hasError: boolean;
  disabled: boolean;
}>`
  border: none;
  outline: none;
  width: 100%;
  resize: none;
  color: ${({ theme, disabled }) => (disabled ? "#b8b8b8" : "#2d2d2d")};
  line-height: 22px;
  cursor: auto;
  ${Font}

  ${({ isMobile }) => css`
    font-size: ${isMobile ? "14px" : "16px"};
    letter-spacing: ${isMobile ? "0.0025em" : "0.005em"};
  `}

  ::placeholder {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme, disabled }) => (disabled ? "#B8B8B8" : "#a9a9a9")};
  }

  :placeholder-shown {
    text-overflow: ellipsis;
  }

  :disabled {
    background-color: ${({ theme }) => theme.white};
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      color: #ff1515;
      animation: ${errorBounce} 250ms linear;
      border-color: #ff1515;
      &::placeholder {
        color: #ff1515;
      }
    `}

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    cursor: default;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.grayB8};
    border-radius: 10px;
    cursor: default;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.grayB8};
    cursor: default;
  }
`;

export const HelperContainer = styled.div`
  margin-top: 4px;
  display: flex;
`;

export const HelperText = styled.div<{
  disabled: boolean;
}>`
  ${Font}
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.004em;
  color: ${({ theme, disabled }) => (disabled ? theme.grayB8 : theme.gray80)};
  flex: 1 1 auto;
  text-align: left;

  & ~ div {
    flex: 0 1 auto;
  }
`;

export const LengthMessage = styled.div<{
  disabled: boolean;
}>`
  ${Font}
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.004em;
  color: ${({ theme, disabled }) => (disabled ? "#b8b8b8" : "#808080")};
  margin-left: 4px;
  flex: 1 1 auto;
  text-align: left;

  & ~ div {
    flex: 0 1 auto;
  }
`;

export const CharCounter = styled.div<{
  disabled: boolean;
  hasError: boolean;
}>`
  ${Font}
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme, disabled, hasError }) =>
    disabled ? "#b8b8b8" : hasError ? "#FF1515" : "#808080"};
  flex: 1 1 auto;
  text-align: right;
`;

export const ErrorMessage = styled.div`
  ${Font}
  color: #FF1515;
  line-height: 12px;
  font-size: 12px;
  margin-left: 4px;
  text-align: left;
  flex: 1 1 auto;

  & ~ div {
    flex: 0 1 auto;
  }
`;
