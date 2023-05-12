import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardOrganisme from "../../Organisme/CardOrganisme/CardOrganisme";
import { getMovieDetail } from "../../Api/Movies/MovieApi";
import { setHistorique, setMovieDetails } from "../../Redux/Actions/movieActions";

const MoviePage = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const listMovies = useSelector((state) => state.movies.listMovies);

  const getMovie = async (id) => {
    const response = await getMovieDetail(id);
    if (response["Title"]) {
      dispatch(setMovieDetails(response))
      dispatch(setHistorique(response))
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
            movie={movie}
          />
        ))}
    </div>
  );
};

export default MoviePage;
