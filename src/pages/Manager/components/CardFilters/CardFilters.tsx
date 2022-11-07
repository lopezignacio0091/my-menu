import React, { useCallback } from "react";
import {
  ContainerFluid,
  Card,
  Column,
  Container,
  Count,
  Row,
  Section,
  Image,
  Title,
} from "./styles";
import { CardFilterProps, CardProp } from "./types";

const CardFilters: React.FC<CardFilterProps> = (props) => {
  const { cards , handleAction } = props;

  const handleClick = useCallback((name:string) => handleAction(name), [handleAction]);

  const handleRender = useCallback(
    (elem: CardProp) => (
      <Card role="presentation" onClick={()=>handleClick(elem.filter)}>
        <Section>
          <Image src={elem?.url} alt={elem.title} />
          <Count>{elem?.count}</Count>
        </Section>
        <Title>{elem?.title}</Title>
      </Card>
    ),
    [handleClick]
  );
  return (
    <ContainerFluid>
      <Container>
        <Row>
          {cards.map((elem) => (
            <Column key={elem.title}>{handleRender(elem)}</Column>
          ))}
        </Row>
      </Container>
    </ContainerFluid>
  );
};

export default CardFilters;
