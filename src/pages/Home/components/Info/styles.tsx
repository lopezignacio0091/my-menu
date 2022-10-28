import styled from "styled-components";
import image from "../../../../assets/cta-bg.jpeg";

export const Section = styled.div`
  background: linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, 0.7)),
    url(${image}) fixed center center;
  background-size: cover;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  max-width: 720px;
  @media screen and (max-width: 600px) {
    max-width: 540px;
    padding: 0 20px;
  }
`;

export const SectionInfo = styled.div`
  opacity: 1;
  transform: translateZ(0) scale(1);
`;

export const Title = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
`;

export const InfoLabel = styled.p`
 margin-top: 0;
 margin-bottom: 1rem;
 color: #fff;
`;
