import React, { useCallback, useState } from "react";
import { Field, Form } from "react-final-form";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import { required } from "../../utils/validations";
import {
  ContainerButton,
  LabelName,
  Title,
} from "../Shared/Login/components/Form/styles";
import { Container, ContainerForm, ContainerSection } from "./styles";
import NumericInput from "../../components/NumericInput/NumericInput";

const Finance = () => {
  const [valueInt, setValueInt] = useState(-1);
  const handleSubmit = useCallback((values: any) => {
    const value = (values.monto * values.TNA) / 100;
    const rest = ((value * values.plazo) / 365).toFixed(2);

    alert(
      `Mi capital es : ${values.monto} y mi ganancia por  ${values.plazo}  es de $${rest}`
    );
  }, []);

  return (
    <Container>
      <ContainerSection>
        <ContainerForm>
        <Title>Finance UNLZ</Title>
          <Form onSubmit={handleSubmit}>
            {({ handleSubmit, valid, values }) => (
              <form onSubmit={handleSubmit}>
                <LabelName>Monto (pesos) *</LabelName>
                <Field
                  name="monto"
                  component={NumericInput}
                  variant="outlined"
                  validate={required}
                />
                <LabelName>Plazo (dias) *</LabelName>
                <Field
                  name="plazo"
                  component={NumericInput}
                  variant="outlined"
                  validate={required}
                />
                <LabelName>TNA% *</LabelName>
                <Field
                  name="TNA"
                  component={NumericInput}
                  variant="outlined"
                  validate={required}
                />
                <ContainerButton>
                  <Button
                    disabled={!valid}
                    type="submit"
                    hierarchy="primary"
                    label="Calcular"
                    fullWidth
                  />
                </ContainerButton>
              </form>
            )}
          </Form>
        </ContainerForm>
      </ContainerSection>
    </Container>
  );
};

export default Finance;
