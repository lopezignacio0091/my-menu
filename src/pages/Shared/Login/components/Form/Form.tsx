import React, { useCallback, useState } from "react";
import { Form, Field } from "react-final-form";
import BasicIcon from "../../../../../components/BasicIcon/BasicIcon";
import Button from "../../../../../components/Button/Button";
import TextInput from "../../../../../components/TextInput/TextInput";
import { useDispatch, useSelector } from 'react-redux';
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
  ErrorLabel,
  LabelName,
  Title,
} from "./styles";
import { actions as loginActions } from '../../../../../reducers/login/actions';
import { errorSelector, errorMessageSelector } from '../../../../../reducers/login/selectors';

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(errorSelector);
  const errorMessage  = useSelector(errorMessageSelector);
  const dispatch = useDispatch();

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);
  const handleSubmit = useCallback(
    (values: any) => {
      dispatch(loginActions.loginRequest(values));
      
      // navigate("/home");
      // // alert(`Bienvenido a Coffe.TI ${JSON.stringify(values)}`)
    },

    [dispatch]
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
              name="password"
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
            {error && <ErrorLabel>{errorMessage}</ErrorLabel>}
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
