import React, { useCallback, useContext, useMemo, useState } from "react";
import { NumericInputProps } from "./types";
import Input from "../Input/Input";
import { AddOn } from "./styles";

const NumericInput: React.FC<NumericInputProps> = (props) => {
  const {
    input,
    meta,
    placeholder,
    label,
    readOnly,
    disabled,
    testId,
    size,
    variant = "underline",
    helperText,
    showClearIcon,
    value,
    allowDecimal = true,
    negative,
    leftAddOn,
    rightAddOn,
    maxLength = 15,
    maxDecimal = allowDecimal ? 2 : null,
    onChange,
    onBlur,
    onFocus,
    onMouseDown,
  } = props;

  const decimalSeparators = [".", ","];

  if (!allowDecimal && maxDecimal) {
    throw new Error(
      "The NumericInput component can't have maxDecimal if allowDecimal is false."
    );
  }
  const [internalValue, setInternalValue] = useState({
    internalValue: input ? input.value : value,
    isActive: false,
  });

  const decimalRegex = useMemo(
    () =>
      maxDecimal
        ? new RegExp(`^[0-9]*[.,]?[0-9]{0,${maxDecimal}}$`)
        : /^[0-9]*[.,]?[0-9]*$/,
    [maxDecimal]
  );

  const validDecimal = useCallback(
    (valueInput: string) =>
      valueInput &&
      decimalRegex.test(valueInput) &&
      valueInput.length <= maxLength,
    [decimalRegex, maxLength]
  );

  const handleNumberValidation = useCallback(
    (valueInput: string) => {
      let emitValue;
      if (allowDecimal && validDecimal(valueInput)) {
        const noComaValue = valueInput.replace(",", ".");
        emitValue = parseFloat(noComaValue);
      } else if (
        /^\d+\d*$/.test(valueInput) &&
        valueInput.length <= maxLength
      ) {
        emitValue = parseFloat(valueInput);
      }

      emitValue =
        negative && valueInput.length <= maxLength
          ? Math.abs(emitValue)
          : emitValue;

      return emitValue ?? "";
    },
    [allowDecimal, maxLength, negative, validDecimal]
  );

  const handleChange = useCallback(
    (newValue: string) => {
      const checkedValue = handleNumberValidation(newValue);
      if (newValue === "" || typeof checkedValue === "number") {
        setInternalValue({
          internalValue: newValue,
          isActive: true,
        });
        if (input) input.onChange(checkedValue);
        if (onChange) onChange(checkedValue);
      }
    },
    [handleNumberValidation, input, onChange]
  );

  const handleClear = useCallback(() => {
    if (input) {
      input.onChange("");
    }
  }, [input]);

  const handleBlur = useCallback(() => {
    if (decimalSeparators.includes(internalValue.internalValue)) {
      setInternalValue({
        internalValue: 0,
        isActive: false,
      });
      if (input) input.onChange(0);
      onChange(0);
    } else {
      setInternalValue({
        internalValue: input ? input.value : value,
        isActive: false,
      });
    }
    if (input) {
      input.onBlur();
    }
    onBlur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, onBlur, onChange, value]);

  const handleFocus = useCallback(() => {
    setInternalValue({
      internalValue: input ? input.value : value,
      isActive: true,
    });
    onFocus();
  }, [input, onFocus, value]);

  const variableToShow = useMemo(
    () =>
      internalValue.isActive
        ? internalValue.internalValue.toString()
        : input.value,
    [input.value, internalValue.internalValue, internalValue.isActive]
  );

  return (
    <Input
      testId={testId}
      label={label}
      readOnly={readOnly || disabled}
      disabled={disabled}
      value={variableToShow}
      input={input}
      meta={meta}
      data-testid="input-test"
      autoComplete="off"
      size={size}
      variant={variant}
      helperText={helperText}
      showClearIcon={showClearIcon}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={handleChange}
      onClear={handleClear}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseDown={onMouseDown}
      leftAddOn={<AddOn>{leftAddOn}</AddOn>}
      rightAddOn={<AddOn>{rightAddOn}</AddOn>}
      isMobile={false}
    />
  );
};

export default NumericInput;
