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
  height: 100%;
  max-height: 100vh;
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
  max-width: 371px;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

export const HeaderRecipes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerClose = styled.div`
  position: absolute;
  right: 27px;
`;

export const TitleRecipes = styled.div`
  align-items: center;
  color: #19191a;
  display: flex;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const BodyRecipes = styled.div`
  margin-top: 24px;
`;

export const LabelName = styled.div<{
  isLast?: boolean;
}>`
  align-items: center;
  color: #19191a;
  display: flex;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: 24px;
  ${({ isLast }) =>
    isLast &&
    css`
      margin-top: 12px;
    `}
`;

export const Label = styled.div`
  align-items: center;
  color: #424243;
  display: flex;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const BoxIntruction = styled.div`
  margin-bottom: 24px;
`;

export const ContainerSwicht = styled.div`
  margin-top: 10px;
`;

export const ContainerIngredients = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Li = styled.div`
  width: 6px;
  height: 6px;
  background: #424243;
`;
