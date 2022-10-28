import styled, { css } from "styled-components";

export const ContainerForm = styled.div`
  background: #ffffff;
  box-shadow: 0 1px 10px 0;
  border-radius: 10px;
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  max-height: 520px;
  left: 412px;
  top: 238px;
  padding: 2rem;
  width: 459px;
  @media screen and (max-width: 600px) {
   padding:4rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  cursor: pointer;
  color: #499583;
  font-family: 'Courier New', Courier, monospace;
  font-size: 48px;
  font-weight: 900;
  margin: 0 20px 20px;
  text-transform: uppercase;
`;

export const LabelName = styled.div`
  align-items: center;
  color: #19191a;
  display: flex;
  font-family: "Sans-serif";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const ErrorLabel = styled.div`
  align-items: center;
  color: #da2020;
  display: flex;
  font-family: "Sans-serif";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: 0 16px 0 8px;
`;

export const Divider = styled.div`
  border: none;
  border-color: #e0e0e0cc;
  border-top: 0.8px solid #2d2d2d;
  width: 100%;
`;
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: center;
  padding: 1rem;
`;

export const ContainerMore = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 20px;
    border: 0.5px solid #2d2d2d;
    border-radius: 0;
    padding: 1rem;
  }
`;
