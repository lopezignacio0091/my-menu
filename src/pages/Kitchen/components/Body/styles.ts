import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 12px rgba(45, 45, 45, 0.25);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin: 20px 0 20px;
  padding: 20px;
  width: 60%;
  overflow-x: hidden;
`;
export const Section = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
 margin-right: 60px;
`;

export const Description = styled.div`
 max-width: 70%;
`;
export const Date = styled.h6`
  margin: 10px 90px 0;
  color: #499583;
  font-size: 22px;
  font-style: 800;
  line-height: 28px;
`;
