import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Auth from "../../utils/auth";

// const Header = () => {
//   const logout = event => {
//     event.preventDefault();
//     Auth.logout();
//   };

//   return (
//     <header className="bg-secondary mb-4 py-2 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <Link to="/">
//           <h1>Deep Thoughts</h1>
//         </Link>

//         <nav className="text-center">
//           {Auth.loggedIn() ? (
//             <>
//               <Link to="/profile">Me</Link>
//               <a href="/" onClick={logout}>
//                 Logout
//               </a>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Signup</Link>
//             </>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  return (
    <Navbar bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ePillbox</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#profile">Profile</Nav.Link>
          {/* <Nav.Link href="#medications">{MedicationList}</Nav.Link>
          <Nav.Link href="#pharmacy">Pharmacy List</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
