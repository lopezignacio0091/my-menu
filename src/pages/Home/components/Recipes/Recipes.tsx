import React, { useCallback, useState } from "react";
import { Form, Field } from "react-final-form";
import BasicIcon from "../../../../components/BasicIcon/BasicIcon";
import TextInput from "../../../../components/TextInput/TextInput";
import {
  BodyRecipes,
  BoxRecipes,
  ContainerClose,
  ContainerRecipes,
  HeaderRecipes,
  TitleRecipes,
  LabelName,
  BoxIngredients,
  ContainerIngredients,
  ContentIngredients,
  NumberContainer,
  InputContainer,
  PreparationContainer,
  ReviewContainer,
  ContainerSwicht,
  ContainerButton,
} from "./styles";
import { required } from "../../../../utils/validations";
import { RecipeProps } from "./types";
import TextAreaInput from "../../../../components/TextAreaInput/TextAreaInput";
import RadioButton from "../../../../components/RadioButton/RadioButton";
import ToggleSwitch from "../../../../components/ToggleSwitch/ToggleSwitch";
import Button from "../../../../components/Button/Button";

const COLOR_ADD = "#8DC63F";
const COLOR_DELETE = "#F7941D";

export const Recipes: React.FC<RecipeProps> = ({
  open,
  close,
  isEdit,
  create,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countIngredients, setCountIngredients] = useState<Array<number>>([1]);
  const handleClose = useCallback(() => close(), [close]);

  const onSubmit = useCallback(
    (values: any) => {
      setIsSubmitting(true);
      create(values);
      close();
    },
    [close, create]
  );

  // FUNCTION SET  ICON
  const handleNameIcon = useCallback(
    (isLast: boolean) => (isLast ? "add" : "trash"),
    []
  );

  // FUNCTION SET COLOR ICON
  const handleColorIcon = useCallback(
    (isLast: boolean) => (isLast ? COLOR_ADD : COLOR_DELETE),
    []
  );
  //FUNCTION TO ADD INGREDIENTS
  const handleAddCount = useCallback(() => {
    setCountIngredients((value) => [...value, value.length + 1]);
  }, []);
  //   FUNCTION TO DISCOUNT INGREDIENTS
  const handleDiscount = useCallback(() => {
    setCountIngredients((value) => value.slice(0, -1));
  }, []);
  const formatFormRadio = useCallback(() => (value: any) => value, []);
  const parseFormRadio = useCallback((elem: number) => () => elem, []);
  // FUCTION CHECKED DISABLED


  //RENDER REVIEWS
  const handleReviews = useCallback(
    (values: any) => (
      <>
        <ReviewContainer>
          {[1, 2, 3, 4].map((elem) => (
            <Field
              key={elem}
              name="score"
              checked={values?.score === elem}
              component={RadioButton}
              label={elem}
              format={formatFormRadio()}
              parse={parseFormRadio(elem)}
            />
          ))}
        </ReviewContainer>
      </>
    ),
    [formatFormRadio, parseFormRadio]
  );

  //   RENDER INGREDIENTS
  const handleIngredients = useCallback(() => {
    return countIngredients.map((elem: any, index) => (
      <ContentIngredients key={elem}>
        <NumberContainer>{index + 1}</NumberContainer>
        <InputContainer>
          <Field
            name={`ingredients.${index}`}
            component={TextInput}
            placeholder="Titulo"
            validate={required}
            variant="outlined"
          />
        </InputContainer>
        <BasicIcon
          name={handleNameIcon(index + 1 === countIngredients.length)}
          color={handleColorIcon(index + 1 === countIngredients.length)}
          onClick={
            countIngredients.length <= 1
              ? handleAddCount
              : index + 1 === countIngredients.length
              ? handleAddCount
              : handleDiscount
          }
        />
      </ContentIngredients>
    ));
  }, [
    countIngredients,
    handleNameIcon,
    handleColorIcon,
    handleAddCount,
    handleDiscount,
  ]);

  return (
    <ContainerRecipes isOpen={open}>
      <BoxRecipes>
        <HeaderRecipes>
          <TitleRecipes>Nueva Receta</TitleRecipes>
          <ContainerClose>
            <BasicIcon name="x" onClick={handleClose} />
          </ContainerClose>
        </HeaderRecipes>
        <BodyRecipes>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, valid, values }) => (
              <form onSubmit={handleSubmit}>
                <LabelName>Nombre de la receta</LabelName>
                <Field
                  name="name"
                  component={TextInput}
                  placeholder="Titulo *"
                  variant="outlined"
                  validate={required}
                />
                <BoxIngredients>
                  <LabelName>Ingredientes</LabelName>
                  <ContainerIngredients>
                    {handleIngredients()}
                  </ContainerIngredients>
                </BoxIngredients>
                <LabelName>Preparacion</LabelName>
                <PreparationContainer>
                  <Field
                    name="instructions"
                    component={TextAreaInput}
                    placeholder="Intrucciones *"
                    validate={required}
                  />
                </PreparationContainer>
                <LabelName>Reseña</LabelName>
                {handleReviews(values)}
                <LabelName>Cocinado antes</LabelName>
                <ContainerSwicht>
                  <Field name="cooked" component={ToggleSwitch} />
                </ContainerSwicht>
                <ContainerButton>
                  <Button
                    disabled={!valid || isSubmitting}
                    type="submit"
                    hierarchy="primary"
                    label="Crear"
                  />
                </ContainerButton>
              </form>
            )}
          </Form>
        </BodyRecipes>
      </BoxRecipes>
    </ContainerRecipes>
  );
};
