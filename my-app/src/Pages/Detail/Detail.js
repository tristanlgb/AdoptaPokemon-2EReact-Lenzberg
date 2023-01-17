import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pokemon from '../Pokemon/Pokemon';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Detail() {
  return (
    <Card>
      <Card.Header><h3> Detalles sobre el siguiente pokemon:</h3></Card.Header>
      <Card.Body>
        <Card.Title>{Pokemon.name}</Card.Title>
        <Card.Text>
          {Pokemon.frontImg}
        </Card.Text>
        <Button variant="danger">Finalizar compra</Button>
      </Card.Body>
    </Card>
  );
}

export default Detail;
export const getProductById = (id) => {return new Promise ((resolve) => {setTimeout (()=>{
  resolve(pokemonItem.find(pokemonItem=> pokemonItem.id ===id))
}, 500)
})
}
