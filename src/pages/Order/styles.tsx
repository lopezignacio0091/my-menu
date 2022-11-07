import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentOrder = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 440px;
  max-width: 520px;
  padding: 22px;
  width: 100%;
  & > div {
    border: 0.5px solid grey;
    padding: 8px;
    margin-top: 8px;
  }
`;

export const CardTotal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px;
  box-sizing: border-box;
  margin-left: 20px;
`;

export const ContentTotal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px;
`;

export const ContainerTotal = styled.div`
  /* min-width: 220px;
  min-height: 320px; */
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 26px;
  line-height: 30px;
  font-family: "DM Sans", sans-serif;
  color: #436560;
  margin: 8px;
  text-align: center;
`;

export const TitleOne = styled.h2`
  font-size: 46px;
  line-height: 30px;
  font-family: "DM Sans", sans-serif;
  color: #436560;
  margin: 32px 0px 32px;
  text-align: center;
`;

export const Result = styled.h5`
  font-size: 26px;
  line-height: 30px;
  font-family: "DM Sans", sans-serif;
  color: #e29a5b;
  margin-top: 32px;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

`;
