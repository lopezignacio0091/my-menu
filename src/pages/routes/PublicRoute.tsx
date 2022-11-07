import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";
import { userSelector } from "../../reducers/login/selectors";

const PublicRoutes = (props: any) => {
  const auth = useSelector(userSelector);
  
  return auth ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;
