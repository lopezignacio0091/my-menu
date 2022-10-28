import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin: 8rem auto;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    margin: 3rem auto 2rem;
  }
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 100%;
`;

export const Title = styled.h6`
  margin: 8px 8px 2px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #999;
  margin: 0;
  text-align: center;
`;
