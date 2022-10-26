import React, { useCallback, useState, useMemo } from "react";
import { SidebarContainer } from "./styles";
import { SideBarProps } from "./types";
import SideBarNode from "./SideBarNode/SideBarNode";

export const SideBar: React.FC<SideBarProps> = ({
  testId,
  isOpen,
  isMobile,
  onClose,
}) => {
  const [openNode, setOpenNode] = useState<number>(null);

  const toggleNode = useCallback(
    (index: number) => () => {
      setOpenNode((prevState: number) => {
        if (prevState === index) return null;
        return index;
      });
    },
    []
  );

  const selectNode = useCallback(
    (index: number) => () => {
      setOpenNode((prevState: number) => {
        if (prevState === index) return null;
        return index;
      });
    },
    []
  );

  const handleItems = useMemo(
    () => [
      {
        iconName: "archive",
        path: "/Menu",
        name: "Nuestro Menu",
        content: { label: "Menu", path: "/Menu", iconName: "archive" },
      },
      {
        iconName: "search",
        path: "/Contacto",
        name: "Contacto",
        content: { label: "contacto", path: "/Contacto", iconName: "search" },
      },
    ],
    []
  );

  return (
    <SidebarContainer data-testid={testId} isOpen={isOpen} isMobile={isMobile}>
      {handleItems.map((child) => (
        <SideBarNode
          key={child.name}
          iconName={child.iconName}
          name={child.name}
          path={child.path}
          content={child.content}
          opened
        />
      ))}
    </SidebarContainer>
  );
};

export default SideBar;
