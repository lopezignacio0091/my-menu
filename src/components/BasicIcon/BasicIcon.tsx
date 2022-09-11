import { useCallback } from "react";
import { icons } from "./icons";
import { IconProps } from "./types";
import { SvgContainer } from "./styles";

const BasicIcon = ({
  id,
  name,
  size = "medium",
  color = "#4d4d4d",
  onClick,

}: IconProps) => {
  const Icon = icons[name];
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <SvgContainer
      id={id}
      color={color}
      size={size}
      data-testid={id || "icon-test-id"}
      onClick={handleClick}
      clickable={!!onClick}
    >
      <Icon height={"21"} width={"21"} viewBox="0 0 24 24" />
    </SvgContainer>
  );
};

export default BasicIcon;
