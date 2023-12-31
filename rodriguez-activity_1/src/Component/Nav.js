import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 

function Navigation() {
  return (
<Navbar expand="lg" bg="light" variant="light">
  <Container>
    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand> {/* Set to="/" for the Home link */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/layout1">Games</Nav.Link>
        <Nav.Link as={Link} to="/layout2">Actors</Nav.Link>
        <Nav.Link as={Link} to="/layout3">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Navigation;