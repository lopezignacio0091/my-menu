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
} from "../../reducers/recipes/selectors";
import { actions as recipesActions } from "../../reducers/recipes/actions";
import Logo from "../../assets/Vector.png";
import Image from "../../assets/Rectangle271.png";
import { ViewRecipes } from "./components/ViewRecipes";
import Button from "../../components/Button/Button";
import { Recipes } from "./components/Recipes/Recipes";
import BasicIcon from "../../components/BasicIcon/BasicIcon";
import LoadingDots from "../../components/Loading/Loading";

export const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const succes = useSelector(succesSelector);
  const [open, setOpen] = useState<boolean>(false);
  const handleUrl = useMemo((): string => Image, []);
  const handleLogo = useMemo((): string => Logo, []);
  const handleNewRecipes = useCallback(() => setOpen((value) => !value), []);
  const handleToggle = useCallback(() => () => setOpen(false), []);

  const handleCreate = useCallback(
    (values: any) => dispatch(recipesActions.recipesCreate(values)),
    [dispatch]
  );
  useEffect(() => {
    dispatch(recipesActions.recipesRequest());
  }, [dispatch, succes]);

  if (loading) return <LoadingDots/>;
  return (
    <Container>
      <LogoImage src={handleLogo} />
      <HomeContainer>
        <ImageContainer src={handleUrl} />
        <ViewRecipes />
        <ButtonContainerHome>
          <Button
            iconName="add"
            type="button"
            onClick={handleNewRecipes}
            circle
          />
        </ButtonContainerHome>
        <Recipes open={open} close={handleNewRecipes} create={handleCreate} />
      </HomeContainer>
      <BlurContainer onClick={handleToggle()} isStateOpen={open} />
    </Container>
  );
};
