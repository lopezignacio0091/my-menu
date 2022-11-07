import styled from "styled-components";
import { StatusSnack } from "./types";

export const Container = styled.div`
  z-index: 1400;
  position: fixed;
  display: flex;
  left: 8px;
  right: 8px;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  bottom: 8px;
  min-width: 320px;
`;

export const Content = styled.div<{
   status:StatusSnack
  }>`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  background-color: #1d8102;
  display: flex;
  padding: 6px 16px;
  color: rgb(255, 255, 255);
  align-items: center;
  border-color: #1d8102;
`;

export const IconContainer = styled.div`
  margin-right: 12px;
  padding: 7px 0px;
  display: flex;
  font-size: 22px;
  opacity: 0.9;
`;

export const MessageContainer = styled.div`
  padding: "8px 0px";
  min-width: "0px";
  overflow: "auto";
`;

export const CloseContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 4px 0px 0px 16px;
  margin-left: auto;
  margin-right: -8px;
`;
