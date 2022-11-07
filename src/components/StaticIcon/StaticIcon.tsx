import {  useCallback } from "react";
import { icons } from "./icons";
import { StaticIconProps } from "./types";
import { SvgContainer } from "./styles";

const StaticIcon = ({
  name,
  size = "medium",
  testId = "icon-test-id",
  onClick,
}: StaticIconProps) => {
  const Icon = icons[name] || icons["user"];
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <SvgContainer
      size={size}
      data-testid={testId}
      onClick={handleClick}
      clickable={!onclick}
    >
      <Icon
        height="20"
        width="20"
        viewBox="0 0 24 24"
      />
    </SvgContainer>
  );
};

export default StaticIcon;
