import React, { useCallback, useMemo } from "react";
import { TextInputProps} from "./types";
import Input from "../Input/Input";

const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    input,
    meta,
    placeholder,
    label,
    textType = "text",
    readOnly,
    disabled,
    size,
    variant = "underline",
    helperText,
    showClearIcon,
    iconComponent,
    pattern,
    value,
    onChange,
    onBlur,
    onFocus,
    onMouseDown,
    isMobile,
    iconPosition = "right",
  } = props;

  const inputValue = useMemo(() => value ?? input.value, [input.value, value]);

  const handleChange = useCallback(
    (newValue: string) => {
      const patt = new RegExp(pattern);
      const isOneCharShorter = newValue.length === inputValue.length - 1;
      const isAlmostEqual =
        isOneCharShorter && inputValue.indexOf(newValue) === 0;
      if (patt.test(newValue) || isAlmostEqual) {
        if (input) input.onChange(newValue);
        if (onChange) onChange(newValue);
      }
    },
    [pattern, inputValue, input, onChange]
  );

  const handleClear = useCallback(() => {
    if (input) {
      input.onChange("");
    }
  }, [input]);

  const handlePosition = useMemo(
    () => (iconPosition === "right" ? iconComponent : undefined),
    [iconComponent, iconPosition]
  );
  const handlePositionLeft = useMemo(
    () => (iconPosition === "left" ? iconComponent : undefined),
    [iconComponent, iconPosition]
  );
  
  return (
    <Input
      label={label}
      readOnly={readOnly || disabled}
      disabled={disabled}
      value={inputValue}
      type={textType}
      input={input}
      meta={meta}
      data-testid="input-test"
      autoComplete="off"
      size={size}
      variant={variant}
      helperText={helperText}
      showClearIcon={showClearIcon}
      placeholder={placeholder}
      onChange={handleChange}
      onClear={handleClear}
      rightAddOn={handlePosition}
      leftAddOn={handlePositionLeft}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      isMobile={isMobile}
    />
  );
};

export default TextInput;
