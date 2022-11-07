import styled from "styled-components";

export const ContainerFluid = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin:40px 0 20px;
  @media screen and (max-width: 600px)  {
    margin: 5% 5% 0 5%;
  }
`;

export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin-left: -20px;
`;

export const Column = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  flex: 0 0 33.3333333333%;
  margin-left: 0;
  max-width: 33.3333333333%;
  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 20px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    margin-left: 0;
    max-width: 100%;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 12px rgba(45, 45, 45, 0.25);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
  &:active {
    border: 2px solid #ff6c0e;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  padding: 12px;
`;

export const Image = styled.img`
  height: 77px;
  width: 97px;
`;

export const Count = styled.h3`
  color: #2d2d2d;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 61px;
  margin: 0;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 41px;
  }
`;

export const Title = styled.h3`
  color: #2d2d2d;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 23px;
  margin:0;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
