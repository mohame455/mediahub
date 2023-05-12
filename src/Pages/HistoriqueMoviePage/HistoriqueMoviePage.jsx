import React from 'react'
import { useSelector } from 'react-redux'
import CardOrganisme from '../../Organisme/CardOrganisme/CardOrganisme';

const HistoriqueMoviePage = () => {
    const listHistorique = useSelector((state) => state.movies.listHistorique);
  return (
    <div>
        {listHistorique.length&&listHistorique.map((movie,index)=><CardOrganisme key={index} movie={movie} />)}
    </div>
  )
}

export default HistoriqueMoviePage