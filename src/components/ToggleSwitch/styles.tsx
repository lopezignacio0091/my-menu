/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

export const SwitchContainer = styled.div<{ width: string }>`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: fit-content;
  ${(props) =>
    props.width &&
    css`
      display: grid;
      grid-template-columns: 1fr 48px 1fr;
      width: ${props.width};
    `}
`;

export const Label = styled.div`
  left: 50%;
  position: absolute;
  text-align: center;
  top: -22px;
  transform: translate(-50%, 0);
  width: max-content;
`;

export const LabelOff = styled.div`
  color: #4d4d4d;
  font-size: 15px;
  margin-right: 16px;
  text-align: end;
  word-wrap: break-word;
`;

export const LabelOn = styled.div`
  color: #4d4d4d;
  font-size: 15px;
  margin-left: 16px;
  word-wrap: break-word;
`;

export const InputContainer = styled.div`
  display: flex;
  grid-column: 2/3;
  position: relative;
`;

export const ToggleCheckbox = styled.input`
  display: none;
  height: 0px;
  opacity: 0;
  width: 0px;
`;

export const ToggleSwitchButton = styled.button<{
  toggled: boolean;
  disabled: boolean;
  status: string;
}>`
  background-color: #808080;
  border: none;
  border-radius: 20px;
  ${({ disabled }) =>
    disabled
      ? css`
          cursor: default;
        `
      : css`
          cursor: pointer;
        `}
  display: inline-block;
  height: 20px;
  padding: 3px;
  position: relative;
  width: 48px;

  ${({ toggled, disabled, status }) =>
    disabled
      ? css`
          background-color: #b5b5b5;
        `
      : toggled
      ? css`
          background-color: #8DC63F;
        `
      : css`
          background-color: #808080;
        `}
`;

export const Toggle = styled.span<{ toggled: boolean }>`
  background-color: #F0F0F0;
  border-radius: 10px;
  height: 15.67px;
  position: absolute;
  right: ${({ toggled }) => (toggled ? '3px' : '60%')};
  top: 2px;
  transition: all 0.3s;
  width: 15.67px;
`;
