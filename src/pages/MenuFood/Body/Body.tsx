import React from "react";
import CardMenu from "./components/CardMenu";
import { Container, ContainerCard, Title } from "./styles";

const Body = () => {
  const cards = [
    {
      id: 1,
      link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
      name: "Double Chocolate Chip",
      price: 500,
      type: "3",
    },
    {
      id: 2,
      link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/9-min_a8455c65-98ca-41cf-81ac-2c5d6cddff67_510X510_crop_center.jpg?v=1617712214",
      name: "Double Chocolate Chip",
      price: 500,
      type: "3",
    },
    {
      id: 3,
      link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
      name: "Double Chocolate Chip",
      price: 500,
      type: "3",
    },
    {
        id: 4,
        link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
        name: "Double Chocolate Chip",
        price: 500,
        type: "3",
      },
      {
        id: 5,
        link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
        name: "Double Chocolate Chip",
        price: 500,
        type: "3",
      },
      {
        id: 6,
        link: "https://cdn.shopify.com/s/files/1/0557/1965/7630/products/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.jpg?v=1617712137",
        name: "Double Chocolate Chip",
        price: 500,
        type: "3",
      },
  ];
  return (
    <Container>
      <ContainerCard>
        {cards.map((elem) => (
          <CardMenu card={elem} />
        ))}
      </ContainerCard>
    </Container>
  );
};

export default Body;
