/* eslint-disable no-nested-ternary */
import React, { useCallback, useMemo, useState } from "react";
import { InputProps } from "./types";
import BasicIcon from "../BasicIcon/BasicIcon";
import {
  Container,
  Icon,
  InputContainer,
  Input,
  Placeholder,
  Label,
  FixedLabel,
  HelperMessage,
  ErrorMessage,
  HelperContainer,
  AddOnContainer,
  BoxContainer,
} from "./styles";

const InputComponent: React.FC<InputProps> = (props) => {
  const {
    id,
    input,
    meta,
    value,
    placeholder,
    label,
    type = "text",
    readOnly,
    disabled = false,
    testId,
    size,
    variant = "underline",
    typingAllowed = true,
    isOpen,
    showClearIcon = true,
    helperText,
    pointer,
    leftAddOn,
    rightAddOn,
    inputRef,
    maxLength,
    onChange,
    onClear,
    onBlur,
    onFocus,
    onMouseDown,
    onKeyDown,
    isMobile,
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const hasError = useMemo(() => meta && meta.invalid && meta.touched, [meta]);
  const inputValue = useMemo(() => value ?? input.value, [input.value, value]);
  const hasIcon = useMemo(
    () => (showClearIcon && inputValue) || rightAddOn,
    [rightAddOn, inputValue, showClearIcon]
  );
  const inputSize = useMemo(() => {
    if (!size && isMobile) return "small";
    return size || "standard";
  }, [size, isMobile]);

  const handleClear = useCallback(() => {
    if (!disabled && !readOnly) {
      if (onClear) onClear();
      if (input) input.onBlur();
    }
  }, [input, onClear, disabled, readOnly]);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange && !disabled && typingAllowed && onChange(event.target.value),
    [onChange, disabled, typingAllowed]
  );
  const handleBlur = useCallback(() => {
    setIsFocus(false);
    if (!disabled && !readOnly) {
      if (onBlur) onBlur();
      if (input) input.onBlur();
    }
  }, [input, onBlur, disabled, readOnly, setIsFocus]);
  const handleFocus = useCallback(() => {
    setIsFocus(true);
    if (!disabled && !readOnly) {
      if (onFocus) onFocus();
      if (input) input.onFocus();
    }
  }, [input, onFocus, disabled, readOnly, setIsFocus]);
  const handleMouseDown = useCallback(() => {
    if (onMouseDown && !disabled && !readOnly) onMouseDown();
  }, [onMouseDown, disabled, readOnly]);

  const renderClearIcon = useCallback(() => {
    if (inputValue && showClearIcon) {
      return (
        <Icon
          disabled={disabled || readOnly}
          onClick={handleClear}
          data-testid="clear-icon-test"
        >
          <BasicIcon
            size="medium"
            name="x"
            color={hasError ? "red" : disabled ? "grey" : "white"}
          />
        </Icon>
      );
    }
    return null;
  }, [inputValue, hasError, handleClear, showClearIcon, disabled, readOnly]);

  const showRightAddOn = useCallback(() => rightAddOn || null, [rightAddOn]);

  const showLeftAddOn = useCallback(() => {
    if (leftAddOn) {
      return (
        <AddOnContainer
          size={inputSize}
          hasError={hasError}
          disabled={disabled}
        >
          {leftAddOn}
        </AddOnContainer>
      );
    }

    return null;
  }, [disabled, hasError, leftAddOn, inputSize]);

  const showHelperOrError = useCallback(() => {
    if (hasError) {
      return (
        <>
          <BasicIcon size="extra-small" name="advertence" color="red" />
          <ErrorMessage>{meta.error}</ErrorMessage>
        </>
      );
    }

    if (helperText)
      return <HelperMessage disabled={disabled}>{helperText}</HelperMessage>;

    return null;
  }, [hasError, helperText, meta.error, disabled]);

  return (
    <Container size={inputSize || "standard"} variant={variant}>
      {label && variant === "top-aligned-label" && (
        <FixedLabel
          hasError={hasError}
          size={inputSize || "standard"}
          disabled={disabled}
        >
          {label}
        </FixedLabel>
      )}
      <BoxContainer
        id={id}
        variant={variant}
        hasError={hasError}
        size={inputSize || "standard"}
        isOpen={isOpen}
        disabled={disabled}
        hasPlaceholder={!!placeholder}
        isFocus={isFocus}
      >
        {showLeftAddOn()}
        <InputContainer id="text-input-id">
          <Input
            {...input}
            readOnly={!typingAllowed || readOnly}
            disabled={disabled}
            value={inputValue}
            type={type}
            data-testid={testId}
            autoComplete="off"
            hasPlaceholder={!!placeholder}
            inputSize={inputSize || "standard"}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            pointer={pointer}
            onMouseDown={handleMouseDown}
            isOpen={isOpen}
            ref={inputRef}
            variant={variant}
            onKeyDown={onKeyDown}
            maxLength={maxLength}
          />
          {variant !== "top-aligned-label" && (
            <Label
              hasError={hasError}
              size={inputSize || "standard"}
              disabled={disabled}
            >
              {label}
            </Label>
          )}
          <Placeholder
            hide={inputValue}
            hasError={hasError}
            size={inputSize || "standard"}
          >
            {placeholder}
          </Placeholder>
        </InputContainer>
        {hasIcon && (
          <AddOnContainer
            size={inputSize}
            hasError={hasError}
            disabled={disabled}
          >
            {showRightAddOn()}
            {renderClearIcon()}
          </AddOnContainer>
        )}
      </BoxContainer>
      <HelperContainer>{showHelperOrError()}</HelperContainer>
    </Container>
  );
};

export default InputComponent;
