import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";
import { isLoguedSelector } from "../../reducers/login/selectors";

const ProtectedRoutes = (props: any) => {
  const auth = useSelector(isLoguedSelector);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
