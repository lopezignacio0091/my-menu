import styled from "styled-components";

export const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderContainer = styled.div`
  margin: 0;
`;
export const TitleContainer = styled.div`
  align-items: flex-start;
  gap: 10px;
  padding: 48px 32px 0;
`;

export const TitleRecipes = styled.div`
  align-items: center;
  color: #19191a;
  display: flex;
  font-family: "Poppins";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 48px 32px 24px;
  form {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const TableContainer = styled.div`
  padding: 0 48px;
`;
