import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  overflow: auto;
  padding:0.5rem 3rem 0;
  height: 100%;
`;

export const Title = styled.h4`
  color: #499583;
  font-family: "Bradley Hand";
  font-size: 52px;
  font-weight: 900;
  margin: 0;
  text-decoration: underline;
  text-align: center;
`;

export const ContainerCard = styled.div`
  gap: 18px;
  display: flex;
  flex-direction: row;
  padding:16px;
  flex-wrap: wrap;
  height: 100%;
`;
