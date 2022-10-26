import React from "react";
import { ContainerLogin, Image, ContainerForm } from "./styles";

import FormLogin from "./components/Form/Form";

const Login = () => {
  return (
    <ContainerLogin>
      <Image />
      <ContainerForm>
        <FormLogin />
      </ContainerForm>
    </ContainerLogin>
  );
};

export default Login;
