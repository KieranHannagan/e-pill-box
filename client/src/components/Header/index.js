import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Medications} from './components/Medications';

const Header =() =>{
  return (
    <Navbar bg="secondary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ePillbox</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
      <Nav.Link href="#medications">{Medications}</Nav.Link>
      <Nav.Link href="#pharmacy">Pharmacy List</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}



export default Header;



