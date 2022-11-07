import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Shared/Login/Login";
import Home from "../Home/Home";
import Manager from "../Manager/Manager";
import Menu from "../Menu/Menu";
import ProtectedRoutes from "./ProtectedRoute";
import PublicRoutes from "./PublicRoute";
import MenuFood from "../MenuFood/MenuFood";
import { useSelector } from "react-redux";
import { userSelector } from "../../reducers/login/selectors";
import Order from "../Order/Order";


const MainRoute = () => {
  const isAuth = useSelector(userSelector);

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
          <Route path="manager" element={<Manager />} />
          <Route path="order" element={<Order />} />
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
