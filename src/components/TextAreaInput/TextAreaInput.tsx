import React, { useCallback, useMemo, useEffect, useRef } from 'react';
import { TextAreaInputProps } from './types';
import {
  CharCounter,
  ErrorMessage,
  HelperContainer,
  HelperText,
  LengthMessage,
  TextArea,
  TextAreaContainer,
  TextAreaWrapper,
} from './styles';
import BasicIcon from '../BasicIcon/BasicIcon';

const TextAreaInput: React.FC<TextAreaInputProps> = (props) => {
  const {
    input,
    meta,
    placeholder,
    onChange,
    value,
    readOnly,
    disabled,
    maxLength,
    maxLengthMessage,
    helperText,
    // testId,
    rows = 3,
    onBlur,
    onFocus,
    onMouseDown,
    isMobile
  } = props;

  const hasError = useMemo(() => meta && meta.invalid && meta.touched, [meta]);
  const inputValue = useMemo(() => value ?? input.value, [input.value, value]);
  const isMaxLength = useMemo(() => maxLength > 0 && inputValue.length >= maxLength, [
    inputValue.length,
    maxLength,
  ]);

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (onChange) {
      onChange(input.value);
    }
  }, [input.value, onChange]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (input) {
        input.onChange(event.target.value);
      }
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [input, onChange],
  );

  const handleBlur = useCallback(() => {
    if (!disabled && !readOnly) {
      if (onBlur) onBlur();
      if (input) input.onBlur();
    }
  }, [input, onBlur, disabled, readOnly]);

  const handleFocus = useCallback(() => {
    if (!disabled && !readOnly) {
      if (onFocus) onFocus();
      if (input) input.onFocus();
    }
  }, [input, onFocus, disabled, readOnly]);

  const handleMouseDown = useCallback(
    () => onMouseDown && !disabled && !readOnly && onMouseDown(),
    [onMouseDown, disabled, readOnly],
  );

  const showHelperOrError = useCallback(() => {
    if (hasError) {
      return (
        <>
          <BasicIcon size="extra-small" name="advertence" color={"#FF1515"} />
          <ErrorMessage>{meta.error}</ErrorMessage>
        </>
      );
    }

    if (isMaxLength && maxLengthMessage) {
      return (
        <>
          <BasicIcon
            size="extra-small"
            name="advertence"
            color={disabled ? '#B8B8B8': '#808080'}
          />
          <LengthMessage disabled={disabled}>{maxLengthMessage}</LengthMessage>ß
        </>
      );
    }

    if (helperText) return <HelperText disabled={disabled}>{helperText}</HelperText>;

    return null;
  }, [
    hasError,
    isMaxLength,
    maxLengthMessage,
    helperText,
    disabled,

    meta.error,
  ]);

  return (
      <>
        <TextAreaContainer
          hasError={hasError}
          rows={rows}
          maxLength={isMaxLength}
          disabled={disabled}
        >
          <TextAreaWrapper>
            <TextArea
              isMobile={isMobile}
              hasError={hasError}
              placeholder={placeholder}
              readOnly={readOnly || disabled}
              {...input}
              disabled={disabled}
              value={inputValue}
              onChange={handleChange}
              data-testid="textarea-input-id"
              ref={textAreaRef}
              rows={rows}
              maxLength={maxLength}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onMouseDown={handleMouseDown}
            />
          </TextAreaWrapper>
        </TextAreaContainer>
        <HelperContainer>
          {(helperText || hasError || isMaxLength) && showHelperOrError()}
          {maxLength > 0 && (
            <CharCounter hasError={hasError} disabled={disabled}>
              {`${inputValue.length}/${maxLength}`}
            </CharCounter>
          )}
        </HelperContainer>
      </>
  );
};

export default TextAreaInput;
