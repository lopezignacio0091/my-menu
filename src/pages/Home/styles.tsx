import styled, { css } from "styled-components";
import body from '../../assets/body.png';

export const ContainerFluid = styled.div`
  width: 100%; 
   overflow: hidden;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${body});

`;
export const LogoImage = styled.img`
  height: 81.39px;
  width: 100.48px;
`;
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.img`
  height: 100vh;
  max-width: 342px;
`;

export const ButtonContainerHome = styled.div`
  bottom: 20px;
  position: fixed;
  right: 20px;
`;

export const BlurContainer = styled.div<{
  isStateOpen: boolean;
}>`
  height: 100vh;
  position: fixed;
  top: 0;
  transition: all 0.2s;
  width: 100vw;
  z-index: -1;
  ${({ isStateOpen }) =>
    isStateOpen &&
    css`
      backdrop-filter: blur(4px);
      background: rgba(45, 45, 45, 0.3);
      z-index: 19;
    `}
`;
