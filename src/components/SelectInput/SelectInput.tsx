/* eslint-disable no-nested-ternary */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { InputContainer } from "../Input/styles";
import Select from "../Select/Select";
import { SelectInputProps } from "./types";

/**
 *
 * @param placeholder
 * @param labeled
 * @param options [{id, name}, ...] by default
 * @param idProperty Name of the property asociated to 'id'. Default: 'id'
 * @param showProperty Name of the property asociated to label to show on each option. Default: 'name'
 * @param onChange
 * @param dropDownOnly If 'true' the behavior is like Select component
 * @param readOnly If 'true' the values cant be modified
 * @param disabled Its a boolean
 *
 */
const SelectInput: React.FC<SelectInputProps> = (props) => {
  const {
    input,
    options = [],
    disabled,
    keyProperty = "id",
    showProperty = "name",
    readOnly,
    testId = "select",
    dropDownOnly,
    isLoading,
    isValueObject,
    overlayPosition = "auto",
    onChange,
    onMouseDown,
    isMobile,
  } = props;

  const inputRef: React.Ref<HTMLInputElement> = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const optionSelected = useMemo(
    () => options.find((op) => op[keyProperty] === input?.value),
    [input?.value, keyProperty, options]
  );
  const [value, setValue] = useState(
    isValueObject
      ? input?.value[showProperty]
      : optionSelected && optionSelected[showProperty]
  );
  const [highlightedIndex, setHighlightedIndex] = useState({
    index: 0,
    id: "",
  });

  const handleClick = useCallback(() => {
    if (!disabled && !readOnly) {
      setIsOpen((prev) => !prev);
      if (onMouseDown) onMouseDown();
    }
  }, [disabled, onMouseDown, readOnly]);

  const handleChange = useCallback(
    (valueChange: any) => {
      if (input)
        input.onChange(isValueObject ? valueChange : valueChange[keyProperty]);
      if (onChange)
        onChange(isValueObject ? valueChange : valueChange[keyProperty]);
      setValue(valueChange[showProperty]);
      setIsOpen(false);
    },
    [input, keyProperty, onChange, showProperty, isValueObject]
  );

  const clearInput = useCallback(() => {
    handleChange("");
  }, [handleChange]);

  useEffect(() => {
    if (!input.value && input.value !== 0) {
      setValue(isValueObject ? undefined : "");
    } else {
      setValue(
        isValueObject
          ? input?.value[showProperty]
          : optionSelected && optionSelected[showProperty]
      );
    }
  }, [input.value, isValueObject, optionSelected, showProperty]);

  return (
    <InputContainer id="select-id" data-testid={testId}>
      <Select
        {...props}
        data-testid="input-test"
        autoComplete="off"
        inputRef={inputRef}
        readOnly={readOnly || dropDownOnly}
        value={value}
        options={options}
        highlightedIndex={highlightedIndex}
        isOpen={isOpen}
        typingAllowed={false}
        showProperty={showProperty}
        keyProperty={keyProperty}
        disabled={disabled || isLoading}
        overlayPosition={overlayPosition}
        onChange={handleChange}
        onClear={clearInput}
        onMouseDown={handleClick}
        setHighlightedIndex={setHighlightedIndex}
        onSelection={handleChange}
        setIsOpen={setIsOpen}
        expand={handleClick}
        isMobile={isMobile}
      />
    </InputContainer>
  );
};

export default SelectInput;
