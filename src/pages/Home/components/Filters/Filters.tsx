import React, { useMemo, useCallback } from "react";
import { Field, Form } from "react-final-form";
import BasicIcon from "../../../../components/BasicIcon/BasicIcon";
import SelectInput from "../../../../components/SelectInput/SelectInput";
import TextInput from "../../../../components/TextInput/TextInput";
import { InputContainer, SelectContainer } from "./styles";

const Filters = () => {
  const handleInitValues = useMemo(
    () => [
      { id: 1, name: "Todos" },
      { id: 2, name: "Cocinados" },
      { id: 2, name: "No cocinados" },
    ],
    []
  );

  const onSubmit = useCallback(() => {}, []);
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, valid, values }) => (
        <form onSubmit={onSubmit}>
          <InputContainer>
            <Field
              name="Buscador"
              component={TextInput}
              label="Buscador"
              iconComponent={<BasicIcon name={"search"} />}
              variant="contained-label"
              iconPosition="left"
            />
          </InputContainer>
          <SelectContainer>
            <Field
              name="voucherType"
              component={SelectInput}
              label="Cocinar"
              options={handleInitValues}
              variant="contained-select"
            />
          </SelectContainer>
        </form>
      )}
    </Form>
  );
};
export default Filters;
