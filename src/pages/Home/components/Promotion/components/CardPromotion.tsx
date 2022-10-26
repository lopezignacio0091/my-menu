import React from "react";
import { CardPromotionProps } from "./types";
import { Container, Image, Price, Section, Title } from "./styles";
import StarC from "../../Start/StarC";
import Button from "../../../../../components/Button/Button";

const CardPromotion: React.FC<CardPromotionProps> = ({ product }) => {
  const { id, title, price, rating, link, discount } = product;

  return (
    <Container>
      <Image src={link} alt={title} />
      <Section>
        <Title>{title}</Title>
        <Price>{`$${price}`}</Price>
        <StarC count={5} value={rating} />
        <Button
          type="button"
          hierarchy="minimal"
          label="Ver Detalle"
          fullWidth
        />
      </Section>
    </Container>
  );
};

export default CardPromotion;
