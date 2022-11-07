import React from "react";
import { ContainerFluid, Container } from "./styles";
import SectionTop from "./components/SectionTop/SectionTop";
import { Promotion } from "./components/Promotion/Promotion";
import Footer from "./components/Footer/Footer";
import SectionCarrousel from "./components/SectionCarousel/SectionCarousel";
import Testimonials from "./components/Info/Info";

const Home = () => {

  return (
    <ContainerFluid>
      <SectionCarrousel />
      <Container>
        <SectionTop />
        <Promotion />
        <Testimonials />
      </Container>
      <Footer />
    </ContainerFluid>
  );
};
export default Home;
