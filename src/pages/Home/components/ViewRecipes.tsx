import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Filters from "./Filters/Filters";
import {
  FilterContainer,
  HeaderContainer,
  RecipesContainer,
  TitleContainer,
  TitleRecipes,
  TableContainer,
} from "./styles";
import { TableView } from "./Table/TableView";
import { recipesSelector } from "../../../reducers/recipes/selectors";

const TITLE = "Recetas de Cocina";

export const ViewRecipes = () => {
  const recipes = useSelector(recipesSelector);
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
        <TableView recipes={recipes} />
      </TableContainer>
    </RecipesContainer>
  );
};
