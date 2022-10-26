import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContainerFluid, Container } from "./styles";
import {
  loadingSelector,
  succesSelector,
} from "../../reducers/recipes/selectors";
import { actions as recipesActions } from "../../reducers/recipes/actions";
import LoadingDots from "../../components/Loading/Loading";
import SectionTop from "./components/SectionTop/SectionTop";
import { Promotion } from "./components/Promotion/Promotion";
import Footer from "./components/Footer/Footer";
import SectionCarrousel from "./components/SectionCarousel/SectionCarousel";
import Menu from "../Menu/Menu";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const succes = useSelector(succesSelector);

  useEffect(() => {
    dispatch(recipesActions.recipesRequest());
  }, [dispatch, succes]);

  if (loading) return <LoadingDots />;

  return (
    <ContainerFluid>
      <SectionCarrousel />
      <Container>
        <SectionTop />
        <Promotion />
      </Container>
      <Footer />
    </ContainerFluid>
  );
};
export default Home;
