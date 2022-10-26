import React, { useCallback, useState } from "react";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import BasicIcon from "../../../../../components/BasicIcon/BasicIcon";
import Button from "../../../../../components/Button/Button";
import TextInput from "../../../../../components/TextInput/TextInput";
import {
  email,
  joinValidations,
  required,
} from "../../../../../utils/validations";
import {
  ContainerButton,
  ContainerForm,
  ContainerMore,
  Divider,
  LabelName,
  Title,
} from "./styles";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);
  const handleSubmit = useCallback(
    (values: any) => {
      localStorage.setItem("user", "test");
      navigate("/home");
      // alert(`Bienvenido a Coffe.TI ${JSON.stringify(values)}`)
    },

    [navigate]
  );
  return (
    <ContainerForm>
      <Title>Gestionnar.TI</Title>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit, valid, values }) => (
          <form onSubmit={handleSubmit}>
            <LabelName>Email *</LabelName>
            <Field
              name="email"
              component={TextInput}
              variant="outlined"
              validate={joinValidations([required, email])}
            />
            <LabelName>Password *</LabelName>
            <Field
              name="pasword"
              variant="outlined"
              component={TextInput}
              validate={required}
              textType={showPassword ? "text" : "password"}
              showClearIcon={false}
              iconComponent={
                <BasicIcon
                  name={showPassword ? "eye-off" : "eye"}
                  onClick={toggleShowPassword}
                />
              }
            />
            <Divider />
            <ContainerMore>
              <Button
                type="button"
                hierarchy="minimal"
                label="Ingresa con Google"
                iconPosition="left"
                size="medium"
                iconName="google"
              />
            </ContainerMore>
            <ContainerButton>
              <Button
                disabled={!valid}
                type="submit"
                hierarchy="primary"
                label="Ingresar"
                fullWidth
              />
            </ContainerButton>
          </form>
        )}
      </Form>
    </ContainerForm>
  );
};

export default FormLogin;
