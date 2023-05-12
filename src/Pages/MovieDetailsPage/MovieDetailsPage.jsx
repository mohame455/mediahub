import React from 'react'
import { useSelector } from 'react-redux';
import CardOrganisme from '../../Organisme/CardOrganisme/CardOrganisme'

const MovieDetailsPage = () => {
  const movieDetails = useSelector((state) => state.movies.movieDetails);
  return (
    <CardOrganisme movie={movieDetails} />
  )
}

export default MovieDetailsPage