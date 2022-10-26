import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMobileOnly } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import Routes from "../../constants/Routes";
import NavBar from '../../components/NavBar/NavBar';

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {}, []);

  const contextMenu: any[] = [
    {
      label: "Admin",
      subLabel: "Admin",
      highlighted: true,
    },
    {
      iconName: "logout",
      label: "Cerrar sesión",
      action: handleLogout,
    },
  ];

  const goIndex = useCallback(() => {
    navigate(Routes.INDEX);
  }, [navigate]);

  return (
    <NavBar
      logoOnClick={goIndex}
      contextMenu={contextMenu}
    //   notifications={notifications}
    //   readAll={handleMarkAsRead}
      isMobile={isMobileOnly}
      />
    
  );
};

export default Menu;
