import React, { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { actions as recipesAction } from "../../../reducers/recipes/actions";
import { recipesSelector } from "../../../reducers/recipes/selectors";
import { ViewRecipeProps } from "./types";

const TITLE = "Gestionnar.TI";

export const ViewRecipes: React.FC<ViewRecipeProps> = ({ onOpen }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(recipesSelector);
  const handleTitle = useMemo(() => TITLE, []);

  const handleFilter = useCallback(
    (value: boolean) => {
      dispatch(
        recipesAction.filterRequest({
          value: value,
          filter: "cooked",
        })
      );
    },
    [dispatch]
  );

  const handleView = useCallback(
    (id: number) => {
      dispatch(recipesAction.viewRecipe(id));
      onOpen();
    },
    [dispatch, onOpen]
  );

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
        <TableView
          recipes={recipes}
          onFilter={handleFilter}
          onView={handleView}
        />
      </TableContainer>
    </RecipesContainer>
  );
};
