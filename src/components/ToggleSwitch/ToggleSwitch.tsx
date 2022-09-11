import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToggleSwitchProps } from './types';
import {
  InputContainer,
  Label,
  LabelOff,
  LabelOn,
  SwitchContainer,
  Toggle,
  ToggleCheckbox,
  ToggleSwitchButton,
} from './styles';

/**
 * ToggleSwitch.
 *
 * Usage:
 * ```
 *  @param label= Text shown above the switch button
 *  @param labelOn= Text for the "true" value, shown to the right of the switch button
 *  @param labelOff= Text for the "false" value, shown to the left of the switch button
 *  @param disabled= If "true", the input element will be disabled
 *  @param name= Name attribute of the input element
 *  @param id= The id of the input element
 *  @param input= Object from React Final Form
 *  @param value= Indicates if it's ckecked or not
 *  @param onChange= Callback fired when the value is changed <<function(value: boolean) => void>>
 *  @param dataTestId= Id used for component tests
 *
 * ```
 */
const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => {
  const {
    label,
    labelOff,
    labelOn,
    value,
    name,
    id,
    input,
    disabled,
    dataTestId,
    onChange,
    width,
    status = 'default',
  } = props;


  const [active, setActive] = useState(false);
  const inputRef: React.Ref<HTMLInputElement> = useRef(null);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        if (onChange) {
          onChange(event.target.checked);
          setActive(event.target.checked);
        }
        if (input) {
          input.onChange(event.target.checked);
          setActive(event.target.checked);
        }
      }
    },
    [disabled, input, onChange],
  );

  const handleSpan = useCallback(() => {
    inputRef.current.click();
  }, [inputRef]);

  useEffect(() => {
    setActive(input ? input.value : value);
  }, [input, value]);

  return (
      <SwitchContainer width={width} data-testid={dataTestId}>
        {labelOff && <LabelOff>{labelOff}</LabelOff>}
        <InputContainer>
          {label && (
            <Label>
              <div>{label}</div>
            </Label>
          )}
          <ToggleCheckbox
            {...input}
            ref={inputRef}
            name={name}
            id={id}
            type="checkbox"
            checked={input ? input.value : value}
            onChange={handleChange}
            disabled={disabled}
          />
          <ToggleSwitchButton
            onClick={handleSpan}
            type="button"
            toggled={active}
            disabled={disabled}
            status={status}
          >
            <Toggle toggled={active} />
          </ToggleSwitchButton>
        </InputContainer>
        {labelOn && <LabelOn>{labelOn}</LabelOn>}
      </SwitchContainer>
  );
};

export default ToggleSwitch;
