import styled, { css } from "styled-components";

export const ContainerRecipes = styled.div<{
  isOpen: boolean;
}>`
  width: auto;
  border-radius: 0px 0px 0px 20px;
  position: absolute;
  right: 0;
  transition: all 0.5s;
  top: 0;
  overflow: hidden;
  z-index: 9999;
  min-width: 269px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      transition: all 0.3s;
      max-height: 0;
    `}
 
`;

export const BoxRecipes = styled.div`
  min-width: 371px;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const HeaderRecipes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleRecipes = styled.div`
  align-items: center;
  color: #19191a;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const ContainerClose = styled.div`
  position: absolute;
  right: 27px;
`;

export const BodyRecipes = styled.div`
  margin-top: 24px;
`;
export const LabelName = styled.div`
  align-items: center;
  color: #19191a;
  display: flex;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 16px;
`;

export const BoxIngredients = styled.div`
  margin-top: 34px;
`;

export const ContainerIngredients = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const ContentIngredients = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

export const NumberContainer = styled.div`
  color: #79797a;
  display: flex;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;
export const InputContainer = styled.div`
  margin: 0 32px 0 8px;
  min-width: 342px;
`;

export const PreparationContainer = styled.div`
  margin: 14px 0 40px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 29px;
`;

export const ContainerSwicht = styled.div`
  margin-top: 10px;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10px;
`;


