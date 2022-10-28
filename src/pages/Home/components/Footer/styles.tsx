import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #334242;
  box-shadow: 0 3px 3px rgb(0 0 0 / 10%);
  width: 100%;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 2rem;
  gap: 1rem;
  color: #e5e6e8;
  position: relative;
  bottom: 0;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
  
`;

export const Title = styled.a`
  cursor: pointer;
  color: #e29a5b;
  font-family: "Bradley Hand";
  font-size: 36px;
  font-weight: 900;
  margin: 0;
  text-decoration: underline;
`;
