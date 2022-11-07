import styled, { css } from "styled-components";
import Coffe from "../../../assets/st.jpg";

export const ContainerLogin = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    background-image: url(${Coffe});
    height: 100vh;
  }
`;

export const Image = styled.div`
  height: 100vh;
  width: 100%;
  image-resolution: inherit;
  background-image: url(${Coffe});
  @media screen and (max-width: 600px) {
    height: 0;
    background-image: none;
  }
`;

export const ContainerForm = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
