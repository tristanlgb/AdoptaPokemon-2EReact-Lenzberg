import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Pokemon ({pokemonItem}) {
  return (
    <Card style={{ width: '18rem' }}>
       <Card.Body>
        <Card.Title> <h2>{pokemonItem.name}</h2></Card.Title>
        <Card.Text><img src= {pokemonItem.frontImg}/> </Card.Text>
         
        <Button variant="success" src='../Detail/Detail'>Ver  detalles</Button>
      </Card.Body>
    </Card>
  );
}
export default Pokemon;
