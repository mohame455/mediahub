import React from 'react'
import CardOrganisme from '../../Organisme/CardOrganisme/CardOrganisme'

const MovieDetailsPage = (props) => {
    
  return (
    <CardOrganisme movie={props.movie}/>
  )
}

export default MovieDetailsPage