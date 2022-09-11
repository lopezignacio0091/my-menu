import React, { useMemo } from "react";
import Filters from "./Filters/Filters";
import {
  FilterContainer,
  HeaderContainer,
  RecipesContainer,
  TitleContainer,
  TitleRecipes,
  TableContainer
} from "./styles";
import { TableView } from "./Table/TableView";

const TITLE = "Recetas de Cocina";

export const ViewRecipes = () => {
  const handleTitle = useMemo(() => TITLE, []);

  return (
    <RecipesContainer>
      <HeaderContainer>
        <TitleContainer>
          <TitleRecipes>{handleTitle}</TitleRecipes>
        </TitleContainer>
        <FilterContainer>
          <Filters />
        </FilterContainer>
      </HeaderContainer>
      <TableContainer>
        <TableView />
      </TableContainer>
    </RecipesContainer>
  );
};
