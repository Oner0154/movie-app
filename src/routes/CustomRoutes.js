import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";
import PrivateRoute from "./PrivateRoutes";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <SearchPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/movie/:movieId"
        element={
          <PrivateRoute>
            <DetailPage />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default CustomRoutes;
