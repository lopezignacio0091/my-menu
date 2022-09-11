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

export const AddOnContainer = styled.div<{
  hasError?: boolean;
  disabled?: boolean;
  size: string;
}>`
  z-index: 3;
  padding: ${({ size }) => (size === "small" ? "4px 0" : "6px 0")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  ${({ theme, hasError, disabled }) => css`
    height: 18px;

    & > * {
      cursor: ${disabled ? "auto" : "pointer"} !important;
    }

    & svg > path,
    & svg > rect,
    & svg > circle {
      stroke: ${hasError
        ? "#FF1515"
        : disabled
        ? "#b8b8b8"
        : "#808080"} !important;
    }
  `};
`;

export const FixedLabel = styled.span<{
  hasError: boolean;
  size: string;
  disabled: boolean;
}>`
  display: inline-block;
  ${Font}
  ${({ theme, hasError, size, disabled }) => css`
    font-size: 14px;
    line-height: ${16 + 4}px;
    color: ${hasError ? "#FF1515" : disabled ? "#b8b8b8" : "#808080"};
  `}
`;

export const Label = styled(FixedLabel)`
  position: absolute;
  left: 0;
  transition: all 0.17s;
  z-index: 1;
`;

export const Placeholder = styled.span<{
  hide: boolean;
  hasError: boolean;
  size: string;
}>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  ${Font}
  ${({ theme, hasError, size, hide }) => css`
    font-size: 14px;
    line-height: 20px;
    color: ${hasError ? "#ff1515" : "#B8B8B8"};
    display: ${hide ? "none" : "inline"};
  `}
`;

const LabelUp = (variant: string) => css`
  font-size: 12px;
  line-height: 15px;
  top: ${variant === "underline" ? 0 : 0}px;
`;

export const Input = styled.input<{
  hasPlaceholder: boolean;
  isOpen: boolean;
  inputSize: string;
  variant: string;
  pointer: boolean;
}>`
  background: transparent;
  width: calc(100% - 4px);
  padding-bottom: 5px;
  color: "#4D4D4D";
  position: relative;
  border: none;
  z-index: 2;
  cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};
  ${Font}
  ${({ theme, inputSize }) => css`
    font-size: 14px;
    line-height: 20px;
    color: "grey";
  `}

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }

  &:not([value=""]) {
    ${({ hasPlaceholder, variant }) =>
      !hasPlaceholder &&
      css`
        & ~ ${Label} {
          ${LabelUp(variant)}
        }
      `};
  }

  &:not([readonly]):focus {
    outline: none;
    ${({ hasPlaceholder, isOpen, variant }) =>
      !hasPlaceholder &&
      isOpen !== false &&
      css`
        & ~ ${Label} {
          ${LabelUp(variant)}
        }
      `};
  }

  &:read-only {
    cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};
    outline: none;
    border: none;
    caret-color: transparent;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.grayB8};
    color: ${({ theme }) => theme.grayB8};
    cursor: auto;
  }
`;

export const HelperContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  min-height: 20px;
`;

export const ErrorMessage = styled.div`
  ${Font}
  ${({ theme }) => css`
    color: #ff1515;
    line-height: 16px;
    font-size: 12px;
  `};
`;

export const HelperMessage = styled(ErrorMessage)<{ disabled: boolean }>`
  color: ${({ theme, disabled }) => (disabled ? "#B8B8B8" : "#808080")};
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;

export const Icon = styled.div<{ disabled: boolean }>`
  & > div {
    cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  }
`;

export const BoxContainer = styled.div<{
  variant: string;
  hasError: boolean;
  hasPlaceholder: boolean;
  size: string;
  disabled: boolean;
  isFocus: boolean;
  isOpen: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  gap: 8px;

  ${({ hasError, theme }) =>
    hasError &&
    css`
      & ${Input} {
        color: #ff1515;
        animation: ${errorBounce} 250ms linear;
        border-color: #ff1515;
        &::placeholder {
          color: #ff1515;
        }
      }
    `}

  ${({
    theme: { gray80, grayF0, grayB8, gray2D, status, input },
    variant,
    hasError,
    size,
    disabled,
    hasPlaceholder,
    isOpen,
    isFocus,
  }) => {
    // const { height, lineHeight, paddingBottom } = input.sizes[size];
    // const h = height[variant];
    // const top = h - lineHeight - (paddingBottom + 1);
    // const center = (h - lineHeight) / 2;
    switch (variant) {
      case "underline":
        return css`
          border-bottom: 1px solid;
          border-bottom-color: ${hasError
            ? "#FF1515"
            : disabled
            ? grayB8
            : isFocus
            ? gray2D
            : gray80};

          & ${Label} {
            ${hasPlaceholder || isOpen
              ? LabelUp(variant)
              : css`
                  top: 20px;
                `};
          }

          & ${Placeholder} {
            top: 20px;
          }
        `;
      case "outlined":
        return css`
          background: #fdfdfd;
          border: 1px solid  ${hasError ? "#FF1515" : disabled ? "#b8b8b8": "#54b5ba"};
          border-radius: 4px;
          padding: 0 16px;
          & > ${AddOnContainer} {
            align-self: center;
          }

          & ${Label} {
            ${hasPlaceholder || isOpen
              ? LabelUp(variant)
              : css`
                  top: 10px;
                `};
          }

          & ${Placeholder} {
            top: 5px;
          }
        `;
      case "contained-label":
        return css`
          border: ${hasError || isFocus ? `1px solid` : "none"};
          border-color: ${hasError ? status.error.color : "#F9F9F9"};
          border-radius: 8px;
          padding: 0 16px;
          background-color: ${hasError ? input.error.background : "#F9F9F9"};

          & > ${AddOnContainer} {
            align-self: center;
          }

          & ${Label} {
            ${hasPlaceholder || isOpen
              ? LabelUp(variant)
              : css`
                  top: 5px;
                `};
          }

          & ${Placeholder} {
            top: 10px;
          }
        `;
      case "contained-select":
        return css`
          border: ${hasError || isFocus ? `1px solid` : "none"};
          border-color: ${hasError ? status.error.color : "#EBF0F3"};
          border-radius: 8px;
          padding: 0 16px;
          background-color: ${hasError ? input.error.background : "#EBF0F3"};

          & > ${AddOnContainer} {
            align-self: center;
          }

          & ${Label} {
            ${hasPlaceholder || isOpen
              ? LabelUp(variant)
              : css`
                  top: 5px;
                `};
          }

          & ${Placeholder} {
            top: 10px;
          }
        `;
      case "top-aligned-label":
        return css`
          border: ${hasError || isFocus ? `1px solid` : "none"};
          border-color: ${hasError ? status.error.color : gray2D};
          border-radius: 8px;
          padding: 0 16px;
          background-color: ${hasError ? input.error.background : grayF0};

          & > ${AddOnContainer} {
            align-self: center;
          }

          & ${Placeholder} {
            top: 5px;
          }

          & > ${InputContainer} {
            justify-content: center;
            & ${Input} {
              padding-bottom: 0;
            }
          }
        `;
      default:
        return css``;
    }
  }}
`;

export const Container = styled.div<{
  size: string;
  variant: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;

  ${({ theme: { input }, size, variant }) => {
    const h = 48;
    return css`
      margin-bottom: 8px;
      & > ${BoxContainer} {
        height: ${h}px;
      }
    `;
  }};
`;
