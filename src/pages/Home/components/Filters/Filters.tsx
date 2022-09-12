import React, { useMemo, useCallback } from "react";
import { Field, Form } from "react-final-form";
import BasicIcon from "../../../../components/BasicIcon/BasicIcon";
import SelectInput from "../../../../components/SelectInput/SelectInput";
import TextInput from "../../../../components/TextInput/TextInput";
import { actions as recipesAction } from "../../../../reducers/recipes/actions";
import { InputContainer, SelectContainer } from "./styles";
import { useDispatch } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
  const handleInitValues = useMemo(
    () => [
      { id: 1, name: "Todos" },
      { id: 2, name: "Cocinados" },
      { id: 2, name: "No cocinados" },
    ],
    []
  );
  const handleSelect = useCallback(
    ({ name }: any) => {
      dispatch(
        name === "Todos"
          ? recipesAction.recipesRequest()
          : recipesAction.filterRequest({
              value: name === "Cocinados" ? true : false,
              filter: "cooked",
            })
      );
    },
    [dispatch]
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
              onChange={handleSelect}
              isValueObject
            />
          </SelectContainer>
        </form>
      )}
    </Form>
  );
};
export default Filters;
