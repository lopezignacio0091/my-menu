import React, { useState } from "react";
import Collapsible from "../../../../components/Collapsible/Collapsible";
import {
  Container,
  ContainerBottom,
  Section,
  Date,
  ContainerTop,
  ButtonContainer,
  Description
} from "./styles";
import Button from "../../../../components/Button/Button";

const Body = (props:any) => {
  const [current, setCurrent] = useState(-1);
  const {tables} = props;

  const onItemClicked = (index: number) => {
    setCurrent((prev) => (prev === index ? -1 : index));
  };

  return (
      <Container>
        {tables.map((elem:any) => (
          <Section key={elem.title}>
            <Collapsible
              open={current === elem.id}
              onClick={() => onItemClicked(elem.id)}
            >
              <ContainerTop>
                <div>
                  <h3 style={{ margin: 0 }}>{elem.name}</h3>
                </div>
                <ButtonContainer>
                  <Button
                    type="button"
                    hierarchy="minimal"
                    label="Marchar pedido"
                    iconPosition="left"
                    iconName="archive"
                    fullWidth
                  />
                </ButtonContainer>
              </ContainerTop>
              <ContainerBottom>
                <Description>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi obcaecati quisquam facilis voluptatibus iure! Placeat
                    minus expedita saepe praesentium itaque molestiae eveniet!
                  </p>
                </Description>
                <Date>{elem?.order?.date}</Date>
              </ContainerBottom>
            </Collapsible>
          </Section>
        ))}
      </Container>
  );
};

export default Body;
