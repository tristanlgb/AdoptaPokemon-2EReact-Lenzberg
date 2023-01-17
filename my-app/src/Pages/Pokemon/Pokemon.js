import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

function Pokemon ({pokemonItem}) {
  console.log(pokemonItem)
   return (
    <Card style={{ width: '18rem' }}>
       <Card.Body>
        <Card.Title> <h2>{pokemonItem.name}</h2></Card.Title>
        <Card.Text><img src= {pokemonItem.frontImg}/> </Card.Text>
         
        <Button variant="success" Link to={ Detail }>Ver  detalles</Button>
      </Card.Body>
    </Card>
  );
}
export default Pokemon;
