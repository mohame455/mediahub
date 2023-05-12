import React from "react";
import PropTypes from "prop-types";
import { Card, Text } from "../../Atom";

const CardOrganisme = (props) => {
  return (
    <Card className={"col-md-3"} onClick={props.onClick}>
      <Text text={props.movie?.Title} />
      <Text text={props.movie?.Distributor} />
    </Card>
  );
};

export default CardOrganisme;

CardOrganisme.propTypes = {
  onClick:PropTypes.func,
  isLoading: PropTypes.bool,
  isMovieDetails: PropTypes.bool,
  movieDetails: PropTypes.object,
  movie: PropTypes.object,
};
CardOrganisme.defaultProps = {
  onClick: null,
  movieDetails: {
		"Title": "Toy Story 3",
		"US Gross": 410640665,
		"Worldwide Gross": 1046340665,
		"US DVD Sales": null,
		"Production Budget": 200000000,
		"Release Date": "Jun 18 2010",
		"MPAA Rating": "G",
		"Running Time min": 102,
		"Distributor": "Walt Disney Pictures",
		"Source": "Original Screenplay",
		"Major Genre": "Adventure",
		"Creative Type": "Kids Fiction",
		"Director": null,
		"Rotten Tomatoes Rating": 99,
		"IMDB Rating": 8.9,
		"IMDB Votes": 67380,
		"id": 2987
	},
  movie: {
		"Title": "Toy Story 3",
		"US Gross": 410640665,
		"Worldwide Gross": 1046340665,
		"US DVD Sales": null,
		"Production Budget": 200000000,
		"Release Date": "Jun 18 2010",
		"MPAA Rating": "G",
		"Running Time min": 102,
		"Distributor": "Walt Disney Pictures",
		"Source": "Original Screenplay",
		"Major Genre": "Adventure",
		"Creative Type": "Kids Fiction",
		"Director": null,
		"Rotten Tomatoes Rating": 99,
		"IMDB Rating": 8.9,
		"IMDB Votes": 67380,
		"id": 2987
	},
  isLoading: false,
  isMovieDetails: false,
};
