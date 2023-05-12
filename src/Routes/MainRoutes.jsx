import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HistoriqueMoviePage from "../Pages/HistoriqueMoviePage/HistoriqueMoviePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage";
import MoviePage from "../Pages/MoviePage/MoviePage";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";

const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path={"/movies"} element={<PrivateRoute />}>
          <Route path="/movies" element={<MoviePage />} />
        </Route>
        <Route path={"/movies/historique"} element={<PrivateRoute />}>
          <Route path="/movies/historique" element={<HistoriqueMoviePage />} />
        </Route>
        <Route path={"/movies/:id"} element={<PrivateRoute />}>
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoute;
