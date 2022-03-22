
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import {Medications} from './components/Medications';

const Header = () => {
  return (
    <section className='justify-right'>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/">ePillbox</Navbar.Brand>
          <Nav className="md-auto">
            <Nav.Link className='justify-right' href="/">Home</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="/medications">Medications</Nav.Link>
            {/* <Nav.Link href="#medications">Medications</Nav.Link> */}

          </Nav>
        </Container>
      </Navbar>
    </section>
  );
}



export default Header;
