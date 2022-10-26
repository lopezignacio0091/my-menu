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

const Body = () => {
  const [current, setCurrent] = useState(-1);

  const onItemClicked = (index: number) => {
    setCurrent((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      <Container>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <Section>
            <Collapsible
              open={current === index}
              onClick={() => onItemClicked(index)}
            >
              <ContainerTop>
                <div>
                  <h3 style={{ margin: 0 }}>{`Mesa ${index + 1}`}</h3>
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
                <Date>21:33:03</Date>
              </ContainerBottom>
            </Collapsible>
          </Section>
        ))}
      </Container>
    </>
  );
};

export default Body;
