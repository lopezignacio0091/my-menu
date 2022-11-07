import React, { useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BasicIcon from "../../../../BasicIcon/BasicIcon";
import SideBarItem from "../SideBarItem/SideBarItem";
import {
  IconContainer,
  SibebarNodeContent,
  SibebarNodeLabel,
  SidebarNodeBox,
  SidebarNodeContainer,
} from "./styles";
import { SideBarNodeProps } from "./types";

export const SideBarNode: React.FC<SideBarNodeProps> = ({
  testId,
  name,
  iconName,
  opened = false,
  action,
  children,
  onClose,
  path,
  selectNode,
  history,
  content,
  isView=true,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const itemContainerRef = useRef(null);
  const active = location?.pathname.startsWith(path);

  const onClick = useCallback(() => {
    if (path) {
      if (onClose) onClose();
    }
    if (action) {
      action();
    } else if (path) {
      navigate(path);
    }
  }, [path, action, onClose, navigate]);

  const sidebar = {
    background: "#FFFFFF",
    color: "#2D2D2D",
    node: {
      color: "#2D2D2D",
      active: "#FF6C0E",
    },
    item: {
      active: "#FF6C0E",
      color: "#2D2D2D",
    },
  };

  return (
    <>
      {isView && (
        <SidebarNodeContainer data-testid={testId}>
          <SidebarNodeBox onClick={onClick}>
            <BasicIcon
              name={iconName}
              color={
                (path || action) && active
                  ? sidebar.node.active
                  : sidebar.node.color
              }
            />
            <SibebarNodeLabel
              opened={opened}
              active={(path || action) && active}
            >
              {name}
            </SibebarNodeLabel>
            {children && !path && !action && (
              <IconContainer isOpen={opened}>
                <BasicIcon name="chevron-down" color={sidebar.node.color} />
              </IconContainer>
            )}
          </SidebarNodeBox>

          <SibebarNodeContent
            maxHeight={itemContainerRef.current?.offsetHeight}
            opened={opened}
          >
            <div ref={itemContainerRef}>
              <SideBarItem label={content?.label} path={content.path} />
            </div>
          </SibebarNodeContent>
        </SidebarNodeContainer>
      )}
    </>
  );
};

export default SideBarNode;
