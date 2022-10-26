import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Menu from "../MenuFood/MenuFood";
import ProtectedRoutes from "./ProtectedRoute";

const PrivateRoute = () => {
  return (
    <>
      <Routes>
        <Menu />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default PrivateRoute;
