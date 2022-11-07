import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto 30px;
  @media screen and (max-width: 600px) {
    width: 90%;
    flex-direction: row;
    padding: 0 1rem;
  }
`;

export const SectionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SectionImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
  background-image: url("https://cdn.shopify.com/s/files/1/0557/1965/7630/files/banner_0ca7fff5-d565-4e32-aa0f-6a35a2fdeafd.jpg");
  object-fit: cover;
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  height: 100%;
`;

export const SectionBottom = styled.div`
  align-self: center;
  bottom: 40px;
  left: 30px;
  right: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  min-height: 412px;
  min-width: 560px;
`;
export const SectionTitle = styled.div`
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
    padding: 0 1rem;
  }
`;

export const TitlePrincipal = styled.h6`
  text-align: center;
  font-size: 44px;
  text-transform: capitalize;
  font-weight: 900;
  line-height: 1;
  margin: 0;
  @media screen and (max-width: 600px) {
    font-size: 26px;
  }
`;

export const SubtitlePrincipal = styled.p`
  text-align: center;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  line-height: 18px;
  color: #2d2d2d;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    margin-top: 8px;
  }
`;

export const Title = styled.h6`
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 5px;
  color: #ffff;
  margin: 8px;
`;
export const Subtitle = styled.h2`
  font-size: 50px;
  margin-top: 7px;
  text-transform: uppercase;
  line-height: 1;
  color: #ffff;
  margin: 8px;
`;

export const Link = styled.a`
  cursor: pointer;
  color: #fff;
  font-size: 15px;
  padding: 12px 45px;
  background-color: #53a16e;
  text-transform: capitalize;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  margin-top: 8px;
  &:hover {
    background: #fff;
    color: #53a16e;
  }
`;
