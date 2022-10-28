import styled from "styled-components";

export const Container = styled.div`
  background: #ffff;
  box-shadow: 0px 0px 16px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  max-height: 200px;
  max-width: 645px;
  padding: 20px 0px 20px 20px;
  @media screen and (max-width: 600px) {
    max-width: 540px;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  min-width: 100px;
  width: 200px;
  border-radius: inherit;
  transition: transform 0.2s;
  overflow: hidden;
  &&:hover {
    border-radius: inherit;
    transform: scale(
      1.5
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
  @media screen and (max-width: 600px) {
    width: 80px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 20px;
  width: 280px;
  min-width: 184px;
  @media screen and (max-width: 600px) {
    padding: 20px 0px 20px 10px;
  }
`;

export const Title = styled.h4`
  font-size: 15px;
  line-height: 19px;
  font-family: "DM Sans", sans-serif;
  color: #2d2d2d;
  margin: 8px 0;
`;

export const Price = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  /* font-family: "DM Sans" , sans-serif; */
  color: #53a16d;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  line-height: 22px;
  }
`;
