// import React from "react";
// import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header =() =>{
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar bg="secondary" variant="dark">
    {Auth.loggedIn() ? (
    <Container>
    <Navbar.Brand href="/">ePillbox</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="profile">Profile</Nav.Link>
      <Nav.Link href="/medications">Medications</Nav.Link>
      <Nav.Link href="/" onClick={logout}>
                Logout
              </Nav.Link>
      
    </Nav>
    </Container>
    ) : (
      <Navbar.Brand href="/">ePillbox</Navbar.Brand>
     )}
  </Navbar>
  );
}



export default Header;
