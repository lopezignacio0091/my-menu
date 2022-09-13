import React, { useCallback, useMemo } from "react";
import {
  BoxRecipes,
  ContainerRecipes,
  HeaderRecipes,
  ContainerClose,
  TitleRecipes,
  BodyRecipes,
  LabelName,
  Label,
  ContainerSwicht,
  ContainerIngredients,
  Li,
} from "./styles";
import { ViewRecipeProps } from "./types";
import BasicIcon from "../../../../../components/BasicIcon/BasicIcon";
import StarC from "../../Start/StarC";
import ToggleSwitch from "../../../../../components/ToggleSwitch/ToggleSwitch";

export const ViewRecipe: React.FC<ViewRecipeProps> = ({
  open,
  close,
  recipeView,
}) => {
  const handleClose = useCallback(() => close(), [close]);

  const handleIngredients = useMemo(() => {
    return recipeView?.ingredients?.map((elem: any, index: number) => (
      <ContainerIngredients key={elem}>
        <Li />
        <Label>{recipeView?.ingredients[index]}</Label>
      </ContainerIngredients>
    ));
  }, [recipeView]);

  return (
    <ContainerRecipes isOpen={open}>
      <BoxRecipes>
        <HeaderRecipes>
          <TitleRecipes>{recipeView?.name}</TitleRecipes>
          <ContainerClose>
            <BasicIcon name="x" onClick={handleClose} />
          </ContainerClose>
        </HeaderRecipes>
        <BodyRecipes>
          <LabelName>Ingredientes</LabelName>
          {handleIngredients}
          <LabelName>Preparacion</LabelName>
          <Label>{recipeView?.instructions}</Label>
          <LabelName >Reseñas</LabelName>
          <StarC count={5} value={recipeView?.score} />
          <LabelName isLast={true}>Cocinado Antes</LabelName>
          <ContainerSwicht>
            <ToggleSwitch value={recipeView?.cooked} />
          </ContainerSwicht>
        </BodyRecipes>
      </BoxRecipes>
    </ContainerRecipes>
  );
};
