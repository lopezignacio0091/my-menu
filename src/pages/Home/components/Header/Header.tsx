import React from "react";
import BasicIcon from "../../../../components/BasicIcon/BasicIcon";
import { Container, LabelItem, Login, Menu, Section, Title } from "./styles";

const Header = () => {
  const menuItem = [
    {
      label: "Menu",
      link: "/menu",
      key: 1,
    },
    {
      label: "Mi pedido",
      link: "/cafe",
      key: 2,
    },
    {
      label: "Contacto",
      link: "/contacto",
      key: 3,
    },
  ];
  return (
    <Container>
      <Menu>
        <div>
          <Title>GESTIONNAR.TI</Title>
        </div>
        <Section>
          {menuItem.map((item) => (
            <LabelItem key={item?.key} href={item.link}>{item.label}</LabelItem>
          ))}
        </Section>
        <Login>
          <BasicIcon name="login" color={"#1E3832"} />
          <LabelItem>Login</LabelItem>
        </Login>
      </Menu>
    </Container>
  );
};

export default Header;
