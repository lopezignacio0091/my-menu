import React, { useRef, useMemo, useCallback } from "react";
import {
  Category,
  Container,
  Input,
  Label,
  Section,
  SectionContainer,
  SectionFilter,
  SectionTop,
  Title,
  Prices,
  Divider
} from "./styles";

const Filters = () => {
  const inputRef: React.Ref<HTMLInputElement> = useRef(null);
  const checked = useMemo(() => inputRef.current?.checked || false, [inputRef]);
  const handleChange = useCallback(() => {
    if (inputRef) inputRef.current.checked = !checked;
  }, [checked]);
  return (
    <Container>
      <Section>
        <Title>Menu</Title>
      </Section>
      <SectionTop>
        <Category>Categoria</Category>
        <SectionContainer>
          <SectionFilter>
            <Label>Cafe</Label>
            <Input
              ref={inputRef}
              checked={checked}
              id="checkbox"
              type="checkbox"
              onClick={handleChange}
            />
          </SectionFilter>
          <SectionFilter>
            <Label>Te</Label>
            <Input
              ref={inputRef}
              checked={checked}
              id="checkbox"
              type="checkbox"
              onChange={handleChange}
            />
          </SectionFilter>
          <SectionFilter>
            <Label>Jugos</Label>
            <Input
              ref={inputRef}
              checked={checked}
              id="checkbox"
              type="checkbox"
              onChange={handleChange}
            />
          </SectionFilter>
        </SectionContainer>
        <Divider />
        <Prices>Precios</Prices>
        <SectionContainer>
          <SectionFilter>
            <Label>0-500</Label>
            <Input
              ref={inputRef}
              checked={checked}
              id="checkbox"
              type="checkbox"
              onClick={handleChange}
            />
          </SectionFilter>
          <SectionFilter>
            <Label>500-1000</Label>
            <Input
              ref={inputRef}
              checked={checked}
              id="checkbox"
              type="checkbox"
              onChange={handleChange}
            />
          </SectionFilter>
          <SectionFilter>
            <Label>1000-2000</Label>
            <Input
              ref={inputRef}
              checked={checked}
              id="checkbox"
              type="checkbox"
              onChange={handleChange}
            />
          </SectionFilter>
          <SectionFilter>
            <Label>2000-5000</Label>
            <Input
              ref={inputRef}
              checked={checked}
              id="checkbox"
              type="checkbox"
              onChange={handleChange}
            />
          </SectionFilter>
        </SectionContainer>
      </SectionTop>
    </Container>
  );
};

export default Filters;
