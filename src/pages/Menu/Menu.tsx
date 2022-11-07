import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMobileOnly } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import Routes from "../../constants/Routes";
import NavBar from '../../components/NavBar/NavBar';
import { userSelector } from "../../reducers/login/selectors";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const handleLogout = useCallback(() => {}, []);

  const contextMenu: any[] = [
    {
      label: user.name,
      subLabel: user.email,
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
