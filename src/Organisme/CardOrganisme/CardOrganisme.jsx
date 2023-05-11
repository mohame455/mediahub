import React from 'react'
import { Card, Text } from '../../Atom'

const CardOrganisme = (props) => {
  return (
    <Card className={"col-md-3"} onClick={props.onClick} >
        <Text text={props.movie.Title} />
        <Text text={props.movie.Distributor} />
    </Card>
  )
}

export default CardOrganisme