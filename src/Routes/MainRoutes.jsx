import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage";
import MoviePage from "../Pages/MoviePage/MoviePage";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";

const MainRoute = () => {
  console.log('mainRoute')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path={"/movies"} element={<PrivateRoute />}>
          <Route path="/movies" element={<MoviePage />} />
        </Route>
        <Route path={"/movies/:id"} element={<PrivateRoute />}>
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoute;
