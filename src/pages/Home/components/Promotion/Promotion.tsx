import React from "react";
import CardPromotion from "./components/CardPromotion";
import { isMobileOnly } from "react-device-detect";
import {
  CardContainer,
  Container,
  Link,
  SectionBottom,
  SectionCard,
  SectionImage,
  SectionTitle,
  Subtitle,
  SubtitlePrincipal,
  Title,
  TitlePrincipal,
} from "./styles";

const products = [
  {
    id: 1,
    link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
    title: "Double Chocolate Chip",
    price: 500,
    discount: true,
    rating: 3,
  },
  {
    id: 2,
    link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/9-min_a8455c65-98ca-41cf-81ac-2c5d6cddff67_510X510_crop_center.jpg?v=1617712214",
    title: "Double Chocolate Chip",
    price: 500,
    discount: true,
    rating: 3,
  },
];

export const Promotion = () => {
  return (
    <Container>
      <SectionTitle>
        <TitlePrincipal>Productos destacados</TitlePrincipal>
        <SubtitlePrincipal>
          Contrary to populary beliefs, Lorem then Choose a piece of classical
        </SubtitlePrincipal>
      </SectionTitle>
      <>
        <SectionCard>
          <CardContainer>
            {products.map((p) => (
              <CardPromotion key={p?.id} product={p} />
            ))}
          </CardContainer>
        </SectionCard>
        {!isMobileOnly && (
          <SectionImage>
            <SectionBottom>
              <Title>Nueva Oferta</Title>
              <Subtitle>50% OFF</Subtitle>
              <Link>Ver oferta</Link>
            </SectionBottom>
          </SectionImage>
        )}
      </>
    </Container>
  );
};
