import React, { useCallback } from "react";
import Button from "../../../../components/Button/Button";
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

const CardMenu: React.FC<CardMenuProps> = ({ card }) => {
  const { name, id, link, description, price } = card;
  const handleAddCard = useCallback(() => alert(card?.id), [card]);

  return (
    <Container>
      <ContainerImage>
        <Image src={link} alt="name" />
        <ContainerDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          alias a, veritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          alias a, veritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          alias a, veritatis.
        </ContainerDescription>
      </ContainerImage>
      <Section>
        <Title>{name}</Title>
        <Price>{`$${price}`}</Price>
        <ContainerButton>
          <ButtonAdd>Agregar producto</ButtonAdd>
        </ContainerButton>
      </Section>
    </Container>
  );
};

export default CardMenu;
