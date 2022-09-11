import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  MouseEvent as ReactMouseEvent,
} from "react";
import { ButtonProps } from "./types";
import {
  ButtonContainer,
  ButtonText,
  SubmittingContainer,
  Button as StyledButton,
  Spinner,
} from "./styles";
import BasicIcon from "../BasicIcon/BasicIcon";

/**
 * @param buttonColor
 * @param label
 * @param onClick
 * @param type
 * @param isSubmitting
 * @param submitSuccess
 * @param submitFailure
 * @param disabled
 * @param icon
 * @param fullWidth
 */
const Button: React.FC<ButtonProps> = (props) => {
  const {
    label,
    onClick,
    type,
    status = "default",
    hierarchy = "primary",
    size = "medium",
    isSubmitting,
    disabled,
    dataTestIdButton,
    iconName,
    iconPosition = "left",
    fullWidth,
    circle = false,
  } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const intervalRef = useRef<number | number>(null);
  const [loaderWidth, setLoaderWidth] = useState(0);

  const handleClick = useCallback(
    (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!isSubmitting && onClick) onClick(event);
    },
    [isSubmitting, onClick]
  );

  useEffect(() => {
    if (isSubmitting) {
      intervalRef.current = window.setInterval(() => {
        setLoaderWidth((preWidth) => {
          if (preWidth > 100) return preWidth;
          return preWidth + 2;
        });
      }, 100);
    } else {
      clearInterval(intervalRef.current);
      setLoaderWidth(0);
    }
  }, [isSubmitting]);

  return (
    <StyledButton
      ref={buttonRef}
      id="button-id"
      type={type}
      onClick={handleClick}
      status={status}
      hierarchy={hierarchy}
      size={size}
      isSubmitting={isSubmitting}
      fullWidth={fullWidth}
      hasIcon={!!iconName}
      iconPosition={iconPosition}
      disabled={
        disabled || (isSubmitting && hierarchy !== "minimal" && !iconName)
      }
      data-testid={dataTestIdButton}
      data-loader={iconName && isSubmitting}
      circle={circle}
    >
      <ButtonContainer>
        {iconName && !isSubmitting && (
          <BasicIcon name={iconName} size={size} data-testid="icon-test-id" />
        )}
        {iconName && isSubmitting && (
          <Spinner status={status} size={size} hierarchy={hierarchy} />
        )}
        {label && <ButtonText>{label}</ButtonText>}
      </ButtonContainer>
      {isSubmitting && hierarchy !== "minimal" && !iconName && (
        <SubmittingContainer
          status={status}
          loaderWidth={loaderWidth}
          hasIcon={!!iconName}
        >
          {iconName && <BasicIcon name={iconName} size={size} />}
          {label && <ButtonText>{label}</ButtonText>}
        </SubmittingContainer>
      )}
    </StyledButton>
  );
};

export default Button;
