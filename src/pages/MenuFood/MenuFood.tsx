import React, { Fragment } from "react";
import { Container } from "./styles";
import Body from "./Body/Body";
import Filters from "./Filters/Filters";

const MenuFood = () => {
  return (
    <Container>
      <Filters />
      <Body />
    </Container>
  );
};

export default MenuFood;
