// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import Auth from "../../utils/auth";

// const Header = () => {
//   return (
//     <Navbar bg="secondary" variant="dark">
//       <Container>
//         <Navbar.Brand href="/home">ePillbox</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="/">Home</Nav.Link>
//           <Nav.Link href="/profile">Profile</Nav.Link>
//           <Nav.Link href="/medications">Medications</Nav.Link>
//           {/* <Nav.Link href="#medications">{MedicationList}</Nav.Link>
//           <Nav.Link href="#pharmacy">Pharmacy List</Nav.Link> */}
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };


// export default Header;

import { Navbar, Nav, Container } from 'react-bootstrap';
// import {Medications} from './components/Medications';

const Header =() =>{
  return (
    <Navbar bg="secondary" variant="dark">
    <Container>
    <Navbar.Brand href="/">ePillbox</Navbar.Brand>
    <Nav className="me-auto">
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
