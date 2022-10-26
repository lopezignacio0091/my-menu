import React, { useMemo } from "react";
import { Container, Title } from "./styles";
import CardFilters from "./components/CardFilters/CardFilters";
import Total from "../../assets/total.svg";
import Mesa from "../../assets/restaurant.svg";
import Body from "./components/Body/Body";

const Kitchen = () => {
  const handleCards = useMemo(
    () => [
      {
        url: Total,
        count: 20,
        title: "Preparados",
        
      },
      {
        url: Mesa,
        count: 12,
        title: "Servidos",
      },
      {
        url: Total,
        count: 32,
        title: "Total",
      },
    ],
    []
  );
  return (
    <Container>
      <Title>Cocina</Title>
      <CardFilters cards={handleCards}/>
      <Body />
    </Container>
  );
};

export default Kitchen;
