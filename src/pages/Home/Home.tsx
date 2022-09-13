import React, { useMemo, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HomeContainer,
  ImageContainer,
  ButtonContainerHome,
  BlurContainer,
  Container,
  LogoImage,
} from "./styles";
import {
  loadingSelector,
  succesSelector,
  viewRecipeSelector,
} from "../../reducers/recipes/selectors";
import { actions as recipesActions } from "../../reducers/recipes/actions";
import Logo from "../../assets/Vector.png";
import Image from "../../assets/Rectangle271.png";
import { ViewRecipe } from "./components/Recipes/ViewRecipe/ViewRecipe";
import { ViewRecipes } from "./components/ViewRecipes";
import Button from "../../components/Button/Button";
import { Recipes } from "./components/Recipes/Recipes";
import LoadingDots from "../../components/Loading/Loading";

export const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const succes = useSelector(succesSelector);
  const recipeView = useSelector(viewRecipeSelector);
  const [open, setOpen] = useState<boolean>(false);
  const [openView, setOpenView] = useState<boolean>(false);
  const handleUrl = useMemo((): string => Image, []);
  const handleLogo = useMemo((): string => Logo, []);

  const handleNewRecipes = useCallback(
    () => () => setOpen((value) => !value),
    []
  );

  const handleCreate = useCallback(
    (values: any) => dispatch(recipesActions.recipesCreate(values)),
    [dispatch]
  );

  const handleViewRecipe = useCallback(
    () => setOpenView((value) => !value),
    []
  );

  useEffect(() => {
    dispatch(recipesActions.recipesRequest());
  }, [dispatch, succes]);

  if (loading) return <LoadingDots />;
  return (
    <Container>
      <LogoImage src={handleLogo} />
      <HomeContainer>
        <ImageContainer src={handleUrl} />
        <ViewRecipes onOpen={handleViewRecipe} />
        <ButtonContainerHome>
          <Button
            iconName="add"
            type="button"
            onClick={handleNewRecipes()}
            circle
          />
        </ButtonContainerHome>
        <Recipes open={open} close={handleNewRecipes()} create={handleCreate} />
        <ViewRecipe  open={openView} close={handleViewRecipe} recipeView={recipeView} />
      </HomeContainer>
      <BlurContainer onClick={handleNewRecipes()} isStateOpen={open} />
    </Container>
  );
};
