import React from "react";
import { LinksProps } from "./types";
import { Container, Link, Title } from "./styles";

const Links: React.FC<LinksProps> = ({ title, links }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {links.map((elem) => (
        <Link key={elem.name} href={elem.link}>{elem.name}</Link>
      ))}
    </Container>
  );
};

export default Links;
