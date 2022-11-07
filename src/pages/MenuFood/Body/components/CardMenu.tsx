import React, { useCallback } from "react";
import {
  Container,
  Image,
  Price,
  Title,
  ContainerButton,
  Section,
  ButtonAdd,
  ContainerImage,
  ContainerDescription,
} from "./styles";
import { CardMenuProps } from "./types";

const CardMenu: React.FC<CardMenuProps> = ({ card , addCard}) => {
  const { name, link, description, price } = card;
  const handleAddCard = useCallback(() => addCard(card), [addCard, card]);

  return (
    <Container>
      <ContainerImage>
        <Image src={link} alt="name" />
        <ContainerDescription>
         {description}
        </ContainerDescription>
      </ContainerImage>
      <Section>
        <Title>{name}</Title>
        <Price>{`$${price}`}</Price>
        <ContainerButton>
          <ButtonAdd onClick={handleAddCard}>Agregar producto</ButtonAdd>
        </ContainerButton>
      </Section>
    </Container>
  );
};

export default CardMenu;
