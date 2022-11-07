import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 440px;
  max-width: 520px;
  margin: 16px 0 16px;
  min-width: 320px;
`;

export const ContainerDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-320px);
  transition: transform 0.5s;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin: 8px 8px 0;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 260px;
  background: #e5e6e8;
  position: relative;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  overflow: hidden;
  background-color: #436560;
  &:hover {
    ${ContainerDescription} {
      transform: translateX(0px);
    }
    ${Image} {
      transform: translateX(320px);
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const Title = styled.h5`
  font-size: 26px;
  line-height: 30px;
  font-family: "DM Sans", sans-serif;
  color: #436560;
  margin: 8px;
  text-align: center;
`;

export const Price = styled.h5`
  font-size: 20px;
  line-height: 20px;
  font-family: "DM Sans", sans-serif;
  color: #e29a5b;
  margin: 0;
  text-align: center;
`;

export const ContainerButton = styled.div`
  height: 30px;
  margin-top: 16px;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

export const ButtonAdd = styled.button`
  border: 1px solid #e5e6e8;
  height: 30px;
  background: #4e6560;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  font-family: "DM Sans", sans-serif;
  cursor: pointer;
  color: #e5e6e8;
  padding: 0 2rem;
  &&:hover {
    background-color: #e5e6e8;
    color: #4e6560;
    border: 1px solid #4e6560;
  }
`;
