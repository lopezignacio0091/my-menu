import styled, { css, keyframes } from "styled-components";
import { ButtonHierarchy, ButtonIconPosition } from "./types";

const spin = keyframes`
from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
`;

const ButtonFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ButtonContainer = styled.div`
  position: relative;
  ${ButtonFlex}
`;

export const ButtonText = styled.p`
  margin: 0;
`;

export const Spinner = styled.div<{
  size: string;
  status: string;
  hierarchy: ButtonHierarchy;
}>`
  display: block;
  border: 2px solid;
  border-radius: 50%;
  -webkit-animation: ${spin} 1s infinite linear;
  animation: ${spin} 1s infinite linear;
  ${({ theme, size, hierarchy, status }) => css`
    width: 50px;
    height: 50px;
    border-color: ${theme.grayCC};
    border-top-color: ${hierarchy === "primary"
      ? theme.status[status].contrast
      : theme.gray2D};
  `}
`;

export const SubmittingContainer = styled.div<{
  loaderWidth: number;
  status: string;
  hasIcon: boolean;
}>`
  position: absolute;
  left: -2px;
  top: -2px;
  height: 100%;
  width: ${({ hasIcon }) => (hasIcon ? "calc(100% - 4px)" : "100%")};
  border-radius: 50px;
  border-width: 2px;
  border-style: solid;
  ${ButtonFlex}

  ${({ theme, status }) => css`
    border-color: ${theme.status[status].color};
    background-color: ${theme.status[status].color};
    color: ${theme.status[status].contrast};

    & > div svg > path,
    & > div svg > rect,
    & > div svg > circle {
      stroke: ${theme.status[status].contrast} !important;
    }
  `};

  transition: clip-path 800ms linear, background-color 600ms linear;
  clip-path: ${({ loaderWidth }) => `inset(0 ${100 - loaderWidth}% 0 0)`};
`;

export const Button = styled.button<{
  status: string;
  hierarchy: ButtonHierarchy;
  size: string;
  isSubmitting: boolean;
  fullWidth: boolean;
  hasIcon: boolean;
  iconPosition?: ButtonIconPosition;
  circle: boolean;
}>`
  position: relative;
  border-style: solid;
  border-width: 2px;
  font-family: "Mulish", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 700;
  border-radius: 50px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: 0;
  cursor: ${({ isSubmitting }) => (isSubmitting ? "auto" : "pointer")};
  outline: none;

  ${({ theme: { button }, hasIcon, iconPosition }) => `
    font-size: 16px;
    line-height: 20px;
    padding-left: ${hasIcon && iconPosition === "left" ? 20 - 4 : 20}px;
    padding-right: ${hasIcon && iconPosition === "right" ? 20 - 4 : 20}px;
  `}

  ${({ hasIcon, iconPosition }) =>
    hasIcon &&
    (iconPosition === "left"
      ? css`
          & > ${SubmittingContainer} {
            padding-right: 4px;
          }
        `
      : css`
          & > ${SubmittingContainer} {
            padding-left: 4px;
          }
        `)}

  & > ${ButtonContainer},
  & > ${SubmittingContainer} {
    flex-direction: ${({ iconPosition }) =>
      iconPosition === "left" ? "row" : "row-reverse"};
  }

  & > ${ButtonContainer} > div {
    cursor: ${({ isSubmitting }) => (isSubmitting ? "auto" : "pointer")};
  }

  &:disabled {
    cursor: auto;
    & > ${ButtonContainer} > div {
      cursor: auto;
    }
  }

  & > div svg > path,
  & > div svg > rect,
  & > div svg > circle {
    stroke-width: 2px;
  }

  ${({ status, hierarchy, theme, isSubmitting, circle }) => {
    switch (hierarchy) {
      case "primary":
        return css`
          background-color: #0c969d;
          border-color: #0c969d;
          color: white;
          height: ${circle ? "60px" : "48px"};
          & > div svg > path,
          & > div svg > rect,
          & > div svg > circle {
            stroke: white;
          }

          ${!isSubmitting &&
          css`
            &:hover {
              background-color: #3d9ba0;
              border-color: #3d9ba0;
            }

            &:active {
              background-color: #80cbcf;
              border-color: #80cbcf;
            }
          `}

          &:disabled {
            background-color: #cccccc;
            border-color: #cccccc;
          }
        `;
      case "secondary":
        return css`
          background-color: transparent;
          border-color: red;
          color: white;
          & > div svg > path,
          & > div svg > rect,
          & > div svg > circle {
            stroke: white;
          }

          ${!isSubmitting &&
          css`
            &:hover {
              color: #d17b7b;
              border-color: #d17b7b;

              & > div svg > path,
              & > div svg > rect,
              & > div svg > circle {
                stroke: ${theme.status[status].hover};
              }
            }

            &:active {
              color: #d17b7b;
              border-color: #d17b7b;

              & > div svg > path,
              & > div svg > rect,
              & > div svg > circle {
                stroke: ${theme.status[status].active};
              }
            }
          `}

          &:disabled {
            color: #cccccc;
            border-color: #cccccc;

            & > div svg > path,
            & > div svg > rect,
            & > div svg > circle {
              stroke: #cccccc;
            }
          }
        `;
      case "tertiary":
        return css`
          background-color: transparent;
          border-color: transparent;
          color: #2d2d2d;

          & > div svg > path,
          & > div svg > rect,
          & > div svg > circle {
            stroke: #2d2d2d;
          }

          ${!isSubmitting &&
          css`
            &:hover {
              color: #ccccc;
              background-color: ${theme.status[status].opacity};
              border-color: ${theme.status[status].opacity};

              & > div svg > path,
              & > div svg > rect,
              & > div svg > circle {
                stroke: #ccccc;
              }
            }

            &:active {
              color: #ccccc;
              background-color: #2d2d2d;
              border-color:  #2d2d2d;

              & > div svg > path,
              & > div svg > rect,
              & > div svg > circle {
                stroke:  #2d2d2d;
              }
            }
          `}

          &:disabled {
            background-color: transparent;
            border-color: transparent;
            color: #ccccc;

            & > div svg > path,
            & > div svg > rect,
            & > div svg > circle {
              stroke: #ccccc;
            }
          }
        `;
      case "minimal":
        return css`
          height: fit-content;
          width: fit-content;
          background-color: transparent;
          border-color: transparent;
          padding: 0;
          color: #2d2d2d;

          & > div svg > path,
          & > div svg > rect,
          & > div svg > circle {
            stroke: ${theme.gray2D};
          }

          ${!isSubmitting &&
          css`
            &:hover {
              color: #9f9f9f;

              & > div svg > path,
              & > div svg > rect,
              & > div svg > circle {
                stroke: #9f9f9f;
              }
            }
          `}

          &:disabled {
            background-color: transparent;
            border-color: transparent;
            color: #CCCCC;

            & > div svg > path,
            & > div svg > rect,
            & > div svg > circle {
              stroke: #CCCCC;
            }
          }
        `;
      default:
        return css``;
    }
  }}
`;
