import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardOrganisme from "../../Organisme/CardOrganisme/CardOrganisme";
import { getMovieDetail } from "../../Api/Movies/MovieApi";

const MoviePage = () => {
  console.log('moviePage')
  const navigate = useNavigate();
  const listMovies = useSelector((state) => state.movies.listMovies);
  const [movieDetails, setMovieDetails] = useState();

  const getMovie = async (id) => {
    const response = await getMovieDetail(id);
    if (response["Title"]) {
      setMovieDetails(response);
      navigate(`/movies/${id}`);
    }
  };

  return (
    <div className={"row"}>
      {listMovies &&
        listMovies.map((movie, index) => (
          <CardOrganisme
            key={index}
            onClick={() => getMovie(movie.id)}
            movieDetails={movieDetails}
            movie={movie}
          />
        ))}
    </div>
  );
};

export default MoviePage;
