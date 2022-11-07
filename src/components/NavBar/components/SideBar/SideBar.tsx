import React, { useCallback, useState, useMemo } from "react";
import { SidebarContainer } from "./styles";
import { SideBarProps } from "./types";
import SideBarNode from "./SideBarNode/SideBarNode";
import { isAdminSelector } from "../../../../reducers/login/selectors";
import { useSelector } from "react-redux";

export const SideBar: React.FC<SideBarProps> = ({
  testId,
  isOpen,
  isMobile,
  onClose,
}) => {
  const [openNode, setOpenNode] = useState<number>(null);
  const isAdmin = useSelector(isAdminSelector);
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
      {
        iconName: "badge-check",
        path: "/order",
        name: "Mi pedido",
        content: { label: "Mi pedido", path: "/order", iconName: "search" },
      },
      {
        iconName: "badge-check",
        path: "/manager",
        name: "Admin",
        isViev:isAdmin,
        content: { label: "Admin", path: "/manager", iconName: "search" },
      },
    ],
    [isAdmin]
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
          onClose={onClose}
          isView={child?.isViev}
        />
      ))}
    </SidebarContainer>
  );
};

export default SideBar;
