import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";
import { userSelector } from "../../reducers/login/selectors";

const ProtectedRoutes = (props: any) => {
  const auth = useSelector(userSelector);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
