import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

export const ContainerSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;


export const ContainerForm = styled.div`
  background: #ffffff;
  box-shadow: 0 1px 10px 0;
  border-radius: 10px;
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  max-height: 520px;
  height: 100%;
  left: 412px;
  top: 238px;
  padding: 2rem;
  width: 459px;
  @media screen and (max-width: 600px) {
   margin:2rem;
  }
`;