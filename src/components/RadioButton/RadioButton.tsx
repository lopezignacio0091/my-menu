import React, { useCallback, useContext, useMemo, useRef } from "react";
import { RadioButtonProps } from "./types";
import { Label, RadioContainer, Input, Span } from "./styles";

const RadioButton = ({
  label,
  value,
  status = "default",
  onChange,
  input,
  testId,
  disabled,
  checked,
  isMobile,
  size = "medium",
}: RadioButtonProps) => {
  const inputRef: React.Ref<HTMLInputElement> = useRef(null);
  const inputName = useMemo(() => input?.name, [input?.name]);
  const inputValue = useMemo(
    () => input?.value || value,
    [input?.value, value]
  );

  const handleChange = useCallback(() => {
    if (disabled) return;
    if (onChange) onChange(value);
    if (input) input.onChange(input.value);
  }, [onChange, value, input, disabled]);

  const handleLabelClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, [inputRef]);

  return (
    <RadioContainer data-testid={testId} isMobile={isMobile}>
      <Input
        ref={inputRef}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        type="radio"
        data-testid="input-id"
        disabled={disabled}
        checked={checked}
        inputSize={size}
        id="input"
        status={status}
      />
      <Span size={size} status={status} />
      <Label
        size={size}
        role="presentation"
        onClick={handleLabelClick}
        data-testid="label-test"
        id="label-test"
      >
        {label}
      </Label>
    </RadioContainer>
  );
};

export default RadioButton;
