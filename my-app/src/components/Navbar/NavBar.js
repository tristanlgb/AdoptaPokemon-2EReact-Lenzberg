import './style.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
         <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PokedeX</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="">Detalles</Nav.Link>
            <Nav.Link href="">🛒Mi Carrito🛒</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
         </>
  );
}

export default ColorSchemesExample;