
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import {Medications} from './components/Medications';

const Header =() =>{
  return (
    <Navbar bg="secondary" variant="dark">
    <Container>
    <Navbar.Brand href="/">ePillbox</Navbar.Brand>
    <Nav className="md-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="profile">Profile</Nav.Link>
      <Nav.Link href="/medications">Medications</Nav.Link>
      {/* <Nav.Link href="#medications">Medications</Nav.Link> */}
      
    
    </Nav>
    </Container>
  </Navbar>
  );
}



export default Header;
