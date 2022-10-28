import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Shared/Login/Login";
import Home from "../Home/Home";
import Kitchen from "../Kitchen/Kitchen";
import Menu from "../Menu/Menu";
import ProtectedRoutes from "./ProtectedRoute";
import PublicRoutes from "./PublicRoute";
import MenuFood from "../MenuFood/MenuFood";
import { useSelector } from "react-redux";
import { isLoguedSelector } from "../../reducers/login/selectors";


const MainRoute = () => {
  const isAuth = useSelector(isLoguedSelector);

  return (
    <>
      {isAuth && <Menu />}
      <Routes>
        {/** Protected Routes */}
        {/** Wrap all Route under ProtectedRoutes element */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<MenuFood />} />
          <Route path="kitchen" element={<Kitchen />} />
        </Route>
        {/** Public Routes */}
        {/** Wrap all Route under PublicRoutes element */}
        <Route path="login" element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
