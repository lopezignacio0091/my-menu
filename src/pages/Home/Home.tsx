import React, { useMemo, useState, useCallback } from "react";
import {
  HomeContainer,
  ImageContainer,
  ButtonContainerHome,
  BlurContainer,
  Container,
  LogoImage,
} from "./styles";
import Logo from "../../assets/Vector.png";
import Image from "../../assets/Rectangle271.png";
import { ViewRecipes } from "./components/ViewRecipes";
import Button from "../../components/Button/Button";
import { Recipes } from "./components/Recipes/Recipes";

export const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleUrl = useMemo((): string => Image, []);
  const handleLogo = useMemo((): string => Logo, []);
  const handleNewRecipes = useCallback(() => setOpen((value) => !value), []);
  const handleToggle = useCallback(() => () => {setOpen(false);},[]);

  return (
    <Container>
      <LogoImage src={handleLogo} />
      <HomeContainer>
        <ImageContainer src={handleUrl} />
        <ViewRecipes />
        <ButtonContainerHome>
          <Button iconName="add" type="button" onClick={handleNewRecipes} circle/>
        </ButtonContainerHome>
        <Recipes open={open} close={handleNewRecipes} />
      </HomeContainer>
      <BlurContainer onClick={handleToggle()} isStateOpen={open} />
    </Container>
  );
};
