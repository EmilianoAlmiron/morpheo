import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({ nombre, categoria, id }) {
    return (
    <>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{categoria}</Card.Text>
        <Link to={`/detalle/${id}`} variant="primary">
          queres saber mas?
        </Link>
      </Card.Body>
    </>
  );
}
export default Item