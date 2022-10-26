import styled from "styled-components";
import Cocina from "../../assets/cocina1.jpg";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin-top: 80px;
  overflow-x: hidden;
  background-image: url(${Cocina});
`;

export const Title = styled.h3`
  color: #d6d5d5;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 36px;
  margin: 16px 0 0;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
